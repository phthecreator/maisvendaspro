import ColorSystem from '../foundations/ColorSystem';
import Textures from '../foundations/Textures';
import MotionSystem from '../foundations/MotionSystem';
import SpacingGrid from '../foundations/SpacingGrid';
import Elevation from '../foundations/Elevation';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-16"
    style={{ background: 'linear-gradient(90deg, transparent, #FF6B00, transparent)' }} />
);

export default function Foundations() {
  return (
    <div>
      <section id="cores" className="py-24"><ColorSystem /></section>
      <SectionDivider />
      <section id="texturas" className="py-24"><Textures /></section>
      <SectionDivider />
      <section id="motion" className="py-24"><MotionSystem /></section>
      <SectionDivider />
      <section id="spacing-grid" className="py-24"><SpacingGrid /></section>
      <SectionDivider />
      <section id="elevacao" className="py-24"><Elevation /></section>
    </div>
  );
}
