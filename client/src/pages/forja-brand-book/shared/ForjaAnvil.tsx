export default function ForjaAnvil({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A Forja Logo">
      <path d="M12 36 L52 36 L56 44 L48 48 L16 48 L8 44 Z" fill="#B8976A" stroke="#FF6B00" strokeWidth="0.5" />
      <path d="M16 36 L16 30 L20 26 L44 26 L48 30 L48 36" fill="#8B6914" stroke="#FF6B00" strokeWidth="0.5" />
      <path d="M20 26 L6 30 L6 34 L16 36 L16 30 L20 26" fill="#9A7B2E" stroke="#FF6B00" strokeWidth="0.5" />
      <rect x="18" y="48" width="28" height="6" rx="1" fill="#6B4E1A" stroke="#FF6B00" strokeWidth="0.3" />
      <line x1="36" y1="8" x2="36" y2="24" stroke="#B8976A" strokeWidth="2" strokeLinecap="round" />
      <rect x="30" y="5" width="12" height="6" rx="1.5" fill="#8B6914" stroke="#FF6B00" strokeWidth="0.5" />
      <circle cx="36" cy="26" r="2" fill="#FFD700" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="36" cy="26" r="4" fill="none" stroke="#FF6B00" strokeWidth="0.5" opacity="0.4">
        <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <line x1="30" y1="22" x2="28" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
      <line x1="42" y1="22" x2="44" y2="20" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
      <line x1="36" y1="22" x2="36" y2="19" stroke="#FFD700" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}
