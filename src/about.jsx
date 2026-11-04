const AB={
  h1:'About T3 Consulting',
  lede:'T3 Consulting provides infrastructure engineering and environmental compliance services to clients in the utility, municipal, construction, and industrial markets. Our engineers and environmental professionals work within one firm, so both disciplines inform each project from the start.',
  why:{t:'Why T3 Exists',p:['Tim Tipping founded T3 and serves as the firm\u2019s Vice President. The standard he set at the founding continues to guide who we hire and what work we accept.','Danielle Tipping took over the firm in 2023. She previously led supply chain sustainability at a leading Southern California utility, where she saw how utilities evaluate the firms they engage: technical strength, direct access to the people doing the work, and the ability to hold a project together as requirements change.','That standard shapes how the firm is structured. Engineering and environmental services are delivered within the same firm because, on infrastructure projects, each one informs the other. Clients work directly with the technical professionals responsible for their project. We state what we can and cannot deliver before the bid, not after the contract is awarded.']},
  scope:{t:'What T3 Takes On, and What It Turns Down',a:'T3 accepts work within its documented services and delivers it to the standards each client already uses, helping reduce avoidable comments, rework, and additional review cycles.',b:'We decline work we cannot execute at current staffing. Where a project requires specialist work outside our disciplines, we say so and coordinate the specialists who deliver it.',close:'We do not do everything. What we do, we do well.'},
  ecd:{t:'Environmentally Conscious Design at the Firm Level',p:['T3 applies one methodology across every project. Environmentally Conscious Design (ECD) evaluates each engineering decision through an environmental lens, and each environmental decision through an engineering one.','Potential constraints that would otherwise emerge late are identified early, so the design can adapt while there is still flexibility to respond. This supports proactive risk management and can reduce redesign, permitting delays, and schedule impacts later in the project.'],link:'Environmentally Conscious Design'},
  direct:{t:'You Work Directly With the Technical Professional',p:['At T3, clients work directly with the technical professional responsible for their project. This is company policy, not a service level.','From the first scoping call through the final design submittal, the professional you speak with is the professional performing the work.']},
  lic:{t:'Licensure and Certifications',p:['With engineers licensed in all 50 states and environmental professionals holding specialized industry certifications, T3 is equipped to support environmental and engineering needs nationwide.','We also maintain small business, women-owned, and other certifications that can support project-specific participation requirements.','Our technical professionals work remotely, so coverage follows the project rather than an office location.'],p2:'View our full list of licenses and certifications below.',link:'Certifications'},
  work:{t:'Delivered Work',items:[{t:'Strategic Undergrounding Program',p:['T3 supported a leading Southern California utility on a 14-mile strategic undergrounding program delivered across two projects. T3 helped accelerate one circuit by approximately seven months, supporting the utility in meeting its annual undergrounding mileage target.'],note:'Program results reflect the specific scope and site conditions of that project.'},{t:'Quality Control Assignments',p:['T3 was selected for four quality control assignments within three months to review distribution designs produced by a major utility client\u2019s internal team.']}],link:'Projects'},
  next:{t:'Where the Firm Is Going',items:[['More direct work.','Expanding direct contracts with utilities, municipalities, and industry.'],['Fewer, deeper partnerships.','Long-term programs with a small number of strong partners rather than one-off projects.'],['Wider reach.','Minority- and Women-Owned Business Enterprise (MWBE) certification in New York, alongside the firm\u2019s California certifications, expands where T3 can be engaged.']]},
  related:['Core Values','Leadership','Certifications','Projects','Engineering','Environmental'],
  close:{t:'Talk to a Technical Professional',p:'Discuss your project, requirements, and schedule directly with the technical professionals who will support the work.'}
};
function AbInView({className,style,children}){const ref=React.useRef(null);const [on,setOn]=React.useState(!!window.DE_STATIC);
  React.useEffect(()=>{if(window.DE_STATIC||!ref.current)return;const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){setOn(true);io.disconnect();}},{threshold:.35});io.observe(ref.current);return()=>io.disconnect();},[]);
  return <div ref={ref} className={className+(on?' in':'')} style={style}>{children}</div>;}
function AboutPage(){
  return <div className="de-page">
    <SiteHeader tone="navy" active={2}/>
    <AbHero3/>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-stack" style={{gap:24}}><H2>{AB.why.t}</H2></div>
        <div className="de-grid ab-split" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1.5fr)',gap:64,alignItems:'stretch'}}>
          <div className="ab-why-img" style={{minHeight:320}}><ImageCard height="100%" src="assets/photos/ab-office.png" alt="Engineers reviewing marked-up distribution drawings in a site office"/></div>
          <div className="de-stack" style={{gap:20}}>{AB.why.p.map((p,i)=><Reveal key={i} delay={i*80}><P lg={i<2}>{p}</P></Reveal>)}</div>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:0}}>
      <Wrap className="de-stack" style={{gap:48}}>
        <H2>{AB.scope.t}</H2>
        <div className="de-grid de-g2 ab-scope" style={{gap:64}}>
          <Reveal><P lg>{AB.scope.a}</P></Reveal><Reveal delay={80}><P lg>{AB.scope.b}</P></Reveal>
        </div>
        <p className="ab-close ab-underline" style={{margin:0,font:'700 36px/44px var(--font-display)',letterSpacing:'-.01em',color:'var(--t3-navy)',textWrap:'balance'}}><span>{AB.scope.close}</span></p>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <Wrap className="de-grid ab-split" style={{position:'relative',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.2fr)',gap:64,alignItems:'start'}}>
        <div className="de-stack" style={{gap:24}}><H2 onDark>{AB.ecd.t}</H2></div>
        <div className="de-stack" style={{gap:20}}>{AB.ecd.p.map(p=><P key={p} onDark lg>{p}</P>)}<div style={{marginTop:12}}><V6More onDark>{AB.ecd.link}</V6More></div></div>
      </Wrap>
    </section>
    <section className="de-section ab-direct">
      <Wrap className="de-grid ab-split" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:28}}>
          <h2 className="ab-direct-h" style={{margin:0,font:'800 44px/50px var(--font-display)',color:'var(--t3-navy)',textWrap:'balance'}}>{AB.direct.t}</h2>
          <p className="ab-direct-p" style={{margin:0,font:'500 24px/34px var(--font-display)',color:'var(--t3-navy)'}}>{AB.direct.p[0]}</p>
          <P>{AB.direct.p[1]}</P>
        </div>
        <AbInView className="ab-path" style={{position:'relative',borderRadius:24,background:'var(--t3-navy)',overflow:'hidden',padding:'56px 48px',minHeight:380,display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(60% 80% at 50% 50%,rgba(55,198,192,.22),rgba(55,198,192,0) 70%)'}}></div>
          <RingBackdrop size={420} rings={2} glow={false} opacity={.5} style={{position:'absolute',left:'50%',top:'50%',marginLeft:-210,marginTop:-210}}/>
          <div className="ab-path-line" style={{position:'relative',display:'grid',gridTemplateColumns:'auto minmax(0,1fr) auto minmax(0,1fr) auto',alignItems:'center'}}>
            <span style={{width:14,height:14,borderRadius:99,border:'2px solid var(--accent)',background:'var(--t3-navy)'}}></span>
            <span className="ab-seg l" style={{height:2,background:'var(--accent)'}}></span>
            <span className="ab-path-av" style={{width:112,height:112,borderRadius:999,overflow:'hidden',border:'3px solid var(--accent)',boxShadow:'0 0 0 10px rgba(55,198,192,.15)',position:'relative'}}><img src="assets/photos/ab-engineer.png" alt="T3 technical professional on a call in the field" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'35% 25%',transform:'scale(1.35)'}}/></span>
            <span className="ab-seg r" style={{height:2,background:'var(--accent)'}}></span>
            <span className="ab-end" style={{width:14,height:14,borderRadius:99,background:'var(--accent)'}}></span>
          </div>
          <div style={{position:'relative',display:'flex',justifyContent:'space-between',gap:16,marginTop:24}}>
            <span style={{font:'500 12px/18px var(--font-mono)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)',maxWidth:140}}>First scoping call</span>
            <span style={{font:'500 12px/18px var(--font-mono)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)',maxWidth:140,textAlign:'right'}}>Final design submittal</span>
          </div>
        </AbInView>
      </Wrap>
    </section>
    <section className="de-section env-lic" style={{paddingTop:0}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{AB.lic.t}</V6H2>
        <div className="r-panel ab-lic" style={{borderRadius:24,background:'var(--gradient-navy)',padding:'44px 48px',display:'flex',gap:40,alignItems:'center',position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 90% at 0% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
          <span style={{position:'relative',width:96,height:96,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><Icon name="shield-check" size={84} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{gap:12,position:'relative',flex:1,minWidth:260}}>
            <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff',maxWidth:820}}>{AB.lic.p[0]}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{AB.lic.p[1]} {AB.lic.p[2]} {AB.lic.p2}</p>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>{AB.lic.link}</V6More></div>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <img src="assets/photos/ab-undergrounding.png" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 50%'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.72) 60%,rgba(12,40,52,.5) 100%)'}}></div>
      <Wrap className="de-stack" style={{position:'relative',gap:40}}>
        <H2 onDark>{AB.work.t}</H2>
        <div className="de-grid de-g2 ab-work" style={{gap:24}}>
          {AB.work.items.map((w,wi)=><Reveal key={w.t} delay={wi*80} className="ab-workcard"><FrostedPanel padding={36} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:16,height:'100%',minHeight:340}}>
            <h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{w.t}</h3>
            {w.p.map(p=><P key={p} onDark>{p}</P>)}
            {w.note&&<p style={{margin:'auto 0 0',font:'300 13px/20px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{w.note}</p>}
          </FrostedPanel></Reveal>)}
        </div>
        <V6More onDark>{AB.work.link}</V6More>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{AB.next.t}</H2>
        <ol className="ct-steps ab-steps de-grid de-g3" style={{margin:0,padding:0,listStyle:'none',gap:32}}>
          {AB.next.items.map(([k,v],i)=><li key={k} className="rv-li" style={{transitionDelay:(i*60)+'ms',display:'grid',gridTemplateColumns:'48px minmax(0,1fr)',gap:16,padding:'24px 0 0',borderTop:'1px solid var(--border-hairline)'}}>
            <span style={{font:'800 28px/32px var(--font-display)',color:'var(--t3-turq-700)'}}>{i+1}</span>
            <P lg><b style={{fontWeight:600,color:'var(--t3-navy)'}}>{k}</b> {v}</P>
          </li>)}
        </ol>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:0}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>Related Pages</V6H2>
        <div className="de-grid de-g3" style={{gap:20}}>
          {[['Core Values','compass'],['Leadership','users'],['Certifications','badge-check'],['Projects','folder-open'],['Engineering','zap'],['Environmental','leaf']].map(([k,i],n)=><Reveal key={k} delay={n*60}><div className="v6-card" style={{height:'100%'}}><span className="v6-chip"><Icon name={i} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{k}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div></Reveal>)}
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{AB.close.t}</H2><P onDark lg>{AB.close.p}</P>
        <Button size="lg" iconRight="arrow-right" style={{height:52}}>{DE.cta}</Button>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
Object.assign(window,{AboutPage,AB});
