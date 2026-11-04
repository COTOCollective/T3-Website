/**
 * Molécula: menú desplegable para tablet y móvil.
 * @param {object} props
 * @param {boolean} props.dark Cabecera oscura (texto claro).
 * @param {number} props.active Índice del enlace activo en NAV.
 * @param {number} [props.sub] Índice de la subpágina activa en ENGINEERING_SUBPAGES.
 */
const MobileMenu = ({ dark, active, sub }) => {
  const linkClass = 'de-navlink' + (dark ? ' on-dark' : '');
  return (
    <div className="de-mobile-menu" style={{ background: dark ? 'var(--t3-navy)' : '#fff' }}>
      <Container style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 20px 24px' }}>
        {NAV.map((label, i) => (
          <React.Fragment key={label}>
            <a href={routeHref(label)} className={linkClass + (i === active && sub == null ? ' active' : '')} style={{ padding: '12px 0', fontSize: 17 }}>{label}</a>
            {i === 0 && ENGINEERING_SUBPAGES.map((subLabel, j) => (
              <a key={subLabel} href={routeHref(subLabel)} className={linkClass + (j === sub ? ' active' : '')} style={{ padding: '8px 0 12px 16px', fontSize: 15 }}>{subLabel}</a>
            ))}
          </React.Fragment>
        ))}
        <Button iconRight="arrow-right" style={{ marginTop: 12, marginBottom: 8, alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{DE.cta}</Button>
      </Container>
    </div>
  );
};
