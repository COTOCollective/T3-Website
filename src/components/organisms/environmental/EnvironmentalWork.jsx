/**
 * Organismo: "Delivered Environmental Work" sobre foto a sangre (caso + cita).
 */
const EnvironmentalWork = () => (
  <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--t3-navy)' }}>
    <CoverImage src={photoPath('p04')} />
    <Overlay background="linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.6) 60%,rgba(12,40,52,.3) 100%)" />
    <Container className="de-stack env-work" style={{ position: 'relative', gap: 40, padding: '112px 48px' }}>
      <Heading onDark>{ENV.workTitle}</Heading>
      <div className="de-grid de-g2" style={{ gap: 24 }}>
        <FrostedPanel padding={36} style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h3 className="de-h3 on-dark" style={{ fontSize: 24, lineHeight: '32px' }}>{ENV.work.t}</h3>
          {ENV.work.p.map((p) => <BodyText key={p} onDark>{p}</BodyText>)}
          {/* HIDDEN: uncomment when the Projects page exists. */}
          {/* <MoreLink onDark>{ENV.work.link}</MoreLink> */}
        </FrostedPanel>
        <div className="de-stack" style={{ gap: 24, justifyContent: 'flex-end' }}>
          <p className="env-q" style={{ margin: 0, font: '500 26px/38px var(--font-display)', color: '#fff', textWrap: 'pretty' }}>{ENV.work.q}</p>
          <Button iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48 }}>{DE.cta}</Button>
        </div>
      </div>
    </Container>
  </section>
);
