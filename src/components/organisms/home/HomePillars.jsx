/**
 * Organismo: sección "What T3 Does" con las tres líneas de negocio.
 */
const HomePillars = () => (
  <section className="de-section">
    <Container className="de-stack" style={{ gap: 32 }}>
      <Heading>{HM.pillarsT}</Heading>
      <div className="de-grid de-g3" style={{ gap: 20 }}>
        {HM.pillars.map((pillar, i) => (
          <Reveal key={pillar.k} delay={i * 60} style={{ height: '100%', minWidth: 0 }}>
            <PillarCard pillar={pillar} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);
