import { useState } from 'react';
import { Shield, Home, BookOpen, Users, Settings, ChevronRight, ChevronLeft } from 'lucide-react';

const mono = "'Roboto Mono', monospace";
const serif = "'Averia Serif Libre', serif";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [currentPage, setCurrentPage] = useState(3);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'modules', label: 'Modulos' },
    { id: 'members', label: 'Membros' },
    { id: 'settings', label: 'Config' },
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: <Home size={16} />, label: 'Dashboard' },
    { id: 'courses', icon: <BookOpen size={16} />, label: 'Cursos' },
    { id: 'community', icon: <Users size={16} />, label: 'Comunidade' },
    { id: 'settings', icon: <Settings size={16} />, label: 'Config' },
  ];

  return (
    <section id="navigation">
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#00E5FF] mb-3"
        style={{ fontFamily: mono }}>Componentes / Navegacao</p>
      <h2 className="text-[42px] font-bold leading-tight mb-6"
        style={{ fontFamily: serif, color: '#FDF5E6' }}>Navegacao</h2>
      <p className="text-[15px] text-[#A9A9A9] max-w-[700px] mb-12 leading-relaxed"
        style={{ fontFamily: mono }}>
        Navbar, sidebar, tabs, breadcrumb e paginacao. Componentes de navegacao com indicadores em Cyber Cyan.
      </p>

      {/* Navbar */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Navbar</h3>
      <div className="rounded-lg overflow-hidden border border-white/5 mb-10" style={{ background: '#0d1117' }}>
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield size={20} color="#00E5FF" />
              <span className="text-[14px] font-bold tracking-[0.05em]"
                style={{ fontFamily: "'Cinzel', serif", color: '#FDF5E6' }}>BUNKER</span>
            </div>
            <nav className="flex items-center gap-5">
              {['Home', 'Cursos', 'Comunidade', 'Deploy'].map((item) => (
                <a key={item} className="text-[12px] uppercase tracking-[0.08em] cursor-pointer transition-colors duration-200"
                  style={{ fontFamily: mono, color: item === 'Home' ? '#00E5FF' : '#A9A9A9' }}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
            style={{ background: 'rgba(0,229,255,0.15)', color: '#00E5FF', fontFamily: mono }}>
            MV
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Sidebar</h3>
      <div className="flex gap-6 mb-10">
        <div className="w-56 rounded-lg border border-white/5 py-3" style={{ background: '#0d1117' }}>
          <div className="px-4 mb-4 flex items-center gap-2">
            <Shield size={16} color="#00E5FF" />
            <span className="text-[12px] font-bold tracking-[0.05em]"
              style={{ fontFamily: "'Cinzel', serif", color: '#FDF5E6' }}>BUNKER</span>
          </div>
          <div className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button key={item.id}
                onClick={() => setActiveSidebarItem(item.id)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-[12px] cursor-pointer transition-all duration-200 text-left"
                style={{
                  fontFamily: mono,
                  color: activeSidebarItem === item.id ? '#00E5FF' : '#A9A9A9',
                  background: activeSidebarItem === item.id ? 'rgba(0,229,255,0.08)' : 'transparent',
                  borderLeft: activeSidebarItem === item.id ? '2px solid #00E5FF' : '2px solid transparent',
                  border: 'none',
                  borderLeftWidth: 2,
                  borderLeftStyle: 'solid',
                  borderLeftColor: activeSidebarItem === item.id ? '#00E5FF' : 'transparent',
                }}>
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 rounded-lg border border-white/5 p-6 flex items-center justify-center"
          style={{ background: '#1A1E22' }}>
          <span className="text-[13px] text-[#A9A9A9]" style={{ fontFamily: mono }}>
            Conteudo de "{sidebarItems.find(i => i.id === activeSidebarItem)?.label}"
          </span>
        </div>
      </div>

      {/* Tabs */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Tabs</h3>
      <div className="rounded-lg border border-white/5 overflow-hidden mb-10" style={{ background: '#1A1E22' }}>
        <div className="flex border-b border-white/5">
          {tabs.map((tab) => (
            <button key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-6 py-3 text-[12px] uppercase tracking-[0.08em] cursor-pointer transition-all duration-200 relative"
              style={{
                fontFamily: mono,
                color: activeTab === tab.id ? '#00E5FF' : '#A9A9A9',
                background: 'transparent',
                border: 'none',
              }}>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: '#00E5FF' }} />
              )}
            </button>
          ))}
        </div>
        <div className="p-6">
          <span className="text-[13px] text-[#A9A9A9]" style={{ fontFamily: mono }}>
            Conteudo da tab "{tabs.find(t => t.id === activeTab)?.label}"
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Breadcrumb</h3>
      <div className="rounded-lg border border-white/5 p-4 mb-10" style={{ background: '#1A1E22' }}>
        <nav className="flex items-center gap-2 text-[12px]" style={{ fontFamily: mono }}>
          <a className="text-[#A9A9A9] cursor-pointer hover:text-[#00E5FF] transition-colors">Home</a>
          <ChevronRight size={12} color="#A9A9A9" />
          <a className="text-[#A9A9A9] cursor-pointer hover:text-[#00E5FF] transition-colors">Cursos</a>
          <ChevronRight size={12} color="#A9A9A9" />
          <span className="text-[#00E5FF]">Fundamentos IA</span>
        </nav>
      </div>

      {/* Pagination */}
      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: serif, color: '#FDF5E6' }}>Paginacao</h3>
      <div className="rounded-lg border border-white/5 p-4" style={{ background: '#1A1E22' }}>
        <div className="flex items-center justify-center gap-1">
          <button className="w-9 h-9 rounded flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{ fontFamily: mono, fontSize: 12, background: 'transparent', border: '1px solid rgba(169,169,169,0.2)', color: '#A9A9A9' }}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
            <ChevronLeft size={14} />
          </button>
          {[1, 2, 3, '...', 10].map((page, i) => (
            <button key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              className="w-9 h-9 rounded flex items-center justify-center cursor-pointer transition-all duration-200"
              style={{
                fontFamily: mono,
                fontSize: 12,
                background: currentPage === page ? '#00E5FF' : 'transparent',
                color: currentPage === page ? '#1A1E22' : '#A9A9A9',
                border: currentPage === page ? 'none' : '1px solid rgba(169,169,169,0.2)',
              }}>
              {page}
            </button>
          ))}
          <button className="w-9 h-9 rounded flex items-center justify-center cursor-pointer transition-all duration-200"
            style={{ fontFamily: mono, fontSize: 12, background: 'transparent', border: '1px solid rgba(169,169,169,0.2)', color: '#A9A9A9' }}
            onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
