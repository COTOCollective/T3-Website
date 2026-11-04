function HomeDCert({extra,noPill}){
  const navyPanel={position:'relative',overflow:'hidden',borderRadius:24,background:'var(--gradient-navy)'};
  const glow=<div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 20% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>;
  return <section className="de-section" style={{paddingTop:24}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{HM.certT}</H2>
        <div className="r-panel" style={{...navyPanel,padding:'44px 48px',display:'flex',gap:40,alignItems:'center',flexWrap:'wrap'}}>
          {glow}
          <span style={{position:'relative',color:'#fff',flex:'none'}}><Icon name="shield-check" size={88} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{position:'relative',gap:12,flex:1,minWidth:280}}>
            <p style={{margin:0,font:'700 26px/34px var(--font-display)',color:'#fff'}}>{HM.cert1}</p>
            <P onDark style={{fontSize:15,lineHeight:'24px',maxWidth:720}}>{HM.cert2}</P>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>Certifications</V6More>{!noPill&&<V6Pill style={{height:48}}>Request our Capability Statement</V6Pill>}{extra}</div>
          </div>
        </div>
      </Wrap>
    </section>;
}
const HD_QUOTES=[1,2,3].map(()=>({q:HM.quote,by:HM.quoteBy,img:'Portrait · Matt Merscheim'}));
function QuoteCarousel({slide,onDark,maxWidth=960,controlsWrap}){
  const [i,setI]=React.useState(0);const [anim,setAnim]=React.useState(true);const n=HD_QUOTES.length;const slides=[...HD_QUOTES,HD_QUOTES[0]];
  React.useEffect(()=>{const t=setTimeout(()=>{setAnim(true);setI(v=>v+1);},5000);return()=>clearTimeout(t);},[i]);
  React.useEffect(()=>{if(i===n){const t=setTimeout(()=>{setAnim(false);setI(0);},620);return()=>clearTimeout(t);}if(!anim){const r=requestAnimationFrame(()=>setAnim(true));return()=>cancelAnimationFrame(r);}},[i,anim]);
  const go=v=>{setAnim(true);setI(v);};const cur=i%n;
  return <div className="de-stack" style={{gap:32,maxWidth,margin:'0 auto',width:'100%'}}>
    <div style={{overflow:'hidden'}}>
      <div style={{display:'flex',transform:'translateX('+(-i*100)+'%)',transition:anim?'transform 600ms var(--ease-out)':'none'}}>
        {slides.map((t,k)=>slide?<div key={k} style={{flex:'0 0 100%'}}>{slide(t,k)}</div>:<div key={k} className="de-grid" style={{flex:'0 0 100%',gridTemplateColumns:'280px minmax(0,1fr)',gap:56,alignItems:'center',padding:'12px 4px'}}>
          <div style={{position:'relative',height:280}}>
            <div style={{position:'absolute',inset:0,transform:'rotate(-6deg)',borderRadius:20,background:'var(--t3-steel-100)'}}></div>
            <div style={{position:'absolute',inset:0,transform:'rotate(-2deg)',borderRadius:20,background:'var(--t3-steel-200)'}}></div>
            <ImageCard height={280} placeholder={t.img} style={{position:'relative',borderRadius:20}}/>
          </div>
          {t.q?<div className="de-stack" style={{gap:20}}>
            <blockquote style={{margin:0,font:'700 36px/46px var(--font-display)',letterSpacing:'-.01em',color:'var(--t3-navy)',textWrap:'balance'}}>“{t.q}”</blockquote>
            <span style={{font:'500 15px/24px var(--font-body)',color:'var(--fg-2)'}}>{t.by}</span>
          </div>:<div style={{height:200,borderRadius:16,border:'1px dashed var(--border-strong)',display:'flex',alignItems:'center',justifyContent:'center',font:'500 12px var(--font-mono)',letterSpacing:'.06em',textTransform:'uppercase',color:'var(--t3-steel-300)'}}>Client quote {k+1} · to be supplied</div>}
        </div>)}
      </div>
    </div>
    <div className="de-row" style={{justifyContent:'space-between',...(controlsWrap||{})}}>
      <div className="de-row" style={{gap:8}}>{HD_QUOTES.map((_,k)=><button key={k} aria-label={'Quote '+(k+1)} onClick={()=>go(k)} style={{all:'unset',cursor:'pointer',width:k===cur?28:8,height:8,borderRadius:99,background:k===cur?'var(--accent)':(onDark?'rgba(255,255,255,.3)':'var(--border-strong)'),transition:'width 300ms var(--ease-out)'}}></button>)}</div>
      <div className="de-row" style={{gap:12}}>
        <button aria-label="Previous" onClick={()=>go((cur-1+n)%n)} style={{all:'unset',cursor:'pointer',width:36,height:36,borderRadius:99,border:onDark?'1px solid rgba(255,255,255,.35)':'1px solid var(--border-default)',color:onDark?'#fff':'var(--t3-steel)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name="arrow-left" size={16}/></button>
        <button aria-label="Next" onClick={()=>go(cur+1)} style={{all:'unset',cursor:'pointer',width:36,height:36,borderRadius:99,border:onDark?'1px solid rgba(255,255,255,.35)':'1px solid var(--border-default)',color:onDark?'#fff':'var(--t3-steel)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}><Icon name="arrow-right" size={16}/></button>
      </div>
    </div>
  </div>;
}
function HomeDProof(){return <section className="de-section" style={{paddingTop:24}}>
      <RingBackdrop size={520} rings={1} glow={false} opacity={.5} style={{position:'absolute',left:-440,top:40}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{HM.proofT}</H2>
        <QuoteCarousel/>
        <div style={{display:'flex',justifyContent:'center'}}><V6Pill style={{height:48}}>{HM.cta}</V6Pill></div>
      </Wrap>
    </section>;}
function HomeD(){
  const tile=(n,alt,st)=><div style={{borderRadius:16,overflow:'hidden',...st}}><img src={PH(n)} alt={alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>;
  const navyPanel={position:'relative',overflow:'hidden',borderRadius:24,background:'var(--gradient-navy)'};
  const glow=<div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 20% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>;
  return <div className="de-page">
    <SiteHeader tone="light"/>
    <section style={{padding:'8px 24px 0'}}>
      <div style={{...navyPanel,borderRadius:28,padding:'72px 56px'}}>
        {glow}
        <RingBackdrop size={760} rings={2} glow={false} opacity={.45} style={{position:'absolute',left:-380,bottom:-520}}/>
        <div className="de-grid de-g2" style={{position:'relative',gap:56,alignItems:'center',maxWidth:1296,margin:'0 auto'}}>
          <Reveal className="de-stack" style={{gap:24}}>
            <h1 className="de-hero-h" style={{margin:0}}>{HM.h1}</h1>
            <p style={{margin:0,font:'500 20px/30px var(--font-display)',color:'#fff',maxWidth:560}}>{HM.sub}</p>
            <span style={{font:'500 16px/20px var(--font-mono)',color:'var(--accent)'}}>{HM.lic}</span>
            
          </Reveal>
          <div style={{display:'none',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'190px 110px 190px',gap:12}}>
            {tile(20,'Transmission structure against open sky',{gridRow:'1 / 3'})}
            {tile(13,'Crew in hard hats and hi-vis on a substation site')}
            {tile(15,'Bucket truck working on an overhead line',{gridRow:'2 / 4'})}
            {tile(2,'Engineer reviewing drawings on site')}
          </div>
          <V1Form pill/>
        </div>
      </div>
    </section>
    <HomeBPillars/>
    <EcdOpt1/>
    <HomeDProof/>
    <section style={{padding:'0 0 96px'}}>
      <Wrap className="de-stack" style={{gap:24}}><span style={{font:'600 13px/18px var(--font-display)',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--fg-2)',textAlign:'center'}}>{HM.clientsT}</span><LogoSlots/></Wrap>
    </section>
    <HomeBCase/>
    <HomeDCert/>
    <section className="de-section" style={{paddingTop:24}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <H2>{HM.newsT}</H2>
        <div className="de-grid de-g3" style={{gap:20}}>
          <Card padding={0} style={{overflow:'hidden',display:'flex',flexDirection:'column'}}>
            <ImageCard height={220} placeholder="Photo · New York licensure" style={{borderRadius:0}}/>
            <div className="de-stack" style={{padding:24,gap:10}}><Mono>Date TBC</Mono><h3 className="de-h3">{HM.newsK}</h3><P style={{fontSize:15,lineHeight:'24px'}}>{HM.newsB}</P></div>
          </Card>
        </div>
      </Wrap>
    </section>
    <section style={{padding:'0 24px'}}>
      <div style={{...navyPanel,borderRadius:'28px 28px 0 0',padding:'88px 32px'}}>
        {glow}
        <div className="v6-cta-grid" style={{position:'relative',maxWidth:1296,margin:'0 auto'}}>
          <div className="de-stack v6-side" style={{gap:12}}>{tile(14,'T3 team members at an industry event',{height:200})}{tile(9,'Engineering and environmental team on site',{height:150,marginRight:48})}</div>
          <div className="de-stack" style={{gap:20,alignItems:'center',textAlign:'center'}}>
            <H2 onDark size={48}>{HM.closeT}</H2><P onDark lg>{HM.close}</P>
            <V6Pill style={{height:48}}>{HM.cta}</V6Pill>
            <ContactLine onDark/>
          </div>
          <div className="de-stack v6-side" style={{gap:12,justifyContent:'center'}}>{tile(5,'Field engineer on site',{height:240,marginLeft:48})}</div>
        </div>
      </div>
    </section>
    <div style={{padding:'0 24px'}}><SiteFooter/></div>
  </div>;
}
window.HomeD=HomeD;window.QuoteCarousel=QuoteCarousel;window.HD_QUOTES=HD_QUOTES;window.HomeDProof=HomeDProof;window.HomeDCert=HomeDCert;
