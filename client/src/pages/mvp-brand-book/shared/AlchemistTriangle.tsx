export default function AlchemistTriangle({ size = 40 }: { size?: number }) {
  const cx = 32;
  const cy = 34;
  const r = 24;

  const ax = cx;
  const ay = cy - r;
  const bx = cx - r * Math.sin(Math.PI / 3);
  const by = cy + r * Math.cos(Math.PI / 3);
  const ccx = cx + r * Math.sin(Math.PI / 3);
  const ccy = cy + r * Math.cos(Math.PI / 3);

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Triangle */}
      <polygon
        points={`${ax},${ay} ${bx},${by} ${ccx},${ccy}`}
        fill="none"
        stroke="#00C96E"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Vertex circles — Pedro (top), Murillo (bottom-left), Rapha (bottom-right) */}
      <circle cx={ax} cy={ay} r="3" fill="#0A0A0A" stroke="#00C96E" strokeWidth="1" />
      <circle cx={bx} cy={by} r="3" fill="#0A0A0A" stroke="#00C96E" strokeWidth="1" />
      <circle cx={ccx} cy={ccy} r="3" fill="#0A0A0A" stroke="#00C96E" strokeWidth="1" />

      {/* Center alchemist symbol — circle with dot */}
      <circle cx={cx} cy={cy} r="6" fill="none" stroke="#00C96E" strokeWidth="0.8" opacity="0.6" />
      <circle cx={cx} cy={cy} r="1.5" fill="#00C96E" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r="6" fill="none" stroke="#00C96E" strokeWidth="0.4" opacity="0.3">
        <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
