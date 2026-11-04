/**
 * Átomo: icono dentro de un círculo de color turquesa.
 * @param {object} props
 * @param {string} props.icon Nombre del icono del sistema de diseño.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 */
const IconChip = ({ icon, onDark }) => (
  <span style={{ width: 40, height: 40, borderRadius: 999, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: onDark ? 'rgba(55,198,192,.14)' : 'var(--t3-turq-100)', color: onDark ? 'var(--accent)' : 'var(--t3-turq-700)' }}>
    <Icon name={icon} size={20} />
  </span>
);
