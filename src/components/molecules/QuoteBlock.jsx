/**
 * Molécula: cita de un cliente con su autor.
 * @param {object} props
 * @param {{q: string, by: string}} props.quote Texto de la cita y autor.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 * @param {number} [props.size=36] Tamaño de la cita en px.
 */
const QuoteBlock = ({ quote, onDark, size = 36 }) => (
  <div className="de-stack" style={{ gap: 20 }}>
    <blockquote style={{ margin: 0, font: '700 ' + size + 'px/' + Math.round(size * 1.28) + 'px var(--font-display)', letterSpacing: '-.01em', color: onDark ? '#fff' : 'var(--t3-navy)', textWrap: 'balance' }}>“{quote.q}”</blockquote>
    <span style={{ font: '500 15px/24px var(--font-body)', color: onDark ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)' }}>{quote.by}</span>
  </div>
);
