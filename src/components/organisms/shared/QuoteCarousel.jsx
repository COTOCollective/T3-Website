/**
 * Organismo: carrusel automático de testimonios con puntos y flechas.
 * Avanza cada 5 s y vuelve al inicio sin salto visible (duplica la primera diapositiva al final).
 * @param {object} props
 * @param {Array<{q: string, by: string}>} props.quotes Testimonios.
 * @param {Function} props.renderSlide Función (cita, índice) => contenido de la diapositiva.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 * @param {number} [props.maxWidth=960] Ancho máximo en px.
 */
const QuoteCarousel = ({ quotes, renderSlide, onDark, maxWidth = 960 }) => {
  const [index, setIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);
  const count = quotes.length;
  const slides = [...quotes, quotes[0]];
  const current = index % count;

  // Avance automático.
  React.useEffect(() => {
    const timer = setTimeout(() => { setAnimate(true); setIndex((v) => v + 1); }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  // Al llegar a la copia de la primera diapositiva, vuelve a la real sin animación.
  React.useEffect(() => {
    if (index === count) {
      const timer = setTimeout(() => { setAnimate(false); setIndex(0); }, 620);
      return () => clearTimeout(timer);
    }
    if (!animate) {
      const frame = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(frame);
    }
  }, [index, animate]);

  const goTo = (target) => { setAnimate(true); setIndex(target); };

  return (
    <div className="de-stack" style={{ gap: 32, maxWidth, margin: '0 auto', width: '100%' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', transform: 'translateX(' + (-index * 100) + '%)', transition: animate ? 'transform 600ms var(--ease-out)' : 'none' }}>
          {slides.map((quote, k) => <div key={k} style={{ flex: '0 0 100%' }}>{renderSlide(quote, k)}</div>)}
        </div>
      </div>
      <div className="de-row" style={{ justifyContent: 'space-between' }}>
        <div className="de-row" style={{ gap: 8 }}>
          {quotes.map((_, k) => (
            <button key={k} aria-label={'Quote ' + (k + 1)} onClick={() => goTo(k)} style={{ all: 'unset', cursor: 'pointer', width: k === current ? 28 : 8, height: 8, borderRadius: 99, background: k === current ? 'var(--accent)' : (onDark ? 'rgba(255,255,255,.3)' : 'var(--border-strong)'), transition: 'width 300ms var(--ease-out)' }}></button>
          ))}
        </div>
        <div className="de-row" style={{ gap: 12 }}>
          <CircleIconButton icon="arrow-left" label="Previous" onDark={onDark} onClick={() => goTo((current - 1 + count) % count)} />
          <CircleIconButton icon="arrow-right" label="Next" onDark={onDark} onClick={() => goTo(current + 1)} />
        </div>
      </div>
    </div>
  );
};
