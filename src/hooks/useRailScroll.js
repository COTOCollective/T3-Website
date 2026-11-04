/**
 * Controla el desplazamiento horizontal de un carrusel de tarjetas.
 * @param {number} [step=384] Píxeles que avanza cada pulsación.
 * @returns {[React.RefObject, Function]} Ref del carril y función scroll(dirección), con dirección -1 o 1.
 */
const useRailScroll = (step = 384) => {
  const railRef = React.useRef(null);
  const scroll = (direction) => {
    if (railRef.current) railRef.current.scrollBy({ left: direction * step, behavior: 'smooth' });
  };
  return [railRef, scroll];
};
