import React, { useEffect, useState } from 'react';
import UrgencyBar from '@/components/lp2/UrgencyBar';
import Hero from '@/components/lp2/Hero';
import ProblemSection from '@/components/lp2/ProblemSection';
import MethodReveal from '@/components/lp2/MethodReveal';
import CaseStudy from '@/components/lp2/CaseStudy';
import ResultsGrid from '@/components/lp2/ResultsGrid';
import Pillars from '@/components/lp2/Pillars';
import Modules from '@/components/lp2/Modules';
import Bonuses from '@/components/lp2/Bonuses';
import ComparisonTable from '@/components/lp2/ComparisonTable';
import Testimonials from '@/components/lp2/Testimonials';
import Manifesto from '@/components/lp2/Manifesto';
import FAQ from '@/components/lp2/FAQ';
import Pricing from '@/components/lp2/Pricing';
import Footer from '@/components/lp2/Footer';
import StickyCTA from '@/components/lp2/StickyCTA';

const LP2: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(9993); // 02:46:33
  const [viewers, setViewers] = useState(47);
  const [vagas] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewers((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-dark font-sans selection:bg-primary selection:text-black">
      <UrgencyBar timeLeft={timeLeft} viewers={viewers} vagas={vagas} />

      <main>
        <Hero />
        <ProblemSection />
        <MethodReveal />
        <CaseStudy />
        <ResultsGrid />
        <Pillars />
        <Modules />
        <Bonuses timeLeft={timeLeft} />
        <ComparisonTable />
        <Testimonials />
        <Manifesto />
        <FAQ />
        <Pricing vagas={vagas} timeLeft={timeLeft} />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default LP2;
