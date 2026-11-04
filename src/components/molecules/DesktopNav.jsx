/**
 * Molécula: menú principal de escritorio. "Engineering" despliega sus subpáginas.
 * @param {object} props
 * @param {boolean} props.dark Cabecera oscura (texto claro).
 * @param {number} props.active Índice del enlace activo en NAV (-1 = ninguno).
 * @param {number} [props.sub] Índice de la subpágina activa en ENGINEERING_SUBPAGES.
 */
const DesktopNav = ({ dark, active, sub }) => (
  <nav className="de-nav" style={{ display: 'flex', gap: 28, marginLeft: 'auto' }}>
    {NAV.map((label, i) => {
      const link = <a href={routeHref(label)} className={'de-navlink' + (dark ? ' on-dark' : '') + (i === active ? ' active' : '')}>{label}</a>;
      if (i !== 0) return <React.Fragment key={label}>{link}</React.Fragment>;
      return (
        <span key={label} className="de-navdd">
          {link}
          <span className={'de-dd' + (dark ? ' on-dark' : '')}>
            {ENGINEERING_SUBPAGES.map((subLabel, j) => <a key={subLabel} href={routeHref(subLabel)} className={j === sub ? 'active' : ''}>{subLabel}</a>)}
          </span>
        </span>
      );
    })}
  </nav>
);
