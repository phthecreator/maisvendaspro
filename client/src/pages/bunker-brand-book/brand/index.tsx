import Narrative from './Narrative';
import Persona from './Persona';
import VoiceTone from './VoiceTone';
import Positioning from './Positioning';
import MovementArc from './MovementArc';

export default function BrandSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
      <Narrative />
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
      <Persona />
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
      <VoiceTone />
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
      <Positioning />
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
      <MovementArc />
    </div>
  );
}
