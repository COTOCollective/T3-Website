/**
 * Organismo: cabecera de Distribution Engineering en formato "bento"
 * (tarjeta azul con el texto + tres fotos).
 */
const DistributionHero = () => (
  <section style={{ padding: '36px 0 36px' }}>
    <Container className="de-grid de-g12 dist-hero" style={{ gap: 16 }}>
      <div style={{ ...CARD_SURFACE, gridColumn: 'span 7', padding: 48, display: 'flex', flexDirection: 'column', gap: 28, background: 'var(--t3-navy)', border: 'none', position: 'relative', overflow: 'hidden' }}>
        <Overlay background={GLOW_TURQUOISE} />
        <div className="de-stack" style={{ position: 'relative', gap: 28 }}>
          <h1 className="de-hero-h" style={{ fontSize: 64, lineHeight: '68px' }}>{DIST.h1}</h1>
          <BodyText onDark>{DIST.intro}</BodyText>
          <Button iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48 }}>{DE.cta}</Button>
        </div>
      </div>
      <div style={{ gridColumn: 'span 5', display: 'grid', gridTemplateRows: 'minmax(0,1fr) auto', gap: 16 }}>
        <Photo height="100%" src={photoPath('p15')} style={{ minHeight: 320 }} />
        <div className="de-grid de-g2" style={{ gap: 16 }}>
          <Photo height={160} src={photoPath('g3')} />
          <Photo height={160} src={photoPath('p20')} />
        </div>
      </div>
    </Container>
  </section>
);
