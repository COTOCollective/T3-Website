function V4Tile({children,span=4,tone='white',pad=32,style,className}){
  const navy=tone==='navy';
  return <div className={className} style={{gridColumn:'span '+span,borderRadius:'var(--radius-card)',padding:pad,background:navy?'var(--t3-navy)':'#fff',border:navy?'none':'1px solid var(--border-hairline)',boxShadow:navy?'none':'var(--shadow-sm)',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',gap:16,...style}}>{children}</div>;
}
function V4Standards(){return <section className="de-section">
      <Wrap className="de-grid de-g12" style={{gap:16}}>
        <V4Tile span={12} pad={48} className="de-g-tile de-full" style={{display:'grid',gap:48}}>
          <div className="de-stack" style={{gap:16}}><H2 size={36}>{DE.std.t}</H2></div>
          <div className="de-grid de-g3" style={{gap:24}}>{DE.std.p.map((p,i)=><div key={i} className="de-stack" style={{gap:12}}><span style={{font:'800 28px/32px var(--font-display)',color:'var(--t3-turq-700)'}}>0{i+1}</span><P style={{fontSize:15,lineHeight:'24px'}}>{p}</P></div>)}</div>
        </V4Tile>
      </Wrap>
    </section>;}
function V4(){
  const all=[...DE.services,{...DE.telecom,spec:'Supporting',l:null}];
  return <div className="de-page">
    <SiteHeader tone="light"/>
    <section style={{padding:'48px 0 24px'}}>
      <Wrap className="de-grid de-g12" style={{gap:16}}>
        <div className="de-full" style={{gridColumn:'span 12'}}><ImageCard height={360} placeholder="Field photo · substation yard, wide"/></div>
        <V4Tile span={7} pad={48} style={{gridRow:'span 2',justifyContent:'space-between',gap:32}}>
          <div className="de-stack" style={{gap:20}}><h1 className="de-hero-h dark">{DE.h1}</h1><p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'var(--t3-navy)'}}>{DE.lede}</p></div>
          <div className="de-row" style={{flexWrap:'wrap'}}><Button size="lg" iconRight="arrow-right">{DE.cta}</Button><Button size="lg" variant="secondary" style={{height:48}}>{DE.capCta}</Button></div>
        </V4Tile>
        <V4Tile span={5} tone="navy" style={{justifyContent:'space-between'}}>
          <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
          <Icon name="zap" size={24} color="var(--accent)" style={{position:'relative'}}/>
          <p style={{margin:0,font:'500 20px/30px var(--font-display)',color:'#fff',position:'relative'}}>{DE.intro[0]}</p>
        </V4Tile>
        <V4Tile span={5}><Icon name="git-merge" size={24} color="var(--t3-turq-700)"/><P>{DE.intro[1]}</P></V4Tile>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-grid de-g2" style={{gap:64,alignItems:'end'}}><div className="de-stack" style={{gap:16}}><H2>{DE.ecd.title}</H2></div><P lg>{DE.ecd.p[0]}</P></div>
        <div className="de-grid de-g12" style={{gap:16}}>
          <V4Tile span={4}><Icon name="route" size={20} color="var(--t3-steel)"/><P>{DE.ecd.p[1]}</P></V4Tile>
          <V4Tile span={4} style={{background:'#fff'}}><Icon name="git-fork" size={20} color="var(--t3-steel)"/><P>{DE.ecd.p[2].split('. ')[0]}.</P></V4Tile>
          <V4Tile span={4} tone="navy"><Icon name="git-merge" size={20} color="var(--accent)"/><p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'#fff'}}>{DE.ecd.p[2].split('. ')[1]}</p><div style={{marginTop:'auto'}}><V6More onDark>Environmentally Conscious Design</V6More></div></V4Tile>
        </div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}><div className="de-stack" style={{gap:16}}><H2>{DE.servicesTitle}</H2></div></div>
        <div>
          {all.map((s,i)=><div key={s.t} className="de-tablerow four" style={{cursor:s.l?'pointer':'default'}}>
            <span style={{font:'500 13px/26px var(--font-mono)',color:'var(--t3-turq-700)'}}>{String(i+1).padStart(2,'0')}</span>
            <h3 className="de-h3">{s.t}</h3>
            <P className="desc" style={{fontSize:15,lineHeight:'24px'}}>{s.b}</P>
            <span className="arrow" style={{paddingTop:2}}>{s.l&&<Icon name="arrow-right" size={20}/>}</span>
          </div>)}
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)'}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <div className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}><div className="de-stack" style={{gap:16}}><H2 onDark>{DE.workTitle}</H2></div><V6More onDark>{DE.workLink}</V6More></div>
        <div className="de-grid de-g12" style={{gap:16}}>
          <V4Tile span={12} tone="navy" pad={0} className="de-full" style={{background:'var(--t3-navy-700)',flexDirection:'row',gap:0}}>
            <ImageCard height="100%" placeholder="Photo · undergrounding" style={{flex:'0 0 42%',minHeight:360,borderRadius:0}}/>
            <div className="de-stack" style={{padding:32,gap:14}}><h3 className="de-h3 on-dark" style={{fontSize:22,lineHeight:'30px'}}>{DE.work[0].t}</h3>{DE.work[0].p.map((p,i)=><P key={i} onDark style={{fontSize:15,lineHeight:'24px'}}>{p}</P>)}<Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button></div>
          </V4Tile>
          <V4Tile span={6} tone="navy" style={{background:'var(--t3-navy-700)'}}><h3 className="de-h3 on-dark">{DE.work[1].t}</h3><P onDark>{DE.work[1].p[0]}</P></V4Tile>
          <V4Tile span={6} tone="navy" style={{background:'var(--t3-navy-700)'}}><h3 className="de-h3 on-dark">{DE.work[2].t}</h3><P onDark>{DE.work[2].p[0]}</P></V4Tile>
        </div>
      </Wrap>
    </section>
<V4Standards/>
    <section className="de-section">
      <Wrap className="de-grid de-g12" style={{gap:16}}>
        <V4Tile span={6} tone="navy">
          <RingBackdrop size={320} rings={2} glow={false} style={{position:'absolute',right:-120,top:-140}}/>
          <span className="de-label on-dark" style={{color:'var(--accent)'}}>{DE.lic.t}</span>
          <p style={{margin:0,font:'800 32px/40px var(--font-display)',color:'#fff'}}>{DE.lic.lead}</p>
          <P onDark>{DE.lic.p}</P>
          <div className="de-row" style={{flexWrap:'wrap',gap:16,marginTop:'auto'}}><V6More onDark>{DE.lic.link}</V6More></div>
        </V4Tile>
        <V4Tile span={6}><span className="de-label">{DE.related.t}</span>{DE.related.items.map(r=><div key={r.k} className="de-row de-hair" style={{alignItems:'flex-start',gap:16,paddingTop:16}}><Chip icon={r.i}/><div className="de-stack" style={{gap:6}}><h3 className="de-h3">{r.k}</h3><P style={{fontSize:14,lineHeight:'22px'}}>{r.b}</P></div></div>)}</V4Tile>
      </Wrap>
    </section>
    <section style={{background:'var(--t3-navy)',padding:'48px 0'}}>
      <Wrap className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',gap:24}}>
        <div className="de-stack" style={{gap:6}}><span className="de-h3 on-dark" style={{fontSize:22}}>{DE.close.t}</span><ContactLine onDark/></div>
        <Button size="lg" iconRight="arrow-up" style={{height:48}}>{DE.cta}</Button>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.V4=V4;window.V4Standards=V4Standards;
