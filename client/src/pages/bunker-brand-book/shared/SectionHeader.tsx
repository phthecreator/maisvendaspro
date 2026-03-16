interface SectionHeaderProps {
  overline: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ overline, title, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: '#00E5FF',
          marginBottom: 12,
        }}
      >
        {overline}
      </div>
      <h2
        style={{
          fontFamily: "'Averia Serif Libre', serif",
          fontSize: 42,
          fontWeight: 700,
          color: '#FDF5E6',
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 15,
            color: '#A9A9A9',
            maxWidth: 700,
            marginTop: 16,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
