/**
 * Átomo: fotografía con esquinas redondeadas (ImageCard del sistema de diseño).
 * Si no se indica `alt`, usa el título de la imagen como texto alternativo.
 * @param {object} props Mismas props que ImageCard (height, src, title, style, onClick...).
 */
const Photo = (props) => (
  <DsImageCard {...props} src={props.src || undefined} alt={props.alt || props.title || ''} />
);
