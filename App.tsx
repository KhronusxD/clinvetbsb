import React, { useEffect, useState } from 'react';
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
import CirurgiasPage from './pages/CirurgiasPage';

const Home: React.FC = () => (
  <>
    <Hero />
    <SocialProof />
    <PainsSolutions />
    <Diferenciais />
    <Testimonials />
    <About />
    <FinalCTA />
  </>
);

const App: React.FC = () => {
  const [path, setPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const isCirurgias = path.replace(/\/$/, '') === '/cirurgias';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-white scroll-smooth">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {isCirurgias ? <CirurgiasPage /> : <Home />}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
