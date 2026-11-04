function HomeB(){
  return <div className="de-page">
    <div style={{position:'relative',minHeight:820,overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p10.jpg" alt="Transmission line crossing open mountain terrain" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.7) 45%,rgba(12,40,52,.15) 100%)'}}></div>
      <div style={{position:'relative'}}><SiteHeader tone="navy" overlay/></div>
      <Wrap style={{position:'relative',padding:'120px 0 96px',display:'flex',flexDirection:'column',gap:28,maxWidth:1200}}>
        <h1 style={{margin:0,maxWidth:780,font:'800 72px/76px var(--font-display)',letterSpacing:'-.02em',color:'#fff',textWrap:'balance'}}>{HM.h1}</h1>
        <p style={{margin:0,maxWidth:560,font:'400 20px/32px var(--font-body)',color:'#fff'}}>{HM.sub}</p>
        <div><Button size="lg" iconRight="arrow-right">{HM.cta}</Button></div>
        <span style={{font:'500 16px/20px var(--font-mono)',color:'var(--accent)'}}>{HM.lic}</span>
      </Wrap>
    </div>
    <HomeBPillars/>
    <section className="de-section de-hair" style={{padding:'160px 0'}}>
      <Wrap style={{maxWidth:620}} className="de-stack">
        <div className="hm-ecdline" style={{margin:'0 0 40px'}}></div>
        <Reveal className="de-stack" style={{gap:28}}><H2 size={40}>{HM.ecdT}</H2><P lg>{HM.ecd}</P><HLink>{HM.ecdLink}</HLink></Reveal>
      </Wrap>
    </section>
    <div style={{position:'relative',overflow:'hidden',minHeight:640,background:'var(--t3-navy)'}}>
      <img src="assets/photos/p06.jpg" alt="Crew in hi-vis overlooking a lake from a pole line" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'rgba(12,40,52,.55)'}}></div>
      <Wrap style={{position:'relative',padding:'112px 0',display:'flex'}}>
        <FrostedPanel strong padding={56} style={{maxWidth:880,display:'flex',flexDirection:'column',gap:28}}>
          <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)'}}>{HM.proofT}</span>
          <blockquote style={{margin:0,font:'700 52px/62px var(--font-display)',letterSpacing:'-.015em',color:'#fff',textWrap:'balance'}}>“{HM.quote}”</blockquote>
          <span style={{font:'400 15px/24px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{HM.quoteBy}</span>
          <div><Button size="lg" iconRight="arrow-right">{HM.cta}</Button></div>
        </FrostedPanel>
      </Wrap>
    </div>
    <section style={{padding:'64px 0'}}><Wrap className="de-stack" style={{gap:24}}><span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--fg-2)'}}>{HM.clientsT}</span><LogoSlots/></Wrap></section>
    <section className="de-section de-hair">
      <Wrap className="de-grid de-g2" style={{gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:28}}>
          <h2 style={{margin:0,font:'800 34px/44px var(--font-display)',letterSpacing:'-.01em',color:'var(--t3-navy)',textWrap:'pretty'}}>{HM.caseT}</h2>
          <P lg>{HM.case1}</P><P lg>{HM.case2}</P><HLink>{HM.caseLink}</HLink>
        </div>
        <div style={{position:'relative',height:520,borderRadius:24,overflow:'hidden'}}><img src="assets/photos/p17.jpg" alt="Underground vault installed along a utility right-of-way" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </Wrap>
    </section>
    <section style={{background:'var(--t3-navy)',padding:'36px 0'}}>
      <Wrap className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',gap:24,alignItems:'center'}}>
        <div className="de-row" style={{gap:20}}><span style={{color:'var(--accent)'}}><Icon name="shield-check" size={36}/></span><div className="de-stack" style={{gap:4}}><CertLine onDark/><p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'#fff'}}>{HM.cert1}</p></div></div>
        <div className="de-stack" style={{gap:8,maxWidth:460}}><P onDark style={{fontSize:14,lineHeight:'22px'}}>{HM.cert2}</P><HLink onDark>Certifications</HLink></div>
      </Wrap>
    </section>
    <section style={{padding:'72px 0'}}>
      <Wrap className="de-stack" style={{gap:24}}>
        <H2 size={28}>{HM.newsT}</H2>
        <div className="de-grid" style={{gridTemplateColumns:'160px minmax(0,1fr)',gap:32,padding:'24px 0',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}}><Mono>Date TBC</Mono><p style={{margin:0,font:'400 16px/26px var(--font-body)',color:'var(--fg-2)',maxWidth:720}}><strong style={{color:'var(--t3-navy)'}}>{HM.newsK}</strong> {HM.newsB}</p></div>
      </Wrap>
    </section>
    <div style={{position:'relative',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p02.jpg" alt="Engineer on site reviewing drawings" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(12,40,52,.6),rgba(12,40,52,.92))'}}></div>
      <Wrap className="de-stack" style={{position:'relative',padding:'144px 0',alignItems:'center',textAlign:'center',gap:24,maxWidth:760}}>
        <H2 onDark size={56}>{HM.closeT}</H2><P onDark lg>{HM.close}</P>
        <Button size="lg" iconRight="arrow-right" style={{height:64,padding:'0 40px',fontSize:17}}>{HM.cta}</Button>
        <ContactLine onDark/>
      </Wrap>
    </div>
    <SiteFooter/>
  </div>;
}
function HomeBPillars(){
  const [on,setOn]=React.useState(0);
  return <section className="de-section">
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{HM.pillarsT}</H2>
        <div className="hm-panels">
          {HM.pillars.map((p,i)=><a key={p.k} href="#" onClick={pre} onMouseEnter={()=>setOn(i)} className={'hm-panel'+(on===i?' on':'')}>
            <img src={PH(p.img)} alt={['Engineer reviewing transmission structures in the field','Field engineer on an environmental site walk','T3 team members at an industry event'][i]}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(12,40,52,0) 30%,rgba(12,40,52,.92) 100%)'}}></div>
            <div className="hm-pb">
              <Mono onDark>0{i+1}</Mono>
              <h3 style={{margin:0,font:'800 28px/34px var(--font-display)',color:'#fff'}}>{p.k}</h3>
              <div className="hm-pd"><p style={{margin:0,font:'400 15px/24px var(--font-body)',color:'#fff',maxWidth:440}}>{p.b}</p></div>
            </div>
          </a>)}
        </div>
      </Wrap>
    </section>;
}
function HomeBCase(){return <section className="de-section de-hair">
      <Wrap className="de-grid de-g2" style={{gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:28}}>
          <h2 style={{margin:0,font:'800 34px/44px var(--font-display)',letterSpacing:'-.01em',color:'var(--t3-navy)',textWrap:'pretty'}}>{HM.caseT}</h2>
          <P lg>{HM.case1}</P><P lg>{HM.case2}</P><V6More onDark style={{color:'#1f8682'}}>See the Full Program in Projects and Case Studies</V6More>
        </div>
        <div style={{position:'relative',height:520,borderRadius:24,overflow:'hidden'}}><img src="assets/photos/p17.jpg" alt="Underground vault installed along a utility right-of-way" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
      </Wrap>
    </section>;}
function HomeBQuote(){return <div style={{position:'relative',overflow:'hidden',minHeight:640,background:'var(--t3-navy)'}}>
      <img src="assets/photos/p06.jpg" alt="Crew in hi-vis overlooking a lake from a pole line" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'rgba(12,40,52,.55)'}}></div>
      <Wrap style={{position:'relative',padding:'112px 0',display:'flex'}}>
        <FrostedPanel strong padding={56} style={{maxWidth:880,display:'flex',flexDirection:'column',gap:28}}>
          <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)'}}>{HM.proofT}</span>
          <blockquote style={{margin:0,font:'700 52px/62px var(--font-display)',letterSpacing:'-.015em',color:'#fff',textWrap:'balance'}}>“{HM.quote}”</blockquote>
          <span style={{font:'400 15px/24px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{HM.quoteBy}</span>
          <div><Button size="lg" iconRight="arrow-right" style={{height:48}}>{HM.cta}</Button></div>
        </FrostedPanel>
      </Wrap>
    </div>;}
function HomeBNews(){return <section style={{padding:'72px 0'}}>
      <Wrap className="de-stack" style={{gap:24}}>
        <H2 size={28}>{HM.newsT}</H2>
        <div className="de-grid" style={{gridTemplateColumns:'160px minmax(0,1fr)',gap:32,padding:'24px 0',borderTop:'1px solid var(--border-hairline)',borderBottom:'1px solid var(--border-hairline)'}}><Mono>Date TBC</Mono><p style={{margin:0,font:'400 16px/26px var(--font-body)',color:'var(--fg-2)',maxWidth:720}}><strong style={{color:'var(--t3-navy)'}}>{HM.newsK}</strong> {HM.newsB}</p></div>
      </Wrap>
    </section>;}
window.HomeB=HomeB;window.HomeBNews=HomeBNews;window.HomeBCase=HomeBCase;window.HomeBQuote=HomeBQuote;window.HomeBPillars=HomeBPillars;
