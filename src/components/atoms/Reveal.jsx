/**
 * Átomo: hace aparecer su contenido con un fundido hacia arriba al entrar en pantalla.
 * @param {object} props
 * @param {React.ReactNode} props.children Contenido a animar.
 * @param {number} [props.delay=0] Retraso de la animación en ms.
 * @param {string} [props.className] Clases adicionales.
 * @param {object} [props.style] Estilos adicionales.
 */
const Reveal = ({ children, delay = 0, style, className }) => {
  const [ref, visible] = useInView(.1);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: `opacity 700ms var(--ease-out) ${delay}ms,transform 700ms var(--ease-out) ${delay}ms`, ...style }}>
      {children}
    </div>
  );
};
