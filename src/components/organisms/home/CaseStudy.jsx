/**
 * Organismo: resumen del caso de éxito (programa de soterramiento de 14 millas).
 */
const CaseStudy = () => (
  <section className="de-section">
    <Container className="de-grid r-split" style={{ gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 72, alignItems: 'end' }}>
      <h2 style={{ margin: 0, font: '800 38px/50px var(--font-display)', letterSpacing: '-.015em', color: 'var(--t3-navy)', textWrap: 'pretty' }}>{HM.caseT}</h2>
      <div className="de-stack" style={{ gap: 20, borderLeft: '2px solid var(--accent)', paddingLeft: 28 }}>
        <BodyText>{HM.case1}</BodyText>
        <BodyText>{HM.case2}</BodyText>
        {/* HIDDEN: uncomment when the Projects and Case Studies page exists. */}
        {/* <MoreLink onDark style={MORE_LINK_ON_LIGHT}>{HM.caseLink}</MoreLink> */}
      </div>
    </Container>
  </section>
);
