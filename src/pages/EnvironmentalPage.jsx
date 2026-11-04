/**
 * Página: Environmental (#environmental).
 */
const EnvironmentalPage = () => (
  <PageTemplate header={<SiteHeader tone="navy" active={1} />}>
    <PageHero
      title={ENV.h1}
      lede={ENV.intro[0]}
      ledeFont="500 20px/30px var(--font-display)"
      paragraphs={[ENV.intro[1]]}
      visual={<PhotoCollage photos={[photoPath('p12'), photoPath('p17'), photoPath('p09')]} />}
    />
    <Recommendations />
    <EcdTimeline compact title={ENV.ecd.t} labels={ENV.ecd.steps} paragraphs={ENV.ecd.p} link={ENV.ecd.link} whitePaper={ENV.ecd.wp} />
    <ServicesRail title={ENV.servicesTitle}>
      {ENV.services.map((service) => (
        <ServiceCard key={service.t} title={service.t} image={photoPath(service.src)} paragraphs={[service.b]} linkLabel={service.t} />
      ))}
    </ServicesRail>
    <EnvironmentalWork />
    <CertificationsSection
      title={ENV.lic.t}
      className="de-section env-lic"
      panel={{ lead: ENV.lic.lead, leadSize: 'md', notes: [ENV.lic.p + ' ' + ENV.lic.p2], linkLabel: ENV.lic.link }}
    />
    <RelatedSection title="Related Services" items={ENV.related} />
    <ClosingCta title={ENV.close.t} text={ENV.close.p} />
  </PageTemplate>
);
