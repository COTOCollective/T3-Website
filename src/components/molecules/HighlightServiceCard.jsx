/**
 * Molécula: tarjeta de servicio sin foto, con bloque azul marino (p. ej. Telecomunicaciones).
 * @param {object} props
 * @param {string} props.icon Icono del servicio.
 * @param {string} props.title Nombre del servicio.
 * @param {string} props.text Descripción.
 */
const HighlightServiceCard = ({ icon, title, text }) => (
  <article className="de-stack" style={{ gap: 20 }}>
    <div style={{ height: 300, boxSizing: 'border-box', padding: 28, borderRadius: 16, background: 'var(--t3-navy)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <IconChip icon={icon} onDark />
      <h3 className="de-h3 on-dark">{title}</h3>
    </div>
    <BodyText style={{ fontSize: 15, lineHeight: '24px' }}>{text}</BodyText>
  </article>
);
