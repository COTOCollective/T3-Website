/**
 * Molécula: elemento numerado de una lista <ol> (número grande + texto).
 * @param {object} props
 * @param {number} props.number Número que se muestra.
 * @param {React.ReactNode} props.children Texto del paso.
 * @param {string} [props.className] Clases adicionales del <li>.
 * @param {object} [props.style] Estilos adicionales del <li>.
 */
const NumberedStep = ({ number, children, className, style }) => (
  <li className={className} style={{ ...style, display: 'grid', gridTemplateColumns: '48px minmax(0,1fr)', gap: 16, padding: '24px 0 0', borderTop: '1px solid var(--border-hairline)' }}>
    <span style={{ font: '800 28px/32px var(--font-display)', color: 'var(--t3-turq-700)' }}>{number}</span>
    <BodyText lg>{children}</BodyText>
  </li>
);
