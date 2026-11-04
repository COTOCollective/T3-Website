function HomeA() {
  return <div className="de-page">
    <HeroE cta={false} anchor="57d6e6432f-div-5-7" />
    <HomeAPillars />
    <EcdOpt1 />
    <ProofSplit />
    <HomeCCase />
    <HomeDCert noPill extra={<Button iconRight="arrow-right" style={{ height: 48 }}>Request our Capability Statement</Button>} />
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{HM.closeT}</H2><P onDark lg>{HM.close}</P>
        <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{HM.cta}</Button><Button size="lg" variant="secondary" onDark style={{height:48}}>{DE.capCta}</Button></div>
      </Wrap>
    </section>
    <SiteFooter />
  </div>;
}
function HomeAPillars() {
  return <section className="de-section">
      <Wrap className="de-stack" style={{ gap: 32 }}>
        <H2>{HM.pillarsT}</H2>
        <div className="de-grid de-g3" style={{ gap: 20 }}>
          {HM.pillars.map((p, i) => <Reveal key={p.k} delay={i * 60} style={{ height: '100%', minWidth: 0 }}><TiltCard className="hm-pillar" style={{ height: '100%', minWidth: 0, boxSizing: 'border-box', borderRadius: 24, background: i === 0 ? 'var(--t3-navy)' : '#fff', border: i === 0 ? 'none' : '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)', padding: 36, gap: 20, minHeight: 340, color: i === 0 ? '#fff' : 'var(--t3-navy)' }}>
            <div className="de-row" style={{ justifyContent: 'space-between' }}><Chip icon={p.i} onDark={i === 0} /></div>
            <h3 className="hm-pillar-h" style={{ margin: 0, font: '800 28px/34px var(--font-display)', color: 'inherit', overflowWrap: 'break-word', hyphens: 'auto' }}>{p.k}</h3>
            <p style={{ margin: 0, font: '400 15px/24px var(--font-body)', overflowWrap: 'break-word', color: i === 0 ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)' }}>{p.b}</p>
            <span className="hm-arrow" style={{ color: 'var(--accent)', marginTop: 'auto' }}><Icon name="arrow-right" size={22} /></span>
          </TiltCard></Reveal>)}
        </div>
      </Wrap>
    </section>;
}
window.HomeA = HomeA;window.HomeAPillars = HomeAPillars;