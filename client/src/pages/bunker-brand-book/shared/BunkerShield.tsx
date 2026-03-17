export default function BunkerShield({ size = 80 }: { size?: number }) {
  const scale = size / 80;
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 80 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(0 0 ${8 * scale}px rgba(205,127,50,0.4)) drop-shadow(0 0 ${16 * scale}px rgba(205,127,50,0.2))`,
      }}
    >
      {/* Shield shape */}
      <path
        d="M40 2 L74 16 C74 16 76 48 64 66 C52 84 40 90 40 90 C40 90 28 84 16 66 C4 48 6 16 6 16 Z"
        stroke="#CD7F32"
        strokeWidth="2.5"
        fill="rgba(26,30,34,0.85)"
      />
      {/* Inner shield line */}
      <path
        d="M40 10 L68 22 C68 22 70 48 60 63 C50 78 40 83 40 83 C40 83 30 78 20 63 C10 48 12 22 12 22 Z"
        stroke="rgba(205,127,50,0.3)"
        strokeWidth="1"
        fill="none"
      />
      {/* Lock body */}
      <rect x="30" y="42" width="20" height="16" rx="2" stroke="#CD7F32" strokeWidth="1.8" fill="rgba(205,127,50,0.1)" />
      {/* Lock shackle */}
      <path d="M34 42 V36 C34 30 46 30 46 36 V42" stroke="#CD7F32" strokeWidth="1.8" fill="none" />
      {/* Keyhole */}
      <circle cx="40" cy="49" r="2.5" fill="#CD7F32" />
      <path d="M40 51 L40 55" stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round" />
      {/* Circuit lines */}
      <path d="M6 30 L24 30 L28 38" stroke="rgba(0,229,255,0.25)" strokeWidth="0.8" strokeDasharray="3 2" />
      <path d="M74 30 L56 30 L52 38" stroke="rgba(0,229,255,0.25)" strokeWidth="0.8" strokeDasharray="3 2" />
      <path d="M20 70 L30 60" stroke="rgba(0,229,255,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
      <path d="M60 70 L50 60" stroke="rgba(0,229,255,0.2)" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Circuit nodes */}
      <circle cx="24" cy="30" r="1.5" fill="rgba(0,229,255,0.4)" />
      <circle cx="56" cy="30" r="1.5" fill="rgba(0,229,255,0.4)" />
    </svg>
  );
}
