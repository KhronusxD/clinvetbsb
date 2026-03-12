import React from 'react';
import {
  Heart,
  Stethoscope,
  Activity,
  Phone,
  CheckCircle,
  Award,
  Syringe,
  Microscope,
  Shield,
  Eye,
  Bone,
  Brain,
  Zap,
  Users,
} from 'lucide-react';

export const PHONE_MAIN = '(61) 3591-9676';
export const WHATSAPP_NUMBER = '5561981579676';
export const WHATSAPP_LINK = 'https://criativivo.com.br/redirect/52f3546f-fdd7-447f-889c-3d25415dcafa';
export const PHONE_LINK = `tel:+556135919676`;
export const EMAIL = 'clinvetsobradinho@gmail.com';
export const ADDRESS = 'Quadra 8 Bloco 11 Lote 11 loja 1 - Sobradinho, Brasília - DF, 73005-511';
export const GOOGLE_MAPS_LINK = 'https://maps.google.com/maps?q=Quadra+8+Bloco+11+Lote+11+Loja+1+Sobradinho+Brasilia+DF+73005-511';
export const GOOGLE_REVIEWS_LINK = 'https://www.google.com/search?q=clinvet+sobradinho+avaliações#lrd=0x935a407e75283f2d:0x3b7a6cb88231e1d6,1,,,,';

export const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export const SOCIAL_PROOF_STATS = [
  { icon: '⭐', value: '4.8/5', label: 'no Google Meu Negócio', highlight: true },
  { icon: '🏆', value: '30 Anos', label: 'de Experiência em Sobradinho' },
  { icon: '🩺', value: '10', label: 'Especialidades Veterinárias' },
  { icon: '🐾', value: '1.000+', label: 'Pets Atendidos Anualmente' },
  { icon: '❤️', value: '98%', label: 'Clientes Satisfeitos' },
];

export const PAIN_SOLUTIONS = [
  {
    icon: '😟',
    problem_title: 'Seu Pet Está Diferente?',
    problem: 'Você percebe mudanças no comportamento, apetite ou energia do seu companheiro e não sabe o que fazer.',
    solution: 'Na Clinvet, nossa escuta ativa e diagnóstico preciso, baseado em evidências científicas, trazem clareza e o melhor caminho para a recuperação.',
  },
  {
    icon: '🔒',
    problem_title: 'Preocupação com Ética e Qualidade?',
    problem: 'Você busca profissionais que realmente se importem e pratiquem medicina responsável e ética.',
    solution: 'Nossa equipe de especialistas pratica medicina baseada em evidências, com respeito e verdade inegociáveis, garantindo o cuidado que seu pet merece.',
  },
  {
    icon: '❤️',
    problem_title: 'Quer Garantir Longevidade?',
    problem: 'Você deseja uma vida longa, saudável e feliz para seu melhor amigo, com prevenção e cuidado contínuo.',
    solution: 'Com foco em saúde preventiva e curativa, oferecemos um plano de cuidados completo para cada fase da vida do seu pet.',
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
    pet: '🐾 Luke',
    text: 'Levo meu doguinho lá há muitos anos! Profissionais excelentes e super competentes. Tanto o Dr. Eulélio quanto o Dr. Pedro foram muito atenciosos com meu Luke. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Neide Nóbrega',
    pet: '🐱 Angel',
    text: 'Excelente clínica, confio em 100%. Só confio a minha Angel com o Dr. Eulélio.',
    rating: 5,
  },
  {
    name: 'Suelly Silverio',
    pet: '🐾 Zidane - in memoriam',
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
  { icon: '🤝', label: 'Respeito', desc: 'Pela vida, pela profissão e pelas pessoas.' },
  { icon: '💎', label: 'Verdade', desc: 'Transparência em cada diagnóstico e tratamento.' },
  { icon: '👂', label: 'Escuta Ativa', desc: 'Compreensão das necessidades do seu pet.' },
  { icon: '⚖️', label: 'Ética', desc: 'Medicina responsável e baseada em evidências.' },
  { icon: '💙', label: 'Humanidade', desc: 'Cuidado que toca o coração.' },
  { icon: '🏅', label: 'Excelência', desc: 'Qualidade em cada atendimento.' },
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