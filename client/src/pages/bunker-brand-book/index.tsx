import Cover from './components/Cover';
import BrandFoundation from './components/BrandFoundation';
import ColorSystem from './components/ColorSystem';
import Typography from './components/Typography';
import Textures from './components/Textures';
import UIComponents from './components/UIComponents';
import Showcase from './components/Showcase';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10"
    style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
);

const BunkerBrandBook = () => (
  <div className="min-h-screen antialiased" style={{
    fontFamily: "'Roboto Mono', monospace",
    background: '#1A1E22',
    color: '#FDF5E6',
  }}>
    <style>{`
      @keyframes bunker-glow-pulse {
        0%, 100% { box-shadow: 0 0 20px rgba(0,229,255,0.2); }
        50% { box-shadow: 0 0 40px rgba(0,229,255,0.5); }
      }
    `}</style>
    <Cover />
    <main className="max-w-[1200px] mx-auto px-12">
      <BrandFoundation />
      <SectionDivider />
      <ColorSystem />
      <SectionDivider />
      <Typography />
      <SectionDivider />
      <Textures />
      <SectionDivider />
      <UIComponents />
      <SectionDivider />
      <Showcase />
    </main>
    <footer className="text-center py-16 text-[12px] text-[#A9A9A9] opacity-50"
      style={{ fontFamily: "'Roboto Mono', monospace" }}>
      Bunker da IA — Design System & Brandbook Visual v1.0.0<br />
      Heavy Metal Post-Apocalyptic • Cybernetic Detailing<br />
      Março 2026
    </footer>
  </div>
);

export default BunkerBrandBook;
