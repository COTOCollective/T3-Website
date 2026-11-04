/**
 * Página: Delivery Engineering (#delivery).
 */
const DeliveryEngineeringPage = () => (
  <PageTemplate header={<SiteHeader tone="navy" />}>
    <PageHero
      title={DE.h1}
      lede={DE.lede}
      ledeFont="500 22px/32px var(--font-display)"
      paragraphs={DE.intro}
      visual={<HeroStatsVisual src={photoPath('p20')} stats={DE.heroStats} />}
    />
    <EcdHighlights />
    <ServicesRail title={DE.servicesTitle}>
      {DE.services.map((service) => (
        <ServiceCard key={service.t} title={service.t} image={photoPath(service.img)} paragraphs={[service.b]} bullets={service.bl} linkLabel={service.l} />
      ))}
      <HighlightServiceCard icon={DE.telecom.i} title={DE.telecom.t} text={DE.telecom.b} />
    </ServicesRail>
    <DeliveryWork />
    <HowWeDeliver />
    <CertificationsSection
      title={DE.lic.t}
      style={{ paddingTop: 48 }}
      panel={{ lead: DE.lic.lead, notes: [DE.lic.p], linkLabel: DE.lic.link }}
    />
    <RelatedSection title={DE.related.t} items={DE.related.items} columns={2} />
    <ClosingCta title={DE.close.t} text={DE.close.p} />
  </PageTemplate>
);
