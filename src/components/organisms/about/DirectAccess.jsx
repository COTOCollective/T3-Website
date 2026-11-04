const PATH_LABEL = { font: '500 12px/18px var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent)', maxWidth: 140 };

/**
 * Organismo: "You Work Directly With the Technical Professional".
 * El diagrama del recorrido (primera llamada → entrega final) se anima al entrar en pantalla
 * mediante la clase .in.
 */
const DirectAccess = () => {
  const [pathRef, pathVisible] = useInView(.35);
  return (
    <section className="de-section ab-direct">
      <Container className="de-grid ab-split" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'center' }}>
        <div className="de-stack" style={{ gap: 28 }}>
          <h2 className="ab-direct-h" style={{ margin: 0, font: '800 44px/50px var(--font-display)', color: 'var(--t3-navy)', textWrap: 'balance' }}>{AB.direct.t}</h2>
          <p className="ab-direct-p" style={{ margin: 0, font: '500 24px/34px var(--font-display)', color: 'var(--t3-navy)' }}>{AB.direct.p[0]}</p>
          <BodyText>{AB.direct.p[1]}</BodyText>
        </div>
        <div ref={pathRef} className={'ab-path' + (pathVisible ? ' in' : '')} style={{ position: 'relative', borderRadius: 24, background: 'var(--t3-navy)', overflow: 'hidden', padding: '56px 48px', minHeight: 380, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Overlay background={turquoiseGlow('60% 80% at 50% 50%', .22)} />
          <RingBackdrop size={420} rings={2} glow={false} opacity={.5} style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -210, marginTop: -210 }} />
          <div className="ab-path-line" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'auto minmax(0,1fr) auto minmax(0,1fr) auto', alignItems: 'center' }}>
            <span style={{ width: 14, height: 14, borderRadius: 99, border: '2px solid var(--accent)', background: 'var(--t3-navy)' }}></span>
            <span className="ab-seg l" style={{ height: 2, background: 'var(--accent)' }}></span>
            <span className="ab-path-av" style={{ width: 112, height: 112, borderRadius: 999, overflow: 'hidden', border: '3px solid var(--accent)', boxShadow: '0 0 0 10px rgba(55,198,192,.15)', position: 'relative' }}>
              <img src={photoPath('ab-engineer.png')} alt="T3 technical professional on a call in the field" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '35% 25%', transform: 'scale(1.35)' }} />
            </span>
            <span className="ab-seg r" style={{ height: 2, background: 'var(--accent)' }}></span>
            <span className="ab-end" style={{ width: 14, height: 14, borderRadius: 99, background: 'var(--accent)' }}></span>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 16, marginTop: 24 }}>
            <span style={PATH_LABEL}>{AB.direct.start}</span>
            <span style={{ ...PATH_LABEL, textAlign: 'right' }}>{AB.direct.end}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
