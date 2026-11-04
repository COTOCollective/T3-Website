/**
 * Átomo: capa decorativa que cubre a su contenedor (degradados, velos y resplandores).
 * @param {object} props
 * @param {string} props.background Valor CSS de fondo (ver GLOW_TURQUOISE y turquoiseGlow en utils/styles.js).
 * @param {number} [props.opacity] Opacidad de la capa.
 */
const Overlay = ({ background, opacity }) => (
  <div style={{ position: 'absolute', inset: 0, background, opacity }}></div>
);
