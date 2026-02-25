import React from 'react';
import Hero from '@/components/mentoria100x/Hero';
import PainSection from '@/components/mentoria100x/PainSection';
import Mechanism from '@/components/mentoria100x/Mechanism';
import Results from '@/components/mentoria100x/Results';
import ForWho from '@/components/mentoria100x/ForWho';
import HowItWorks from '@/components/mentoria100x/HowItWorks';
import AgentPacks from '@/components/mentoria100x/AgentPacks';
import ChaosMath from '@/components/mentoria100x/ChaosMath';
import FAQ from '@/components/mentoria100x/FAQ';
import ApplicationForm from '@/components/mentoria100x/ApplicationForm';
import ClosingCTA from '@/components/mentoria100x/ClosingCTA';
import Footer from '@/components/mentoria100x/Footer';

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
