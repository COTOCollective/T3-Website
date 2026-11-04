const ENV3_ICONS=['file-check','droplets','waves','hard-hat','layers','leaf'];
function EnvV3(){
  return <div className="de-page">
    <SiteHeader tone="navy" overlay active={1}/>
    <section style={{position:'relative',minHeight:820,display:'flex',alignItems:'flex-end',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p03.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(12,40,52,.35) 0%,rgba(12,40,52,.55) 45%,rgba(12,40,52,.95) 100%)'}}></div>
      <Wrap className="de-grid de-g-hero" style={{position:'relative',gap:48,padding:'180px 48px 80px',alignItems:'end'}}>
        <Reveal className="de-stack" style={{display:'flex',flexDirection:'column',gap:24}}>
          <h1 className="de-hero-h" style={{fontSize:72,lineHeight:'76px'}}>{ENV.h1}</h1>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
        </Reveal>
        <FrostedPanel padding={32} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:16}}>
          <P onDark style={{color:'#fff'}}>{ENV.intro[0]}</P>
          <P onDark style={{fontSize:15,lineHeight:'24px'}}>{ENV.intro[1]}</P>
        </FrostedPanel>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-grid de-g-hero" style={{gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:24}}><Bar/><H2>{ENV.rec.t}</H2>{ENV.rec.p.map(p=><P key={p}>{p}</P>)}</div>
        <ImageCard height={440} src="assets/photos/p05.jpg"/>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <RingBackdrop size={640} rings={2} style={{position:'absolute',right:-260,top:-200}}/>
      <Wrap className="de-stack" style={{gap:56,position:'relative'}}>
        <div style={{maxWidth:760}}><H2 onDark>{ENV.ecd.t}</H2></div>
        <div className="de-grid de-g3" style={{gap:0,borderTop:'1px solid var(--surface-frost-border)'}}>
          {[['Early lifecycle',ENV.ecd.p[0]],['Proactive risk management',ENV.ecd.p[1]],['30 · 60 percent design',ENV.ecd.p[2]]].map(([k,p],i)=><div key={k} className="de-stack" style={{gap:16,padding:'32px 32px 0 0',position:'relative'}}>
            <span style={{position:'absolute',top:-7,left:0,width:13,height:13,borderRadius:999,background:i===2?'var(--accent)':'var(--t3-navy)',border:'2px solid var(--accent)'}}></span>
            <Mono onDark>{k}</Mono><P onDark style={{fontSize:15,lineHeight:'24px'}}>{p}</P>
          </div>)}
        </div>
        <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><V6More onDark>{ENV.ecd.link}</V6More><Button variant="secondary" onDark iconRight="download" style={{height:48}}>{ENV.ecd.wp}</Button></div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:48}}>
        <H2>{ENV.servicesTitle}</H2>
        <div className="de-grid de-g3" style={{gap:20}}>
          {ENV.services.map((s,i)=><Card key={s.t} interactive padding={32} style={{display:'flex',flexDirection:'column',gap:16}}>
            <Chip icon={ENV3_ICONS[i]}/>
            <h3 className="de-h3" style={{fontSize:20,lineHeight:'28px'}}>{s.t}</h3>
            <P style={{fontSize:15,lineHeight:'24px'}}>{s.b}</P>
            <div style={{marginTop:'auto'}}><TextLink>Learn more</TextLink></div>
          </Card>)}
        </div>
      </Wrap>
    </section>
    <section style={{position:'relative',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p04.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.6) 60%,rgba(12,40,52,.3) 100%)'}}></div>
      <Wrap className="de-stack" style={{position:'relative',gap:40,padding:'112px 48px'}}>
        <H2 onDark>{ENV.workTitle}</H2>
        <div className="de-grid de-g2" style={{gap:24}}>
          <FrostedPanel padding={36} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:20}}>
            <h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{ENV.work.t}</h3>
            {ENV.work.p.map(p=><P key={p} onDark>{p}</P>)}
            <V6More onDark>{ENV.work.link}</V6More>
          </FrostedPanel>
          <div className="de-stack" style={{gap:24,justifyContent:'flex-end'}}>
            <p style={{margin:0,font:'500 26px/38px var(--font-display)',color:'#fff',textWrap:'pretty'}}>{ENV.work.q}</p>
            <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-grid de-g2" style={{gap:64,alignItems:'start'}}>
        <div className="de-stack" style={{gap:20}}><Bar/><H2>{ENV.lic.t}</H2></div>
        <div className="de-stack" style={{gap:20}}><P lg style={{color:'var(--t3-navy)'}}>{ENV.lic.lead}</P><P>{ENV.lic.p}</P><P>{ENV.lic.p2}</P>
          <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><TextLink>{ENV.lic.link}</TextLink><Button iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div></div>
      </Wrap>
    </section>
    <section className="de-section de-hair" style={{paddingTop:64}}>
      <Wrap className="de-stack" style={{gap:32}}>
        <V6H2>Related Services</V6H2>
        <div className="de-grid de-g3" style={{gap:20}}>{ENV.related.map(r=><div key={r.k} className="v6-card"><span className="v6-chip"><Icon name={r.i} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{r.k}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div>)}</div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{ENV.close.t}</H2><P onDark lg>{ENV.close.p}</P>
        <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button></div><ContactLine onDark/>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.EnvV3=EnvV3;
