/**
 * Átomo: enlace "ver más" con la flecha dentro de un círculo (.v6-more).
 * @param {object} props
 * @param {React.ReactNode} props.children Texto del enlace.
 * @param {boolean} [props.onDark] Variante clara para fondos oscuros.
 * @param {object} [props.style] Estilos adicionales (p. ej. color turquesa sobre fondo blanco).
 * @param {string} [props.href] Destino real. Sin href, el clic no navega.
 * @param {string} [props.download] Nombre de archivo si el enlace descarga un documento.
 */
const MoreLink = ({ children, onDark, style, href, download }) => (
  <a href={href || '#'} download={download} onClick={href ? undefined : preventDefault} className={'v6-more' + (onDark ? ' on-dark' : '')} style={style}>
    {children}<span className="v6-more-dot"><Icon name="arrow-right" size={12} /></span>
  </a>
);

/** Estilo turquesa de MoreLink cuando va sobre fondo blanco. */
const MORE_LINK_ON_LIGHT = { color: '#1f8682' };
