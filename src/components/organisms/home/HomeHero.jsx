const HOME_HERO_TITLE = { margin: 0, font: '800 72px/76px var(--font-display)', letterSpacing: '-.02em', color: '#fff', textWrap: 'balance', fontSize: 60, lineHeight: '64px' };
const HOME_HERO_SUBTITLE = { margin: 0, font: '400 20px/32px var(--font-body)', color: 'var(--fg-on-inverse-2)', maxWidth: 600 };

/**
 * Organismo: cabecera del inicio a pantalla completa con fotos que se alternan
 * cada 4,5 s y pestañas para elegir la foto. Incluye la cabecera del sitio superpuesta.
 */
const HomeHero = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = HM.heroSlides;

  React.useEffect(() => {
    const timer = setInterval(() => setActiveSlide((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="de-page">
      <section className="hh-shell" style={{ position: 'relative', overflow: 'hidden', minHeight: 860, background: 'var(--t3-navy)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5 }}><SiteHeader overlay active={-1} /></div>
        <div style={{ position: 'absolute', inset: 0 }}>
          {slides.map((slide, k) => (
            <div key={slide.src} style={{ position: 'absolute', inset: 0, opacity: k === activeSlide ? 1 : 0, transition: 'opacity 1200ms var(--ease-out)' }}>
              <CoverImage src={slide.src} />
            </div>
          ))}
        </div>
        <Container className="de-grid hh-e" style={{ position: 'relative', margin: 'auto auto 0', paddingBottom: 72, width: '100%', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 48, alignItems: 'end' }}>
          <FrostedPanel padding={48} style={{ borderRadius: 24, maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h1 className="hh-h1" style={HOME_HERO_TITLE}>{HM.h1}</h1>
            <p style={HOME_HERO_SUBTITLE}>{HM.sub}</p>
            <div className="de-row" style={{ gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ font: '600 13px/20px var(--font-body)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)' }}>{HM.lic}</span>
            </div>
          </FrostedPanel>
          <FrostedPanel padding={20} style={{ borderRadius: 16, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {slides.map((slide, k) => <SlideTab key={slide.src} label={slide.label} active={k === activeSlide} onSelect={() => setActiveSlide(k)} />)}
          </FrostedPanel>
        </Container>
      </section>
    </div>
  );
};
