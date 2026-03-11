# MVP Brand Standards - Meeting Report

## Paleta de Cores
- **Background primario:** `#020617` (deep navy)
- **Background card:** `#0f172a` (slate-900)
- **Background glass:** `rgba(15, 23, 42, 0.6)` com backdrop-blur
- **Accent primario:** `#f59e0b` (amber-500)
- **Accent glow:** `rgba(245, 158, 11, 0.15)` para brilhos
- **Texto primario:** `#ffffff`
- **Texto secundario:** `#94a3b8` (slate-400)
- **Texto terciario:** `#475569` (slate-600)
- **Borda sutil:** `rgba(255,255,255,0.05)`
- **Borda media:** `rgba(255,255,255,0.1)`

## Tipografia
- **Fonte principal:** Inter (sans-serif) - via Google Fonts
- **Fonte serif:** Georgia, 'Times New Roman', serif - para citacoes e destaques italicos
- **Tamanhos:**
  - Hero title: 3.5rem–5rem, font-weight: 500, tracking: -0.02em
  - Section title: 2rem–2.5rem, font-weight: 500
  - Label uppercase: 0.65rem, font-weight: 700, letter-spacing: 0.3em
  - Body: 1rem–1.125rem, font-weight: 300–400, line-height: 1.7
- **Estilo de destaque:** itálico + serif + amber (ex: `<em class="accent">`)

## Padroes Visuais
- Dark mode absoluto - sem modo claro
- Glass morphism: `backdrop-filter: blur(20px)`, background semi-transparente
- Glow de fundo: blur enorme (80-120px) para criar profundidade
- Linhas decorativas finas: gradiente de transparente para branco/5 para transparente
- Borda amber na esquerda dos cards de destaque (4px solid amber)
- Pulse animado para indicadores ativos
- Fade-in suave ao carregar (CSS animation)
- Sem sombras duras - tudo e' glow ou transparencia

## Elementos de UI
- **Cards:** border 1px rgba(255,255,255,0.08), border-radius 16px, padding generoso
- **Tags/Labels:** uppercase, tiny, bold, tracking wide, amber ou slate
- **Divider:** linha amber fina (2-4px width, cor amber-500)
- **Icones:** Unicode ou SVG simples inline
- **Citacoes:** serif italic, tamanho grande, amber, aspas decorativas

## Tom e Voz
- Direto, executivo, confiante
- Sem jargao desnecessario
- Seções em portugues, termos tecnicos preservados
- Data no formato brasileiro: DD de MES de AAAA
