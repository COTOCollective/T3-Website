/**
 * Átomo: párrafo de texto corrido.
 * @param {object} props
 * @param {React.ReactNode} props.children Texto.
 * @param {boolean} [props.onDark] Color claro para fondos oscuros.
 * @param {boolean} [props.lg] Tamaño grande (18/30 en lugar de 16/26).
 * @param {string} [props.className] Clases adicionales.
 * @param {object} [props.style] Estilos adicionales.
 */
const BodyText = ({ children, onDark, lg, style, className }) => (
  <p className={className} style={{ margin: 0, font: `400 ${lg ? 18 : 16}px/${lg ? 30 : 26}px var(--font-body)`, color: onDark ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)', textWrap: 'pretty', ...style }}>
    {children}
  </p>
);
