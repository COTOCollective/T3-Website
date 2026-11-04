/**
 * Átomo: tarjeta enlazable que se inclina en 3D siguiendo al cursor.
 * @param {object} props
 * @param {React.ReactNode} props.children Contenido de la tarjeta.
 * @param {string} [props.className] Clases adicionales.
 * @param {object} [props.style] Estilos adicionales.
 * @param {number} [props.max=6] Inclinación máxima en grados.
 */
const TiltCard = ({ children, className = '', style, max = 6 }) => {
  const ref = React.useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * max}deg) rotateY(${x * max}deg) translateY(-2px)`;
    ref.current.style.setProperty('--mx', (x + .5) * 100 + '%');
    ref.current.style.setProperty('--my', (y + .5) * 100 + '%');
  };
  const handleMouseLeave = () => { ref.current.style.transform = ''; };

  return (
    <a href="#" onClick={preventDefault} ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={'hm-tilt ' + className} style={style}>
      {children}
    </a>
  );
};
