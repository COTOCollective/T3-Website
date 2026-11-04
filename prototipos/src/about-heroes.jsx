function AbH1({dark}){return <h1 className={'de-hero-h'+(dark?' dark':'')}>{AB.h1}</h1>;}
function AbLede({dark,style}){return <p className="ab-lede" style={{margin:0,font:'500 24px/36px var(--font-display)',color:dark?'var(--t3-navy)':'#fff',maxWidth:820,textWrap:'pretty',...style}}>{AB.lede}</p>;}
function AbCta(){return <Button iconRight="arrow-right" style={{alignSelf:'flex-start',height:48}}>{DE.cta}</Button>;}
const abImg=(src,pos,extra)=><img src={src} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:pos||'center',...extra}}/>;

function AbHero1(){return <section className="ab-hero" style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'120px 0 128px'}}>
  {abImg('assets/photos/p08.jpg','70% 40%')}
  <div className="ab-hero-scrim" style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(12,40,52,.96) 0%,rgba(12,40,52,.88) 45%,rgba(12,40,52,.35) 80%,rgba(12,40,52,.2) 100%),linear-gradient(0deg,rgba(12,40,52,.5),rgba(12,40,52,0) 40%)'}}></div>
  <Wrap className="de-stack" style={{position:'relative',gap:32,maxWidth:1000,marginLeft:'max(0px,calc((100% - 1296px)/2))'}}><AbH1/><AbLede/><AbCta/></Wrap>
</section>;}

function AbHero2(){return <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'88px 0 96px'}}>
  <div style={{position:'absolute',inset:0,background:'radial-gradient(50% 70% at 20% 30%,rgba(55,198,192,.2),rgba(55,198,192,0) 70%)'}}></div>
  <Wrap className="de-grid abh-split" style={{position:'relative',gridTemplateColumns:'minmax(0,1.1fr) minmax(0,1fr)',gap:64,alignItems:'center'}}>
    <div className="de-stack" style={{gap:28}}><AbH1/><AbLede style={{fontSize:21,lineHeight:'32px'}}/><AbCta/></div>
    <div className="abh-photo" style={{position:'relative',height:560,borderRadius:24,overflow:'hidden'}}>{abImg('assets/photos/p16.jpg','center 55%')}</div>
  </Wrap>
</section>;}

function AbHero3(){return <section style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',padding:'104px 0 72px'}}>
  <RingBackdrop size={720} rings={2} style={{position:'absolute',right:-280,top:-220}}/>
  <Wrap className="de-stack" style={{position:'relative',gap:56}}>
    <div className="de-grid abh-split" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:64,alignItems:'end'}}>
      <h1 className="de-hero-h xl">{AB.h1}</h1>
      <div className="de-stack" style={{gap:28}}><AbLede style={{fontSize:20,lineHeight:'31px'}}/><AbCta/></div>
    </div>
    <div className="de-grid abh-strip" style={{gridTemplateColumns:'minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)',gap:16}}>
      {[['p08.jpg','center 45%'],['ab-substation.png','center 55%'],['p11.jpg','center 60%']].map(([s,p])=><div key={s} style={{position:'relative',height:260,borderRadius:16,overflow:'hidden'}}>{abImg('assets/photos/'+s,p)}</div>)}
    </div>
  </Wrap>
</section>;}

function AbHero4(){return <section style={{background:'#fff',position:'relative',padding:'88px 0 0'}}>
  <Wrap className="de-stack" style={{gap:56}}>
    <div className="de-grid abh-split" style={{gridTemplateColumns:'minmax(0,1fr) minmax(0,1.1fr)',gap:64,alignItems:'start'}}>
      <div className="de-stack" style={{gap:24}}><Bar/><AbH1 dark/></div>
      <div className="de-stack" style={{gap:28,paddingTop:28}}><AbLede dark style={{fontSize:21,lineHeight:'32px'}}/><AbCta/></div>
    </div>
    <div className="abh-wide" style={{position:'relative',height:520,borderRadius:24,overflow:'hidden'}}>{abImg('assets/photos/p10.jpg','center 65%')}</div>
  </Wrap>
</section>;}

function AbHero5(){return <section className="abh-full" style={{background:'var(--t3-navy)',position:'relative',overflow:'hidden',minHeight:760,display:'flex',flexDirection:'column'}}>
  {abImg('assets/photos/p11.jpg','center 55%')}
  <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(12,40,52,.8) 0%,rgba(12,40,52,.2) 55%,rgba(12,40,52,.35) 100%)'}}></div>
  <Wrap style={{position:'relative',marginTop:'auto',paddingBottom:72}}>
    <div className="abh-frost" style={{background:'var(--surface-frost)',backdropFilter:'blur(var(--blur-frost))',WebkitBackdropFilter:'blur(var(--blur-frost))',border:'1px solid var(--surface-frost-border)',borderRadius:24,padding:48,maxWidth:820,display:'flex',flexDirection:'column',gap:24}}>
      <h1 className="de-hero-h" style={{fontSize:60,lineHeight:'64px'}}>{AB.h1}</h1><AbLede style={{fontSize:20,lineHeight:'31px'}}/><AbCta/>
    </div>
  </Wrap>
</section>;}

const AB_HEROES=[['h1','01 · Full-bleed photo, left scrim',AbHero1],['h2','02 · Navy split, photo card right',AbHero2],['h3','03 · Typographic navy, photo strip below',AbHero3],['h4','04 · White editorial, wide photo band',AbHero4],['h5','05 · Full-bleed photo, frosted panel',AbHero5]];
Object.assign(window,{AB_HEROES,AbHero1,AbHero2,AbHero3,AbHero4,AbHero5});
