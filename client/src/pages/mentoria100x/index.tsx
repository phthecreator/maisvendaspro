import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Mechanism from './components/Mechanism';
import Results from './components/Results';
import ForWho from './components/ForWho';
import HowItWorks from './components/HowItWorks';
import AgentPacks from './components/AgentPacks';
import ChaosMath from './components/ChaosMath';
import FAQ from './components/FAQ';
import ApplicationForm from './components/ApplicationForm';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

const Mentoria100X: React.FC = () => {
  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      <main>
        <Hero />
        <SectionDivider />
        <PainSection />
        <SectionDivider />
        <Mechanism />
        <SectionDivider />
        <Results />
        <SectionDivider />
        <ForWho />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <AgentPacks />
        <SectionDivider />
        <ChaosMath />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <ApplicationForm />
        <SectionDivider />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Mentoria100X;
