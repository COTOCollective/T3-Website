function V1StageTrack(){
  return <div className="de-stack" style={{gap:16}}>
    <ImageCard height={300} placeholder="Field photo · trenching along a disturbed road shoulder"/>
    <div className="de-grid de-g-cmp" style={{gap:16}}>
      <div style={{padding:24,borderRadius:16,border:'1px solid var(--border-hairline)'}}><P style={{fontSize:15,lineHeight:'24px'}}>{DE.ecd.p[2].split('. ')[0]}.</P></div>
      <div style={{padding:24,borderRadius:16,background:'var(--t3-navy)'}}><Bar style={{marginBottom:14}}/><P onDark style={{fontSize:15,lineHeight:'24px',color:'#fff'}}>{DE.ecd.p[2].split('. ')[1]}</P></div>
    </div>
  </div>;
}
function V1HeroSpec(){return <div style={{position:'relative',height:480}}>
  <ImageCard height={480} src="assets/photos/p20.jpg" style={{borderRadius:16}}/>
  <FrostedPanel padding={24} style={{position:'absolute',left:24,right:24,bottom:24,borderRadius:16,display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:16}}>
    {[['12–500 kV','Voltage range'],['50','States licensed'],['5','In-house disciplines']].map(([n,l])=><div key={l} style={{display:'flex',flexDirection:'column',gap:4}}><span style={{font:'500 22px/28px var(--font-mono)',color:'#fff'}}>{n}</span><span style={{font:'600 11px/16px var(--font-display)',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--fg-on-inverse-2)'}}>{l}</span></div>)}
  </FrostedPanel>
</div>;}
function V1HeroStrips(){return <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:12,alignItems:'end',height:480}}>
  <ImageCard height={380} src="assets/photos/p06.jpg" style={{borderRadius:16}}/>
  <ImageCard height={480} src="assets/photos/g1.jpg" style={{borderRadius:16}}/>
  <ImageCard height={320} src="assets/photos/p02.jpg" style={{borderRadius:16}}/>
</div>;}
function V1HeroInset(){return <div style={{position:'relative',height:480,paddingLeft:56}}>
  <ImageCard height={420} src="assets/photos/g1.jpg" style={{borderRadius:16}}/>
  <div style={{position:'absolute',left:0,bottom:0,width:240,borderRadius:16,overflow:'hidden',border:'6px solid var(--t3-navy)'}}><ImageCard height={200} src="assets/photos/p13.jpg" style={{borderRadius:10}}/></div>
  <span style={{position:'absolute',right:0,bottom:16,font:'500 13px/20px var(--font-mono)',color:'var(--accent)'}}>Substation · 12–500 kV</span>
</div>;}
function V1HeroVisual({kind}){return kind==='spec'?<V1HeroSpec/>:kind==='strips'?<V1HeroStrips/>:kind==='inset'?<V1HeroInset/>:<V6Collage/>;}
function V1Form({pill}){return <Card padding={36} style={{display:'flex',flexDirection:'column',gap:16,boxShadow:'var(--shadow-lg)'}}>
          <h2 className="de-h3" style={{fontSize:24,lineHeight:'32px'}}>{DE.close.t}</h2>
          <P style={{fontSize:15,lineHeight:'24px'}}>{DE.close.p}</P>
          <div className="de-grid de-g2" style={{gap:16}}><Input label="Name"/><Input label="Organization"/></div>
          <Input label="Email" type="email"/>
          <Select label={DE.servicesTitle} options={[...DE.services,DE.telecom].map(x=>x.t)}/>
          <div className="v1-scope"><Input label="Project scope" multiline rows={3}/></div>
          {pill?<V6Pill style={{height:48,width:300}}>{DE.cta}</V6Pill>:<Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>}
        </Card>;}
function V1({heroVis="spec"}){
  return <div className="de-page">
    <SiteHeader tone="navy"/>
    <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'96px 0 112px'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 25% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
      <Wrap className="de-grid de-g-hero" style={{position:'relative',alignItems:'flex-start',gap:64}}>
        <Reveal style={{display:'flex',flexDirection:'column',gap:24}}>
          <h1 className="de-hero-h">{DE.h1}</h1>
          <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff',maxWidth:620}}>{DE.lede}</p>
          <P onDark style={{maxWidth:600}}>{DE.intro[0]}</P>
          <P onDark>{DE.intro[1]}</P>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
        </Reveal>
        <V1HeroVisual kind={heroVis}/>
      </Wrap>
    </section>
    <V6Ecd/>
    <V6Services light/>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 60% at 15% 80%,rgba(55,198,192,.16),rgba(55,198,192,0) 70%)'}}></div>
      <Wrap className="de-stack" style={{display:'flex',flexDirection:'column',gap:48,position:'relative'}}>
        <div className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-end'}}><div className="de-stack" style={{gap:16}}><H2 onDark>{DE.workTitle}</H2></div></div>
        <div className="de-grid de-g-hero" style={{gap:24}}>
          <Card tone="navy" padding={0} style={{overflow:'hidden',background:'var(--t3-navy-700)',border:'1px solid var(--surface-frost-border)'}}>
            <ImageCard height={280} placeholder="Field photo · undergrounding trench, Southern California" style={{borderRadius:0}}/>
            <div className="de-stack" style={{padding:32,gap:20}}>
              <h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{DE.work[0].t}</h3>
              {DE.work[0].p.map((p,i)=><P key={i} onDark>{p}</P>)}
              <V6More onDark>{DE.work[0].link}</V6More>
            </div>
          </Card>
          <div className="de-stack" style={{gap:24}}>
            {DE.work.slice(1).map((w,i)=><FrostedPanel key={w.t} padding={32} style={{flex:1,display:'flex',flexDirection:'column',gap:16}}>
              <h3 className="de-h3 on-dark">{w.t}</h3>
              {w.p.map((p,j)=><P key={j} onDark>{p}</P>)}
            </FrostedPanel>)}
            <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>
          </div>
        </div>
      </Wrap>
    </section>
<HowWeDeliver tile/>
    <section className="de-section" style={{paddingTop:48}}>
      <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{position:'absolute',left:-440,top:0}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DE.lic.t}</V6H2>
        <div className="r-panel" style={{borderRadius:24,background:'var(--gradient-navy)',padding:'44px 48px',display:'flex',gap:40,alignItems:'center',position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 90% at 0% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
          <span style={{position:'relative',width:96,height:96,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><Icon name="shield-check" size={84} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{gap:12,position:'relative',flex:1,minWidth:260}}>
            <p style={{margin:0,font:'500 26px/34px var(--font-display)',color:'#fff'}}>{DE.lic.lead}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{DE.lic.p}</p>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>{DE.lic.link}</V6More><Button iconRight="arrow-right" style={{height:48}}>{DE.capCta}</Button></div>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:48}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DE.related.t}</V6H2>
        <div className="de-grid de-g2" style={{gap:20}}>
          {DE.related.items.map(r=><div key={r.k} className="v6-card"><span className="v6-chip"><Icon name={r.i} size={16}/></span><h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{r.k}</h3><V6More onDark style={{color:'#1f8682'}}>Learn more</V6More></div>)}
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <RingBackdrop size={560} rings={2} style={{position:'absolute',left:-220,bottom:-260}}/>
      <Wrap className="de-stack" style={{position:'relative',alignItems:'center',textAlign:'center',gap:24,maxWidth:820}}>
        <Bar/><H2 onDark size={52}>{DE.close.t}</H2><P onDark lg>{DE.close.p}</P>
        <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right" style={{height:48}}>{DE.cta}</Button><Button size="lg" variant="secondary" onDark style={{height:48}}>{DE.capCta}</Button></div><ContactLine onDark/>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.V1=V1;

window.V1Form=V1Form;