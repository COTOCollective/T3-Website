const ECD_S=HM.ecd.split(/(?<=\.)\s+/);
const ECD_ICONS=['route','shield-alert','users'];
const ecdLinkEl=(onDark)=><V6More onDark style={onDark?undefined:{color:'#1f8682'}}>See How Environmentally Conscious Design Works</V6More>;

function EcdOpt1(){
  return <section className="de-section" style={{position:'relative',overflow:'hidden'}}>
    <Wrap className="de-stack" style={{gap:48,position:'relative'}}>
      <Reveal className="de-stack" style={{gap:24,maxWidth:860}}>
        <H2 size={44}>{HM.ecdT}</H2>
        <p style={{margin:0,font:'600 24px/34px var(--font-display)',color:'var(--t3-navy)',textWrap:'pretty',maxWidth:820}}>{ECD_S[0]}</p>
        {ecdLinkEl(false)}
      </Reveal>
      <div className="de-grid de-g3" style={{gap:'30px 30px'}}>
        {ECD_S.slice(1).map((s,i)=><Reveal key={i} delay={i*60} style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:20,padding:'0'}}>
          <span style={{width:48,height:48,borderRadius:99,background:'var(--t3-turq-100)',color:'var(--t3-turq-700)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name={ECD_ICONS[i]} size={22}/></span>
          <div className="de-stack" style={{gap:8}}><P lg>{s}</P></div>
        </Reveal>)}
      </div>
    </Wrap>
  </section>;
}

function EcdOpt2(){
  return <section style={{background:'#fff'}}>
    <div style={{position:'relative',overflow:'hidden',minHeight:620,background:'var(--t3-navy)'}}>
      <img src="assets/photos/p03.jpg" alt="Field engineer reviewing a right-of-way" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.78) 0%,rgba(12,40,52,.35) 55%,rgba(12,40,52,0) 100%)'}}></div>
      <Wrap style={{position:'relative',padding:'120px 0',display:'flex'}}>
        <FrostedPanel strong padding={48} style={{maxWidth:620,display:'flex',flexDirection:'column',gap:24}}>
          <H2 onDark size={44}>{HM.ecdT}</H2>
          <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff',textWrap:'pretty'}}>{ECD_S[0]}</p>
          {ecdLinkEl(true)}
        </FrostedPanel>
      </Wrap>
    </div>
    <Wrap className="de-grid de-g3" style={{gap:48,padding:'80px 0 96px'}}>
      {ECD_S.slice(1).map((s,i)=><Reveal key={i} delay={i*60} className="de-stack" style={{gap:18}}>
        <div className="de-row" style={{gap:14}}><span style={{width:44,height:44,borderRadius:99,background:'var(--t3-turq-100)',color:'var(--t3-turq-700)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name={ECD_ICONS[i]} size={20}/></span><span style={{flex:1,height:1,background:'linear-gradient(90deg,var(--accent),rgba(55,198,192,0))'}}></span></div>
        <P>{s}</P>
      </Reveal>)}
    </Wrap>
  </section>;
}

function EcdOpt3(){
  const W=1200,y1=70,y2=170,ym=120,mx=300;
  return <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'128px 0'}}>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(45% 60% at 30% 40%,rgba(55,198,192,.18),rgba(55,198,192,0) 70%)'}}></div>
    <Wrap className="de-stack" style={{position:'relative',gap:56}}>
      <div className="de-grid" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:64,alignItems:'end'}}>
        <H2 onDark size={48}>{HM.ecdT}</H2>
        <p style={{margin:0,font:'500 20px/30px var(--font-display)',color:'#fff',textWrap:'pretty'}}>{ECD_S[0]}</p>
      </div>
      <svg viewBox={`0 0 ${W} 240`} width="100%" style={{display:'block',overflow:'visible'}} aria-hidden="true">
        <path d={`M0 ${y1} H${mx-120} C${mx-40} ${y1} ${mx-40} ${ym} ${mx} ${ym}`} fill="none" stroke="var(--accent)" strokeWidth="2"/>
        <path d={`M0 ${y2} H${mx-120} C${mx-40} ${y2} ${mx-40} ${ym} ${mx} ${ym}`} fill="none" stroke="var(--t3-green)" strokeWidth="2"/>
        <path d={`M${mx} ${ym} H${W}`} fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="2"/>
        <circle cx={mx} cy={ym} r="7" fill="var(--t3-navy)" stroke="#fff" strokeWidth="2"/>
        <text x="0" y={y1-14} fill="var(--accent)" style={{font:'600 12px var(--font-display)',letterSpacing:'.12em',textTransform:'uppercase'}}>ENGINEERING</text>
        <text x="0" y={y2+26} fill="var(--t3-green)" style={{font:'600 12px var(--font-display)',letterSpacing:'.12em'}}>ENVIRONMENTAL REVIEW</text>
        {[0,1,2].map(i=>{const x=mx+150+i*300;return <g key={i}><circle cx={x} cy={ym} r="5" fill="var(--accent)"/><text x={x} y={ym-18} textAnchor="middle" fill="rgba(255,255,255,.7)" style={{font:'500 13px var(--font-mono)'}}>0{i+1}</text></g>;})}
      </svg>
      <div className="de-grid" style={{gridTemplateColumns:'300px repeat(3,minmax(0,1fr))',gap:24,marginTop:-24}}>
        <div></div>
        {ECD_S.slice(1).map((s,i)=><Reveal key={i} delay={i*80}><FrostedPanel padding={28} style={{height:'100%',display:'flex',flexDirection:'column',gap:14}}>
          <span style={{color:'var(--accent)'}}><Icon name={ECD_ICONS[i]} size={22}/></span>
          <p style={{margin:0,font:'400 15px/24px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{s}</p>
        </FrostedPanel></Reveal>)}
      </div>
      <div style={{paddingLeft:324}}>{ecdLinkEl(true)}</div>
    </Wrap>
  </section>;
}
Object.assign(window,{EcdOpt1,EcdOpt2,EcdOpt3});
