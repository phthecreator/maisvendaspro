import Buttons from '../component-demos/Buttons';
import Cards from '../component-demos/Cards';
import Forms from '../component-demos/Forms';
import Navigation from '../component-demos/Navigation';
import Feedback from '../component-demos/Feedback';
import DataDisplay from '../component-demos/DataDisplay';
import BunkerSpecials from '../component-demos/BunkerSpecials';

const SectionDivider = () => (
  <div className="w-full h-px opacity-10 my-4"
    style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, transparent)' }} />
);

export default function Components() {
  return (
    <div>
      <div id="section-buttons"><Buttons /></div>
      <SectionDivider />
      <div id="section-cards"><Cards /></div>
      <SectionDivider />
      <div id="section-forms"><Forms /></div>
      <SectionDivider />
      <div id="section-navigation"><Navigation /></div>
      <SectionDivider />
      <div id="section-feedback"><Feedback /></div>
      <SectionDivider />
      <div id="section-data-display"><DataDisplay /></div>
      <SectionDivider />
      <div id="section-bunker-specials"><BunkerSpecials /></div>
    </div>
  );
}
