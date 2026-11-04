/**
 * Átomo: contenedor centrado con el ancho máximo del sitio (.de-wrap).
 * @param {object} props
 * @param {React.ReactNode} props.children Contenido.
 * @param {string} [props.className] Clases adicionales.
 * @param {object} [props.style] Estilos en línea.
 */
const Container = ({ children, style, className = '' }) => (
  <div className={'de-wrap ' + className} style={style}>{children}</div>
);
