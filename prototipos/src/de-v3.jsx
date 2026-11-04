function V3Photo({label,style,children}){return <div style={{position:'relative',overflow:'hidden',background:'var(--gradient-navy)',...style}}>
  <div style={{position:'absolute',inset:0,background:'radial-gradient(60% 70% at 70% 30%,rgba(55,198,192,.18),rgba(55,198,192,0) 70%)'}}></div>
  {dePhoto(label)&&<img src={dePhoto(label)} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>}
  {!dePhoto(label)&&<span style={{position:'absolute',top:96,right:48,font:'500 11px var(--font-mono)',letterSpacing:'.08em',textTransform:'uppercase',color:'rgba(255,255,255,.4)'}}>{label}</span>}
  <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(12,40,52,.35) 0%,rgba(12,40,52,.2) 40%,rgba(12,40,52,.88) 100%)'}}></div>
  <div style={{position:'relative',height:'100%'}}>{children}</div>
</div>;}
function V3(){
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  return <div className="de-page">
    <SiteHeader tone="navy" overlay/>
    <V3Photo label="Field photo · transmission line across open terrain, golden hour" style={{minHeight:900}}>
      <Wrap style={{minHeight:900,display:'flex',flexDirection:'column',justifyContent:'flex-end',paddingTop:160,paddingBottom:56,gap:40}}>
        <div className="de-grid de-g-hero" style={{gap:48,alignItems:'end'}}>
          <Reveal className="de-stack" style={{display:'flex',flexDirection:'column',gap:24}}>
            <Bar/>
            <h1 className="de-hero-h xl">{DE.h1}</h1>
            <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff',maxWidth:600}}>{DE.lede}</p>
          </Reveal>
          <Reveal delay={120}><FrostedPanel padding={32} style={{display:'flex',flexDirection:'column',gap:20}}>
            <P onDark style={{color:'#fff'}}>{DE.intro[0]}</P>
            <div className="de-row" style={{flexWrap:'wrap'}}><Button iconRight="arrow-right">{DE.cta}</Button></div>
          </FrostedPanel></Reveal>
        </div>
      </Wrap>
    </V3Photo>
    <section className="de-section">
      <Wrap style={{maxWidth:1100}}><Reveal><p style={{margin:0,font:'700 40px/52px var(--font-display)',letterSpacing:'-.01em',color:'var(--t3-navy)',textWrap:'pretty'}}>{DE.intro[1].split('. ')[0]}. <span style={{color:'var(--t3-steel)'}}>{DE.intro[1].split('. ')[1]}</span></p></Reveal></Wrap>
    </section>
    <section className="de-section" style={{paddingTop:0}}>
      <Wrap className="de-grid de-g2" style={{gap:64,alignItems:'stretch'}}>
        <ImageCard height="100%" placeholder="Field photo · trenching along a disturbed road shoulder" style={{minHeight:560}}/>
        <div className="de-stack" style={{gap:20,justifyContent:'center'}}>
          <Bar/>
          <H2>{DE.ecd.title}</H2>
          {DE.ecd.p.map((p,i)=><P key={i} lg={i===0}>{p}</P>)}
          <TextLink>{DE.ecd.link}</TextLink>
        </div>
      </Wrap>
    </section>
    <Wrap className="de-stack" style={{gap:40}}>
      <V6H2>{DE.servicesTitle}</V6H2>
      <div className="de-grid de-g3" style={{gap:20}}>
        {DE.services.map(s=><div key={s.t} className="v6-card">
          <span className="v6-chip"><Icon name={s.i} size={16}/></span>
          <h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'var(--t3-navy)'}}>{s.t}</h3>
          <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-2)',flex:1}}>{s.b}</p>
          <V6Sketch label={'Line illustration · '+s.t}/>
          <V6More>{s.l}</V6More>
        </div>)}
        <div className="v6-card" style={{background:'var(--t3-navy)',border:'none'}}>
          <span className="v6-chip" style={{background:'rgba(55,198,192,.16)',color:'var(--accent)'}}><Icon name={DE.telecom.i} size={16}/></span>
          <h3 style={{margin:0,font:'500 20px/26px var(--font-display)',color:'#fff'}}>{DE.telecom.t}</h3>
          <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)'}}>{DE.telecom.b}</p>
        </div>
      </div>
    </Wrap>
    <V3Photo label="Field photo · undergrounding crew, Southern California" style={{minHeight:820}}>
      <Wrap style={{minHeight:820,padding:'96px 48px',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:40}}>
        <div className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap'}}><div className="de-stack" style={{gap:16}}><Bar/><H2 onDark>{DE.workTitle}</H2></div><TextLink onDark>{DE.workLink}</TextLink></div>
        <div className="de-grid de-g-hero" style={{alignItems:'end'}}>
          <FrostedPanel strong padding={36} style={{display:'flex',flexDirection:'column',gap:16}}>
            <h3 className="de-h3 on-dark" style={{fontSize:24,lineHeight:'32px'}}>{DE.work[0].t}</h3>
            {DE.work[0].p.map((p,i)=><P key={i} onDark>{p}</P>)}
          </FrostedPanel>
          <div className="de-stack" style={{gap:16}}>{DE.work.slice(1).map(w=><FrostedPanel key={w.t} padding={28} style={{display:'flex',flexDirection:'column',gap:10}}><h3 className="de-h3 on-dark" style={{fontSize:17}}>{w.t}</h3>{w.p.map((p,i)=><P key={i} onDark style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}</FrostedPanel>)}</div>
        </div>
      </Wrap>
    </V3Photo>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:48}}>
        <div className="de-stack" style={{gap:16,maxWidth:720}}><Bar/><H2>{DE.std.t}</H2></div>
        <div className="de-grid de-g3" style={{gap:40}}>{DE.std.p.map((p,i)=><Reveal key={i} delay={i*60} style={{display:'flex',flexDirection:'column',gap:16,paddingTop:24,borderTop:'1px solid var(--border-hairline)'}}><Mono>0{i+1}</Mono><P>{p}</P></Reveal>)}</div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-grid de-g2" style={{gap:24}}>
        <Card tone="navy" padding={36} style={{display:'flex',flexDirection:'column',gap:16,position:'relative',overflow:'hidden'}}>
          <RingBackdrop size={300} rings={2} glow={false} style={{position:'absolute',right:-120,bottom:-140}}/>
          <span className="de-label on-dark" style={{color:'var(--accent)'}}>{DE.lic.t}</span>
          <p style={{margin:0,font:'800 32px/40px var(--font-display)',color:'#fff',position:'relative'}}>{DE.lic.lead}</p>
          <P onDark style={{position:'relative'}}>{DE.lic.p}</P>
          <TextLink onDark>{DE.lic.link}</TextLink>
        </Card>
        <div className="de-stack" style={{gap:16}}><span className="de-label">{DE.related.t}</span>{DE.related.items.map(r=><Card key={r.k} interactive padding={28} style={{display:'flex',gap:20,flex:1}}><Chip icon={r.i}/><div className="de-stack" style={{gap:8}}><h3 className="de-h3">{r.k}</h3><P style={{fontSize:15,lineHeight:'24px'}}>{r.b}</P></div></Card>)}</div>
      </Wrap>
    </section>
    <V3Photo label="Field photo · engineer on site with drawings" style={{minHeight:620}}>
      <Wrap style={{minHeight:620,display:'flex',alignItems:'center',justifyContent:'center',padding:'96px 20px'}}>
        <FrostedPanel strong padding={56} style={{maxWidth:760,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:20}}>
          <H2 onDark>{DE.close.t}</H2><P onDark lg>{DE.close.p}</P>
          <div className="de-row" style={{flexWrap:'wrap',justifyContent:'center'}}><Button size="lg" iconRight="arrow-right">{DE.cta}</Button><Button size="lg" variant="secondary" onDark>{DE.capCta}</Button></div>
          <ContactLine onDark/>
        </FrostedPanel>
      </Wrap>
    </V3Photo>
    <SiteFooter/>
  </div>;
}
window.V3=V3;

Object.assign(window,{V3Photo});
