/**
 * Página: About (#about).
 */
const AboutPage = () => (
  <PageTemplate header={<SiteHeader tone="navy" active={2} />}>
    <AboutHero />
    <AboutWhy />
    <AboutScope />
    <AboutEcd />
    <DirectAccess />
    <CertificationsSection
      title={AB.lic.t}
      className="de-section env-lic"
      style={{ paddingTop: 0 }}
      withRings={false}
      panel={{ className: 'r-panel ab-lic', lead: AB.lic.p[0], leadSize: 'md', notes: [[AB.lic.p[1], AB.lic.p[2], AB.lic.p2].join(' ')], linkLabel: AB.lic.link, showCapabilityCta: false }}
    />
    <AboutWork />
    <AboutNext />
    <RelatedSection title={AB.related.t} items={AB.related.items} style={{ paddingTop: 0 }} animated />
    <ClosingCta title={AB.close.t} text={AB.close.p}>
      <Button size="lg" iconRight="arrow-right" style={{ height: 52 }}>{DE.cta}</Button>
    </ClosingCta>
  </PageTemplate>
);
