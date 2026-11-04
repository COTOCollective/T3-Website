/**
 * Organismo: cabecera del sitio (logo, menú, botón de contacto y menú móvil).
 * Además activa la animación de entrada de las secciones de la página.
 * @param {object} props
 * @param {'navy'|'light'} [props.tone='navy'] Fondo azul marino o blanco.
 * @param {boolean} [props.overlay] Flota sobre la cabecera de la página (fondo transparente).
 * @param {number} [props.active=0] Índice del enlace activo en NAV (-1 = ninguno).
 * @param {number} [props.sub] Índice de la subpágina activa de Engineering.
 */
const SiteHeader = ({ tone = 'navy', overlay, active = 0, sub }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const headerRef = React.useRef(null);
  const scrolled = useScrolled(40);
  useSectionReveal(headerRef);
  useCloseOnOutsideClick(menuOpen, headerRef, () => setMenuOpen(false));

  const dark = tone === 'navy';
  const background = dark
    ? (scrolled ? 'var(--surface-frost-strong)' : (overlay ? 'transparent' : 'var(--t3-navy)'))
    : (scrolled ? 'rgba(255,255,255,.88)' : '#fff');
  const borderColor = scrolled ? (dark ? 'var(--surface-frost-border)' : 'var(--border-hairline)') : 'transparent';

  return (
    <header ref={headerRef} style={{ position: overlay ? (window.DE_STATIC ? 'absolute' : 'fixed') : 'sticky', left: 0, right: 0, top: 0, zIndex: 30, background, backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: '1px solid ' + borderColor, transition: 'background var(--dur-base),border-color var(--dur-base)' }}>
      <Container style={{ height: 76, display: 'flex', alignItems: 'center', gap: 32 }}>
        <BrandLockup light={dark} />
        <DesktopNav dark={dark} active={active} sub={sub} />
        <div className="de-hide-md"><Button size="sm" iconRight="arrow-right">{DE.cta}</Button></div>
        <button className={'de-burger' + (menuOpen ? ' open' : '')} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} style={{ color: dark ? '#fff' : 'var(--t3-navy)' }}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </Container>
      {menuOpen && <MobileMenu dark={dark} active={active} sub={sub} />}
    </header>
  );
};
