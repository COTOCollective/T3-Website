/**
 * Molécula: lista con viñetas circulares de color de acento.
 * @param {object} props
 * @param {string[]} [props.items] Elementos de la lista; si no hay, no se muestra nada.
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 */
const BulletList = ({ items, onDark }) => {
  if (!items) return null;
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((item) => (
        <li key={item} style={{ display: 'grid', gridTemplateColumns: '14px minmax(0,1fr)', gap: 8, font: '400 15px/22px var(--font-body)', color: onDark ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent)', marginTop: 8 }}></span>
          {item}
        </li>
      ))}
    </ul>
  );
};
