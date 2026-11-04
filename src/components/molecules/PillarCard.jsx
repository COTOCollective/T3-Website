/**
 * Molécula: tarjeta inclinable de una línea de negocio (inicio: "What T3 Does").
 * @param {object} props
 * @param {{k: string, b: string, i: string}} props.pillar Título, descripción e icono.
 * @param {boolean} [props.featured] Variante azul marino (la primera tarjeta).
 */
const PillarCard = ({ pillar, featured }) => (
  <TiltCard className="hm-pillar" style={{ height: '100%', minWidth: 0, boxSizing: 'border-box', borderRadius: 24, background: featured ? 'var(--t3-navy)' : '#fff', border: featured ? 'none' : '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)', padding: 36, gap: 20, minHeight: 340, color: featured ? '#fff' : 'var(--t3-navy)' }}>
    <div className="de-row" style={{ justifyContent: 'space-between' }}><IconChip icon={pillar.i} onDark={featured} /></div>
    <h3 className="hm-pillar-h" style={{ margin: 0, font: '800 28px/34px var(--font-display)', color: 'inherit', overflowWrap: 'break-word', hyphens: 'auto' }}>{pillar.k}</h3>
    <p style={{ margin: 0, font: '400 15px/24px var(--font-body)', overflowWrap: 'break-word', color: featured ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)' }}>{pillar.b}</p>
    <span className="hm-arrow" style={{ color: 'var(--accent)', marginTop: 'auto' }}><Icon name="arrow-right" size={22} /></span>
  </TiltCard>
);
