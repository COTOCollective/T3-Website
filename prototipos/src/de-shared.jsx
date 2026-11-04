const NS=window.T3ConsultingDesignSystem_2ce685;
const {Button,Tag,Badge,Eyebrow,Icon,RingBackdrop,Card,FrostedPanel,StatCounter,ImageCard:ImageCardBase,CapabilityList,Input,Select}=NS;
const DE={
  h1:'Power Delivery Engineering',
  lede:'Substation, transmission, and distribution engineering from 12 kV through 500 kV.',
  intro:['T3 Consulting, Inc. is an infrastructure engineering and environmental firm with engineers licensed in all 50 states. Our in-house team covers structural, civil, electrical, environmental, and geology disciplines.','For your power delivery project, T3 brings engineering and environmental review together through Environmentally Conscious Design™ (ECD). You work directly with the technical professionals responsible for your project, from conception through the last design submittal.'],
  cta:'Talk to a Technical Professional',
  capCta:'Request our Capability Statement',
  disciplines:['Structural','Civil','Electrical','Environmental','Geology'],
  ecd:{title:'Engineering and Environmental Review Together',p:['T3 applies Environmentally Conscious Design early in our process to identify environmental constraints and to assess whether the work is practical to build. This supports proactive risk management while your team can still adjust the design.','On a trenching project, that can mean evaluating an already-disturbed road shoulder instead of the middle of the road. The review weighs ground disturbance and repaving alongside the engineering needs. If a constraint emerges at the 30 percent or 60 percent design stage, T3 can adapt the design to accommodate it.','When separate engineering and environmental reviews identify a constraint late, your program team may need to revise the design and the schedule. T3 reviews both within the same firm as the design develops.'],link:'Environmentally Conscious Design'},
  servicesTitle:'Engineering Services',
  services:[
    {t:'Substation Engineering',i:'zap',b:'Substation design from 12 kV through 500 kV. Our services include:',bl:['Physical, civil, and structural design','Protection and controls (P&C) design','Arc flash hazard analysis','Supervisory control and data acquisition (SCADA) and automation design','Grounding and lightning protection'],l:'Substation Engineering',spec:'12–500 kV'},
    {t:'Transmission Engineering',i:'utility-pole',b:'Transmission structure modifications and upgrades up to 500 kV, with engineering and environmental input on route and structure options. Our services include:',bl:['Owner\u2019s engineering reviews','Routing and siting'],l:'Transmission Engineering',spec:'≤ 500 kV'},
    {t:'Distribution Engineering',i:'cable',b:'Overhead and underground distribution engineering, including covered conductor, within your utility standards, submittal requirements, and review processes.',l:'Distribution Engineering',spec:'OH · UG'},
    {t:'Renewable Energy',i:'sun',b:'Interconnection support for renewable generation entering the grid.',l:'Renewable Energy',spec:'Interconnection'},
    {t:'Grid Hardening',i:'shield-check',b:'Wildfire mitigation is T3\u2019s proven grid-hardening service, including distribution undergrounding and covered conductor.',l:'Grid Hardening',spec:'Wildfire'},
    {t:'Electric Vehicle Infrastructure',i:'plug-zap',b:'From site feasibility through construction management. Our services include cost estimating, civil site design and permitting support.',l:'Electric Vehicle Infrastructure',spec:'Feasibility → CM'}
  ],
  telecom:{t:'Telecommunications and Fiber',i:'radio-tower',b:'T3\u2019s services include utility fiber and communications engineering, pole attachment, and make-ready engineering.'},
  workTitle:'Delivered Engineering Work',
  work:[
    {t:'Strategic Undergrounding Program',p:['A 14-mile strategic undergrounding program for a leading utility company in Southern California, delivered across two projects.','Pricing came in 20 percent below the average engineering and design contractor on the program.'],link:'Read the strategic undergrounding case study',fn:true},
    {t:'Xcel Energy: Federal Energy Regulatory Commission (FERC) Order 881',p:['T3 identified process efficiencies on FERC Order 881 regulatory-driven equipment-rating updates that a partner engineering firm adopted.']},
    {t:'Quality Control Assignments',p:['T3 received four quality control (QC) assignments on a major client\u2019s own design work inside three months.']}
  ],
  workLink:'Read the strategic undergrounding case study',
  std:{t:'How We Deliver',items:[
    {t:'Work Within Your Standards',p:['T3 learns your standards, processes, and review requirements at the start of the project. Our engineers use your templates and naming conventions, and align submittals with your program calendar.','The team works through which standards govern, what reviewers require, and how approvals proceed. You have direct access to the technical professionals who answer those questions.']},
    {t:'Go Above and Beyond',p:['Property access, landowner and community coordination, and liaison with partner teams are a separate service that complements the engineering. Where permission to enter or site access affects a route or a structure location, T3 can carry that work alongside the design.','When the initial property-liaison firm on an adjacent scope faltered, T3 absorbed that work and delivered it end to end.'],link:'Read the strategic undergrounding case study'}
  ]},
  lic:{t:'Licensure and Certifications',lead:'Engineers licensed in all 50 states and nationally capable.',p:'We can help meet your project requirements for special licensing such as small business or women-owned and more in specific states. Click below for the full list of licenses and certifications.',link:'Certifications'},
  related:{t:'Related Services',items:[{k:'Environmental',i:'leaf'},{k:'Project and Program Management',i:'layers'}]},
  close:{t:'Talk to a Technical Professional',p:'Discuss your project requirements, applicable standards, and submittal schedule with the technical professional who would do the work.'},
  phone:'858-465-7132',email:'info@t3consulting.us'
};
DE.std.p=DE.std.items.flatMap(x=>x.p);
const NAV=['Engineering','Environmental','About'];
const PH=n=>typeof n==='string'?'assets/photos/'+n+'.jpg':'assets/photos/p'+String(n).padStart(2,'0')+'.jpg';
const DE_PHOTOS=[['substation engineering','g1'],['renewable','g2'],['electric vehicle','g3'],['photo · substation','g1'],['substation yard','g1'],['substation crew in hi-vis',13],['wide · substation with crew',20],['trenching along a disturbed road shoulder',7],['undergrounding trench',17],['strategic undergrounding program',8],['strategic undergrounding',17],['photo · undergrounding',17],['transmission line across open terrain',10],['undergrounding crew',4],['engineer on site with drawings',2],['substation yard, wide',16],['early design review',19],['road-shoulder trenching',7],['engineering and environmental team',9],['transmission tower',20],['crew in hi-vis',6],['photo · substation',15],['engineer at drawings',2],['ecd feature image',12],['utility standards review',19],['reviewer coordination',4],['site access, right-of-way',3],['photo · team',14],['photo · engineer',16],['field engineer',5],['transmission engineering',20],['distribution engineering',11],['grid hardening',10],['construction support',15],['xcel',20],['quality control',2]];
function dePhoto(label){const l=(label||'').toLowerCase();const m=DE_PHOTOS.find(([k])=>l.includes(k));return m?PH(m[1]):null;}
function ImageCard(props){const src=props.src||dePhoto(props.placeholder);return <ImageCardBase {...props} src={src||undefined} alt={props.alt||props.title||''}/>;}
const DE_LOGO_W='assets/t3-mark-white.png',DE_LOGO_C='assets/t3-mark-color.png';

function Wrap({children,style,className=''}){return <div className={'de-wrap '+className} style={style}>{children}</div>;}
const sv=n=>window.DE_STATIC?String(n):n;
function Reveal({children,delay=0,style,className}){
  const ref=React.useRef(null);const [on,setOn]=React.useState(!!window.DE_STATIC);
  React.useEffect(()=>{if(window.DE_STATIC)return;const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){setOn(true);io.disconnect();}},{threshold:.1});io.observe(ref.current);return()=>io.disconnect();},[]);
  return <div ref={ref} className={className} style={{opacity:on?1:0,transform:on?'none':'translateY(20px)',transition:`opacity 700ms var(--ease-out) ${delay}ms,transform 700ms var(--ease-out) ${delay}ms`,...style}}>{children}</div>;
}
function CountUp({v}){const m=String(v).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);const ref=React.useRef(null);const [x,setX]=React.useState(window.DE_STATIC||!m?null:0);
  React.useEffect(()=>{if(window.DE_STATIC||!m)return;const io=new IntersectionObserver(e=>{if(!e[0].isIntersecting)return;io.disconnect();const end=parseFloat(m[2]),t0=performance.now(),D=1200;const step=t=>{const p=Math.min(1,(t-t0)/D);setX(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step);else setX(null);};requestAnimationFrame(step);},{threshold:.4});io.observe(ref.current);return()=>io.disconnect();},[]);
  return <span ref={ref}>{x===null?v:m[1]+Math.round(x)+m[3]}</span>;}
function TextLink({children,onDark,style}){return <a href="#" onClick={e=>e.preventDefault()} className={'de-link'+(onDark?' on-dark':'')} style={style}>{children}<Icon name="arrow-right" size={16}/></a>;}
function Lockup({light}){return <a href="#home" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}><img src={light?DE_LOGO_W:DE_LOGO_C} alt="T3 Consulting" style={{height:38}}/><span className="de-hide-sm" style={{font:'700 11px var(--font-display)',letterSpacing:'.22em',color:light?'#fff':'var(--t3-navy)'}}>T3 CONSULTING, INC.</span></a>;}
const ENG_SUB=['Distribution Engineering'];
const ROUTES={'Home':'home','Engineering':'delivery','Delivery Engineering':'delivery','Distribution Engineering':'distribution','Environmental':'environmental','About':'about','Contact':'contact'};
function routeHref(label){return '#'+(ROUTES[label]||'home');}
function SiteHeader({tone='navy',overlay,active=0,noCta,sub}){
  const [sc,setSc]=React.useState(false);const [open,setOpen]=React.useState(false);const hdr=React.useRef(null);
  React.useEffect(()=>{if(window.DE_STATIC||!hdr.current||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;let pg=null,el=hdr.current;while(el){if(el.classList&&el.classList.contains('de-page'))pg=el;el=el.parentElement;}if(!pg)return;const secs=[...pg.querySelectorAll('section')].slice(1);const els=secs.flatMap(s=>[...s.children].filter(c=>c.classList.contains('de-wrap')||c.classList.contains('de-rail-wrap')));const pend=new Set();const show=e=>{e.classList.add('in');pend.delete(e);io.unobserve(e);};const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting||e.boundingClientRect.top<0)show(e.target);}),{threshold:.08});const chk=()=>pend.forEach(e=>{if(e.getBoundingClientRect().top<window.innerHeight)show(e);});els.forEach(e=>{if(e.getBoundingClientRect().top>window.innerHeight){e.classList.add('rv');pend.add(e);io.observe(e);}});window.addEventListener('scroll',chk,{passive:true});return()=>{io.disconnect();window.removeEventListener('scroll',chk);};},[]);
  React.useEffect(()=>{if(!open)return;const f=e=>{const h=hdr.current;if(!h)return;const pg=h.closest('.de-page');const w=pg?pg.getBoundingClientRect().width/((pg.getBoundingClientRect().width/pg.offsetWidth)||1):0;if(w>1279)return;if(!h.contains(e.target))setOpen(false);};document.addEventListener('pointerdown',f,true);return()=>document.removeEventListener('pointerdown',f,true);},[open]);
  React.useEffect(()=>{const f=()=>setSc(window.scrollY>40);f();window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f);},[]);
  const dark=tone==='navy';
  const bg=dark?(sc?'var(--surface-frost-strong)':(overlay?'transparent':'var(--t3-navy)')):(sc?'rgba(255,255,255,.88)':'#fff');
  return <header ref={hdr} style={{position:overlay?(window.DE_STATIC?'absolute':'fixed'):'sticky',left:0,right:0,top:0,zIndex:30,background:bg,backdropFilter:sc?'blur(16px)':'none',WebkitBackdropFilter:sc?'blur(16px)':'none',borderBottom:'1px solid '+(sc?(dark?'var(--surface-frost-border)':'var(--border-hairline)'):'transparent'),transition:'background var(--dur-base),border-color var(--dur-base)'}}>
    <Wrap style={{height:76,display:'flex',alignItems:'center',gap:32}}>
      <Lockup light={dark}/>
      <nav className="de-nav" style={{display:'flex',gap:28,marginLeft:'auto'}}>{NAV.map((n,i)=>{const l=<a href={routeHref(n)} className={'de-navlink'+(dark?' on-dark':'')+(i===active?' active':'')}>{n}</a>;return i===0?<span key={n} className="de-navdd">{l}<span className={'de-dd'+(dark?' on-dark':'')}>{ENG_SUB.map((m,j)=><a key={m} href={routeHref(m)} className={j===sub?'active':''}>{m}</a>)}</span></span>:<React.Fragment key={n}>{l}</React.Fragment>;})}</nav>
      {!noCta&&<div className="de-hide-md"><Button size="sm" iconRight="arrow-right">{DE.cta}</Button></div>}
      <button className={'de-burger'+(open?' open':'')} onClick={()=>setOpen(!open)} aria-label="Menu" aria-expanded={open} style={{color:dark?'#fff':'var(--t3-navy)'}}><Icon name={open?'x':'menu'} size={24}/></button>
    </Wrap>
    {open&&<div className="de-mobile-menu" style={{background:dark?'var(--t3-navy)':'#fff'}}><Wrap style={{display:'flex',flexDirection:'column',gap:4,padding:'8px 20px 24px'}}>{NAV.map((n,i)=><React.Fragment key={n}><a href={routeHref(n)} className={'de-navlink'+(dark?' on-dark':'')+(i===active&&sub==null?' active':'')} style={{padding:'12px 0',fontSize:17}}>{n}</a>{i===0&&ENG_SUB.map((m,j)=><a key={m} href={routeHref(m)} className={'de-navlink'+(dark?' on-dark':'')+(j===sub?' active':'')} style={{padding:'8px 0 12px 16px',fontSize:15}}>{m}</a>)}</React.Fragment>)}<Button iconRight="arrow-right" style={{marginTop:12,marginBottom:8,alignSelf:'flex-start',whiteSpace:'nowrap'}}>{DE.cta}</Button></Wrap></div>}
  </header>;
}
function SiteFooter(){
  return <footer style={{background:'var(--t3-navy-900)',color:'var(--fg-on-inverse-2)',padding:'64px 0 32px'}}>
    <Wrap>
      <div className="de-grid de-g-foot">
        <div className="foot-brand" style={{display:'flex',flexDirection:'column',gap:20}}><Lockup light/><p style={{margin:0,font:'400 14px/22px var(--font-body)',maxWidth:360}}>Engineers licensed in all 50 states. Certifications listed on the /certifications page. Serving clients nationally across utilities, municipal, construction, and industrial markets.</p></div>
        <div className="foot-nav">{NAV.map(n=><a key={n} href={routeHref(n)} className="de-foot-a" style={{height:26}}>{n}</a>)}</div>
        <div className="foot-contact"><div style={{font:'500 13px/26px var(--font-mono)',color:'#fff',display:'flex'}}>Contact: {DE.phone} · {DE.email}</div></div>
      </div>
      <div className="foot-legal" style={{marginTop:48,paddingTop:24,borderTop:'1px solid var(--border-on-inverse)',display:'flex',flexDirection:'column',gap:8,font:'300 12px/19px var(--font-body)',color:'var(--t3-steel-300)'}}>
        <p style={{margin:0}}>Engineering services provided by licensed Professional Engineers in the jurisdiction of the project. Environmental services provided by qualified professionals holding the applicable state or federal credentials for the scope of work.</p>
        <p style={{margin:'12px 0 0',font:'500 12px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>© 2026 T3 Consulting, Inc. All rights reserved.</p>
      </div>
    </Wrap>
  </footer>;
}
function H2({children,onDark,size=44,style}){return <h2 style={{margin:0,font:`800 ${size}px/1.15 var(--font-display)`,letterSpacing:'-.01em',color:onDark?'#fff':'var(--t3-navy)',textWrap:'balance',...style}}>{children}</h2>;}
function P({children,onDark,lg,style,className}){return <p className={className} style={{margin:0,font:`400 ${lg?18:16}px/${lg?30:26}px var(--font-body)`,color:onDark?'var(--fg-on-inverse-2)':'var(--fg-2)',textWrap:'pretty',...style}}>{children}</p>;}
function Chip({icon,onDark}){return <span style={{width:40,height:40,borderRadius:999,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',background:onDark?'rgba(55,198,192,.14)':'var(--t3-turq-100)',color:onDark?'var(--accent)':'var(--t3-turq-700)'}}><Icon name={icon} size={20}/></span>;}
function Bar({style}){return <span style={{display:'block',width:40,height:3,borderRadius:2,background:'var(--accent)',...style}}></span>;}
function Mono({children,onDark,style}){return <span style={{font:'500 13px/20px var(--font-mono)',color:onDark?'var(--accent)':'var(--t3-turq-700)',...style}}>{children}</span>;}
function ContactLine(){return null;}
function Bullets({items,onDark}){return items?<ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:8}}>{items.map(b=><li key={b} style={{display:'grid',gridTemplateColumns:'14px minmax(0,1fr)',gap:8,font:'400 15px/22px var(--font-body)',color:onDark?'var(--fg-on-inverse-2)':'var(--fg-2)'}}><span style={{width:6,height:6,borderRadius:999,background:'var(--accent)',marginTop:8}}></span>{b}</li>)}</ul>:null;}
function HowWeDeliver({tile}){
  const inner=<div className="de-stack" style={{gap:48}}><H2 size={tile?36:44}>{DE.std.t}</H2>
    <div className="de-grid de-g2" style={{gap:48}}>{DE.std.items.map((x,i)=><div key={x.t} className="de-stack" style={{display:'flex',flexDirection:'column',gap:16,paddingTop:tile?0:24,borderTop:tile?'none':'1px solid var(--border-hairline)'}}>
      <h3 className="de-h3">{x.t}</h3>{x.p.map(p=><P key={p}>{p}</P>)}{x.link&&<V6More onDark style={{color:'#1f8682'}}>{x.link}</V6More>}
    </div>)}</div></div>;
  return <section className="de-section"><Wrap>{tile?<div style={{borderRadius:'var(--radius-card)',padding:48,background:'#fff',border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)'}}>{inner}</div>:inner}</Wrap></section>;
}
Object.assign(window,{ROUTES,routeHref,CountUp,Bullets,HowWeDeliver,dePhoto,ImageCard,Bar,sv,DE,NAV,Wrap,Reveal,TextLink,Lockup,SiteHeader,SiteFooter,H2,P,Chip,Mono,ContactLine,DE_LOGO_W,DE_LOGO_C});

if(!window.__v6glow){window.__v6glow=1;document.addEventListener('mousemove',e=>{const el=e.target.closest&&e.target.closest('.v6-card');if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px');},{passive:true});}

if(!window.DE_STATIC)document.documentElement.classList.add('de-live');
