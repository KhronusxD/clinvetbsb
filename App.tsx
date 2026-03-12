import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PainsSolutions from './components/PainsSolutions';
import Diferenciais from './components/Diferenciais';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-white scroll-smooth">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Barra de Autoridade */}
        <SocialProof />
        {/* 3. Dores e Soluções */}
        <PainsSolutions />
        {/* 4. Nossos Diferenciais */}
        <Diferenciais />
        {/* 5. Depoimentos + Google Rating */}
        <Testimonials />
        {/* 6. Sobre Nós */}
        <About />
        {/* 7. CTA Final */}
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;