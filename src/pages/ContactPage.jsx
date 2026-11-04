/**
 * Página: Contact (#contact).
 */
const ContactPage = () => (
  <PageTemplate header={<SiteHeader tone="navy" active={-1} />}>
    <ContactHero />
    <ContactSteps />
    <ServiceLinks />
    <ClosingCta title={DE.close.t} />
  </PageTemplate>
);
