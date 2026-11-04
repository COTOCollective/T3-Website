/**
 * Átomo: enlace de texto subrayado con flecha (.de-link).
 * @param {object} props
 * @param {React.ReactNode} props.children Texto del enlace.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 * @param {object} [props.style] Estilos adicionales.
 */
const TextLink = ({ children, onDark, style }) => (
  <a href="#" onClick={preventDefault} className={'de-link' + (onDark ? ' on-dark' : '')} style={style}>
    {children}<Icon name="arrow-right" size={16} />
  </a>
);
