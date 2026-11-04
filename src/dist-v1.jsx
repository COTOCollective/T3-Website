function DistV1(){
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  const [w0,w1]=DIST.work;
  const tile=(extra)=>({...distCard,padding:32,...extra});
  const stats=[['14 mi','Strategic undergrounding program'],['~7 mi','12 kV per project, OH → UG'],['~7 mo','One circuit accelerated'],['~20%','Below program average pricing']];
  return <div className="de-page">
    <SiteHeader tone="light" active={0} sub={0}/>
    <section style={{padding:'36px 0 36px'}}>
      <Wrap className="de-grid de-g12 dist-hero" style={{gap:16}}>
        <div style={{...distCard,gridColumn:'span 7',padding:48,display:'flex',flexDirection:'column',gap:28,background:'var(--t3-navy)',border:'none',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
          <div className="de-stack" style={{position:'relative',gap:28}}>
            <h1 className="de-hero-h" style={{fontSize:64,lineHeight:'68px'}}>{DIST.h1}</h1>
            <P onDark>{DIST.intro}</P>
            <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
          </div>
        </div>
        <div style={{gridColumn:'span 5',display:'grid',gridTemplateRows:'minmax(0,1fr) auto',gap:16}}>
          <ImageCard height="100%" src="assets/photos/p15.jpg" style={{minHeight:320}}/>
          <div className="de-grid de-g2" style={{gap:16}}><ImageCard height={160} src="assets/photos/g3.jpg"/><ImageCard height={160} src="assets/photos/p20.jpg"/></div>
        </div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{DIST.workTitle}</H2>
        <div className="de-grid de-g4 dist-stats" style={{gap:16}}>{stats.map(([n,l],i)=><div key={l} style={tile({padding:28,background:i===2?'var(--t3-navy)':'#fff',border:i===2?'none':distCard.border})}><div style={{font:'500 40px/44px var(--font-mono)',color:i===2?'var(--accent)':'var(--t3-navy)'}}><CountUp v={n}/></div><div style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:i===2?'var(--fg-on-inverse-2)':'var(--t3-steel)',marginTop:10}}>{l}</div></div>)}</div>
        <div className="de-grid de-g12 dist-work" style={{gap:16}}>
          <div style={tile({gridColumn:'span 8',display:'flex',flexDirection:'column',gap:16})}><h3 className="de-h3" style={{fontSize:24,lineHeight:'32px'}}>{w0.t}</h3>{w0.p.map(p=><P key={p}>{p}</P>)}<TextLink>{DIST.caseLink}</TextLink></div>
          <div style={tile({gridColumn:'span 4',display:'flex',flexDirection:'column',gap:16})}><div style={{font:'500 40px/44px var(--font-mono)',color:'var(--t3-turq-700)'}}>4 · 3</div><div style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-steel)'}}>QC assignments · months</div><h3 className="de-h3">{w1.t}</h3>{w1.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</div>
        </div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}>
        <H2>{DIST.servicesTitle}</H2>
        <div className="de-row" style={{gap:12}}><button className="de-iconbtn light" onClick={()=>nudge(-1)} aria-label="Previous"><Icon name="arrow-left" size={20}/></button><button className="de-iconbtn light" onClick={()=>nudge(1)} aria-label="Next"><Icon name="arrow-right" size={20}/></button></div>
      </Wrap>
      <div className="de-rail-wrap" style={{paddingLeft:'max(48px, calc((100% - 1200px) / 2))',marginTop:48}}>
        <div ref={rail} className="de-rail" style={{paddingRight:48}}>
          {DIST.services.map(s=><article key={s.t} className="de-stack" style={{gap:20}}><ImageCard height={300} title={s.t} src={PH(s.src)} onClick={()=>{}}/>{s.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</article>)}
        </div>
      </div>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <RingBackdrop size={640} rings={0} style={{position:'absolute',right:-260,top:-200}}/>
      <Wrap className="de-stack" style={{gap:48,position:'relative'}}>
        <div style={{maxWidth:820}}><H2 onDark>{DIST.ecd.t}</H2></div>
        <div className="de-grid de-g2" style={{gap:0,borderTop:'1px solid var(--surface-frost-border)'}}>
          {[['Early design process',DIST.ecd.p[0]],['Route development · key design milestones',DIST.ecd.p[1]]].map(([k,p],i)=><div key={k} className="de-stack" style={{gap:16,padding:'32px 48px 0 0',position:'relative'}}>
            <span style={{position:'absolute',top:-7,left:0,width:13,height:13,borderRadius:999,background:'var(--t3-navy)',border:'2px solid var(--accent)'}}></span>
            <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)'}}>{k}</span><P onDark>{p}</P></div>)}
        </div>
        <DistEcdLinks dark/>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:48}}>
      <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{position:'absolute',left:-440,top:0}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DIST.lic.t}</V6H2>
        <div className="r-panel" style={{borderRadius:24,background:'var(--gradient-navy)',padding:'44px 48px',display:'flex',gap:40,alignItems:'center',position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 90% at 0% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
          <span style={{position:'relative',width:96,height:96,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><Icon name="shield-check" size={84} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{gap:12,position:'relative',flex:1,minWidth:260}}>
            <p style={{margin:0,font:'500 26px/34px var(--font-display)',color:'#fff'}}>{DIST.lic.t}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{DIST.lic.lead}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{DIST.lic.p}</p>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>{DIST.lic.link}</V6More><Button iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div>
          </div>
        </div>
      </Wrap>
    </section>
    <DistRelated/>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{DIST.close.t}</H2><P onDark lg>{DIST.close.p}</P>
        <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button><Button size="lg" variant="secondary" onDark style={{height:48}}>{DE.capCta}</Button></div><ContactLine onDark/>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.DistV1=DistV1;
