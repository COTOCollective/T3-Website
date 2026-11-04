function EnvV2(){
  const idx=[['01',ENV.rec.t],['02',ENV.ecd.t],['03',ENV.servicesTitle],['04',ENV.workTitle],['05',ENV.lic.t]];
  const Sec=({n,t,children,dark})=><section className="de-section de-hair" style={dark?{background:'var(--t3-navy)'}:null}>
    <Wrap className="de-grid" style={{gridTemplateColumns:'240px minmax(0,1fr)',gap:64}}>
      <div><div style={{position:'sticky',top:100,display:'flex',flexDirection:'column',gap:12}}><Mono onDark={dark}>{n}</Mono><Bar/></div></div>
      <div className="de-stack" style={{gap:32}}><H2 onDark={dark} size={40}>{t}</H2>{children}</div>
    </Wrap>
  </section>;
  return <div className="de-page">
    <SiteHeader tone="light" active={1}/>
    <section style={{padding:'96px 0 64px'}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-row" style={{gap:12,flexWrap:'wrap'}}>{idx.map(([n,t])=><span key={n} style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--t3-steel)',padding:'8px 14px',border:'1px solid var(--border-hairline)',borderRadius:999}}><span style={{color:'var(--t3-turq-700)',marginRight:8}}>{n}</span>{t}</span>)}</div>
        <h1 style={{margin:0,font:'800 72px/76px var(--font-display)',letterSpacing:'-.02em',color:'var(--t3-navy)',maxWidth:1000,textWrap:'balance'}}>{ENV.h1}</h1>
        <div className="de-grid de-g2" style={{gap:64}}>
          <P lg style={{color:'var(--t3-navy)'}}>{ENV.intro[0]}</P>
          <div className="de-stack" style={{gap:24}}><P>{ENV.intro[1]}</P><Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button></div>
        </div>
      </Wrap>
    </section>
    <Wrap><ImageCard height={520} src="assets/photos/p10.jpg" style={{borderRadius:24}}/></Wrap>
    <div style={{height:96}}></div>
    <Sec n="01" t={ENV.rec.t}><div className="de-grid de-g2" style={{gap:40}}>{ENV.rec.p.map(p=><P key={p}>{p}</P>)}</div></Sec>
    <Sec n="02" t={ENV.ecd.t}>
      <P lg>{ENV.ecd.p[0]}</P>
      <div className="de-grid de-g2" style={{gap:24}}>{ENV.ecd.p.slice(1).map(p=><div key={p} style={{paddingTop:20,borderTop:'1px solid var(--border-hairline)'}}><P>{p}</P></div>)}</div>
      <div className="de-row" style={{gap:32,flexWrap:'wrap'}}><TextLink>{ENV.ecd.link}</TextLink><TextLink>{ENV.ecd.wp}</TextLink></div>
    </Sec>
    <Sec n="03" t={ENV.servicesTitle}>
      <div style={{borderTop:'1px solid var(--border-hairline)'}}>{ENV.services.map((s,i)=><a key={s.t} href="#" onClick={e=>e.preventDefault()} className="env2-row" style={{display:'grid',gridTemplateColumns:'48px minmax(0,1fr) minmax(0,1.3fr) 24px',gap:24,padding:'28px 0',borderBottom:'1px solid var(--border-hairline)',textDecoration:'none',alignItems:'start'}}>
        <Mono>{String(i+1).padStart(2,'0')}</Mono>
        <h3 className="de-h3" style={{fontSize:20,lineHeight:'28px'}}>{s.t}</h3>
        <P style={{fontSize:15,lineHeight:'24px'}}>{s.b}</P>
        <span style={{color:'var(--t3-turq-700)'}}><Icon name="arrow-right" size={20}/></span>
      </a>)}</div>
    </Sec>
    <Sec n="04" t={ENV.workTitle} dark>
      <div className="de-grid de-g2" style={{gap:40}}>
        <ImageCard height={360} src="assets/photos/p04.jpg"/>
        <div className="de-stack" style={{gap:20}}><h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{ENV.work.t}</h3>{ENV.work.p.map(p=><P key={p} onDark>{p}</P>)}<TextLink onDark>{ENV.work.link}</TextLink></div>
      </div>
      <blockquote style={{margin:0,paddingLeft:28,borderLeft:'3px solid var(--accent)',font:'500 26px/38px var(--font-display)',color:'#fff',textWrap:'pretty'}}>{ENV.work.q}</blockquote>
      <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
    </Sec>
    <Sec n="05" t={ENV.lic.t}>
      <P lg style={{color:'var(--t3-navy)'}}>{ENV.lic.lead}</P>
      <P>{ENV.lic.p} {ENV.lic.p2}</P>
      <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><TextLink>{ENV.lic.link}</TextLink><Button variant="secondary" iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div>
    </Sec>
    <section className="de-section de-hair" style={{paddingTop:64,paddingBottom:64}}>
      <Wrap className="de-row" style={{gap:32,flexWrap:'wrap',alignItems:'center'}}>
        <span style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--t3-steel)'}}>Related Services</span>
        {ENV.related.map(r=><TextLink key={r.k}>{r.k}</TextLink>)}
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <Wrap className="de-grid de-g2" style={{position:'relative',gap:64,alignItems:'end'}}>
        <div className="de-stack" style={{gap:20}}><Bar/><H2 onDark size={52}>{ENV.close.t}</H2></div>
        <div className="de-stack" style={{gap:24}}><P onDark lg>{ENV.close.p}</P><div className="de-row" style={{flexWrap:'wrap'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button></div><ContactLine onDark/></div>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.EnvV2=EnvV2;
