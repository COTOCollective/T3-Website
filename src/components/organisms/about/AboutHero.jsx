/**
 * Organismo: cabecera de About (título grande, presentación y franja de tres fotos).
 */
const AboutHero = () => (
  <section style={{ background: 'var(--t3-navy)', position: 'relative', overflow: 'hidden', padding: '104px 0 72px' }}>
    <RingBackdrop size={720} rings={2} style={{ position: 'absolute', right: -280, top: -220 }} />
    <Container className="de-stack" style={{ position: 'relative', gap: 56 }}>
      <div className="de-grid abh-split" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'end' }}>
        <h1 className="de-hero-h xl">{AB.h1}</h1>
        <div className="de-stack" style={{ gap: 28 }}>
          <p className="ab-lede" style={{ margin: 0, font: '500 24px/36px var(--font-display)', color: '#fff', maxWidth: 820, textWrap: 'pretty', fontSize: 20, lineHeight: '31px' }}>{AB.lede}</p>
          <Button iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48 }}>{DE.cta}</Button>
        </div>
      </div>
      <div className="de-grid abh-strip" style={{ gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)', gap: 16 }}>
        {AB.heroPhotos.map(([file, position]) => (
          <div key={file} style={{ position: 'relative', height: 260, borderRadius: 16, overflow: 'hidden' }}>
            <CoverImage src={photoPath(file)} position={position} />
          </div>
        ))}
      </div>
    </Container>
  </section>
);
