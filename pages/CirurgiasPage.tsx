import React from 'react';
import {
  Activity,
  Bone,
  Eye,
  Heart,
  Zap,
  CheckCircle,
  Shield,
  Stethoscope,
  Users,
  MessageCircle,
  Phone,
  Clock,
  FileText,
  Star,
  PawPrint,
} from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, PHONE_MAIN, GOOGLE_REVIEWS_LINK } from '../constants';
import { trackWhatsApp, trackPhone } from '../utils/tracking';

const CIRURGIAS_DOUBTS = [
  'E se algo der errado durante a anestesia?',
  'Essa clínica tem estrutura de verdade ou é só aparência?',
  'Vou pagar caro e meu pet vai ser bem cuidado ou só mais um número?',
  'Quem vai operar? O veterinário tem experiência real com isso?',
];

const CIRURGIAS_JOURNEY = [
  {
    tag: 'Antes',
    title: 'Avaliação completa',
    text: 'Exames pré-operatórios, análise do histórico do animal e uma conversa franca com você sobre o que esperar em cada etapa.',
    icon: <FileText className="w-7 h-7" />,
  },
  {
    tag: 'Durante',
    title: 'Monitoramento de cada detalhe',
    text: 'Frequência cardíaca, pressão, saturação e temperatura acompanhadas em tempo real. Nada é deixado ao acaso.',
    icon: <Activity className="w-7 h-7" />,
  },
  {
    tag: 'Depois',
    title: 'Pós-operatório acompanhado',
    text: 'Orientações claras e acesso direto à equipe para qualquer dúvida durante a recuperação.',
    icon: <Heart className="w-7 h-7" />,
  },
];

const CIRURGIAS_ESPECIALIDADES = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Cirurgias eletivas',
    description: 'Castração, esterilização e procedimentos programados com protocolo anestésico seguro e monitoramento completo.',
  },
  {
    icon: <Bone className="w-8 h-8" />,
    title: 'Cirurgias ortopédicas',
    description: 'Fraturas, luxações, displasia e intervenções no sistema musculoesquelético com equipe especializada.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Cirurgias de tecidos moles',
    description: 'Intervenções em órgãos internos, retirada de tumores, correções gastrointestinais e muito mais.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Cirurgias oftalmológicas',
    description: 'Procedimentos oculares delicados realizados com equipamentos e técnica específica.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Cirurgias de emergência',
    description: 'Quando o tempo é crítico, nossa equipe está preparada para agir com rapidez e segurança.',
  },
];

const CIRURGIAS_DIFERENCIAIS = [
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Equipe com formação especializada',
    description: 'Cirurgiões veterinários com pós-graduação e experiência comprovada em cada área de atuação.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Estrutura preparada para o que for necessário',
    description: 'Centro cirúrgico equipado, sala de recuperação monitorada e unidade de terapia intensiva para casos que exigem mais atenção.',
  },
  {
    icon: <CheckCircle className="w-7 h-7" />,
    title: 'Transparência em cada etapa',
    description: 'Você sabe o que será feito, por quem, como e por quê. Antes, durante e depois.',
  },
  {
    icon: <MessageCircle className="w-7 h-7" />,
    title: 'Você não fica no escuro',
    description: 'Comunicação ativa com o tutor durante todo o processo — porque ficar sem notícia enquanto seu pet está no centro cirúrgico é inaceitável.',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Pós-operatório acompanhado',
    description: 'Retorno incluído, orientações detalhadas e canal direto com a equipe para o período de recuperação.',
  },
];

const CIRURGIAS_TESTIMONIALS = [
  {
    text: 'Fiquei desesperada quando minha cachorra precisou operar com urgência. A equipe da ClinVet me explicou tudo, ficou me atualizando e ela saiu bem. Sou eternamente grata.',
    author: 'Tutora',
    pet: '🐾 Golden Retriever',
  },
  {
    text: 'Meu gato fez cirurgia ortopédica aqui. O cuidado foi impecável do pré ao pós-operatório. Nunca mais levo em outro lugar.',
    author: 'Tutor',
    pet: '🐱 Maine Coon',
  },
  {
    text: 'O que me conquistou foi a honestidade. Me explicaram o risco real do procedimento, o que iam fazer para minimizar e o que eu precisava fazer depois. Confiança total.',
    author: 'Tutora',
    pet: '🐾 Bulldog Francês',
  },
];

const CirurgiasPage: React.FC = () => {
  const openWhats = (location: 'hero' | 'final_cta') => {
    trackWhatsApp(location);
    window.open(WHATSAPP_LINK, '_blank');
  };

  const scrollToEquipe = () => {
    const el = document.getElementById('equipe-cirurgica');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-6 bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-light rounded-full -translate-y-1/3 translate-x-1/3 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-bold px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Activity size={14} />
            <span>Centro Cirúrgico Veterinário ClinVet</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary leading-[1.15] mb-6">
            Seu pet precisa de uma cirurgia.{' '}
            <span className="text-accent relative inline-block">
              Você sabe em quem confiar?
              <svg className="absolute w-full h-3 -bottom-1 left-0 opacity-40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#FF8C42" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Escolher onde operar seu cão ou gato é uma das decisões mais difíceis que um tutor enfrenta. Na ClinVet, você não entrega seu pet para uma clínica — você entrega para uma equipe que trata como se fosse seu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="w-full sm:w-auto bg-accent hover:bg-orange-500 text-white text-lg px-8 py-4 rounded-full font-display font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={() => openWhats('hero')}
            >
              <MessageCircle size={20} /> Quero agendar uma avaliação cirúrgica
            </button>
            <button
              className="w-full sm:w-auto bg-white hover:bg-primary-light border-2 border-primary text-primary text-lg px-8 py-4 rounded-full font-display font-bold hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              onClick={scrollToEquipe}
            >
              Conhecer a equipe
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">⭐⭐⭐⭐⭐ <strong className="text-gray-700">4.8 no Google</strong></span>
            <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></span>
            <span>30 anos cuidando de pets em Sobradinho</span>
          </div>
        </div>
      </section>

      {/* 2. A DOR */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
              A maioria dos tutores sente isso antes de uma cirurgia
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              As dúvidas mais comuns que chegam até nós
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {CIRURGIAS_DOUBTS.map((doubt, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border-2 border-primary/10 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl flex-shrink-0">💭</div>
                <p className="text-gray-700 italic leading-relaxed text-base lg:text-lg">
                  "{doubt}"
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-3xl p-8 lg:p-10 text-center shadow-xl">
            <p className="text-lg lg:text-xl leading-relaxed">
              Essas dúvidas são legítimas. <strong className="text-accent">E a resposta para todas elas começa com a clínica que você escolhe.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3. A VIRADA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
              Na ClinVet, seu pet não é um procedimento.{' '}
              <span className="text-accent">É um paciente.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O cuidado não termina na sala de cirurgia — ele começa muito antes e continua depois dela.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {CIRURGIAS_JOURNEY.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white border-2 border-primary/10 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 left-8 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {step.tag}
                </div>
                <div className="bg-primary-light w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary mt-2">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ESPECIALIDADES CIRÚRGICAS */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
              Nossas especialidades cirúrgicas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Da cirurgia mais simples à mais complexa, com o mesmo nível de atenção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CIRURGIAS_ESPECIALIDADES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-primary/10"
              >
                <div className="bg-primary-light w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POR QUE A CLINVET */}
      <section id="equipe-cirurgica" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
              O que nos diferencia
            </h2>
            <p className="text-gray-500 text-lg">porque cada detalhe importa quando o assunto é cirurgia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {CIRURGIAS_DIFERENCIAIS.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 flex items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  idx % 2 === 0
                    ? 'bg-primary text-white'
                    : 'bg-accent-light border border-accent/20 text-gray-800'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    idx % 2 === 0 ? 'bg-white/15 text-white' : 'bg-accent/15 text-accent'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className={`text-lg font-display font-bold mb-2 ${
                      idx % 2 === 0 ? 'text-white' : 'text-primary'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      idx % 2 === 0 ? 'text-white/85' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROVA SOCIAL */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-light rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light rounded-full blur-3xl -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white border-2 border-yellow-400 px-6 py-3 rounded-full shadow-md mb-8">
              <span className="text-2xl">🌟</span>
              <div className="text-left">
                <p className="font-display font-bold text-gray-800 text-sm">Tutores que confiaram — e voltariam</p>
                <p className="text-yellow-500 font-bold text-sm">⭐⭐⭐⭐⭐ 4.8 de 5 estrelas no Google</p>
              </div>
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-3 py-1.5 rounded-full border border-blue-200 transition-colors whitespace-nowrap"
              >
                Ver no Google
              </a>
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-4">
              O que os tutores dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CIRURGIAS_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex text-yellow-400 gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-5 text-sm">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold font-display text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-primary text-sm">— {t.author}</p>
                    <p className="text-xs text-gray-400">{t.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="bg-white pb-10 px-4 pt-10">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 transform rotate-12">
              <PawPrint size={120} />
            </div>
            <div className="absolute bottom-10 right-10 transform -rotate-12">
              <PawPrint size={150} />
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              🩺 Avaliação cirúrgica
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Antes de qualquer cirurgia, seu pet merece uma avaliação com quem entende.
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nossa equipe vai examinar seu animal, indicar o melhor caminho e responder todas as suas perguntas — sem pressa e sem julgamento. A decisão mais importante é tomada com informação, não com pressa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-5 text-left border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <FileText size={18} />
                  <p className="font-display font-bold text-sm uppercase tracking-wider">Quanto custa?</p>
                </div>
                <p className="text-sm text-white/85 leading-relaxed">Valores informados no agendamento conforme a especialidade.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-left border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Clock size={18} />
                  <p className="font-display font-bold text-sm uppercase tracking-wider">Quanto tempo?</p>
                </div>
                <p className="text-sm text-white/85 leading-relaxed">Em média 30 a 40 minutos de avaliação.</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-left border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <CheckCircle size={18} />
                  <p className="font-display font-bold text-sm uppercase tracking-wider">E depois?</p>
                </div>
                <p className="text-sm text-white/85 leading-relaxed">Você recebe um plano cirúrgico completo e decide com calma.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="w-full sm:w-auto bg-accent hover:bg-orange-500 text-white text-lg py-5 px-10 rounded-full font-display font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => openWhats('final_cta')}
              >
                <MessageCircle size={20} /> Quero agendar minha avaliação cirúrgica →
              </button>
              <a
                href={PHONE_LINK}
                onClick={() => trackPhone('final_cta')}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-primary text-lg py-5 px-10 rounded-full font-display font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone size={20} /> Ligar: {PHONE_MAIN}
              </a>
            </div>

            <p className="mt-8 text-sm text-white/70">
              Atendimento em Brasília/DF · Agendamento rápido via WhatsApp
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CirurgiasPage;
