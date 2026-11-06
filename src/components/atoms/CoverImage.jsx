/**
 * Átomo: imagen que cubre por completo a su contenedor (posición absoluta).
 * El contenedor debe tener `position: relative`.
 * @param {object} props
 * @param {string} props.src Ruta de la imagen.
 * @param {string} [props.position='center'] Valor de object-position.
 * @param {string} [props.alt=''] Texto alternativo (vacío si es decorativa).
 * @param {boolean} [props.mirrored] Muestra la imagen invertida horizontalmente (en espejo).
 */
const CoverImage = ({ src, position = 'center', alt = '', mirrored }) => (
  <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, transform: mirrored ? 'scaleX(-1)' : undefined }} />
);
