function V6Pill({children,onDark,style}){return <a href="#" onClick={e=>e.preventDefault()} className="v6-pill" style={style}>{children}<span className="v6-pill-dot"><Icon name="arrow-right" size={14}/></span></a>;}
function V6More({children,onDark,style}){return <a href="#" onClick={e=>e.preventDefault()} className={'v6-more'+(onDark?' on-dark':'')} style={style}>{children}<span className="v6-more-dot"><Icon name="arrow-right" size={12}/></span></a>;}
function V6Tile({label,h,style}){return <ImageCard height={h} placeholder={label} style={{borderRadius:16,...style}}/>;}
function V6Sketch({label}){return <div style={{height:150,borderRadius:12,border:'1px dashed var(--border-strong)',display:'flex',alignItems:'center',justifyContent:'center',font:'500 11px var(--font-mono)',letterSpacing:'.06em',textTransform:'uppercase',color:'var(--t3-steel-300)',textAlign:'center',padding:16}}>{label}</div>;}
function V6H2({children}){return <h2 style={{margin:0,font:'700 40px/48px var(--font-display)',letterSpacing:'-.015em',color:'var(--t3-navy)'}}>{children}</h2>;}
function V6Header(){
  return <header style={{position:'sticky',top:0,zIndex:30,background:'rgba(255,255,255,.92)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)'}}>
    <div className="de-wrap" style={{maxWidth:'none',padding:'0 32px',height:72,display:'flex',alignItems:'center',gap:24}}>
      <img src={DE_LOGO_C} alt="T3 Consulting" style={{height:40}}/>
      <nav className="de-nav" style={{display:'flex',gap:36,margin:'0 auto'}}>{NAV.map(n=><a key={n} href="#" onClick={e=>e.preventDefault()} className="v6-nav">{n}</a>)}</nav>
      <button className="de-burger" aria-label="Menu" style={{color:'var(--t3-navy)',display:undefined}}><Icon name="menu" size={24}/></button>
      <button aria-label="Search" style={{all:'unset',cursor:'pointer',width:44,height:44,display:'inline-flex',alignItems:'center',justifyContent:'center',color:'var(--t3-navy)'}}><Icon name="search" size={20}/></button>
    </div>
  </header>;
}
function V6Collage(){return <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'180px 120px 180px',gap:12}}>
            <V6Tile label="Photo · transmission tower" h="100%" style={{gridRow:'1 / 3'}}/>
            <V6Tile label="Photo · crew in hi-vis" h="100%"/>
            <V6Tile label="Photo · substation" h="100%" style={{gridRow:'2 / 4'}}/>
            <V6Tile label="Photo · engineer at drawings" h="100%"/>
          </div>;}
function V6Ecd(){return <>
    <section className="de-section">
      <Wrap className="de-stack v6-ecd" style={{gap:40}}>
        <div className="de-grid de-g2 v6-ecd-top" style={{gap:64,alignItems:'end'}}><div className="de-stack" style={{gap:16}}><H2>{DE.ecd.title}</H2></div><P lg>{DE.ecd.p[0]}</P></div>
        <div className="de-grid de-g12 v6-ecd-tiles" style={{gap:16}}>
          <div className="v1-tile" style={{gridColumn:'span 4',borderRadius:'var(--radius-card)',padding:32,background:'#fff',border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',gap:16}}><Icon name="route" size={20} color="var(--t3-steel)"/><P>{DE.ecd.p[1]}</P></div>
          <div style={{gridColumn:'span 4',borderRadius:'var(--radius-card)',padding:32,background:'#fff',border:'1px solid var(--border-hairline)',boxShadow:'var(--shadow-sm)',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',gap:16}}><Icon name="git-fork" size={20} color="var(--t3-steel)"/><P>{DE.ecd.p[2].split('. ')[0]}.</P></div>
          <div style={{gridColumn:'span 4',borderRadius:'var(--radius-card)',padding:32,background:'var(--t3-navy)',border:'none',boxShadow:'none',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',gap:16}}><Icon name="git-merge" size={20} color="var(--accent)"/><p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'#fff'}}>{DE.ecd.p[2].split('. ')[1]}</p><div style={{marginTop:'auto'}}><V6More onDark>{DE.ecd.link}</V6More></div></div>
        </div>
      </Wrap>
    </section>
  </>;}
function V6Services({light}){
  const dk=!light;
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  return <>
    <section className={'de-section'+(light?' de-hair':'')} style={{background:light?undefined:'var(--t3-navy)'}}>
      <Wrap className="de-stack" style={{gap:48}}>
        <div className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}>
          <div className="de-stack" style={{gap:16}}><H2 onDark={dk}>{DE.servicesTitle}</H2></div>
          <div className="de-row" style={{gap:12}}><button className={'de-iconbtn'+(light?' light':'')} onClick={()=>nudge(-1)} aria-label="Previous"><Icon name="arrow-left" size={20}/></button><button className={'de-iconbtn'+(light?' light':'')} onClick={()=>nudge(1)} aria-label="Next"><Icon name="arrow-right" size={20}/></button></div>
        </div>
      </Wrap>
      <div className="de-rail-wrap" style={{paddingLeft:'max(48px, calc((100% - 1200px) / 2))',marginTop:48}}>
        <div ref={rail} className="de-rail" style={{paddingRight:48}}>
          {DE.services.map(s=><article key={s.t} className="de-stack" style={{gap:20}}>
            <ImageCard height={300} title={s.t} placeholder={'Photo · '+s.t} onClick={()=>{}}/>
            <P onDark={dk} style={{fontSize:15,lineHeight:'24px'}}>{s.b}</P>
            <Bullets items={s.bl} onDark={dk}/>
            <TextLink onDark={dk}>{s.l}</TextLink>
          </article>)}
          <article className="de-stack" style={{gap:20}}>
            {light?<div style={{height:300,boxSizing:'border-box',padding:28,borderRadius:16,background:'var(--t3-navy)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}><Chip icon={DE.telecom.i} onDark/><h3 className="de-h3 on-dark">{DE.telecom.t}</h3></div>:<FrostedPanel padding={28} style={{height:300,display:'flex',flexDirection:'column',justifyContent:'space-between',borderRadius:16}}><Chip icon={DE.telecom.i} onDark/><h3 className="de-h3 on-dark">{DE.telecom.t}</h3></FrostedPanel>}
            <P onDark={dk} style={{fontSize:15,lineHeight:'24px'}}>{DE.telecom.b}</P>
          </article>
        </div>
      </div>
    </section>
  </>;
}
function V6(){
  const rail=React.useRef(null);
  const nudge=d=>{if(rail.current)rail.current.scrollBy({left:d*384,behavior:'smooth'});};
  const all=[...DE.services];
  return <div className="de-page v6">
    <V6Header/>
    <section style={{padding:'8px 24px 0'}}>
      <div style={{position:'relative',overflow:'hidden',borderRadius:28,background:'var(--gradient-navy)',padding:'72px 56px'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(55% 80% at 20% 20%,rgba(55,198,192,.22),rgba(55,198,192,0) 70%)'}}></div>
        <div className="de-grid de-g2" style={{position:'relative',gap:48,alignItems:'center',maxWidth:1296,margin:'0 auto'}}>
          <div className="de-stack" style={{gap:24}}>
            <h1 style={{margin:0,font:'700 60px/66px var(--font-display)',letterSpacing:'-.015em',color:'#fff',textWrap:'balance'}}>{DE.h1}</h1>
            <p style={{margin:0,font:'600 15px/24px var(--font-display)',letterSpacing:'.02em',color:'#fff',maxWidth:520}}>{DE.lede}</p>
            <p style={{margin:0,font:'400 15px/24px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:520}}>{DE.intro[0]}</p>
            <P onDark>{DE.intro[1]}</P>
            <div style={{marginTop:8}}><V6Pill style={{height:48}}>{DE.cta}</V6Pill></div>
          </div>
          <V6Collage/>
        </div>
      </div>
    </section>
    <V6Ecd/>
    <V6Services/>
    <section className="de-section" style={{paddingTop:48}}>
    </section>
    <section className="de-section" style={{paddingTop:48}}>
      <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{position:'absolute',right:-430,top:120}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DE.workTitle}</V6H2>
        <div className="de-grid de-g2" style={{gap:24,alignItems:'stretch'}}>
          <div className="v6-card" style={{padding:'40px 36px',gap:20,justifyContent:'center'}}>
            <h3 style={{margin:0,font:'500 20px/20px var(--font-display)',letterSpacing:'.02em',color:'#0C2834'}}>{DE.work[0].t}</h3>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-2)'}}>{DE.work[0].p[0]}</p>
            {DE.work[0].p.slice(1).map((p,i)=><p key={i} style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-2)'}}>{p}</p>)}
            <V6More onDark style={{color:'#1f8682'}}>{DE.work[0].link}</V6More>
          </div>
          <V6Tile label="Photo · strategic undergrounding program" h="100%" style={{minHeight:460}}/>
        </div>
        <div className="de-grid de-g2" style={{gap:24}}>
          {DE.work.slice(1).map(w=><div key={w.t} className="v6-card" style={{padding:'32px 32px',gap:12}}><h3 style={{margin:0,font:'500 20px/28px var(--font-display)',color:'var(--t3-navy)'}}>{w.t}</h3>{w.p.map((p,i)=><p key={i} style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-2)'}}>{p}</p>)}</div>)}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}><V6Pill>{DE.cta}</V6Pill></div>
      </Wrap>
    </section>
    <HowWeDeliver/>
    <section className="de-section" style={{paddingTop:48}}>
      <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{position:'absolute',left:-440,top:0}}/>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DE.lic.t}</V6H2>
        <div style={{borderRadius:24,background:'var(--gradient-navy)',padding:'44px 48px',display:'flex',gap:40,alignItems:'center',position:'relative',overflow:'hidden',flexWrap:'wrap'}}>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 90% at 0% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
          <span style={{position:'relative',width:96,height:96,flex:'none',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff'}}><Icon name="shield-check" size={84} strokeWidth={1.25}/></span>
          <div className="de-stack" style={{gap:12,position:'relative',flex:1,minWidth:260}}>
            <p style={{margin:0,font:'500 26px/34px var(--font-display)',color:'#fff'}}>{DE.lic.lead}</p>
            <p style={{margin:0,font:'400 14px/22px var(--font-body)',color:'var(--fg-on-inverse-2)',maxWidth:720}}>{DE.lic.p}</p>
            <div className="de-row" style={{gap:24,flexWrap:'wrap',marginTop:8}}><V6More onDark>{DE.lic.link}</V6More><V6Pill style={{height:48}}>{DE.capCta}</V6Pill></div>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{paddingTop:48}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <V6H2>{DE.related.t}</V6H2>
          {[...DE.related.items].reverse().map(r=><a key={r.k} href="#" onClick={e=>e.preventDefault()} className="de-plain de-tablerow" style={{gridTemplateColumns:'40px minmax(0,1fr) 32px',display:'grid',color:'inherit'}}><Chip icon={r.i}/><div className="de-stack" style={{gap:8,alignSelf:'center'}}><h3 className="de-h3">{r.k}</h3></div><span className="arrow"><Icon name="arrow-right" size={20}/></span></a>)}
      </Wrap>
    </section>
    <section style={{padding:'48px 24px 0'}}>
      <div style={{position:'relative',overflow:'hidden',borderRadius:'28px 28px 0 0',background:'var(--gradient-navy)',padding:'80px 32px'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(40% 70% at 50% 50%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
        <div className="v6-cta-grid" style={{position:'relative',maxWidth:1296,margin:'0 auto'}}>
          <div className="de-stack v6-side" style={{gap:12}}><V6Tile label="Photo · team" h={200}/><V6Tile label="Photo · engineer" h={150} style={{marginRight:48}}/></div>
          <div className="de-stack" style={{gap:20,alignItems:'center',textAlign:'center',justifyContent:'center'}}>
            <h2 style={{margin:0,font:'700 44px/50px var(--font-display)',letterSpacing:'-.015em',color:'#fff',textWrap:'balance'}}>{DE.close.t}</h2>
            <p style={{margin:0,font:'500 15px/24px var(--font-display)',color:'var(--fg-on-inverse-2)',maxWidth:520}}>{DE.close.p}</p>
            <V6Pill style={{height:48}}>{DE.cta}</V6Pill>
            <ContactLine onDark/>
          </div>
          <div className="de-stack v6-side" style={{gap:12,justifyContent:'center'}}><V6Tile label="Photo · field engineer" h={240} style={{marginLeft:48}}/></div>
        </div>
      </div>
    </section>
    <div style={{padding:'0 24px'}}><SiteFooter/></div>
  </div>;
}
window.V6=V6;window.V6Services=V6Services;window.V6Ecd=V6Ecd;window.V6Collage=V6Collage;window.V6More=V6More;window.V6Pill=V6Pill;
Object.assign(window,{V6H2,V6More,V6Pill});
