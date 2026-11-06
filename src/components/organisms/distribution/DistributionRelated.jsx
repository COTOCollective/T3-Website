/**
 * Organismo: servicios relacionados de Distribution, agrupados en Engineering y Environmental.
 */
const DistributionRelated = () => (
  <section className="de-section" style={{ paddingTop: 64, paddingBottom: 80 }}>
    <Container className="de-stack" style={{ gap: 32 }}>
      <SectionTitle>Related Services</SectionTitle>
      <div className="de-grid dist-rel" style={{ gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: '12px 20px', alignItems: 'stretch' }}>
        <div className="dr-e1" style={{ gridColumn: '1 / span 3' }}><Eyebrow>{DIST.related.group}</Eyebrow></div>
        <div className="dr-e2"><Eyebrow>Environmental</Eyebrow></div>
        {DIST.related.items.map((item) => <RelatedCard key={item.k} icon={item.i} title={item.k} hideLink={item.hideLearnMore} style={{ height: '100%' }} />)}
        <div className="dr-env"><RelatedCard icon={DIST.related.env.i} title={DIST.related.env.k} hideLink={DIST.related.env.hideLearnMore} style={{ height: '100%' }} /></div>
      </div>
    </Container>
  </section>
);
