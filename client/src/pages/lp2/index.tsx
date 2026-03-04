import React from 'react';
import Hero from '@/components/lp2/Hero';
import Navbar from '@/components/lp2/Navbar';
import ProblemSection from '@/components/lp2/ProblemSection';
import MaaSMethodology from '@/components/lp2/MaaSMethodology';
import AIOSShowcase from '@/components/lp2/AIOSShowcase';
import Pillars from '@/components/lp2/Pillars';
import Modules from '@/components/lp2/Modules';
import ComparisonTable from '@/components/lp2/ComparisonTable';
import Manifesto from '@/components/lp2/Manifesto';
import FunnelMap from '@/components/lp2/FunnelMap';
import FAQ from '@/components/lp2/FAQ';
import Pricing from '@/components/lp2/Pricing';
import Footer from '@/components/lp2/Footer';
import StickyCTA from '@/components/lp2/StickyCTA';

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
