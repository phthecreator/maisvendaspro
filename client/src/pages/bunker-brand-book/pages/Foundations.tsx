import ColorSystem from '../foundations/ColorSystem';
import Typography from '../foundations/Typography';
import SpacingGrid from '../foundations/SpacingGrid';
import Textures from '../foundations/Textures';
import MotionSystem from '../foundations/MotionSystem';
import Elevation from '../foundations/Elevation';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-4"
    style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
);

export default function Foundations() {
  return (
    <div>
      <ColorSystem />
      <SectionDivider />
      <Typography />
      <SectionDivider />
      <SpacingGrid />
      <SectionDivider />
      <Textures />
      <SectionDivider />
      <MotionSystem />
      <SectionDivider />
      <Elevation />
    </div>
  );
}
