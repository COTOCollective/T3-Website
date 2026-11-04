/**
 * Organismo: "Delivered Work" de About, sobre foto a sangre.
 */
const AboutWork = () => (
  <section className="de-section" style={{ background: 'var(--t3-navy)', overflow: 'hidden' }}>
    <CoverImage src={photoPath('ab-undergrounding.png')} position="center 50%" />
    <Overlay background="linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.72) 60%,rgba(12,40,52,.5) 100%)" />
    <Container className="de-stack" style={{ position: 'relative', gap: 40 }}>
      <Heading onDark>{AB.work.t}</Heading>
      <div className="de-grid de-g2 ab-work" style={{ gap: 24 }}>
        {AB.work.items.map((work, i) => (
          <Reveal key={work.t} delay={i * 80} className="ab-workcard">
            <FrostedPanel padding={36} style={{ borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 16, height: '100%', minHeight: 340 }}>
              <h3 className="de-h3 on-dark" style={{ fontSize: 24, lineHeight: '32px' }}>{work.t}</h3>
              {work.p.map((p) => <BodyText key={p} onDark>{p}</BodyText>)}
              {work.note && <p style={{ margin: 'auto 0 0', font: '300 13px/20px var(--font-body)', color: 'var(--fg-on-inverse-2)' }}>{work.note}</p>}
            </FrostedPanel>
          </Reveal>
        ))}
      </div>
      <MoreLink onDark>{AB.work.link}</MoreLink>
    </Container>
  </section>
);
