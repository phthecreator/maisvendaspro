import './mvp.css';
import { useRoute } from 'wouter';
import Layout from './shared/Layout';
import MatrixRain, { type RainDensity } from './shared/MatrixRain';
import Hub from './pages/Hub';
import Brand from './pages/Brand';
import Foundations from './pages/Foundations';
import Components from './pages/Components';
import Products from './pages/Products';
import Showcase from './pages/Showcase';

function PageContent({ section }: { section: string }) {
  switch (section) {
    case 'brand':
      return <Brand />;
    case 'foundations':
      return <Foundations />;
    case 'components':
      return <Components />;
    case 'produtos':
      return <Products />;
    case 'showcase':
      return <Showcase />;
    default:
      return <Hub />;
  }
}

const SECTION_DENSITY: Record<string, RainDensity> = {
  '': 'normal',
  brand: 'low',
  foundations: 'none',
  components: 'none',
  produtos: 'low',
  showcase: 'low',
};

export default function MvpBrandBook() {
  const [, params] = useRoute('/mvp-brand-book/:section');
  const section = params?.section || '';
  const density = SECTION_DENSITY[section] ?? 'normal';

  return (
    <div
      className="mvp-scrollbar mvp-grid-bg"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <MatrixRain density={density} />
      <Layout>
        <PageContent section={section} />
      </Layout>
    </div>
  );
}
