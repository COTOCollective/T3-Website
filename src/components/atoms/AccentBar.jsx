/**
 * Átomo: barra corta de color de acento que precede a algunos títulos.
 * @param {object} props
 * @param {object} [props.style] Estilos adicionales.
 */
const AccentBar = ({ style }) => (
  <span style={{ display: 'block', width: 40, height: 3, borderRadius: 2, background: 'var(--accent)', ...style }}></span>
);
