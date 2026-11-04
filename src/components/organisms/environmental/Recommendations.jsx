/**
 * Organismo: "Recommendations You Can Implement" (texto + foto).
 */
const Recommendations = () => (
  <section className="de-section">
    <Container className="de-grid de-g-hero env-rec" style={{ gap: 64, alignItems: 'center' }}>
      <div className="de-stack" style={{ gap: 24 }}>
        <AccentBar />
        <Heading>{ENV.rec.t}</Heading>
        {ENV.rec.p.map((p) => <BodyText key={p}>{p}</BodyText>)}
      </div>
      <Photo height={440} src={photoPath('p05')} />
    </Container>
  </section>
);
