/**
 * Organismo: "Go Straight to a Service" (accesos directos a las páginas de servicio).
 */
const ServiceLinks = () => (
  <section className="de-section" style={{ paddingTop: 72 }}>
    <Container>
      <div className="de-stack" style={{ gap: 40 }}>
        <div className="de-stack" style={{ gap: 16 }}>
          <SectionTitle>{CT.linksT}</SectionTitle>
          <BodyText>{CT.linksP}</BodyText>
        </div>
        <div className="de-grid de-g3" style={{ gap: 20 }}>
          {CT.links.map((link) => <RelatedCard key={link.k} icon={link.i} title={link.k} />)}
        </div>
      </div>
    </Container>
  </section>
);
