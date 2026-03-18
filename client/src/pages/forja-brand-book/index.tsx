import './forja.css';
import { useRoute } from 'wouter';
import Layout from './shared/Layout';
import ForgeParticles, { type ParticleDensity } from './shared/ForgeParticles';
import Hub from './pages/Hub';
import Brand from './pages/Brand';
import Foundations from './pages/Foundations';
import Components from './pages/Components';
import Program from './pages/Program';
import Investment from './pages/Investment';
import Showcase from './pages/Showcase';

function PageContent({ section }: { section: string }) {
  switch (section) {
    case 'brand':
      return <Brand />;
    case 'foundations':
      return <Foundations />;
    case 'components':
      return <Components />;
    case 'programa':
      return <Program />;
    case 'investimento':
      return <Investment />;
    case 'showcase':
      return <Showcase />;
    default:
      return <Hub />;
  }
}

const SECTION_DENSITY: Record<string, ParticleDensity> = {
  '': 'normal',
  brand: 'low',
  foundations: 'none',
  components: 'none',
  programa: 'low',
  investimento: 'none',
  showcase: 'low',
};

export default function ForjaBrandBook() {
  const [, params] = useRoute('/forja-brand-book/:section');
  const section = params?.section || '';
  const density = SECTION_DENSITY[section] ?? 'normal';

  return (
    <div
      className="fj-scrollbar"
      style={{
        minHeight: '100vh',
        backgroundColor: '#1A0A00',
        color: '#FFF8F0',
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#FF6B00] focus:text-white focus:rounded"
      >
        Pular para o conteúdo
      </a>
      <ForgeParticles density={density} />
      <Layout>
        <div id="main-content">
          <PageContent section={section} />
        </div>
      </Layout>
    </div>
  );
}
