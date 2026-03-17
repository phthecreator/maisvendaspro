import Buttons from '../component-demos/Buttons';
import Cards from '../component-demos/Cards';
import Forms from '../component-demos/Forms';
import Feedback from '../component-demos/Feedback';
import ForjaSpecials from '../component-demos/ForjaSpecials';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-16"
    style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />
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
      <section id="feedback" className="py-24"><Feedback /></section>
      <SectionDivider />
      <section id="especiais" className="py-24"><ForjaSpecials /></section>
    </div>
  );
}
