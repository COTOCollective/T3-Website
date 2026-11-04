function DistV2(){
  const Sec=({n,t,children,dark})=><section className="de-section de-hair" style={dark?{background:'var(--t3-navy)'}:null}>
    <Wrap className="de-grid" style={{gridTemplateColumns:'240px minmax(0,1fr)',gap:64}}>
      <div><div style={{position:'sticky',top:100,display:'flex',flexDirection:'column',gap:12}}><Mono onDark={dark}>{n}</Mono><Bar/></div></div>
      <div className="de-stack" style={{gap:32}}><H2 onDark={dark} size={40}>{t}</H2>{children}</div>
    </Wrap>
  </section>;
  const idx=[['01',DIST.workTitle],['02',DIST.servicesTitle],['03','ECD'],['04',DIST.lic.t]];
  return <div className="de-page">
    <SiteHeader tone="light" active={0}/>
    <section style={{padding:'96px 0 64px'}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-row" style={{gap:12,flexWrap:'wrap'}}>{idx.map(([n,t])=><span key={n} style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-steel)',padding:'8px 14px',border:'1px solid var(--border-hairline)',borderRadius:999}}><span style={{color:'var(--t3-turq-700)',marginRight:8}}>{n}</span>{t}</span>)}</div>
        <h1 style={{margin:0,font:'800 88px/92px var(--font-display)',letterSpacing:'-.025em',color:'var(--t3-navy)'}}>{DIST.h1}</h1>
        <div className="de-grid de-g2" style={{gap:64,alignItems:'end'}}>
          <P lg style={{color:'var(--t3-navy)'}}>{DIST.intro}</P>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-end',justifySelf:'start',height:48}}>{DE.cta}</Button>
        </div>
      </Wrap>
    </section>
    <Wrap><div className="de-grid" style={{gridTemplateColumns:'2fr 1fr',gap:16}}><ImageCard height={480} src="assets/photos/p17.jpg" style={{borderRadius:24}}/><ImageCard height={480} src="assets/photos/p04.jpg" style={{borderRadius:24}}/></div></Wrap>
    <div style={{height:96}}></div>
    <Sec n="01" t={DIST.workTitle}>
      {DIST.work.map((w,i)=><div key={w.t} className="de-grid" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1.6fr)',gap:40,paddingTop:28,borderTop:'1px solid var(--border-hairline)'}}>
        <h3 className="de-h3" style={{fontSize:22,lineHeight:'30px'}}>{w.t}</h3>
        <div className="de-stack" style={{gap:16}}>{w.p.map(p=><P key={p}>{p}</P>)}{i===0&&<TextLink>{DIST.caseLink}</TextLink>}</div>
      </div>)}
    </Sec>
    <Sec n="02" t={DIST.servicesTitle}>
      <div style={{borderTop:'1px solid var(--border-hairline)'}}>{DIST.services.map((s,i)=><div key={s.t} style={{display:'grid',gridTemplateColumns:'48px minmax(0,1fr) minmax(0,1.4fr)',gap:24,padding:'28px 0',borderBottom:'1px solid var(--border-hairline)'}}>
        <Mono>{String(i+1).padStart(2,'0')}</Mono><h3 className="de-h3" style={{fontSize:20,lineHeight:'28px'}}>{s.t}</h3><div className="de-stack" style={{gap:12}}>{s.p.map(p=><P key={p} style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</div>
      </div>)}</div>
      <div style={{padding:36,borderRadius:'var(--radius-card)',background:'var(--t3-navy)',display:'flex',flexDirection:'column',gap:14}}>{DIST.std.map((p,i)=><P key={p} onDark style={i===0?{color:'#fff',fontSize:18,lineHeight:'30px'}:null}>{p}</P>)}</div>
    </Sec>
    <Sec n="03" t={DIST.ecd.t}>
      <P lg>{DIST.ecd.p[0]}</P>
      <blockquote style={{margin:0,paddingLeft:28,borderLeft:'3px solid var(--accent)',font:'500 24px/36px var(--font-display)',color:'var(--t3-navy)',textWrap:'pretty'}}>{DIST.ecd.p[1]}</blockquote>
      <DistEcdLinks/>
    </Sec>
    <Sec n="04" t={DIST.lic.t}>
      <P lg style={{color:'var(--t3-navy)'}}>{DIST.lic.lead}</P><P>{DIST.lic.p}</P>
      <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><TextLink>{DIST.lic.link}</TextLink><Button variant="secondary" iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div>
    </Sec>
    <section className="de-section de-hair" style={{paddingTop:56,paddingBottom:56}}>
      <Wrap className="de-row" style={{gap:32,flexWrap:'wrap',alignItems:'center'}}>
        <span style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--t3-steel)'}}>Related Services</span>
        <span style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-turq-700)'}}>{DIST.related.group}</span>
        {DIST.related.items.map(r=><TextLink key={r.k}>{r.k}</TextLink>)}
        <span style={{width:1,height:24,background:'var(--border-hairline)'}}></span>
        <TextLink>{DIST.related.env.k}</TextLink>
      </Wrap>
    </section>
    <DistClose/>
    <SiteFooter/>
  </div>;
}
window.DistV2=DistV2;
