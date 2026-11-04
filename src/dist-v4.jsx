function DistV4(){
  const [w0,w1]=DIST.work;
  const tile=(extra)=>({...distCard,padding:32,...extra});
  const stats=[['14 mi','Strategic undergrounding program'],['~7 mi','12 kV per project, OH → UG'],['~7 mo','One circuit accelerated'],['~20%','Below program average pricing']];
  return <div className="de-page">
    <SiteHeader tone="light" active={0}/>
    <section style={{padding:'72px 0 96px'}}>
      <Wrap className="de-grid de-g12" style={{gap:16}}>
        <div style={tile({gridColumn:'span 7',padding:48,display:'flex',flexDirection:'column',gap:28,background:'var(--t3-navy)',border:'none',position:'relative',overflow:'hidden'})}>
          <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
          <div className="de-stack" style={{position:'relative',gap:28}}>
            <Mono onDark>OH · UG · 12 kV</Mono>
            <h1 className="de-hero-h" style={{fontSize:64,lineHeight:'68px'}}>{DIST.h1}</h1>
            <P onDark>{DIST.intro}</P>
            <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
          </div>
        </div>
        <div style={{gridColumn:'span 5',display:'grid',gridTemplateRows:'minmax(0,1fr) auto',gap:16}}>
          <ImageCard height="100%" src="assets/photos/p17.jpg" style={{minHeight:320}}/>
          <div className="de-grid de-g2" style={{gap:16}}>{stats.slice(0,2).map(([n,l])=><div key={l} style={tile({padding:24})}><div style={{font:'500 28px/34px var(--font-mono)',color:'var(--t3-navy)'}}>{n}</div><div style={{font:'600 11px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-steel)',marginTop:6}}>{l}</div></div>)}</div>
        </div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{DIST.workTitle}</H2>
        <div className="de-grid de-g4" style={{gap:16}}>{stats.map(([n,l],i)=><div key={l} style={tile({padding:28,background:i===2?'var(--t3-navy)':'#fff',border:i===2?'none':distCard.border})}><div style={{font:'500 40px/44px var(--font-mono)',color:i===2?'var(--accent)':'var(--t3-navy)'}}>{n}</div><div style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:i===2?'var(--fg-on-inverse-2)':'var(--t3-steel)',marginTop:10}}>{l}</div></div>)}</div>
        <div className="de-grid de-g12" style={{gap:16}}>
          <div style={tile({gridColumn:'span 8',display:'flex',flexDirection:'column',gap:16})}><h3 className="de-h3" style={{fontSize:24,lineHeight:'32px'}}>{w0.t}</h3>{w0.p.map(p=><P key={p}>{p}</P>)}<TextLink>{DIST.caseLink}</TextLink></div>
          <div style={tile({gridColumn:'span 4',display:'flex',flexDirection:'column',gap:16})}><div style={{font:'500 40px/44px var(--font-mono)',color:'var(--t3-turq-700)'}}>4 · 3</div><div style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-steel)'}}>QC assignments · months</div><h3 className="de-h3">{w1.t}</h3>{w1.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</div>
        </div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{DIST.servicesTitle}</H2>
        <div style={{borderTop:'1px solid var(--t3-navy)'}}>
          {DIST.services.map((s,i)=><div key={s.t} style={{display:'grid',gridTemplateColumns:'64px 56px minmax(0,1fr) minmax(0,1.6fr)',gap:24,alignItems:'start',padding:'24px 0',borderBottom:'1px solid var(--border-hairline)'}}>
            <Mono>{'D-'+String(i+1).padStart(2,'0')}</Mono><Chip icon={s.i}/><h3 className="de-h3" style={{fontSize:19,lineHeight:'26px',paddingTop:7}}>{s.t}</h3>{s.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}
          </div>)}
        </div>
        <div className="de-grid de-g2" style={{gap:16}}>{DIST.std.map((p,i)=><div key={p} style={tile({background:i?'#fff':'var(--t3-navy)',border:i?distCard.border:'none'})}><P onDark={!i} style={!i?{color:'#fff'}:null}>{p}</P></div>)}</div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-grid de-g12" style={{gap:16}}>
        <div style={tile({gridColumn:'span 5',display:'flex',flexDirection:'column',gap:20,padding:40})}><Bar/><H2 size={34}>{DIST.ecd.t}</H2><DistEcdLinks/></div>
        <div style={{gridColumn:'span 7',display:'grid',gap:16}}>{DIST.ecd.p.map((p,i)=><div key={p} style={tile({display:'grid',gridTemplateColumns:'40px minmax(0,1fr)',gap:16})}><Mono>{'0'+(i+1)}</Mono><P>{p}</P></div>)}</div>
      </Wrap>
    </section>
    <DistLic dark/>
    <DistRelated/>
    <DistClose/>
    <SiteFooter/>
  </div>;
}
window.DistV4=DistV4;
