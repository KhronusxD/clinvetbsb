import React from 'react';
import {
  Heart,
  HeartPulse,
  Stethoscope,
  Activity,
  Phone,
  CheckCircle,
  Award,
  Syringe,
  Microscope,
  Shield,
  ShieldCheck,
  Eye,
  Bone,
  Brain,
  Zap,
  Users,
  Star,
  PawPrint,
  Handshake,
  Gem,
  Ear,
  Scale,
  Trophy,
  Sparkles,
  Sprout,
} from 'lucide-react';

export const PHONE_MAIN = '(61) 3591-9676';
export const WHATSAPP_NUMBER = '5561981579676';
export const WHATSAPP_LINK = 'https://flowdesk-flowdesk-app.rikvu5.easypanel.host/r/8ugkp4';
export const WHATSAPP_LINK_CIRURGIA = 'https://flowdesk-flowdesk-app.rikvu5.easypanel.host/r/ehhgki';
export const PHONE_LINK = `tel:+556135919676`;
export const EMAIL = 'clinvetsobradinho@gmail.com';
export const ADDRESS = 'Quadra 8 Bloco 11 Lote 11 loja 1 - Sobradinho, Brasília - DF, 73005-511';
export const GOOGLE_MAPS_LINK = 'https://maps.google.com/maps?q=Quadra+8+Bloco+11+Lote+11+Loja+1+Sobradinho+Brasilia+DF+73005-511';
export const GOOGLE_REVIEWS_LINK = 'https://www.google.com/search?q=clinvet+sobradinho+avaliações#lrd=0x935a407e75283f2d:0x3b7a6cb88231e1d6,1,,,,';

// -------------------------------------------------------------------
// Horário de funcionamento (usado pelo componente OpenStatus do hero)
// -------------------------------------------------------------------
// weekday: 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb
// Horários em formato 24h "HH:MM". Para fechar o dia, deixe open/close como null.
// Para janela de almoço, preencha lunchStart/lunchEnd; senão omita.
export const TIMEZONE = 'America/Sao_Paulo';

export const BUSINESS_HOURS: Array<{
  weekday: number;
  open: string | null;
  close: string | null;
  lunchStart?: string | null;
  lunchEnd?: string | null;
}> = [
  { weekday: 1, open: '08:00', close: '19:00' }, // Seg
  { weekday: 2, open: '08:00', close: '19:00' }, // Ter
  { weekday: 3, open: '08:00', close: '19:00' }, // Qua
  { weekday: 4, open: '08:00', close: '19:00' }, // Qui
  { weekday: 5, open: '08:00', close: '19:00' }, // Sex
  { weekday: 6, open: '08:30', close: '14:00' }, // Sáb
  { weekday: 0, open: null, close: null },       // Dom (fechado)
];

// Feriados em que a clínica fecha (formato YYYY-MM-DD)
export const HOLIDAYS: string[] = [
  '2026-01-01', // Confraternização Universal
  '2026-02-16', // Carnaval (segunda)
  '2026-02-17', // Carnaval (terça)
  '2026-04-03', // Sexta-feira Santa
  '2026-04-21', // Tiradentes
  '2026-05-01', // Dia do Trabalho
  '2026-06-04', // Corpus Christi
  '2026-09-07', // Independência
  '2026-10-12', // N. Sra. Aparecida
  '2026-11-02', // Finados
  '2026-11-15', // Proclamação da República
  '2026-11-20', // Consciência Negra
  '2026-12-25', // Natal
];

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

// Banda de social proof — ícones via lucide pra unificar linguagem visual.
// A estrela do "4.8/5" fica como estrela (Ed aprovou estrelas em avaliações).
export const SOCIAL_PROOF_STATS = [
  { icon: <Star className="w-9 h-9 fill-current" />, value: '4.8/5', label: 'no Google Meu Negócio', highlight: true },
  { icon: <Award className="w-9 h-9" />, value: '30 Anos', label: 'de experiência em Sobradinho' },
  { icon: <Stethoscope className="w-9 h-9" />, value: '10', label: 'especialidades veterinárias' },
  { icon: <PawPrint className="w-9 h-9" />, value: '1.000+', label: 'pets atendidos por ano' },
  { icon: <Heart className="w-9 h-9" />, value: '98%', label: 'clientes satisfeitos' },
];

export const PAIN_SOLUTIONS = [
  {
    icon: <HeartPulse className="w-10 h-10" />,
    problem_title: 'Notou algo diferente no seu pet?',
    problem: 'Você percebe mudanças no comportamento, apetite ou energia do seu companheiro e não sabe o que fazer.',
    solution: 'Aqui na Clinvet, a gente escuta com calma e investiga com método — diagnóstico baseado em evidências pra trazer clareza e o melhor caminho de recuperação.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    problem_title: 'Procurando uma clínica de confiança?',
    problem: 'Você busca profissionais que realmente se importem e pratiquem medicina responsável e ética.',
    solution: 'Nossa equipe pratica medicina baseada em evidências, com respeito e verdade como valores inegociáveis. O cuidado que seu pet merece.',
  },
  {
    icon: <Sprout className="w-10 h-10" />,
    problem_title: 'Querendo uma vida longa pro seu companheiro?',
    problem: 'Você quer uma vida longa, saudável e feliz pro seu melhor amigo, com prevenção e cuidado contínuo.',
    solution: 'Com foco em saúde preventiva e curativa, montamos um plano de cuidados completo pra cada fase da vida do seu pet.',
  },
];

export const DIFERENCIAIS = [
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Medicina Baseada em Evidências',
    description: 'Decisões clínicas pautadas nas mais recentes pesquisas e melhores práticas veterinárias, para resultados eficazes e seguros.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Atendimento Humanizado',
    description: 'Cuidado que vai além do tratamento. Entendemos a conexão única entre você e seu pet, oferecendo acolhimento e suporte emocional.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Equipe Especializada',
    description: 'Profissionais dedicados e em constante atualização, com diversas especialidades para atender todas as necessidades do seu animal.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Estrutura Completa',
    description: 'Ambiente seguro, moderno e equipado para diagnósticos precisos e tratamentos eficazes, garantindo conforto e segurança.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Escuta Ativa',
    description: 'Ouvimos suas preocupações sem pré-julgamentos, compreendendo as necessidades únicas do seu pet e da sua família.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Foco em Bem-estar',
    description: 'Saúde preventiva e curativa integradas, visando sempre a qualidade de vida e felicidade do seu companheiro.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Nema Sousa',
    pet: null,
    text: 'Sempre um bom atendimento e fico tranquila por saber que posso contar com todos os médicos.',
    rating: 5,
  },
  {
    name: 'Daniele Barbosa',
    pet: null,
    text: 'Dr. Eulélio é muito experiente, explica tudo detalhadamente e é muito eficaz no diagnóstico. Minha cadela foi muito bem avaliada. O atendimento é respeitoso e gentil!',
    rating: 5,
  },
  {
    name: 'Lory Caldas',
    pet: 'Luke',
    text: 'Levo meu doguinho lá há muitos anos! Profissionais excelentes e super competentes. Tanto o Dr. Eulélio quanto o Dr. Pedro foram muito atenciosos com meu Luke. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Neide Nóbrega',
    pet: 'Angel',
    text: 'Excelente clínica, confio em 100%. Só confio a minha Angel com o Dr. Eulélio.',
    rating: 5,
  },
  {
    name: 'Suelly Silverio',
    pet: 'Zidane — in memoriam',
    text: 'Minha experiência com a Clinvet foi muito intensa! Dr. Eulélio cuidou com profissionalismo e carinho do meu cãozinho Zidane desde pequenino até sua partida aos 17 anos! Gratidão!!!',
    rating: 5,
  },
  {
    name: 'Tânia Ludovico',
    pet: null,
    text: 'Clínica excepcional! Dr. Eulélio e toda a equipe são incríveis. Atendimento de primeiríssima qualidade, cuidado e atenção incomparáveis.',
    rating: 5,
  },
  {
    name: 'Sérgio Fernandes',
    pet: null,
    text: 'Profissionalismo e dedicação em cada consulta. A Clinvet é a melhor escolha para o bem-estar do seu pet em Sobradinho!',
    rating: 5,
  },
  {
    name: 'Tania Cunha',
    pet: null,
    text: 'Lugar maravilhoso, equipe muito atenciosa e competente. Dr. Eulélio é simplesmente fantástico. Super indico a todos!',
    rating: 5,
  },
];

export const ABOUT_VALUES = [
  { icon: <Handshake className="w-7 h-7" />, label: 'Respeito', desc: 'Pela vida, pela profissão e pelas pessoas.' },
  { icon: <Gem className="w-7 h-7" />, label: 'Verdade', desc: 'Transparência em cada diagnóstico e tratamento.' },
  { icon: <Ear className="w-7 h-7" />, label: 'Escuta Ativa', desc: 'Compreensão das necessidades do seu pet.' },
  { icon: <Scale className="w-7 h-7" />, label: 'Ética', desc: 'Medicina responsável e baseada em evidências.' },
  { icon: <Heart className="w-7 h-7" />, label: 'Humanidade', desc: 'Cuidado que toca o coração.' },
  { icon: <Trophy className="w-7 h-7" />, label: 'Excelência', desc: 'Qualidade em cada atendimento.' },
];

export const SERVICES = [
  {
    title: 'Clínica Geral',
    subtitle: 'Check-ups de rotina, vacinação e prevenção.',
    icon: <Stethoscope size={32} className="text-primary" />,
  },
  {
    title: 'Odontologia',
    subtitle: 'Saúde bucal completa para o seu pet.',
    icon: <Award size={32} className="text-primary" />,
  },
  {
    title: 'Cardiologia',
    subtitle: 'Diagnósticos cardíacos especializados.',
    icon: <Activity size={32} className="text-primary" />,
  },
  {
    title: 'Ultrassonografia',
    subtitle: 'Imagens precisas para diagnósticos rápidos.',
    icon: <Microscope size={32} className="text-primary" />,
  },
  {
    title: 'Ortopedia',
    subtitle: 'Tratamento de ossos e articulações.',
    icon: <Bone size={32} className="text-primary" />,
  },
  {
    title: 'Neurologia',
    subtitle: 'Cuidado especializado do sistema nervoso.',
    icon: <Brain size={32} className="text-primary" />,
  },
];

export const FACILITIES = [
  { text: 'Estacionamento fácil', icon: <CheckCircle size={20} /> },
  { text: 'Ambiente climatizado', icon: <CheckCircle size={20} /> },
  { text: 'Estrutura moderna', icon: <CheckCircle size={20} /> },
];
