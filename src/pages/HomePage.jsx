/**
 * Página: Inicio (#home).
 */
const HomePage = () => (
  <PageTemplate>
    <HomeHero />
    <HomePillars />
    <EcdFeature />
    <ProofSplit />
    <CaseStudy />
    <HomeCertifications />
    <ClosingCta title={HM.closeT} text={HM.close} />
  </PageTemplate>
);
