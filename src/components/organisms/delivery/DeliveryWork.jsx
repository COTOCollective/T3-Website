/**
 * Organismo: "Delivered Engineering Work" (caso principal con foto + dos casos breves).
 */
const DeliveryWork = () => {
  const [featured, ...others] = DE.work;
  return (
    <section className="de-section" style={{ background: 'var(--t3-navy)', overflow: 'hidden' }}>
      <Overlay background={turquoiseGlow('50% 60% at 15% 80%', .16)} />
      <Container className="de-stack" style={{ display: 'flex', flexDirection: 'column', gap: 48, position: 'relative' }}>
        <div className="de-row" style={{ justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div className="de-stack" style={{ gap: 16 }}><Heading onDark>{DE.workTitle}</Heading></div>
        </div>
        <div className="de-grid de-g-hero" style={{ gap: 24 }}>
          <Card tone="navy" padding={0} style={{ overflow: 'hidden', background: 'var(--t3-navy-700)', border: '1px solid var(--surface-frost-border)' }}>
            <Photo height={280} src={photoPath(featured.img)} style={{ borderRadius: 0 }} />
            <div className="de-stack" style={{ padding: 32, gap: 20 }}>
              <h3 className="de-h3 on-dark" style={{ fontSize: 24, lineHeight: '32px' }}>{featured.t}</h3>
              {featured.p.map((p, i) => <BodyText key={i} onDark>{p}</BodyText>)}
              <MoreLink onDark>{featured.link}</MoreLink>
            </div>
          </Card>
          <div className="de-stack" style={{ gap: 24 }}>
            {others.map((work) => (
              <FrostedPanel key={work.t} padding={32} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 className="de-h3 on-dark">{work.t}</h3>
                {work.p.map((p, j) => <BodyText key={j} onDark>{p}</BodyText>)}
              </FrostedPanel>
            ))}
            <Button iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48 }}>{DE.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
