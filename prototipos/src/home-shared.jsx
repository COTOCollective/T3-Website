const HM={
  h1:'Infrastructure Engineering and Environmental Compliance in One Firm',
  sub:'For utilities, municipal, construction, and industrial clients. Direct-engineer access on every project.',
  lic:'Engineers licensed in all 50 states.',
  cta:'Talk to a Technical Professional',
  pillarsT:'What T3 Does',
  pillars:[
    {k:'Engineering',b:'Substation, transmission, and distribution design from 12 kV through 500 kV, from first concept to the last design submittal.',i:'zap',img:20},
    {k:'Environmental',b:'Stormwater permitting and compliance, environmental review and permitting, Phase I Environmental Site Assessments, and sustainability advisory.',i:'leaf',img:5},
    {k:'Project and Program Management',b:'Scheduling, cost control, and risk analysis for capital programs, run on your program cadence.',i:'layers',img:14}
  ],
  ecdT:'Environmentally Conscious Design™',
  ecd:'Environmentally Conscious Design (ECD) means the engineering and the environmental review happen together, from the first decision. T3 weighs route options, foundations, and structures against both sets of constraints before drawings begin. Environmental risk gets named early, while it is still a design choice, instead of late, when it is a schedule problem. Stakeholder engagement runs on the same early timeline, so the people who can hold a project up are brought in while the design can still change.',
  ecdLink:'See how Environmentally Conscious Design works.',
  proofT:'Proven Results',
  quote:'They see the big picture and identify risks and gaps in the work.',
  quoteBy:'Matt Merscheim, Par Western Line Contractors',
  clientsT:'Clients and Partners',
  caseT:'A 14-mile strategic undergrounding program for a leading utility company in Southern California, delivered across two projects.',
  case1:'One circuit was accelerated approximately seven months into 2024, allowing the utility to hit an annual mileage target it would have otherwise missed. Pricing came in 15 to 20 percent below the average engineering and design contractor on the program.',
  case2:'Program results reflect the specific scope and site conditions of that project.',
  caseLink:'See the full program in Projects and Case Studies.',
  certT:'Certifications and Licensure',
  cert1:'Engineers licensed in all 50 states, whether or not a project requires it.',
  cert2:'T3 is also a certified diverse business. The verified roster, with certifying bodies and identifiers, is on the Certifications page.',
  newsT:'Latest from T3',
  newsK:'New York licensure.',newsB:'Now licensed in New York, expanding coverage to serve utility and infrastructure clients across the tri-state region.',
  closeT:'Talk to a Technical Professional',
  close:'Tell us the scope and the date it has to be done by. You will be on the phone with the technical professional who would do the work, not an account manager.'
};
const pre=e=>e.preventDefault();
function HLink({children,onDark,style}){return <a href="#" onClick={pre} className={'de-link'+(onDark?' on-dark':'')} style={style}>{children}<Icon name="arrow-right" size={16}/></a>;}
function LogoSlots({onDark,n=5}){return <div className="hm-logos">{Array.from({length:n}).map((_,i)=><div key={i} className={'hm-logo'+(onDark?' on-dark':'')}>Approved logo</div>)}</div>;}
function CertLine({onDark}){return <span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:onDark?'var(--fg-on-inverse-2)':'var(--fg-2)'}}>{HM.certT}</span>;}
function TiltCard({children,className='',style,max=6}){
  const ref=React.useRef(null);
  const mv=e=>{const r=ref.current.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ref.current.style.transform=`perspective(900px) rotateX(${-y*max}deg) rotateY(${x*max}deg) translateY(-2px)`;ref.current.style.setProperty('--mx',(x+.5)*100+'%');ref.current.style.setProperty('--my',(y+.5)*100+'%');};
  const lv=()=>{ref.current.style.transform='';};
  return <a href="#" onClick={pre} ref={ref} onMouseMove={mv} onMouseLeave={lv} className={'hm-tilt '+className} style={style}>{children}</a>;
}
function Rings3D({size=560,style,children}){
  return <div aria-hidden="true" className="hm-rings3d" style={{width:size,height:size,...style}}>
    {children}
    {[1,.78,.56,.34].map((s,i)=><span key={i} style={{width:size*s,height:size*s,animationDelay:`${-i*3}s`,borderColor:i%2?'rgba(55,198,192,.35)':'rgba(255,255,255,.18)'}}></span>)}
    <i></i>
  </div>;
}
Object.assign(window,{HM,HLink,LogoSlots,CertLine,TiltCard,Rings3D,pre});
