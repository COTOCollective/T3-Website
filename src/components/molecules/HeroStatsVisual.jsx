/**
 * Molécula: foto de cabecera con un panel esmerilado de cifras clave.
 * @param {object} props
 * @param {string} props.src Ruta de la foto.
 * @param {Array<[string, string]>} props.stats Pares [cifra, descripción].
 */
const HeroStatsVisual = ({ src, stats }) => (
  <div style={{ position: 'relative', height: 480 }}>
    <Photo height={480} src={src} style={{ borderRadius: 16 }} />
    <FrostedPanel padding={24} style={{ position: 'absolute', left: 24, right: 24, bottom: 24, borderRadius: 16, display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 16 }}>
      {stats.map(([value, label]) => (
        <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: '500 22px/28px var(--font-mono)', color: '#fff' }}>{value}</span>
          <span style={{ font: '600 11px/16px var(--font-display)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg-on-inverse-2)' }}>{label}</span>
        </div>
      ))}
    </FrostedPanel>
  </div>
);
