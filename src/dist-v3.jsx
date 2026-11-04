function DistV3(){
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  const [w0,w1]=DIST.work;
  return <div className="de-page">
    <SiteHeader tone="navy" overlay active={0}/>
    <section style={{position:'relative',minHeight:820,display:'flex',alignItems:'flex-end',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p11.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(12,40,52,.3) 0%,rgba(12,40,52,.5) 45%,rgba(12,40,52,.95) 100%)'}}></div>
      <Wrap className="de-grid de-g-hero" style={{position:'relative',gap:48,padding:'180px 48px 80px',alignItems:'end'}}>
        <Reveal className="de-stack" style={{display:'flex',flexDirection:'column',gap:24}}>
          <h1 className="de-hero-h" style={{fontSize:80,lineHeight:'84px'}}>{DIST.h1}</h1>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
        </Reveal>
        <FrostedPanel padding={32} style={{borderRadius:16}}><P onDark style={{color:'#fff'}}>{DIST.intro}</P></FrostedPanel>
      </Wrap>
    </section>
    <section style={{position:'relative',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p08.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.94) 0%,rgba(12,40,52,.7) 55%,rgba(12,40,52,.35) 100%)'}}></div>
      <Wrap className="de-stack" style={{position:'relative',gap:40,padding:'112px 48px'}}>
        <H2 onDark>{DIST.workTitle}</H2>
        <div className="de-grid de-g-hero" style={{gap:24}}>
          <FrostedPanel padding={36} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:18}}><h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{w0.t}</h3>{w0.p.map(p=><P key={p} onDark>{p}</P>)}<V6More onDark>{DIST.caseLink}</V6More></FrostedPanel>
          <FrostedPanel padding={36} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:18,alignSelf:'end'}}><h3 className="de-h3 on-dark">{w1.t}</h3>{w1.p.map(p=><P key={p} onDark>{p}</P>)}</FrostedPanel>
        </div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}>
        <H2>{DIST.servicesTitle}</H2>
        <div className="de-row" style={{gap:12}}><button className="de-iconbtn light" onClick={()=>nudge(-1)} aria-label="Previous"><Icon name="arrow-left" size={20}/></button><button className="de-iconbtn light" onClick={()=>nudge(1)} aria-label="Next"><Icon name="arrow-right" size={20}/></button></div>
      </Wrap>
      <div style={{paddingLeft:'max(48px, calc((100% - 1200px) / 2))',marginTop:48}}>
        <div ref={rail} className="de-rail" style={{paddingRight:48}}>
          {DIST.services.map(s=><article key={s.t} className="de-stack" style={{gap:20}}><ImageCard height={300} title={s.t} src={PH(s.src)} onClick={()=>{}}/>{s.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</article>)}
        </div>
      </div>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-grid de-g2" style={{gap:64}}>
        {DIST.std.map((p,i)=><P key={p} lg={i===0} style={i===0?{color:'var(--t3-navy)',font:'500 24px/36px var(--font-display)'}:{alignSelf:'end'}}>{p}</P>)}
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <RingBackdrop size={640} rings={2} style={{position:'absolute',right:-260,top:-200}}/>
      <Wrap className="de-stack" style={{gap:48,position:'relative'}}>
        <div style={{maxWidth:820}}><H2 onDark>{DIST.ecd.t}</H2></div>
        <div className="de-grid de-g2" style={{gap:0,borderTop:'1px solid var(--surface-frost-border)'}}>
          {[['Early design process',DIST.ecd.p[0]],['Route development · key design milestones',DIST.ecd.p[1]]].map(([k,p],i)=><div key={k} className="de-stack" style={{gap:16,padding:'32px 48px 0 0',position:'relative'}}>
            <span style={{position:'absolute',top:-7,left:0,width:13,height:13,borderRadius:999,background:i?'var(--accent)':'var(--t3-navy)',border:'2px solid var(--accent)'}}></span>
            <Mono onDark>{k}</Mono><P onDark>{p}</P></div>)}
        </div>
        <DistEcdLinks dark/>
      </Wrap>
    </section>
    <DistLic/>
    <DistRelated/>
    <DistClose/>
    <SiteFooter/>
  </div>;
}
window.DistV3=DistV3;
