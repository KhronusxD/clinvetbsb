import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features'; // This is now Value Stack
import Testimonials from './components/Testimonials'; // This is now Social Proof
import DreamOutcome from './components/DreamOutcome';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700 bg-background scroll-smooth">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Comparison />
        <Features />
        <Testimonials />
        <DreamOutcome />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;