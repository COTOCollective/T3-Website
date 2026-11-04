/**
 * Átomo: botón redondo de 36 px con un icono (anterior / siguiente).
 * @param {object} props
 * @param {string} props.icon Nombre del icono.
 * @param {string} props.label Texto accesible (aria-label).
 * @param {Function} props.onClick Acción al pulsar.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 */
const CircleIconButton = ({ icon, label, onClick, onDark }) => (
  <button aria-label={label} onClick={onClick} style={{ all: 'unset', cursor: 'pointer', width: 36, height: 36, borderRadius: 99, border: onDark ? '1px solid rgba(255,255,255,.35)' : '1px solid var(--border-default)', color: onDark ? '#fff' : 'var(--t3-steel)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
    <Icon name={icon} size={16} />
  </button>
);
