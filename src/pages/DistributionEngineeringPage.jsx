/**
 * Página: Distribution Engineering (#distribution), subpágina de Engineering.
 */
const DistributionEngineeringPage = () => (
  <PageTemplate header={<SiteHeader tone="light" active={0} sub={0} />}>
    <DistributionHero />
    <DistributionWork />
    <ServicesRail title={DIST.servicesTitle}>
      {DIST.services.map((service) => (
        <ServiceCard key={service.t} title={service.t} image={photoPath(service.src)} paragraphs={service.p} />
      ))}
    </ServicesRail>
    <EcdTimeline title={DIST.ecd.t} labels={DIST.ecd.steps} paragraphs={DIST.ecd.p} link={DIST.ecd.link} whitePaper={DIST.ecd.wp} />
    <CertificationsSection
      title={DIST.lic.t}
      style={{ paddingTop: 48 }}
      panel={{ lead: DIST.lic.t, notes: [DIST.lic.lead, DIST.lic.p], linkLabel: DIST.lic.link }}
    />
    <DistributionRelated />
    <ClosingCta title={DIST.close.t} text={DIST.close.p} />
  </PageTemplate>
);
