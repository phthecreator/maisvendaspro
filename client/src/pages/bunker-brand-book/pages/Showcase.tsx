import { useState } from 'react';
import SalesPage from '../showcases/SalesPage';
import MemberArea from '../showcases/MemberArea';
import CommunityFeed from '../showcases/CommunityFeed';

const tabs = [
  { label: 'Sales Page', key: 'sales' },
  { label: 'Member Area', key: 'member' },
  { label: 'Community Feed', key: 'community' },
] as const;

type TabKey = (typeof tabs)[number]['key'];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('sales');
  const mono = "'Roboto Mono', monospace";
  const serif = "'Averia Serif Libre', serif";

  return (
    <section className="pb-24">
      <p
        className="mb-3"
        style={{
          fontFamily: mono,
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#00E5FF',
        }}
      >
        06 / Showcase
      </p>
      <h2
        className="mb-6"
        style={{
          fontFamily: serif,
          fontSize: 42,
          fontWeight: 700,
          lineHeight: 1.15,
          color: '#FDF5E6',
        }}
      >
        Composicao Visual
      </h2>
      <p
        className="mb-10 max-w-[700px]"
        style={{
          fontFamily: mono,
          fontSize: 15,
          color: '#A9A9A9',
          lineHeight: 1.7,
        }}
      >
        Demonstracao de como os elementos do design system se combinam em paginas e interfaces reais do Bunker da IA.
      </p>

      {/* Tab navigation */}
      <div
        className="flex gap-0 mb-6"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="px-6 py-3"
            style={{
              fontFamily: mono,
              fontSize: 13,
              fontWeight: activeTab === tab.key ? 600 : 400,
              color: activeTab === tab.key ? '#00E5FF' : '#A9A9A9',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab.key ? '2px solid #00E5FF' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.15s, border-color 0.15s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Showcase container */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div id="sales-page">{activeTab === 'sales' && <SalesPage />}</div>
        <div id="area-membros">{activeTab === 'member' && <MemberArea />}</div>
        <div id="community-feed">{activeTab === 'community' && <CommunityFeed />}</div>
      </div>
    </section>
  );
};

export default Showcase;
