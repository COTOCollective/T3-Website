function V2(){
  const toc=[['ecd',DE.ecd.title],['services',DE.servicesTitle],['work',DE.workTitle],['standards',DE.std.t],['licensure',DE.lic.t],['related',DE.related.t]];
  const [active,setActive]=React.useState('ecd');
  const [open,setOpen]=React.useState({0:true,1:true});
  React.useEffect(()=>{if(window.DE_STATIC)return;const f=()=>{let cur=toc[0][0];toc.forEach(([id])=>{const el=document.getElementById('v2-'+id);if(el&&el.getBoundingClientRect().top<200)cur=id;});setActive(cur);};window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f);},[]);
  const Sec=({id,n,children})=><section id={'v2-'+id} className="de-hair" style={{padding:'72px 0',display:'flex',flexDirection:'column',gap:28}}><Mono>{n}</Mono>{children}</section>;
  const go=id=>e=>{e.preventDefault();const el=document.getElementById('v2-'+id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-90,behavior:'smooth'});};
  return <div className="de-page">
    <SiteHeader tone="light"/>
    <section style={{padding:'88px 0 64px'}}>
      <Wrap className="de-stack" style={{gap:40}}>
        <Bar/>
        <h1 className="de-hero-h dark xl" style={{maxWidth:1000}}>{DE.h1}</h1>
        <div className="de-grid de-g2" style={{gap:64,alignItems:'start'}}>
          <p style={{margin:0,font:'500 26px/36px var(--font-display)',color:'var(--t3-navy)',textWrap:'pretty'}}>{DE.lede}</p>
          <div className="de-stack" style={{gap:20}}>{DE.intro.map((p,i)=><P key={i}>{p}</P>)}<div className="de-row" style={{flexWrap:'wrap'}}><Button iconRight="arrow-right">{DE.cta}</Button><Button variant="ghost">{DE.capCta}</Button></div></div>
        </div>
      </Wrap>
    </section>
    <Wrap><ImageCard height={520} placeholder="Field photo · wide · substation with crew in hi-vis"/></Wrap>
    <div style={{height:24}}></div>
    <Wrap className="de-grid de-g-toc" style={{gap:64,alignItems:'start'}}>
      <aside className="de-sticky" style={{paddingTop:72,display:'flex',flexDirection:'column',gap:32}}>
        <nav className="de-toc">{toc.map(([id,l],i)=><a key={id} href={'#v2-'+id} onClick={go(id)} className={active===id?'on':''}><span style={{font:'500 12px/20px var(--font-mono)',color:'var(--t3-turq-700)'}}>0{i+1}</span>{l}</a>)}</nav>
        <Card padding={24} style={{display:'flex',flexDirection:'column',gap:12}}><a href={'tel:'+DE.phone} className="de-plain" style={{font:'500 14px var(--font-mono)',color:'var(--t3-navy)'}}>{DE.phone}</a><Button size="sm">{DE.cta}</Button></Card>
      </aside>
      <div>
        <Sec id="ecd" n="01">
          <H2>{DE.ecd.title}</H2>
          <div className="de-grid de-g2" style={{gap:40}}>{DE.ecd.p.slice(0,2).map((p,i)=><P key={i}>{p}</P>)}</div>
          <blockquote style={{margin:0,padding:'32px 0',borderTop:'3px solid var(--accent)',borderBottom:'1px solid var(--border-hairline)',gap:40}} className="de-grid de-g-cmp">
            <P>{DE.ecd.p[2].split('. ')[0]}.</P>
            <p style={{margin:0,font:'700 26px/34px var(--font-display)',color:'var(--t3-navy)'}}>{DE.ecd.p[2].split('. ')[1]}</p>
          </blockquote>
          <TextLink>{DE.ecd.link}</TextLink>
        </Sec>
        <Sec id="services" n="02">
          <H2>{DE.servicesTitle}</H2>
          <div style={{borderBottom:'1px solid var(--border-hairline)'}}>
            {[...DE.services,{...DE.telecom,spec:'Supporting',l:null}].map((s,i)=><div key={s.t} className="de-acc">
              <button onClick={()=>setOpen({...open,[i]:!open[i]})} aria-expanded={!!open[i]}>
                <span style={{font:'500 13px var(--font-mono)',color:'var(--t3-turq-700)',width:28}}>{String(i+1).padStart(2,'0')}</span>
                <span style={{flex:1,font:'700 22px/30px var(--font-display)',color:'var(--t3-navy)'}}>{s.t}</span>
                <span style={{width:36,height:36,borderRadius:99,border:'1px solid var(--border-default)',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'var(--t3-navy)',background:open[i]?'var(--t3-turq-100)':'#fff'}}><Icon name={open[i]?'minus':'plus'} size={18}/></span>
              </button>
              {open[i]&&<div style={{padding:'0 52px 28px 44px',display:'flex',flexDirection:'column',gap:16,maxWidth:820}}><P>{s.b}</P>{s.l&&<TextLink>{s.l}</TextLink>}</div>}
            </div>)}
          </div>
        </Sec>
        <Sec id="work" n="03">
          <div className="de-row" style={{justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-end'}}><H2>{DE.workTitle}</H2><TextLink>{DE.workLink}</TextLink></div>
          <div className="de-grid de-g2" style={{gap:32,alignItems:'start'}}>
            <ImageCard height={360} placeholder="Field photo · strategic undergrounding"/>
            <div className="de-stack" style={{gap:16}}><h3 className="de-h3" style={{fontSize:24,lineHeight:'32px'}}>{DE.work[0].t}</h3>{DE.work[0].p.map((p,i)=><P key={i}>{p}</P>)}</div>
          </div>
          <div className="de-grid de-g2" style={{gap:32}}>{DE.work.slice(1).map(w=><div key={w.t} className="de-hair de-stack" style={{paddingTop:24,gap:12}}><h3 className="de-h3">{w.t}</h3>{w.p.map((p,i)=><P key={i}>{p}</P>)}</div>)}</div>
        </Sec>
        <Sec id="standards" n="04">
          <H2>{DE.std.t}</H2>
          <div className="de-grid de-g3" style={{gap:32}}>{DE.std.p.map((p,i)=><div key={i} className="de-stack" style={{gap:16}}><Chip icon={['file-text','messages-square','map-pin'][i]}/><P>{p}</P></div>)}</div>
        </Sec>
        <Sec id="licensure" n="05">
          <H2>{DE.lic.t}</H2>
          <div className="de-grid de-g2" style={{gap:40,alignItems:'start'}}>
            <p style={{margin:0,font:'700 32px/40px var(--font-display)',color:'var(--t3-navy)'}}>{DE.lic.lead}</p>
            <div className="de-stack" style={{gap:20}}><P>{DE.lic.p}</P><div className="de-row" style={{flexWrap:'wrap',gap:24}}><TextLink>{DE.lic.link}</TextLink><Button variant="secondary" size="sm">{DE.capCta}</Button></div></div>
          </div>
        </Sec>
        <Sec id="related" n="06">
          <H2>{DE.related.t}</H2>
          <div className="de-grid de-g2">{DE.related.items.map(r=><Card key={r.k} interactive padding={28} style={{display:'flex',flexDirection:'column',gap:12}}><div className="de-row" style={{justifyContent:'space-between'}}><h3 className="de-h3">{r.k}</h3><Icon name="arrow-up-right" size={20} color="var(--t3-turq-700)"/></div><P style={{fontSize:15,lineHeight:'24px'}}>{r.b}</P></Card>)}</div>
        </Sec>
      </div>
    </Wrap>
    <section style={{padding:'0 0 96px'}}><Wrap>
      <div style={{background:'var(--t3-navy)',borderRadius:'var(--radius-section)',padding:'64px',position:'relative',overflow:'hidden'}} className="de-grid de-g2">
        <div style={{position:'absolute',inset:0,background:'var(--glow-turquoise)'}}></div>
        <RingBackdrop size={480} rings={2} style={{position:'absolute',right:-160,top:-180}}/>
        <div className="de-stack" style={{gap:16,position:'relative'}}><H2 onDark>{DE.close.t}</H2><P onDark lg>{DE.close.p}</P></div>
        <div className="de-stack" style={{gap:20,position:'relative',justifyContent:'center',alignItems:'flex-start'}}><Button size="lg" iconRight="arrow-right">{DE.cta}</Button><ContactLine onDark/></div>
      </div>
    </Wrap></section>
    <SiteFooter/>
  </div>;
}
window.V2=V2;
