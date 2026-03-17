import Narrative from './Narrative';
import Persona from './Persona';
import VoiceTone from './VoiceTone';
import Positioning from './Positioning';
import MovementArc from './MovementArc';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-16"
    style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
);

export default function BrandSection() {
  return (
    <div>
      <section id="narrativa" className="py-24"><Narrative /></section>
      <SectionDivider />
      <section id="persona" className="py-24"><Persona /></section>
      <SectionDivider />
      <section id="voz-tom" className="py-24"><VoiceTone /></section>
      <SectionDivider />
      <section id="posicionamento" className="py-24"><Positioning /></section>
      <SectionDivider />
      <section id="arco-movimento" className="py-24"><MovementArc /></section>
    </div>
  );
}
