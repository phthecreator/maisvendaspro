interface Props {
  overline?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ overline, title, description }: Props) {
  return (
    <div style={{ marginBottom: 40 }}>
      {overline && (
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#00C96E',
            marginBottom: 8,
          }}
        >
          {overline}
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 32,
          fontWeight: 700,
          color: '#FFFFFF',
          margin: 0,
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          height: 2,
          width: 40,
          backgroundColor: '#00C96E',
          borderRadius: 2,
          marginBottom: description ? 16 : 0,
        }}
      />
      {description && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: '#8B9A8B',
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 600,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
