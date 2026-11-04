/**
 * Molécula: tarjeta con una cifra animada y su descripción.
 * @param {object} props
 * @param {string} props.value Cifra (p. ej. "14 mi").
 * @param {string} props.label Descripción de la cifra.
 * @param {boolean} [props.highlighted] Variante azul marino destacada.
 */
const StatTile = ({ value, label, highlighted }) => (
  <div style={{ ...CARD_SURFACE, padding: 28, background: highlighted ? 'var(--t3-navy)' : '#fff', border: highlighted ? 'none' : CARD_SURFACE.border }}>
    <div style={{ font: '500 40px/44px var(--font-mono)', color: highlighted ? 'var(--accent)' : 'var(--t3-navy)' }}><CountUp v={value} /></div>
    <div style={{ font: '600 12px/16px var(--font-display)', letterSpacing: '.1em', textTransform: 'uppercase', color: highlighted ? 'var(--fg-on-inverse-2)' : 'var(--t3-steel)', marginTop: 10 }}>{label}</div>
  </div>
);
