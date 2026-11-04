/**
 * Indica si un elemento ya entró en pantalla (se activa una sola vez).
 * @param {number} threshold Fracción visible (0–1) necesaria para activarse.
 * @returns {[React.RefObject, boolean]} Ref que se asigna al elemento y si ya es visible.
 */
const useInView = (threshold) => {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(!!window.DE_STATIC);
  React.useEffect(() => {
    if (window.DE_STATIC || !ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};
