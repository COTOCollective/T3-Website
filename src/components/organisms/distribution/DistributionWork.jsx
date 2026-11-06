/**
 * Organismo: "Delivered Distribution Work" (cifras animadas + dos casos).
 */
const DistributionWork = () => {
  const [program, qualityControl] = DIST.work;
  const cardStyle = (extra) => ({ ...CARD_SURFACE, padding: 32, display: 'flex', flexDirection: 'column', gap: 16, ...extra });
  return (
    <section className="de-section">
      <Container className="de-stack" style={{ gap: 40 }}>
        <Heading>{DIST.workTitle}</Heading>
        <div className="de-grid de-g4 dist-stats" style={{ gap: 16 }}>
          {DIST.stats.map(([value, label], i) => <StatTile key={label} value={value} label={label} highlighted={i === 2} />)}
        </div>
        <div className="de-grid de-g12 dist-work" style={{ gap: 16 }}>
          <div style={cardStyle({ gridColumn: 'span 8' })}>
            <h3 className="de-h3" style={{ fontSize: 24, lineHeight: '32px' }}>{program.t}</h3>
            {program.p.map((p) => <BodyText key={p}>{p}</BodyText>)}
            {/* HIDDEN: uncomment when the strategic undergrounding case study page exists. */}
            {/* <TextLink>{DIST.caseLink}</TextLink> */}
          </div>
          <div style={cardStyle({ gridColumn: 'span 4' })}>
            <div style={{ font: '500 40px/44px var(--font-mono)', color: 'var(--t3-turq-700)' }}>4 · 3</div>
            <div style={{ font: '600 12px/16px var(--font-display)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--t3-steel)' }}>QC assignments · months</div>
            <h3 className="de-h3">{qualityControl.t}</h3>
            {qualityControl.p.map((p) => <BodyText key={p} style={{ fontSize: 15, lineHeight: '24px' }}>{p}</BodyText>)}
          </div>
        </div>
      </Container>
    </section>
  );
};
