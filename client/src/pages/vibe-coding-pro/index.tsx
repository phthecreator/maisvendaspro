import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProblemSection from './components/ProblemSection';
import MaaSMethodology from './components/MaaSMethodology';
import AIOSShowcase from './components/AIOSShowcase';
import Pillars from './components/Pillars';
import Modules from './components/Modules';
import ComparisonTable from './components/ComparisonTable';
import Manifesto from './components/Manifesto';
import FunnelMap from './components/FunnelMap';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const LP2: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-primary selection:text-black">
      <Navbar vagas={97} turma={1} />
      <main>
        <Hero />
        <ProblemSection />
        <MaaSMethodology />
        <AIOSShowcase />
        <Pillars />
        <Modules />
        <ComparisonTable />
        <Manifesto />
        <FunnelMap />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default LP2;
