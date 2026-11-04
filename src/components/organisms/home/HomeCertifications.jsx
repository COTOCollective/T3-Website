/**
 * Organismo: sección "Certifications and Licensure" del inicio.
 */
const HomeCertifications = () => (
  <section className="de-section" style={{ paddingTop: 24 }}>
    <Container className="de-stack" style={{ gap: 40 }}>
      <Heading>{HM.certT}</Heading>
      <div className="r-panel" style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, background: 'var(--gradient-navy)', padding: '44px 48px', display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
        <Overlay background={turquoiseGlow('50% 70% at 20% 30%')} />
        <span style={{ position: 'relative', color: '#fff', flex: 'none' }}><Icon name="shield-check" size={88} strokeWidth={1.25} /></span>
        <div className="de-stack" style={{ position: 'relative', gap: 12, flex: 1, minWidth: 280 }}>
          <p style={{ margin: 0, font: '700 26px/34px var(--font-display)', color: '#fff' }}>{HM.cert1}</p>
          <BodyText onDark style={{ fontSize: 15, lineHeight: '24px', maxWidth: 720 }}>{HM.cert2}</BodyText>
          <div className="de-row" style={{ gap: 24, flexWrap: 'wrap', marginTop: 8 }}>
            <MoreLink onDark>Certifications</MoreLink>
            <Button iconRight="arrow-right" style={{ height: 48 }}>{DE.capCta}</Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
