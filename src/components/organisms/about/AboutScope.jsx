/**
 * Organismo: "What T3 Takes On, and What It Turns Down".
 */
const AboutScope = () => (
  <section className="de-section" style={{ paddingTop: 0 }}>
    <Container className="de-stack" style={{ gap: 48 }}>
      <Heading>{AB.scope.t}</Heading>
      <div className="de-grid de-g2 ab-scope" style={{ gap: 64 }}>
        <Reveal><BodyText lg>{AB.scope.a}</BodyText></Reveal>
        <Reveal delay={80}><BodyText lg>{AB.scope.b}</BodyText></Reveal>
      </div>
      <p className="ab-close ab-underline" style={{ margin: 0, font: '700 36px/44px var(--font-display)', letterSpacing: '-.01em', color: 'var(--t3-navy)', textWrap: 'balance' }}>
        <span>{AB.scope.close}</span>
      </p>
    </Container>
  </section>
);
