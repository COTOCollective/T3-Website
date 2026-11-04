/**
 * Organismo: "Why T3 Exists" (foto + historia de la empresa).
 */
const AboutWhy = () => (
  <section className="de-section">
    <Container className="de-stack" style={{ gap: 40 }}>
      <div className="de-stack" style={{ gap: 24 }}><Heading>{AB.why.t}</Heading></div>
      <div className="de-grid ab-split" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)', gap: 64, alignItems: 'stretch' }}>
        <div className="ab-why-img" style={{ minHeight: 320 }}>
          <Photo height="100%" src={photoPath('ab-office.png')} alt="Engineers reviewing marked-up distribution drawings in a site office" />
        </div>
        <div className="de-stack" style={{ gap: 20 }}>
          {AB.why.p.map((p, i) => <Reveal key={i} delay={i * 80}><BodyText lg={i < 2}>{p}</BodyText></Reveal>)}
        </div>
      </div>
    </Container>
  </section>
);
