import Buttons from '../component-demos/Buttons';
import Cards from '../component-demos/Cards';
import Forms from '../component-demos/Forms';
import Navigation from '../component-demos/Navigation';
import Feedback from '../component-demos/Feedback';
import DataDisplay from '../component-demos/DataDisplay';
import BunkerSpecials from '../component-demos/BunkerSpecials';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-16"
    style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
);

export default function Components() {
  return (
    <div>
      <section id="botoes" className="py-24"><Buttons /></section>
      <SectionDivider />
      <section id="cards" className="py-24"><Cards /></section>
      <SectionDivider />
      <section id="formularios" className="py-24"><Forms /></section>
      <SectionDivider />
      <section id="navegacao" className="py-24"><Navigation /></section>
      <SectionDivider />
      <section id="feedback" className="py-24"><Feedback /></section>
      <SectionDivider />
      <section id="dados" className="py-24"><DataDisplay /></section>
      <SectionDivider />
      <section id="especiais" className="py-24"><BunkerSpecials /></section>
    </div>
  );
}
