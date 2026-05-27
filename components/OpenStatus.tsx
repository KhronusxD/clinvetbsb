import React, { useEffect, useState } from 'react';
import { BUSINESS_HOURS, HOLIDAYS, TIMEZONE } from '../constants';

/**
 * OpenStatus
 * ---------------------------------------------
 * Pill que mostra se a clínica está aberta agora,
 * com mensagem complementar (até que horas / quando abre de novo).
 *
 * Os horários reais ficam em `constants.tsx` → `BUSINESS_HOURS`.
 * Feriados em `HOLIDAYS`. Fuso: `TIMEZONE` (default America/Sao_Paulo).
 *
 * Atualiza a cada 60s automaticamente.
 */

type Status =
  | { open: true; closesAt: string }
  | { open: false; nextOpenLabel: string };

const WEEKDAY_LABEL = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

/** Pega data/hora local na timezone configurada (sem libs externas). */
function nowInTz(tz: string): { weekday: number; hhmm: string; ymd: string } {
  const fmt = new Intl.DateTimeFormat('pt-BR', {
    timeZone: tz,
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date()).reduce<Record<string, string>>(
    (acc, p) => ((acc[p.type] = p.value), acc),
    {}
  );
  // weekday no 'pt-BR' vem como "seg.", "ter."… mapeio pra índice 0-6
  const wd = parts.weekday?.toLowerCase().slice(0, 3) ?? '';
  const weekdayIndex = WEEKDAY_LABEL.indexOf(wd);
  return {
    weekday: weekdayIndex,
    hhmm: `${parts.hour}:${parts.minute}`,
    ymd: `${parts.year}-${parts.month}-${parts.day}`,
  };
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

function fmtClock(hhmm: string): string {
  // "08:00" -> "8h"   |   "13:30" -> "13h30"
  const [h, m] = hhmm.split(':');
  return Number(m) === 0 ? `${Number(h)}h` : `${Number(h)}h${m}`;
}

/** Resolve o intervalo "aberto" do dia (considerando intervalo de almoço se houver). */
function intervalsForDay(weekday: number): Array<[number, number]> {
  const day = BUSINESS_HOURS.find((d) => d.weekday === weekday);
  if (!day || !day.open || !day.close) return [];
  const open = toMinutes(day.open);
  const close = toMinutes(day.close);
  if (day.lunchStart && day.lunchEnd) {
    const ls = toMinutes(day.lunchStart);
    const le = toMinutes(day.lunchEnd);
    return [
      [open, ls],
      [le, close],
    ];
  }
  return [[open, close]];
}

function computeStatus(): Status {
  const { weekday, hhmm, ymd } = nowInTz(TIMEZONE);
  const isHoliday = HOLIDAYS.includes(ymd);
  const nowMin = toMinutes(hhmm);

  if (!isHoliday) {
    for (const [start, end] of intervalsForDay(weekday)) {
      if (nowMin >= start && nowMin < end) {
        const closeHHMM = `${String(Math.floor(end / 60)).padStart(2, '0')}:${String(end % 60).padStart(2, '0')}`;
        return { open: true, closesAt: fmtClock(closeHHMM) };
      }
    }
  }

  // Fechado agora — descobrir quando abre de novo
  // 1) Se está antes do primeiro intervalo do dia (e não é feriado), abre hoje
  if (!isHoliday) {
    const today = intervalsForDay(weekday);
    if (today.length > 0 && nowMin < today[0][0]) {
      const openHHMM = `${String(Math.floor(today[0][0] / 60)).padStart(2, '0')}:${String(today[0][0] % 60).padStart(2, '0')}`;
      return { open: false, nextOpenLabel: `abre hoje às ${fmtClock(openHHMM)}` };
    }
    // Entre os dois intervalos (janela de almoço)
    if (today.length === 2 && nowMin >= today[0][1] && nowMin < today[1][0]) {
      const openHHMM = `${String(Math.floor(today[1][0] / 60)).padStart(2, '0')}:${String(today[1][0] % 60).padStart(2, '0')}`;
      return { open: false, nextOpenLabel: `volta às ${fmtClock(openHHMM)}` };
    }
  }

  // 2) Procurar próximo dia com horário e que não seja feriado
  for (let offset = 1; offset <= 7; offset++) {
    const wd = (weekday + offset) % 7;
    const intervals = intervalsForDay(wd);
    if (intervals.length === 0) continue;
    // Checar se esse dia futuro cairá em feriado (cálculo simples por offset)
    const future = new Date();
    future.setDate(future.getDate() + offset);
    const futureYmd = future.toLocaleDateString('en-CA', { timeZone: TIMEZONE }); // YYYY-MM-DD
    if (HOLIDAYS.includes(futureYmd)) continue;

    const openHHMM = `${String(Math.floor(intervals[0][0] / 60)).padStart(2, '0')}:${String(intervals[0][0] % 60).padStart(2, '0')}`;
    const dayLabel = offset === 1 ? 'amanhã' : WEEKDAY_LABEL[wd];
    return { open: false, nextOpenLabel: `abre ${dayLabel} às ${fmtClock(openHHMM)}` };
  }

  return { open: false, nextOpenLabel: 'consulte horários' };
}

const OpenStatus: React.FC = () => {
  const [status, setStatus] = useState<Status>(() => computeStatus());

  useEffect(() => {
    const tick = () => setStatus(computeStatus());
    const id = setInterval(tick, 60_000); // a cada 1 min
    return () => clearInterval(id);
  }, []);

  if (status.open) {
    return (
      <div
        className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-green-200 mb-4"
        role="status"
        aria-label="Clínica aberta agora"
      >
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Aberto agora · até {status.closesAt}
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-sm font-semibold px-3 py-1.5 rounded-full border border-gray-200 mb-4"
      role="status"
      aria-label="Clínica fechada agora"
    >
      <span className="inline-flex w-2 h-2 rounded-full bg-gray-400"></span>
      Fechado · {status.nextOpenLabel}
    </div>
  );
};

export default OpenStatus;
