import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-secondary text-white py-2 px-4 text-center text-sm md:text-base font-bold shadow-sm z-50 relative">
      <p>
        🐾 Atenção Brasília: Poucos horários disponíveis para atendimento ainda hoje. 
        <span className="underline decoration-white/50 underline-offset-2 ml-1 cursor-pointer hover:text-primary transition-colors" onClick={() => window.open('https://wa.me/5561999999999', '_blank')}>
          Garanta o bem-estar do seu pet agora.
        </span>
      </p>
    </div>
  );
};

export default TopBar;