import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  Cookie, 
  Activity,
  Phone,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
  Award,
  Syringe,
  Microscope
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Diferenciais', href: '#comparison' },
  { label: 'O Que Inclui', href: '#value-stack' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Dúvidas', href: '#faq' },
];

export const COMPARISON_DATA = {
  oldWay: {
    title: 'O Jeito Antigo (Outras Clínicas)',
    items: [
      { text: 'Ambiente frio, cheiro forte e barulho que assusta.', icon: <XCircle size={20} /> },
      { text: 'Você espera horas na recepção desconfortável.', icon: <Clock size={20} /> },
      { text: 'Veterinário impessoal que mal olha para você.', icon: <XCircle size={20} /> },
      { text: 'Seu pet sai tremendo de medo.', icon: <XCircle size={20} /> },
    ]
  },
  clinVetWay: {
    title: 'O Jeito ClinVet (Nossa Bolha de Amor)',
    items: [
      { text: 'Ambiente "Fear-Free": Cores e cheiros calmantes.', icon: <CheckCircle size={20} /> },
      { text: 'Tudo em Um Só Lugar: Exames e diagnósticos integrados.', icon: <ShieldCheck size={20} /> },
      { text: 'O "Pet-Check": Consultas que parecem visitas a amigos.', icon: <Heart size={20} /> },
      { text: 'Seu pet sai abanando o rabo (e com petisco!).', icon: <Cookie size={20} /> },
    ]
  }
};

export const VALUE_STACK = [
  {
    title: 'A Consulta Especializada',
    description: 'Avaliação clínica completa, "do focinho ao rabo", feita por quem ama o que faz.',
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    color: 'bg-primary',
  },
  {
    title: 'Pré-Triagem de Laboratório',
    description: 'Estrutura pronta para coletar exames na hora, se necessário. Sem perda de tempo.',
    icon: <Activity className="w-8 h-8 text-white" />,
    color: 'bg-secondary',
  },
  {
    title: 'Protocolo Zero-Trauma',
    description: 'Técnicas de manejo suave. Se ele tiver medo, nós temos tempo e paciência.',
    icon: <Heart className="w-8 h-8 text-white" />,
    color: 'bg-terracotta',
  },
  {
    title: 'Acompanhamento Pós-Consulta',
    description: 'Não te deixamos sozinhos. Nossa equipe monitora a recuperação.',
    icon: <Phone className="w-8 h-8 text-white" />,
    color: 'bg-accent',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Mariana S. (Asa Norte)',
    text: 'Eu nunca vi o Bob tão calmo numa consulta. A Dra. foi um anjo! Resolveram tudo no mesmo dia.',
    rating: 5,
  },
  {
    name: 'Carlos T. (Lago Sul)',
    text: 'Resolveram o problema de pele da Luna em uma semana. E o lugar é lindo, nem parece clínica.',
    rating: 5,
  },
  {
    name: 'Fernanda & Paçoca',
    text: 'Atendimento impecável. A equipe realmente trata como família. O Paçoca ama ir lá!',
    rating: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Aceitam meu convênio/plano?',
    answer: 'Temos parcerias e diversas formas de pagamento facilitadas. Chame no Zap para confirmar o seu!',
  },
  {
    question: 'É preciso agendar ou posso ir direto?',
    answer: 'Priorizamos agendamentos para manter a pontualidade e o ambiente calmo, mas estamos prontos para acolher emergências.',
  },
  {
    question: 'Fazem cirurgias também?',
    answer: 'Sim! Temos centro cirúrgico completo, monitorado e seguro para procedimentos complexos.',
  },
];

export const AUTHORITY_BADGES = [
  { label: 'Especialistas em Felinos', icon: <Award size={16} /> },
  { label: 'Dermatologia', icon: <Award size={16} /> },
  { label: 'Cardiologia', icon: <Award size={16} /> },
  { label: 'Ortopedia', icon: <Award size={16} /> },
];

export const FACILITIES = [
  { text: 'Estacionamento fácil', icon: <CheckCircle size={20} /> },
  { text: 'Ambiente climatizado', icon: <CheckCircle size={20} /> },
  { text: 'Cantinho do café', icon: <CheckCircle size={20} /> },
];

export const SERVICES = [
  {
    title: 'Consultas Gerais',
    subtitle: 'Check-ups de rotina, vacinação e prevenção.',
    icon: <Stethoscope size={32} className="text-secondary" />,
  },
  {
    title: 'Exames Laboratoriais',
    subtitle: 'Resultados rápidos para diagnósticos precisos.',
    icon: <Microscope size={32} className="text-secondary" />,
  },
  {
    title: 'Cirurgias',
    subtitle: 'Centro cirúrgico moderno e seguro.',
    icon: <Activity size={32} className="text-secondary" />,
  },
  {
    title: 'Vacinação',
    subtitle: 'Imunização completa para cães e gatos.',
    icon: <Syringe size={32} className="text-secondary" />,
  },
  {
    title: 'Especialidades',
    subtitle: 'Dermatologia, Cardiologia, Oftalmologia e mais.',
    icon: <Award size={32} className="text-secondary" />,
  },
];

export const TEAM = [
  {
    name: 'Dra. Ana Costa',
    role: 'Veterinária Responsável',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea860485?q=80&w=400&auto=format&fit=crop',
    funFact: 'Sabe o nome de todos os pets que atende.',
  },
  {
    name: 'Dr. Lucas Pereira',
    role: 'Cirurgião Especialista',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop',
    funFact: 'Tem três gatos resgatados em casa.',
  },
  {
    name: 'Enf. Carla Mendes',
    role: 'Assistente Veterinária',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop',
    funFact: 'Especialista em fazer carinho na barriga.',
  },
];