/**
 * Molécula: pestaña que selecciona una foto del carrusel del inicio.
 * @param {object} props
 * @param {string} props.label Nombre de la foto.
 * @param {boolean} props.active Si es la foto visible.
 * @param {Function} props.onSelect Acción al pulsar.
 */
const SlideTab = ({ label, active, onSelect }) => (
  <button onClick={onSelect} className={'hh-lab' + (active ? ' on' : '')} style={{ all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span style={{ height: 2, borderRadius: 2, background: active ? 'var(--accent)' : 'rgba(255,255,255,.25)', transition: 'background var(--dur-base)' }}></span>
    <span style={{ font: '300 13px/16px var(--font-body)', letterSpacing: '.1em', textTransform: 'uppercase', color: active ? '#fff' : 'var(--fg-on-inverse-2)' }}>{label}</span>
  </button>
);
