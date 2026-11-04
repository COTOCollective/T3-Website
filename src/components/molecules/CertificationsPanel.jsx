/**
 * Molécula: panel azul marino de licencias y certificaciones (escudo, texto y enlaces).
 * @param {object} props
 * @param {string} props.lead Frase principal.
 * @param {'lg'|'md'} [props.leadSize='lg'] Tamaño de la frase principal.
 * @param {string[]} [props.notes] Párrafos secundarios.
 * @param {string} props.linkLabel Texto del enlace a certificaciones.
 * @param {boolean} [props.showCapabilityCta=true] Muestra el botón "Request our Capability Statement".
 * @param {string} [props.className='r-panel'] Clases del panel.
 */
const CertificationsPanel = ({ lead, leadSize = 'lg', notes = [], linkLabel, showCapabilityCta = true, className = 'r-panel' }) => {
  const leadStyle = leadSize === 'lg'
    ? { margin: 0, font: '500 26px/34px var(--font-display)', color: '#fff' }
    : { margin: 0, font: '500 22px/32px var(--font-display)', color: '#fff', maxWidth: 820 };

  return (
    <div className={className} style={{ borderRadius: 24, background: 'var(--gradient-navy)', padding: '44px 48px', display: 'flex', gap: 40, alignItems: 'center', position: 'relative', overflow: 'hidden', flexWrap: 'wrap' }}>
      <Overlay background={turquoiseGlow('50% 90% at 0% 50%')} />
      <span style={{ position: 'relative', width: 96, height: 96, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <Icon name="shield-check" size={84} strokeWidth={1.25} />
      </span>
      <div className="de-stack" style={{ gap: 12, position: 'relative', flex: 1, minWidth: 260 }}>
        <p style={leadStyle}>{lead}</p>
        {notes.map((note) => <p key={note} style={{ margin: 0, font: '400 14px/22px var(--font-body)', color: 'var(--fg-on-inverse-2)', maxWidth: 720 }}>{note}</p>)}
        <div className="de-row" style={{ gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
          <MoreLink onDark>{linkLabel}</MoreLink>
          {showCapabilityCta && <Button iconRight="arrow-right" style={{ height: 48 }}>{DE.capCta}</Button>}
        </div>
      </div>
    </div>
  );
};
