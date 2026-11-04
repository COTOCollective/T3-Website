/**
 * Molécula: paso de una línea de tiempo horizontal (punto, etiqueta y texto) sobre fondo oscuro.
 * @param {object} props
 * @param {string} props.label Etiqueta en mayúsculas.
 * @param {string} props.text Descripción del paso.
 * @param {string} props.padding Relleno del paso (separación con el siguiente).
 * @param {boolean} [props.compact] Texto a 15 px en lugar de 16 px.
 */
const TimelineStep = ({ label, text, padding, compact }) => (
  <div className="de-stack" style={{ gap: 16, padding, position: 'relative' }}>
    <span style={{ position: 'absolute', top: -7, left: 0, width: 13, height: 13, borderRadius: 999, background: 'var(--t3-navy)', border: '2px solid var(--accent)' }}></span>
    <span style={{ font: '600 13px/18px var(--font-display)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>{label}</span>
    <BodyText onDark style={compact ? { fontSize: 15, lineHeight: '24px' } : undefined}>{text}</BodyText>
  </div>
);
