const hhH1={margin:0,font:'800 72px/76px var(--font-display)',letterSpacing:'-.02em',color:'#fff',textWrap:'balance'};
const hhSub={margin:0,font:'400 20px/32px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:600};
const hhLic={font:'500 16px/20px var(--font-mono)',color:'var(--accent)'};
function HHPhoto({src,pos='center'}){return <img src={src} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:pos}}/>;}
function HHCta(){return <Button size="lg" iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{HM.cta}</Button>;}
function HHShell({children,h=860}){return <div className="de-page"><section className="hh-shell" style={{position:'relative',overflow:'hidden',minHeight:h,background:'var(--t3-navy)',display:'flex',flexDirection:'column'}}><div style={{position:'absolute',top:0,left:0,right:0,zIndex:5}}><SiteHeader overlay active={-1}/></div>{children}</section></div>;}

// A — left scrim, text bottom-left
function HeroA(){return <HHShell>
  <HHPhoto src="assets/photos/p10.jpg"/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.94) 0%,rgba(12,40,52,.75) 42%,rgba(12,40,52,.15) 75%),linear-gradient(0deg,rgba(12,40,52,.6),rgba(12,40,52,0) 40%)'}}></div>
  <Wrap className="de-stack" style={{position:'relative',marginTop:'auto',paddingBottom:96,gap:28}}>
    <div className="de-stack" style={{gap:28,maxWidth:720}}><h1 style={hhH1}>{HM.h1}</h1><p style={hhSub}>{HM.sub}</p><HHCta/><span style={hhLic}>{HM.lic}</span></div>
  </Wrap>
</HHShell>;}

// B — centered statement over even scrim
function HeroB(){return <HHShell>
  <HHPhoto src="assets/photos/p20.jpg" pos="center 40%"/>
  <div style={{position:'absolute',inset:0,background:'rgba(12,40,52,.66)'}}></div>
  <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)',opacity:.6}}></div>
  <Wrap className="de-stack" style={{position:'relative',margin:'auto',paddingTop:80,alignItems:'center',textAlign:'center',gap:28,maxWidth:980}}>
    <span style={hhLic}>{HM.lic}</span><h1 style={{...hhH1,fontSize:80,lineHeight:'84px'}}>{HM.h1}</h1><p style={{...hhSub,maxWidth:640}}>{HM.sub}</p>
    <Button size="lg" iconRight="arrow-right" style={{height:48}}>{HM.cta}</Button>
  </Wrap>
</HHShell>;}

// C — frosted navy panel over full photo
function HeroC(){return <HHShell>
  <HHPhoto src="assets/photos/g1.jpg" pos="center 30%"/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(12,40,52,.55),rgba(12,40,52,.1) 60%)'}}></div>
  <Wrap style={{position:'relative',margin:'auto 0 0',paddingBottom:72,width:'100%'}}>
    <FrostedPanel padding={48} style={{borderRadius:24,maxWidth:760,display:'flex',flexDirection:'column',gap:24}}>
      <h1 className="hh-h1" style={{...hhH1,fontSize:60,lineHeight:'64px'}}>{HM.h1}</h1><p style={hhSub}>{HM.sub}</p>
      <div className="de-row" style={{gap:24,flexWrap:'wrap',alignItems:'center'}}><HHCta/><span style={hhLic}>{HM.lic}</span></div>
    </FrostedPanel>
  </Wrap>
</HHShell>;}

// D — oversized headline, frosted base bar
function HeroD(){return <HHShell h={900}>
  <HHPhoto src="assets/photos/p15.jpg" pos="center 35%"/>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(12,40,52,.92) 0%,rgba(12,40,52,.55) 45%,rgba(12,40,52,.25) 100%)'}}></div>
  <Wrap style={{position:'relative',marginTop:'auto',paddingBottom:40}}><h1 style={{...hhH1,fontSize:88,lineHeight:'90px',maxWidth:1100}}>{HM.h1}</h1></Wrap>
  <div style={{position:'relative',background:'rgba(12,40,52,.72)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',borderTop:'1px solid var(--surface-frost-border)'}}>
    <Wrap className="de-row" style={{padding:'28px 48px',justifyContent:'space-between',alignItems:'center',gap:32,flexWrap:'wrap'}}>
      <p style={{...hhSub,fontSize:18,lineHeight:'28px',maxWidth:560}}>{HM.sub}</p>
      <div className="de-row" style={{gap:28,alignItems:'center',flexWrap:'wrap'}}><span style={hhLic}>{HM.lic}</span><Button size="lg" iconRight="arrow-right" style={{height:48}}>{HM.cta}</Button></div>
    </Wrap>
  </div>
</HHShell>;}

// E — crossfading photo set with field captions
const HH_SLIDES=[['assets/photos/p12.jpg','Environmental'],['assets/photos/g2.jpg','Sustainability'],['assets/photos/g3.jpg','Engineering & Design'],['assets/photos/g1.jpg','Program Management'],['assets/photos/stakeholder.png','Stakeholder Engagement']];
function HeroE({cta=true,anchor}){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{const t=setInterval(()=>setI(v=>(v+1)%HH_SLIDES.length),4500);return()=>clearInterval(t);},[]);
  return <HHShell>
    <div style={{position:'absolute',inset:0}} data-comment-anchor={anchor}>{HH_SLIDES.map(([s],k)=><div key={s} style={{position:'absolute',inset:0,opacity:k===i?1:0,transition:'opacity 1200ms var(--ease-out)'}}><HHPhoto src={s}/></div>)}</div>
    <Wrap className="de-grid hh-e" style={{position:'relative',margin:'auto auto 0',paddingBottom:72,width:'100%',gridTemplateColumns:'minmax(0,1fr) auto',gap:48,alignItems:'end'}}>
      <FrostedPanel padding={48} style={{borderRadius:24,maxWidth:760,display:'flex',flexDirection:'column',gap:24}}>
        <h1 className="hh-h1" style={{...hhH1,fontSize:60,lineHeight:'64px'}}>{HM.h1}</h1><p style={hhSub}>{HM.sub}</p>
        <div className="de-row" style={{gap:24,flexWrap:'wrap',alignItems:'center'}}>{cta&&<HHCta/>}<span style={{font:'600 13px/20px var(--font-body)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--accent)'}}>{HM.lic}</span></div>
      </FrostedPanel>
      <FrostedPanel padding={20} style={{borderRadius:16,minWidth:240,display:'flex',flexDirection:'column',gap:12}}>{HH_SLIDES.map(([s,l],k)=><button key={s} onClick={()=>setI(k)} className={'hh-lab'+(k===i?' on':'')} style={{all:'unset',cursor:'pointer',display:'flex',flexDirection:'column',gap:8}}>
        <span style={{height:2,borderRadius:2,background:k===i?'var(--accent)':'rgba(255,255,255,.25)',transition:'background var(--dur-base)'}}></span>
        <span style={{font:'300 13px/16px var(--font-body)',letterSpacing:'.1em',textTransform:'uppercase',color:k===i?'#fff':'var(--fg-on-inverse-2)'}}>{l}</span></button>)}</FrostedPanel>
    </Wrap>
  </HHShell>;
}
Object.assign(window,{HeroA,HeroB,HeroC,HeroD,HeroE});
