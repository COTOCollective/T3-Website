/**
 * Átomo: cifra que cuenta desde 0 hasta su valor al entrar en pantalla.
 * Conserva el prefijo y el sufijo del texto (p. ej. "~20%" o "14 mi").
 * @param {object} props
 * @param {string} props.v Valor a mostrar.
 */
const CountUp = ({ v }) => {
  const match = String(v).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = React.useRef(null);
  const [current, setCurrent] = React.useState(window.DE_STATIC || !match ? null : 0);

  React.useEffect(() => {
    if (window.DE_STATIC || !match) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      const end = parseFloat(match[2]);
      const start = performance.now();
      const duration = 1200;
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        setCurrent(end * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(step); else setCurrent(null);
      };
      requestAnimationFrame(step);
    }, { threshold: .4 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{current === null ? v : match[1] + Math.round(current) + match[3]}</span>;
};
