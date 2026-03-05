import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Solution from './components/Solution';
import Deliverables from './components/Deliverables';
import Methodology from './components/Methodology';
import ForWho from './components/ForWho';
import ValueStack from './components/ValueStack';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

const MVPAcademy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <main>
        <Hero />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <Solution />
        <SectionDivider />
        <Deliverables />
        <SectionDivider />
        <Methodology />
        <SectionDivider />
        <ForWho />
        <SectionDivider />
        <ValueStack />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default MVPAcademy;
