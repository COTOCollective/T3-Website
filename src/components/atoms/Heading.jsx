/**
 * Átomo: título de sección <h2> con la tipografía display.
 * @param {object} props
 * @param {React.ReactNode} props.children Texto del título.
 * @param {boolean} [props.onDark] Usa color blanco para fondos oscuros.
 * @param {number} [props.size=44] Tamaño de fuente en px.
 * @param {object} [props.style] Estilos adicionales.
 */
const Heading = ({ children, onDark, size = 44, style }) => (
  <h2 style={{ margin: 0, font: `800 ${size}px/1.15 var(--font-display)`, letterSpacing: '-.01em', color: onDark ? '#fff' : 'var(--t3-navy)', textWrap: 'balance', ...style }}>
    {children}
  </h2>
);
