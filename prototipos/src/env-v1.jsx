const ENV={
  h1:'Environmental Permitting and Compliance',
  intro:['T3 provides environmental permitting, stormwater compliance, environmental planning, and field support for infrastructure projects. Through our Environmentally Conscious Design (ECD) approach, we bring environmental and engineering considerations together early so potential constraints can be identified and addressed while projects still have flexibility to respond.','Our environmental and engineering professionals work directly with your team from early project planning and environmental review through permitting, construction, and close-out. We work within agency requirements, project standards, and review processes to develop practical solutions that support compliance while keeping project delivery in focus.'],
  rec:{t:'Recommendations You Can Implement',p:['Every environmental recommendation T3 provides is developed with implementation in mind. We consider site conditions, permitting requirements, design constraints, and schedule implications together, then identify a practical path forward that supports the project\u2019s overall goals.','Rather than simply identifying an environmental constraint, T3 works with the project team to determine how it can be addressed within the design and construction approach. Because our environmental and engineering professionals work together, potential issues can be evaluated alongside feasible solutions, helping the team make informed decisions and keep the project moving.']},
  ecd:{t:'Environmental and Engineering Review Together',p:['T3 applies Environmentally Conscious Design (ECD) early in the project lifecycle so environmental and permitting considerations can inform design decisions while there is still flexibility to respond.','Identifying potential constraints early supports proactive risk management and can reduce redesign, permitting delays, and schedule impacts later in the project.','When a constraint is identified during the 30 or 60 percent design stage, our environmental and engineering professionals can work together to evaluate the issue and incorporate appropriate design considerations before the project advances further.'],link:'Environmentally Conscious Design',wp:'Download the Environmentally Conscious Design white paper'},
  servicesTitle:'Environmental Services',
  services:[
    {t:'Environmental Planning',b:'California Environmental Quality Act (CEQA) and National Environmental Policy Act (NEPA) environmental review and documentation, supporting projects from initial evaluation through agency review, comment response, and environmental clearance',src:'p19'},
    {t:'Stormwater Compliance and NPDES Permitting',b:'National Pollutant Discharge Elimination System (NPDES) permitting, Stormwater Pollution Prevention Plans (SWPPP), and inspection through construction, delivered by qualified stormwater professionals.',src:'p07'},
    {t:'Water Resources Engineering',b:'Hydrologic and hydraulic analysis and modeling, floodplain analysis, and low impact development design to support practical, resilient project solutions.',src:'p03'},
    {t:'Construction Environmental Compliance',b:'On-site environmental coordination and compliance support before and during construction, helping project teams understand and implement applicable permit requirements and environmental commitments in the field',src:'p15'},
    {t:'Environmental Program Management',b:'Environmental program management for complex, multi-site programs, establishing consistent processes for document control, compliance tracking, reporting, and coordination across the portfolio.',src:'p09'},
    {t:'Sustainability and ESG Advisory',b:'Practical sustainability strategies and ESG programs aligned with business objectives and reporting needs',src:'p18'}
  ],
  workTitle:'Delivered Environmental Work',
  work:{t:'Stormwater Risk Addressed Before Construction',p:['T3 identified a potential stormwater compliance issue during preconstruction and worked with the appropriate parties to secure written documentation resolving the issue before field activities began.','By addressing the requirement early, T3 helped the contractor reduce compliance uncertainty and avoid a potential disruption during construction.'],q:'This is T3\u2019s approach to proactive risk management: identifying environmental and permitting issues early enough for the project team to address them before they affect field execution.',link:'See our projects'},
  lic:{t:'Licensure and Certifications',lead:'With engineers licensed in all 50 states and environmental professionals holding specialized industry certifications, T3 is equipped to support environmental and engineering needs nationwide.',p:'We also maintain small business, women-owned, and other certifications that can support project-specific participation requirements.',p2:'View our full list of licenses and certifications below.',link:'Certifications'},
  related:[{k:'Engineering',i:'zap'},{k:'Project and Program Management',i:'layers'},{k:'Our Approach',i:'route'}],
  close:{t:'Talk to a Technical Professional',p:'Discuss your project\u2019s permitting requirements, agency coordination, and schedule directly with the technical professionals who will support the work'}
};
const envCard={borderRadius:'var(--radius-card)',padding:32,background:'#fff',border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)',display:'flex',flexDirection:'column',gap:16};
function EnvHero(){return <div className="env-hero" style={{position:'relative',height:'100%',minHeight:640,paddingLeft:56}}>
  <ImageCard height={420} src="assets/photos/p12.jpg" style={{borderRadius:16}}/>
  <div style={{position:'absolute',left:0,top:328,width:240,borderRadius:16,overflow:'hidden'}}><ImageCard height={200} src="assets/photos/p17.jpg" style={{borderRadius:16}}/></div>
  <div style={{position:'absolute',left:264,right:0,top:444,bottom:0,borderRadius:16,overflow:'hidden'}}><ImageCard height="100%" src="assets/photos/p09.jpg" style={{borderRadius:16}}/></div>
</div>;}
function EnvServices(){
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  return <section className="de-section de-hair">
    <Wrap className="de-stack" style={{gap:48}}>
      <div className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}>
        <H2>{ENV.servicesTitle}</H2>
        <div className="de-row" style={{gap:12}}><button className="de-iconbtn light" onClick={()=>nudge(-1)} aria-label="Previous"><Icon name="arrow-left" size={20}/></button><button className="de-iconbtn light" onClick={()=>nudge(1)} aria-label="Next"><Icon name="arrow-right" size={20}/></button></div>
      </div>
    </Wrap>
    <div className="de-rail-wrap" style={{paddingLeft:'max(48px, calc((100% - 1200px) / 2))',marginTop:48}}>
      <div ref={rail} className="de-rail" style={{paddingRight:48}}>
        {ENV.services.map(s=><article key={s.t} className="de-stack" style={{gap:20}}>
          <ImageCard height={300} title={s.t} src={PH(s.src)} onClick={()=>{}}/>
          <P style={{fontSize:15,lineHeight:'24px'}}>{s.b}</P>
          <TextLink>{s.t}</TextLink>
        </article>)}
      </div>
    </div>
  </section>;
}
function EnvPage(){
  return <div className="de-page">
    <SiteHeader tone="navy" active={1}/>
    <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'96px 0 112px'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 25% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
      <Wrap className="de-grid de-g-hero" style={{position:'relative',alignItems:'flex-start',gap:64}}>
        <Reveal style={{display:'flex',flexDirection:'column',gap:24}}>
          <h1 className="de-hero-h">{ENV.h1}</h1>
          <p style={{margin:0,font:'500 20px/30px var(--font-display)',color:'#fff',maxWidth:620}}>{ENV.intro[0]}</p>
          <P onDark style={{maxWidth:600}}>{ENV.intro[1]}</P>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
        </Reveal>
        <EnvHero/>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-grid de-g-hero env-rec" style={{gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:24}}><Bar/><H2>{ENV.rec.t}</H2>{ENV.rec.p.map(p=><P key={p}>{p}</P>)}</div>
        <ImageCard height={440} src="assets/photos/p05.jpg"/>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <RingBackdrop size={640} rings={0} style={{position:'absolute',right:-260,top:-200}}/>
      <Wrap className="de-stack" style={{gap:56,position:'relative'}}>
        <div style={{maxWidth:760}}><H2 onDark>{ENV.ecd.t}</H2></div>
        <div className="de-grid de-g3 env-steps" style={{gap:0,borderTop:'1px solid var(--surface-frost-border)'}}>
          {[['Early lifecycle',ENV.ecd.p[0]],['Proactive risk management',ENV.ecd.p[1]],['30 · 60 percent design',ENV.ecd.p[2]]].map(([k,p],i)=><div key={k} className="de-stack" style={{gap:16,padding:'32px 32px 0 0',position:'relative'}}>
            <span style={{position:'absolute',top:-7,left:0,width:13,height:13,borderRadius:999,background:'var(--t3-navy)',border:'2px solid var(--accent)'}}></span>
            <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)'}}>{k}</span><P onDark style={{fontSize:15,lineHeight:'24px'}}>{p}</P>
          </div>)}
        </div>
        <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><V6More onDark>{ENV.ecd.link}</V6More><Button variant="secondary" onDark iconRight="download" style={{height:48}}>{ENV.ecd.wp}</Button></div>
      </Wrap>
    </section>
    <EnvServices/>
    <section style={{position:'relative',overflow:'hidden',background:'var(--t3-navy)'}}>
      <img src="assets/photos/p04.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.6) 60%,rgba(12,40,52,.3) 100%)'}}></div>
      <Wrap className="de-stack env-work" style={{position:'relative',gap:40,padding:'112px 48px'}}>
        <H2 onDark>{ENV.workTitle}</H2>
        <div className="de-grid de-g2" style={{gap:24}}>
          <FrostedPanel padding={36} style={{borderRadius:16,display:'flex',flexDirection:'column',gap:20}}>
            <h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{ENV.work.t}</h3>
            {ENV.work.p.map(p=><P key={p} onDark>{p}</P>)}
            <V6More onDark>{ENV.work.link}</V6More>
          </FrostedPanel>
          <div className="de-stack" style={{gap:24,justifyContent:'flex-end'}}>
            <p className="env-q" style={{margin:0,font:'500 26px/38px var(--font-display)',color:'#fff',textWrap:'pretty'}}>{ENV.work.q}</p>
            <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section env-lic">
      <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{position:'absolute',left:-440,top:0}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{ENV.lic.t}</V6H2>
        <div className="r-panel" style={{borderRadius:24,background:'var(--gradient-navy)',padding:'44px 48px',display:'flex',gap:40,alignItems:'center',position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 90% at 0% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
          <span style={{position:'relative',width:96,height:96,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><Icon name="shield-check" size={84} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{gap:12,position:'relative',flex:1,minWidth:260}}>
            <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff',maxWidth:820}}>{ENV.lic.lead}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{ENV.lic.p} {ENV.lic.p2}</p>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>{ENV.lic.link}</V6More><Button iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:48}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>Related Services</V6H2>
        <div className="de-grid de-g3" style={{gap:20}}>
          {ENV.related.map(r=><div key={r.k} className="v6-card"><span className="v6-chip"><Icon name={r.i} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{r.k}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div>)}
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{ENV.close.t}</H2><P onDark lg>{ENV.close.p}</P>
        <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button><Button size="lg" variant="secondary" onDark style={{height:48}}>{DE.capCta}</Button></div><ContactLine onDark/>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
Object.assign(window,{EnvPage,ENV});
