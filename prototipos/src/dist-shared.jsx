const DIST={
  h1:'Distribution Engineering',
  intro:'T3 provides overhead and underground distribution engineering, including covered conductor and underground conversion projects, designed to your utility\u2019s standards and requirements. Our technical professionals work directly with your team from early route and design development through final design submittal, keeping constructability, environmental considerations, and project requirements in view throughout the process.',
  workTitle:'Delivered Distribution Work',
  work:[
    {t:'Strategic Undergrounding Program',p:['T3 supported a leading Southern California utility on a 14-mile strategic undergrounding program delivered across two projects, each converting approximately 7 miles of 12 kV distribution from overhead to underground.','Through proactive coordination and project delivery, T3 helped accelerate one circuit by approximately seven months, supporting the utility in meeting its annual undergrounding mileage target. T3\u2019s engineering and design pricing was also approximately 20 percent below the program average.','When additional property coordination needs emerged on an adjacent scope, T3 stepped in to manage the work through completion, helping maintain continuity across the project.']},
    {t:'Quality Control Assignments',p:['T3 was selected for four quality control assignments within three months to review distribution designs produced by a major utility client\u2019s internal team. These assignments reflect the technical rigor and utility-focused perspective T3 brings to distribution design and quality control.']}
  ],
  caseLink:'Read the strategic undergrounding case study',
  servicesTitle:'Distribution Engineering Services',
  services:[
    {t:'Overhead Distribution Design',i:'utility-pole',src:'p11',p:['T3 provides overhead distribution design for new circuits, rebuilds, and system upgrades, developed to your utility\u2019s standards, templates, and review requirements. Our engineers remain directly involved through design review and final submittal, providing continuity as comments and project requirements are addressed.']},
    {t:'Underground Distribution Design',i:'cable',src:'p17',p:['T3 designs 12 kV underground conversions and new underground distribution systems with reliability, constructability, and wildfire mitigation requirements in mind. We can also coordinate property access and permission-to-enter requirements alongside the engineering effort, helping address critical project dependencies as the design advances.']},
    {t:'Covered Conductor',i:'shield-check',src:'p10',p:['T3 provides covered conductor design as part of overhead distribution upgrades and grid-hardening programs. Our engineers work within your utility\u2019s standards and program requirements to integrate covered conductor into practical, constructible designs.']},
    {t:'Reconductoring and Rebuilds',i:'refresh-cw',src:'p20',p:['T3 evaluates existing circuits and structures to develop reconductoring and rebuild solutions aligned with system needs, existing asset conditions, and project requirements. Our approach focuses on making effective use of existing infrastructure while addressing capacity, reliability, and condition-driven improvements.']},
    {t:'Feeder Additions and Equipment Specification',i:'git-branch',src:'p16',p:['T3 designs feeder additions, extensions, and ties and supports equipment specification and material selection based on your utility\u2019s approved standards. Design decisions are aligned with applicable equipment requirements, available materials, and your established review process.']},
    {t:'Constructability Reviews',i:'hard-hat',src:'p06',p:['T3 incorporates constructability into the design process, evaluating whether proposed designs can be implemented safely and efficiently under anticipated field conditions. Our engineers review designs with field execution in mind, helping identify potential conflicts and construction challenges before issue.']},
    {t:'Property Liaison and Access Coordination',i:'map-pin',src:'p03',p:['T3 provides property liaison and access coordination as a complementary service to distribution engineering. Our team supports property access, permission-to-enter requirements, landowner and community coordination, tribal coordination, and coordination with project partners so access needs can advance alongside design.']}
  ],
  std:['T3 works within your utility\u2019s engineering standards, design practices, templates, naming conventions, and review requirements from the start of an assignment. We structure design packages around the requirements your reviewers expect, helping reduce avoidable comments, rework, and additional review cycles.','Where needed, T3 can also support the development, documentation, and refinement of distribution engineering standards to improve consistency across projects and programs.'],
  ecd:{t:'Environmentally Conscious Design in Distribution Design',p:['T3 applies Environmentally Conscious Design (ECD) early in the distribution design process so environmental, permitting, and constructability considerations can inform the design while there is still flexibility to respond. Identifying potential constraints early supports proactive risk management and can reduce redesign, permitting delays, and schedule impacts later in the project.','For undergrounding projects, this integration is especially important. Evaluating environmental and permitting considerations during route development and at key design milestones allows potential constraints to inform alignment and design decisions before the project advances further.'],link:'Environmentally Conscious Design',wp:'Download the Environmentally Conscious Design white paper'},
  lic:{t:'Licensure and Certifications',lead:'T3 brings engineering licensure across all 50 states together with specialized technical and business certifications, giving our team the qualifications to support distribution programs nationwide.',p:'We also maintain small business, women-owned, and other state and agency-specific certifications that can help support project participation and contracting requirements. View our full list of professional licenses and certifications below.',link:'Certifications'},
  related:{group:'Engineering',items:[{k:'Substation Engineering',i:'zap'},{k:'Transmission Engineering',i:'utility-pole'},{k:'Grid Hardening',i:'shield-check'}],env:{k:'Construction Environmental Compliance',i:'leaf'}},
  close:{t:'Talk to a Technical Professional',p:'Discuss your distribution project, utility standards, and submittal requirements directly with the technical professionals who will support the work. From the first conversation through design and review, you have direct access to the engineers responsible for your project.'}
};
const distCard={borderRadius:'var(--radius-card)',background:'#fff',border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)'};
function DistLic({dark}){return <section className="de-section de-hair" style={dark?{background:'var(--t3-navy)'}:null}>
  <Wrap className="de-grid de-g2" style={{gap:64,alignItems:'start'}}>
    <div className="de-stack" style={{gap:20}}><Bar/><H2 onDark={dark} size={40}>{DIST.lic.t}</H2></div>
    <div className="de-stack" style={{gap:20}}><P lg onDark={dark} style={{color:dark?'#fff':'var(--t3-navy)'}}>{DIST.lic.lead}</P><P onDark={dark}>{DIST.lic.p}</P>
      <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><TextLink onDark={dark}>{DIST.lic.link}</TextLink><Button iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div></div>
  </Wrap>
</section>;}
function DistRelated(){return <section className="de-section de-hair" style={{paddingTop:64,paddingBottom:80}}>
  <Wrap className="de-stack" style={{gap:32}}>
    <V6H2>Related Services</V6H2>
    <div className="de-grid dist-rel" style={{gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'12px 20px',alignItems:'stretch'}}>
      <div className="dr-e1" style={{gridColumn:'1 / span 3'}}><Eyebrow>{DIST.related.group}</Eyebrow></div><div className="dr-e2"><Eyebrow>Environmental</Eyebrow></div>
      {DIST.related.items.map(r=><DistRelCard key={r.k} r={r}/>)}<div className="dr-env"><DistRelCard r={DIST.related.env}/></div>
    </div>
  </Wrap>
</section>;}
function DistRelCard({r}){return <div className="v6-card" style={{height:'100%'}}><span className="v6-chip"><Icon name={r.i} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{r.k}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div>;}
function DistClose(){return <section style={{background:'var(--t3-navy)',overflow:'hidden',position:'relative',padding:'128px 0'}}>
  <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
  <RingBackdrop size={620} rings={2} style={{position:'absolute',right:-240,bottom:-300}}/>
  <Wrap className="de-stack" style={{position:'relative',gap:32,maxWidth:1000}}>
    <P onDark lg style={{maxWidth:760}}>{DIST.close.p}</P>
    <h2 style={{margin:0,font:'800 88px/92px var(--font-display)',letterSpacing:'-.025em',color:'#fff',textWrap:'balance'}}>{DIST.close.t}</h2>
    <div className="de-row" style={{gap:32,flexWrap:'wrap',alignItems:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:56}}>{DE.cta}</Button><ContactLine onDark/></div>
  </Wrap>
</section>;}
function DistEcdLinks({dark}){return <div className="de-row" style={{gap:24,flexWrap:'wrap'}}><V6More onDark={dark}>{DIST.ecd.link}</V6More><Button variant="secondary" onDark={dark} iconRight="download" style={{height:48}}>{DIST.ecd.wp}</Button></div>;}
Object.assign(window,{DIST,distCard,DistLic,DistRelated,DistRelCard,DistClose,DistEcdLinks});
