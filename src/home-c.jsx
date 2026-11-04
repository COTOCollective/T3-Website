function HStackPlates({style}){
  const pl=[{c:'var(--t3-navy)',t:'#fff',z:0,z2:0,k:HM.pillars[2].k},{c:'var(--t3-steel)',t:'#fff',z:56,z2:110,k:HM.pillars[1].k},{c:'var(--accent)',t:'var(--t3-navy)',z:112,z2:220,k:HM.pillars[0].k}];
  return <div className="hm-stack" style={style}>
    {pl.map((p,i)=><div key={i} className="pl" style={{width:340,height:340,background:p.c,color:p.t,transform:`translate(-50%,-50%) translateZ(${p.z}px)`,'--z2':p.z2+'px',boxShadow:'0 30px 60px rgba(12,40,52,.25)',border:'1px solid rgba(255,255,255,.18)'}}><span style={{font:'600 12px/16px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase'}}>{p.k}</span></div>)}
  </div>;
}
function HStack(){
  return <div className="hm-stackwrap" style={{perspective:1600,display:'flex',alignItems:'center',justifyContent:'center',height:560}}><HStackPlates/></div>;
}
function HomeC(){
  return <div className="de-page">
    <SiteHeader tone="light"/>
    <section style={{padding:'72px 0 96px',position:'relative',overflow:'hidden'}}>
      <RingBackdrop size={900} rings={2} glow={false} opacity={.5} style={{position:'absolute',right:-360,top:-200}}/>
      <Wrap className="de-grid" style={{gridTemplateColumns:'minmax(0,1.15fr) minmax(0,1fr)',gap:32,alignItems:'center',position:'relative'}}>
        <Reveal className="de-stack" style={{gap:28}}>
          <h1 style={{margin:0,font:'800 76px/80px var(--font-display)',letterSpacing:'-.025em',color:'var(--t3-navy)',textWrap:'balance'}}>{HM.h1}</h1>
          <p style={{margin:0,font:'400 20px/32px var(--font-body)',color:'var(--fg-2)',maxWidth:560}}>{HM.sub}</p>
          <div><Button size="lg" iconRight="arrow-right">{HM.cta}</Button></div>
          <span style={{font:'500 16px/20px var(--font-mono)',color:'var(--t3-turq-700)'}}>{HM.lic}</span>
        </Reveal>
        <HStack/>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)'}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <H2 onDark>{HM.pillarsT}</H2>
        <div className="hm-rows on-dark">
          {HM.pillars.map((p,i)=><a key={p.k} href="#" onClick={pre} style={{borderColor:'rgba(255,255,255,.14)'}}>
            <span style={{font:'500 15px var(--font-mono)',color:'var(--accent)'}}>0{i+1}</span>
            <h3 style={{margin:0,font:'800 34px/40px var(--font-display)',color:'#fff',transition:'color 300ms'}}>{p.k}</h3>
            <p style={{margin:0,font:'400 16px/26px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{p.b}</p>
            <span className="hm-arrow" style={{color:'var(--accent)'}}><Icon name="arrow-right" size={24}/></span>
            <span className="hm-thumb"><img src={PH(p.img)} alt={['Transmission structure on a ridgeline','Field engineer on an environmental site walk','T3 team members at an industry event'][i]}/></span>
          </a>)}
        </div>
      </Wrap>
    </section>
    <section style={{padding:'176px 0'}}>
      <Wrap style={{maxWidth:600}} className="de-stack">
        <Reveal className="de-stack" style={{gap:28}}>
          <div className="de-row" style={{gap:8}}><span style={{width:40,height:3,borderRadius:2,background:'var(--t3-navy)'}}></span><span style={{width:40,height:3,borderRadius:2,background:'var(--accent)',marginLeft:-20,opacity:.9}}></span></div>
          <H2 size={40}>{HM.ecdT}</H2><P lg>{HM.ecd}</P><HLink>{HM.ecdLink}</HLink>
        </Reveal>
      </Wrap>
    </section>
    <section style={{background:'var(--accent)',padding:'128px 0',position:'relative',overflow:'hidden'}}>
      <Wrap className="de-stack" style={{gap:32,maxWidth:1040,position:'relative'}}>
        <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--t3-navy)'}}>{HM.proofT}</span>
        <blockquote style={{margin:0,font:'800 60px/68px var(--font-display)',letterSpacing:'-.02em',color:'var(--t3-navy)',textWrap:'balance'}}>“{HM.quote}”</blockquote>
        <span style={{font:'500 15px/24px var(--font-body)',color:'var(--t3-navy)'}}>{HM.quoteBy}</span>
        <div><a href="#" onClick={pre} className="hm-navybtn">{HM.cta}<Icon name="arrow-right" size={16}/></a></div>
      </Wrap>
    </section>
    <section style={{padding:'64px 0'}}><Wrap className="de-stack" style={{gap:24}}><span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--fg-2)'}}>{HM.clientsT}</span><LogoSlots/></Wrap></section>
    <section className="de-section de-hair">
      <Wrap className="de-grid" style={{gridTemplateColumns:'minmax(0,1.3fr) minmax(0,1fr)',gap:72,alignItems:'end'}}>
        <h2 style={{margin:0,font:'800 40px/50px var(--font-display)',letterSpacing:'-.015em',color:'var(--t3-navy)',textWrap:'pretty'}}>{HM.caseT}</h2>
        <div className="de-stack" style={{gap:20,borderLeft:'2px solid var(--accent)',paddingLeft:28}}><P>{HM.case1}</P><P>{HM.case2}</P><HLink>{HM.caseLink}</HLink></div>
      </Wrap>
    </section>
    <section style={{padding:'0 0 72px'}}>
      <Wrap className="de-stack" style={{gap:0}}>
        <div className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',gap:24,alignItems:'center',padding:'32px 36px',borderRadius:24,border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)'}}>
          <div className="de-stack" style={{gap:6}}><CertLine/><p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'var(--t3-navy)'}}>{HM.cert1}</p></div>
          <div className="de-stack" style={{gap:8,maxWidth:460}}><P style={{fontSize:14,lineHeight:'22px'}}>{HM.cert2}</P><HLink>Certifications</HLink></div>
        </div>
      </Wrap>
    </section>
    <section className="de-hair" style={{padding:'72px 0'}}>
      <Wrap className="de-grid" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,2fr)',gap:48}}>
        <H2 size={28}>{HM.newsT}</H2>
        <div className="de-stack" style={{gap:8}}><Mono>Date TBC</Mono><p style={{margin:0,font:'400 16px/26px var(--font-body)',color:'var(--fg-2)'}}><strong style={{color:'var(--t3-navy)'}}>{HM.newsK}</strong> {HM.newsB}</p></div>
      </Wrap>
    </section>
    <section style={{background:'var(--t3-navy)',padding:'136px 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <Wrap className="de-grid de-g2" style={{position:'relative',gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:20}}><H2 onDark size={56}>{HM.closeT}</H2><P onDark lg>{HM.close}</P></div>
        <div className="de-stack" style={{gap:20,alignItems:'flex-start'}}><Button size="lg" iconRight="arrow-right" style={{height:72,padding:'0 44px',fontSize:18}}>{HM.cta}</Button><ContactLine onDark/></div>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
function HomeCCase(){return <section className="de-section de-hair">
      <Wrap className="de-grid r-split" style={{gridTemplateColumns:'minmax(0,1.3fr) minmax(0,1fr)',gap:72,alignItems:'end'}}>
        <h2 style={{margin:0,font:'800 38px/50px var(--font-display)',letterSpacing:'-.015em',color:'var(--t3-navy)',textWrap:'pretty'}}>{HM.caseT}</h2>
        <div className="de-stack" style={{gap:20,borderLeft:'2px solid var(--accent)',paddingLeft:28}}><P>{HM.case1}</P><P>{HM.case2}</P><V6More onDark style={{color:'#1f8682'}}>See the Full Program in Projects and Case Studies</V6More></div>
      </Wrap>
    </section>;}
function HomeCCert(){return <section style={{padding:'0 0 72px'}}>
      <Wrap className="de-stack" style={{gap:0}}>
        <div className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',gap:24,alignItems:'center',padding:'32px 36px',borderRadius:24,border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)'}}>
          <div className="de-stack" style={{gap:6}}><CertLine/><p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'var(--t3-navy)'}}>{HM.cert1}</p></div>
          <div className="de-stack" style={{gap:8,maxWidth:460}}><P style={{fontSize:14,lineHeight:'22px'}}>{HM.cert2}</P><HLink>Certifications</HLink></div>
        </div>
      </Wrap>
    </section>;}
window.HomeC=HomeC;window.HomeCCase=HomeCCase;window.HomeCCert=HomeCCert;window.HStackPlates=HStackPlates;window.HStack=HStack;
