import './bunker.css';
import { useRoute } from 'wouter';
import Layout from './shared/Layout';
import AshParticles from './shared/AshParticles';
import Hub from './pages/Hub';
import Brand from './pages/Brand';
import Foundations from './pages/Foundations';
import Components from './pages/Components';
import Showcase from './pages/Showcase';

function PageContent({ section }: { section: string }) {
  switch (section) {
    case 'brand':
      return <Brand />;
    case 'foundations':
      return <Foundations />;
    case 'components':
      return <Components />;
    case 'showcase':
      return <Showcase />;
    default:
      return <Hub />;
  }
}

export default function BunkerBrandBook() {
  const [, params] = useRoute('/bunker-brand-book/:section');
  const section = params?.section || '';

  return (
    <div
      className="bk-scrollbar"
      style={{
        minHeight: '100vh',
        backgroundColor: '#1A1E22',
        color: '#FDF5E6',
        fontFamily: "'Roboto Mono', monospace",
      }}
    >
      <AshParticles />
      <Layout>
        <PageContent section={section} />
      </Layout>
    </div>
  );
}
