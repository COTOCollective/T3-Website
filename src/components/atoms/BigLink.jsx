/**
 * Átomo: enlace grande a escala de titular (correo y teléfono de contacto).
 * @param {object} props
 * @param {string} props.href Destino (mailto:, tel:, ...).
 * @param {React.ReactNode} props.children Texto visible.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 * @param {number} [props.size=40] Tamaño de fuente en px.
 */
const BigLink = ({ href, children, onDark, size = 40 }) => (
  <a href={href} className={'ct-big' + (onDark ? ' on-dark' : '')} style={{ font: `800 ${size}px/1.1 var(--font-display)`, letterSpacing: '-.015em' }}>
    {children}
  </a>
);
