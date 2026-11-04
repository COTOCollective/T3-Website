function V5(){
  const stages=DE.ecd.p.map((t,i)=>({k:'0'+(i+1),t}));
  const [st,setSt]=React.useState(0);
  const [tab,setTab]=React.useState(0);
  const [wk,setWk]=React.useState(0);
  const all=[...DE.services,{...DE.telecom,spec:'Supporting',l:null}];
  const s=all[tab],w=DE.work[wk];
  return <div className="de-page">
    <SiteHeader tone="navy"/>
    <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'80px 0 96px'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 25% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
      <RingBackdrop size={620} rings={2} draw style={{position:'absolute',left:-300,bottom:-320}}/>
      <Wrap className="de-grid de-g-hero" style={{position:'relative',gap:64,alignItems:'center'}}>
        <div className="de-stack" style={{gap:24}}>
          <Bar/>
          <h1 className="de-hero-h">{DE.h1}</h1>
          <p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'#fff'}}>{DE.lede}</p>
          {DE.intro.map((p,i)=><P key={i} onDark>{p}</P>)}
        </div>
        <Card padding={36} style={{display:'flex',flexDirection:'column',gap:16,boxShadow:'var(--shadow-lg)'}}>
          <h2 className="de-h3" style={{fontSize:24,lineHeight:'32px'}}>{DE.close.t}</h2>
          <P style={{fontSize:15,lineHeight:'24px'}}>{DE.close.p}</P>
          <div className="de-grid de-g2" style={{gap:16}}><Input label="Name"/><Input label="Organization"/></div>
          <Input label="Email" type="email"/>
          <Select label={DE.servicesTitle} options={all.map(x=>x.t)}/>
          <Input label="Project scope" multiline rows={3}/>
          <Button iconRight="arrow-right" style={{alignSelf:'flex-start'}}>{DE.cta}</Button>
          <div className="de-hair" style={{paddingTop:14}}><ContactLine/></div>
        </Card>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:48}}>
        <div className="de-stack" style={{gap:16}}><Bar/><H2>{DE.ecd.title}</H2></div>
        <div className="de-stack" style={{gap:0,border:'1px solid var(--border-hairline)',borderRadius:'var(--radius-section)',overflow:'hidden',boxShadow:'var(--shadow-sm)'}}>
          <div role="tablist" className="de-grid de-g3" style={{gap:0}}>
            {stages.map((x,i)=><button key={x.k} role="tab" aria-selected={st===i} onClick={()=>setSt(i)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',padding:'24px 28px',display:'flex',flexDirection:'column',gap:10,borderLeft:i?'1px solid var(--border-hairline)':'none',background:st===i?'var(--t3-navy)':'#fff',transition:'background var(--dur-base)'}}>
              <span style={{font:'500 28px/32px var(--font-mono)',color:st===i?'var(--accent)':'var(--t3-steel-300)'}}>{x.k}</span>
              <span style={{height:3,borderRadius:2,background:i<=st?'var(--accent)':'var(--border-hairline)'}}></span>
            </button>)}
          </div>
          <div className="de-grid de-g-side" style={{gap:40,padding:40,alignItems:'center',borderTop:'1px solid var(--border-hairline)'}}>
            <ImageCard height={240} placeholder={['Field photo · early design review','Field photo · road-shoulder trenching','Field photo · engineering and environmental team'][st]}/>
            <div className="de-stack" style={{gap:16}}><p style={{margin:0,font:'500 22px/32px var(--font-display)',color:'var(--t3-navy)',textWrap:'pretty'}}>{stages[st].t}</p><TextLink>{DE.ecd.link}</TextLink></div>
          </div>
        </div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-stack" style={{gap:48}}>
        <div className="de-stack" style={{gap:16}}><Bar/><H2>{DE.servicesTitle}</H2></div>
        <div className="de-grid de-g-tabs" style={{gap:40,alignItems:'start'}}>
          <div role="tablist" className="de-stack" style={{gap:4}}>{all.map((x,i)=><button key={x.t} role="tab" aria-selected={tab===i} className={'de-tab'+(tab===i?' on':'')} onClick={()=>setTab(i)}><Icon name={x.i} size={18}/><span style={{flex:1}}>{x.t}</span>{tab===i&&<Icon name="arrow-right" size={16}/>}</button>)}</div>
          <Card padding={0} style={{overflow:'hidden'}}>
            <ImageCard height={300} placeholder={'Field photo · '+s.t} style={{borderRadius:0}}/>
            <div className="de-stack" style={{padding:40,gap:18}}>
              <Chip icon={s.i}/>
              <h3 className="de-h3" style={{fontSize:28,lineHeight:'36px'}}>{s.t}</h3>
              <P lg>{s.b}</P>
              <div className="de-row" style={{gap:24,flexWrap:'wrap'}}>{s.l&&<TextLink>{s.l}</TextLink>}<Button variant="secondary" size="sm">{DE.cta}</Button></div>
            </div>
          </Card>
        </div>
      </Wrap>
    </section>
    <section className="de-section" style={{background:'var(--t3-navy)'}}>
      <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
      <Wrap className="de-stack" style={{gap:40,position:'relative'}}>
        <div className="de-row" style={{justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap'}}>
          <div className="de-stack" style={{gap:16}}><Bar/><H2 onDark>{DE.workTitle}</H2></div>
          <div className="de-row" style={{gap:12}}><span style={{font:'500 13px var(--font-mono)',color:'var(--fg-on-inverse-2)'}}>0{wk+1} / 0{DE.work.length}</span><button className="de-iconbtn" disabled={wk===0} onClick={()=>setWk(wk-1)} aria-label="Previous"><Icon name="arrow-left" size={20}/></button><button className="de-iconbtn" disabled={wk===DE.work.length-1} onClick={()=>setWk(wk+1)} aria-label="Next"><Icon name="arrow-right" size={20}/></button></div>
        </div>
        <div className="de-grid de-g2" style={{gap:0,borderRadius:'var(--radius-section)',overflow:'hidden',background:'var(--t3-navy-700)',border:'1px solid var(--surface-frost-border)'}}>
          <ImageCard height="100%" placeholder={'Field photo · '+w.t} style={{minHeight:440,borderRadius:0}}/>
          <div className="de-stack" style={{padding:48,gap:18,justifyContent:'center'}}>
            <h3 className="de-h3 on-dark" style={{fontSize:26,lineHeight:'34px'}}>{w.t}</h3>
            {w.p.map((p,i)=><P key={i} onDark>{p}</P>)}
            <TextLink onDark>{DE.workLink}</TextLink>
          </div>
        </div>
        <div className="de-row" style={{justifyContent:'center',gap:8}}>{DE.work.map((_,i)=><button key={i} onClick={()=>setWk(i)} aria-label={'Project '+(i+1)} style={{all:'unset',cursor:'pointer',width:i===wk?28:8,height:8,borderRadius:99,background:i===wk?'var(--accent)':'rgba(255,255,255,.3)',transition:'all var(--dur-base)'}}></button>)}</div>
      </Wrap>
    </section>
    <section className="de-section">
      <Wrap className="de-stack" style={{gap:48}}>
        <div className="de-stack" style={{gap:16,alignItems:'center',textAlign:'center'}}><Bar/><H2>{DE.std.t}</H2></div>
        <div className="de-grid de-g3">{DE.std.p.map((p,i)=><Card key={i} padding={32} style={{display:'flex',flexDirection:'column',gap:16}}><div className="de-row" style={{justifyContent:'space-between'}}><Chip icon={['clipboard-check','users','map-pin'][i]}/><Mono>0{i+1}</Mono></div><P>{p}</P></Card>)}</div>
      </Wrap>
    </section>
    <section className="de-section de-hair">
      <Wrap className="de-grid de-g2" style={{gap:64}}>
        <div className="de-stack" style={{gap:20}}>
          <Bar/><H2 size={36}>{DE.lic.t}</H2>
          <p style={{margin:0,font:'700 22px/30px var(--font-display)',color:'var(--t3-navy)'}}>{DE.lic.lead}</p>
          <P>{DE.lic.p}</P>
          <div className="de-row" style={{flexWrap:'wrap',gap:24}}><Button variant="secondary">{DE.capCta}</Button><TextLink>{DE.lic.link}</TextLink></div>
        </div>
        <div className="de-stack" style={{gap:0}}>
          <span className="de-label" style={{paddingBottom:16}}>{DE.related.t}</span>
          {DE.related.items.map(r=><a key={r.k} href="#" onClick={e=>e.preventDefault()} className="de-plain de-tablerow" style={{gridTemplateColumns:'40px minmax(0,1fr) 32px',display:'grid',color:'inherit'}}><Chip icon={r.i}/><div className="de-stack" style={{gap:8}}><h3 className="de-h3">{r.k}</h3><P style={{fontSize:15,lineHeight:'24px'}}>{r.b}</P></div><span className="arrow"><Icon name="arrow-right" size={20}/></span></a>)}
        </div>
      </Wrap>
    </section>
    <section style={{background:'var(--t3-navy)',padding:'48px 0'}}>
      <Wrap className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',gap:24}}>
        <div className="de-stack" style={{gap:6}}><span className="de-h3 on-dark" style={{fontSize:22}}>{DE.close.t}</span><ContactLine onDark/></div>
        <Button size="lg" iconRight="arrow-up">{DE.cta}</Button>
      </Wrap>
    </section>
    <SiteFooter/>
  </div>;
}
window.V5=V5;
