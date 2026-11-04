/**
 * Organismo: "Environmentally Conscious Design at the Firm Level" (fondo azul marino).
 */
const AboutEcd = () => (
  <section className="de-section" style={{ background: 'var(--t3-navy)', overflow: 'hidden' }}>
    <Overlay background={GLOW_TURQUOISE} />
    <Container className="de-grid ab-split" style={{ position: 'relative', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 64, alignItems: 'start' }}>
      <div className="de-stack" style={{ gap: 24 }}><Heading onDark>{AB.ecd.t}</Heading></div>
      <div className="de-stack" style={{ gap: 20 }}>
        {AB.ecd.p.map((p) => <BodyText key={p} onDark lg>{p}</BodyText>)}
        <div style={{ marginTop: 12 }}><MoreLink onDark href={WHITEPAPER} download={WHITEPAPER_NAME}>{AB.ecd.link}</MoreLink></div>
      </div>
    </Container>
  </section>
);
