/**
 * Indica si la página se ha desplazado más de cierta distancia.
 * @param {number} [offset=40] Píxeles de desplazamiento vertical.
 * @returns {boolean} true cuando window.scrollY supera el offset.
 */
const useScrolled = (offset = 40) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return scrolled;
};
