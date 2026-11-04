const CT={
  h1:'Contact T3 Consulting',h2:'Talk to a Technical Professional',
  intro:'Call, email, or send your project details. The person who answers is the person doing the work.',
  detailsT:'Email, Phone, and Location',email:'info@t3consulting.us',phone:'858-465-7132',
  loc:'San Diego, California, with technical professionals working across the country.',
  stepsT:'What Happens When You Reach Out',
  steps:['Your message goes to a technical professional in the discipline your project sits in.','That person reads it, answers it, and states plainly what T3 can and cannot do.','They stay reachable once the work starts. Same person, same phone number.'],
  formT:'Send Us Your Project Details',submit:'Send Your Project Details',
  confirm:'Thank you for your submission. A technical professional will reach out to you shortly. If you have an emergency, please call us at 858-465-7132.',
  linksT:'Go Straight to a Service',linksP:'If you would rather read first, start with the page that matches what you need.',
  links:['Engineering','Distribution Engineering','Environmental'],
  areas:['Engineering','Environmental','Project and Program Management'],
  closeT:'Talk to a Technical Professional'
};
const ctLabel={font:'600 12px/16px var(--font-display)',letterSpacing:'.14em',textTransform:'uppercase'};
function CtBig({href,children,onDark,size=40}){return <a href={href} className={'ct-big'+(onDark?' on-dark':'')} style={{font:`800 ${size}px/1.1 var(--font-display)`,letterSpacing:'-.015em'}}>{children}</a>;}
function CtDetails({onDark,size}){const lc=onDark?'var(--accent)':'var(--t3-steel)';
  return <div className="de-stack" style={{gap:28}}>
    <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:lc}}>Email</span><CtBig href={'mailto:'+CT.email} onDark={onDark} size={size}>{CT.email}</CtBig></div>
    <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:lc}}>Phone</span><CtBig href={'tel:'+CT.phone} onDark={onDark} size={size}>{CT.phone}</CtBig></div>
    <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:lc}}>Location</span><P onDark={onDark}>{CT.loc}</P></div>
  </div>;}
function CtSteps({onDark,cols}){return <ol className={'ct-steps'+(cols?' de-grid de-g3':'')} style={{margin:0,padding:0,listStyle:'none',display:cols?'grid':'flex',flexDirection:'column',gap:cols?32:0}}>
  {CT.steps.map((s,i)=><li key={i} style={{display:'grid',gridTemplateColumns:'48px minmax(0,1fr)',gap:16,padding:cols?'24px 0 0':'24px 0',borderTop:'1px solid '+(onDark?'var(--surface-frost-border)':'var(--border-hairline)')}}>
    <span style={{font:'800 28px/32px var(--font-display)',color:onDark?'var(--accent)':'var(--t3-turq-700)'}}>{i+1}</span>
    <P onDark={onDark} lg>{s}</P>
  </li>)}
</ol>;}
function CtForm({onDark}){
  const [sent,setSent]=React.useState(false);
  const f={display:'flex',flexDirection:'column',gap:8};
  const lab={font:'600 14px/20px var(--font-body)',color:'var(--t3-navy)'};
  const inp={font:'400 16px/24px var(--font-body)',color:'var(--t3-navy)',padding:'12px 14px',borderRadius:8,border:'1px solid var(--border-strong)',background:'#fff',width:'100%',boxSizing:'border-box'};
  if(sent)return <div className="de-stack ct-confirm" style={{gap:20,padding:'8px 0'}}>
    <span style={{width:48,height:48,borderRadius:99,background:'var(--t3-turq-100)',color:'var(--t3-turq-700)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name="check" size={24}/></span>
    <P lg style={{color:'var(--t3-navy)'}}>{CT.confirm}</P>
    <button type="button" className="de-link" style={{all:'unset',cursor:'pointer',font:'600 14px/20px var(--font-body)',color:'var(--t3-turq-700)'}} onClick={()=>setSent(false)}>Back to form</button>
  </div>;
  return <form className="de-stack ct-form" style={{gap:18}} onSubmit={e=>{e.preventDefault();setSent(true);}}>
    {[['Your name','text'],['Organization','text'],['Email','email'],['Phone (optional)','tel']].map(([l,t])=><label key={l} style={f}><span style={lab}>{l}</span><input type={t} style={inp}/></label>)}
    <label style={f}><span style={lab}>Service area</span><select style={{...inp,appearance:'auto'}} defaultValue=""><option value="" disabled></option>{CT.areas.map(o=><option key={o}>{o}</option>)}</select></label>
    <label style={f}><span style={lab}>Project details</span><textarea rows={5} style={{...inp,resize:'vertical'}}></textarea></label>
    <Button type="submit" iconRight="arrow-right" style={{alignSelf:'flex-start',height:48,marginTop:6}}>{CT.submit}</Button>
  </form>;}
function CtLinks({onDark}){const ic={'Engineering':'zap','Distribution Engineering':'utility-pole','Environmental':'leaf'};return <div className="de-stack" style={{gap:40}}>
  <div className="de-stack" style={{gap:16}}><V6H2>{CT.linksT}</V6H2><P>{CT.linksP}</P></div>
  <div className="de-grid de-g3" style={{gap:20}}>{CT.links.map(l=><div key={l} className="v6-card"><span className="v6-chip"><Icon name={ic[l]||'arrow-right'} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{l}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div>)}</div>
</div>;}
function CtClose(){return <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
  <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
  <RingBackdrop size={560} rings={2} style={{position:'absolute',right:-220,bottom:-260}}/>
  <Wrap className="de-stack" style={{position:'relative',gap:28}}>
    <Bar/><h2 style={{margin:0,font:'800 64px/68px var(--font-display)',letterSpacing:'-.02em',color:'#fff',textWrap:'balance'}}>{CT.closeT}</h2>
    <div className="de-row" style={{gap:'12px 20px',flexWrap:'wrap',font:'500 22px/30px var(--font-display)'}}><a href={'mailto:'+CT.email} className="ct-big on-dark">{CT.email}</a><span style={{color:'var(--accent)'}}>·</span><a href={'tel:'+CT.phone} className="ct-big on-dark">{CT.phone}</a></div>
  </Wrap>
</section>;}
const ctCard={background:'#fff',borderRadius:24,border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-lg)',padding:40};

// A — navy split: details left, form card right
function ContactA(){return <div className="de-page">
  <SiteHeader tone="navy" active={-1}/>
  <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'96px 0 120px'}}>
    <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
    <Wrap className="de-grid de-g2" style={{position:'relative',gap:64,alignItems:'start'}}>
      <div className="de-stack" style={{gap:40}}>
        <div className="de-stack" style={{gap:20}}><h1 className="ct-h1" style={{...ctLabel,margin:0,color:'var(--accent)'}}>{CT.h1}</h1><h2 className="de-hero-h">{CT.h2}</h2><p style={{margin:0,font:'400 20px/32px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:520}}>{CT.intro}</p></div>
        <div className="de-stack" style={{gap:20,paddingTop:32,borderTop:'1px solid var(--surface-frost-border)'}}><CtDetails onDark size={36}/></div>
      </div>
      <div className="ct-card" style={ctCard}><div className="de-stack" style={{gap:24}}><H2 size={28}>{CT.formT}</H2><CtForm/></div></div>
    </Wrap>
  </section>
  <section className="de-section"><Wrap className="de-stack" style={{gap:40}}><H2>{CT.stepsT}</H2><CtSteps cols/></Wrap></section>
  <section className="de-section de-hair" style={{paddingTop:72}}><Wrap><CtLinks/></Wrap></section>
  <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
    <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
    <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
    <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
      <Bar/><H2 onDark size={52}>{DE.close.t}</H2>
      <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button><Button size="lg" variant="secondary" onDark style={{height:48}}>{DE.capCta}</Button></div>
    </Wrap>
  </section>
  <SiteFooter/>
</div>;}

// B — white editorial: contact details at headline scale, steps + form side by side
function ContactB(){return <div className="de-page">
  <SiteHeader tone="light" active={-1}/>
  <section style={{padding:'88px 0 72px',position:'relative',overflow:'hidden'}}>
    <RingBackdrop size={720} rings={2} glow={false} opacity={.5} style={{position:'absolute',right:-300,top:-160}}/>
    <Wrap className="de-stack" style={{position:'relative',gap:48}}>
      <div className="de-stack" style={{gap:16,maxWidth:760}}><h1 className="ct-h1" style={{...ctLabel,margin:0,color:'var(--t3-turq-700)'}}>{CT.h1}</h1><h2 className="de-hero-h dark">{CT.h2}</h2><P lg>{CT.intro}</P></div>
      <div className="de-stack" style={{gap:20}}><h2 style={{...ctLabel,margin:0,color:'var(--t3-steel)'}}>{CT.detailsT}</h2>
        <div className="de-grid ct-bigrow" style={{gridTemplateColumns:'minmax(0,1.6fr) minmax(0,1fr) minmax(0,1fr)',gap:40,alignItems:'end',paddingTop:24,borderTop:'2px solid var(--t3-navy)'}}>
          <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:'var(--t3-steel)'}}>Email</span><CtBig href={'mailto:'+CT.email} size={40}>{CT.email}</CtBig></div>
          <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:'var(--t3-steel)'}}>Phone</span><CtBig href={'tel:'+CT.phone} size={40}>{CT.phone}</CtBig></div>
          <div className="de-stack" style={{gap:6}}><span style={{...ctLabel,color:'var(--t3-steel)'}}>Location</span><P>{CT.loc}</P></div>
        </div>
      </div>
    </Wrap>
  </section>
  <section className="de-section de-hair">
    <Wrap className="de-grid de-g2" style={{gap:80,alignItems:'start'}}>
      <div className="de-stack r-unstick" style={{gap:32,position:'sticky',top:100}}><H2 size={36}>{CT.stepsT}</H2><CtSteps/></div>
      <div className="de-stack" style={{gap:24}}><H2 size={36}>{CT.formT}</H2><CtForm/></div>
    </Wrap>
  </section>
  <section className="de-section de-hair" style={{paddingTop:72}}><Wrap><CtLinks/></Wrap></section>
  <CtClose/><SiteFooter/>
</div>;}

// C — field photo hero with frosted details panel; navy steps band; form
function ContactC(){return <div className="de-page">
  <section style={{position:'relative',overflow:'hidden',background:'var(--t3-navy)',minHeight:760,display:'flex',flexDirection:'column'}}>
    <img src="assets/photos/p13.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(12,40,52,.5),rgba(12,40,52,0) 50%)'}}></div>
    <div style={{position:'absolute',top:0,left:0,right:0,zIndex:5}}><SiteHeader overlay active={-1}/></div>
    <Wrap className="de-grid de-g2" style={{position:'relative',marginTop:'auto',paddingTop:140,paddingBottom:72,gap:24,alignItems:'end'}}>
      <FrostedPanel padding={48} style={{borderRadius:24,display:'flex',flexDirection:'column',gap:20}}><h1 className="ct-h1" style={{...ctLabel,margin:0,color:'var(--accent)'}}>{CT.h1}</h1><h2 className="de-hero-h" style={{fontSize:60,lineHeight:'64px'}}>{CT.h2}</h2><p style={{margin:0,font:'400 19px/30px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{CT.intro}</p></FrostedPanel>
      <FrostedPanel padding={40} style={{borderRadius:24,display:'flex',flexDirection:'column',gap:20}}><h2 style={{...ctLabel,margin:0,color:'#fff'}}>{CT.detailsT}</h2><CtDetails onDark size={32}/></FrostedPanel>
    </Wrap>
  </section>
  <section className="de-section">
    <Wrap className="de-grid de-g-hero" style={{gap:64,alignItems:'start'}}>
      <div style={ctCard}><div className="de-stack" style={{gap:24}}><H2 size={32}>{CT.formT}</H2><CtForm/></div></div>
      <div className="de-stack" style={{gap:32,background:'var(--t3-navy)',borderRadius:24,padding:40,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
        <div style={{position:'relative'}} className="de-stack"><H2 onDark size={28}>{CT.stepsT}</H2><div style={{marginTop:24}}><CtSteps onDark/></div></div>
      </div>
    </Wrap>
  </section>
  <section className="de-section de-hair" style={{paddingTop:72}}><Wrap><CtLinks/></Wrap></section>
  <CtClose/><SiteFooter/>
</div>;}
Object.assign(window,{CT,ContactA,ContactB,ContactC});
