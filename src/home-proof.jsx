const qText=(t,onDark,size=36)=><div className="de-stack" style={{gap:20}}>
  <blockquote style={{margin:0,font:'700 '+size+'px/'+Math.round(size*1.28)+'px var(--font-display)',letterSpacing:'-.01em',color:onDark?'#fff':'var(--t3-navy)',textWrap:'balance'}}>“{t.q}”</blockquote>
  <span style={{font:'500 15px/24px var(--font-body)',color:onDark?'var(--fg-on-inverse-2)':'var(--fg-2)'}}>{t.by}</span>
</div>;
const PQ_PHOTOS=['assets/photos/p06.jpg','assets/photos/p14.jpg','assets/photos/p09.jpg'];

function ProofNavy(){
  return <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'112px 0'}}>
    <div style={{position:'absolute',inset:0,background:'radial-gradient(45% 70% at 25% 40%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
    <RingBackdrop size={620} rings={2} glow={false} opacity={.4} style={{position:'absolute',right:-300,bottom:-320}}/>
    <Wrap className="de-stack" style={{gap:48,position:'relative'}}>
      <H2 onDark>{HM.proofT}</H2>
      <QuoteCarousel onDark maxWidth={1100} slide={(t,k)=><div className="de-grid" style={{gridTemplateColumns:'400px minmax(0,1fr)',gap:72,alignItems:'center',padding:'4px'}}>
        <div style={{height:440,borderRadius:24,overflow:'hidden',border:'1px solid rgba(255,255,255,.18)'}}><img src={PQ_PHOTOS[(k+1)%3]} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></div>
        {qText(t,true,40)}
      </div>}/>
      <div><V6Pill style={{height:48}}>{HM.cta}</V6Pill></div>
    </Wrap>
  </section>;
}

function ProofPhoto(){
  return <section className="de-section" style={{paddingTop:24}}>
    <Wrap className="de-stack" style={{gap:40}}>
      <H2>{HM.proofT}</H2>
      <QuoteCarousel maxWidth={1200} slide={(t,k)=><div style={{position:'relative',height:560,borderRadius:24,overflow:'hidden',background:'var(--t3-navy)'}}>
        <img src={PQ_PHOTOS[k%3]} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.85) 0%,rgba(12,40,52,.45) 50%,rgba(12,40,52,.1) 100%)'}}></div>
        <div style={{position:'absolute',left:56,bottom:56,maxWidth:640}}>{qText(t,true,44)}</div>
      </div>}/>
      <div style={{display:'flex',justifyContent:'center'}}><V6Pill style={{height:48}}>{HM.cta}</V6Pill></div>
    </Wrap>
  </section>;
}

function ProofSplit(){
  return <section style={{position:'relative',overflow:'hidden',background:'#fff'}}>
    <div className="de-grid pq-split" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',minHeight:640}}>
      <div style={{background:'var(--gradient-navy)',padding:'96px 64px 96px 120px',display:'flex',flexDirection:'column',justifyContent:'center',gap:40,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(60% 60% at 20% 20%,rgba(55,198,192,.18),rgba(55,198,192,0) 70%)'}}></div>
        <div style={{position:'relative'}}><H2 onDark>{HM.proofT}</H2></div>
        <div style={{position:'relative'}}><QuoteCarousel onDark maxWidth={560} slide={(t)=>qText(t,true,36)}/></div>
        <div style={{position:'relative'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{HM.cta}</Button></div>
      </div>
      <div className="hp-photo" style={{position:'relative'}}><img src="assets/photos/p06.jpg" alt="Crew in hi-vis overlooking a lake from a pole line" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div>
    </div>
  </section>;
}
Object.assign(window,{ProofNavy,ProofPhoto,ProofSplit});
