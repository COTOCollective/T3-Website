/**
 * Organismo: sección "Proven Results" dividida en carrusel de testimonios (izquierda) y foto (derecha).
 */
const ProofSplit = () => (
  <section style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}>
    <div className="de-grid pq-split" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', minHeight: 640 }}>
      <div style={{ background: 'var(--gradient-navy)', padding: '96px 64px 96px 120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40, position: 'relative', overflow: 'hidden' }}>
        <Overlay background={turquoiseGlow('60% 60% at 20% 20%', .18)} />
        <div style={{ position: 'relative' }}><Heading onDark>{HM.proofT}</Heading></div>
        <div style={{ position: 'relative' }}>
          <QuoteCarousel quotes={HM.quotes} onDark maxWidth={560} renderSlide={(quote) => <QuoteBlock quote={quote} onDark size={36} />} />
        </div>
        <div style={{ position: 'relative' }}><Button size="lg" iconRight="arrow-right" style={{ height: 48 }}>{HM.cta}</Button></div>
      </div>
      <div className="hp-photo" style={{ position: 'relative' }}>
        <CoverImage src={HM.proofPhoto.src} alt={HM.proofPhoto.alt} />
      </div>
    </div>
  </section>
);
