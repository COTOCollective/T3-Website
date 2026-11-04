/**
 * Molécula: tarjeta de página o servicio relacionado (icono, título y "Learn more").
 * Si el título coincide con una ruta de ROUTES, app.jsx la convierte en enlace.
 * @param {object} props
 * @param {string} props.icon Icono.
 * @param {string} props.title Título de la tarjeta.
 * @param {object} [props.style] Estilos adicionales.
 */
const RelatedCard = ({ icon, title, style }) => (
  <div className="v6-card" style={style}>
    <span className="v6-chip"><Icon name={icon} size={16} /></span>
    <h3 style={{ margin: 0, font: '500 20px/26px var(--font-display)', color: 'var(--t3-navy)' }}>{title}</h3>
    <MoreLink onDark style={MORE_LINK_ON_LIGHT}>Learn more</MoreLink>
  </div>
);
