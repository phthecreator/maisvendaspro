import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'text' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: '#0d1117',
        borderRadius: 8,
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backgroundColor: 'rgba(255,255,255,0.02)',
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            color: '#A9A9A9',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="min-h-[44px] min-w-[44px]"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: copied ? '#34C759' : '#A9A9A9',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            fontFamily: "'Roboto Mono', monospace",
            fontSize: 11,
            padding: '8px 12px',
            borderRadius: 4,
            transition: 'color 0.15s',
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {/* Code content */}
      <pre
        style={{
          margin: 0,
          padding: 16,
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 13,
          color: '#FDF5E6',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          lineHeight: 1.6,
          overflowX: 'auto',
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
