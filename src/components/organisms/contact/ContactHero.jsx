/**
 * Organismo: cabecera de Contact (datos de contacto a la izquierda, formulario a la derecha).
 */
const ContactHero = () => (
  <section style={{ background: 'var(--t3-navy)', position: 'relative', overflow: 'hidden', padding: '96px 0 120px' }}>
    <Overlay background={GLOW_TURQUOISE} />
    <Container className="de-grid de-g2" style={{ position: 'relative', gap: 64, alignItems: 'start' }}>
      <div className="de-stack" style={{ gap: 40 }}>
        <div className="de-stack" style={{ gap: 20 }}>
          <h1 className="ct-h1" style={{ ...UPPERCASE_LABEL, margin: 0, color: 'var(--accent)' }}>{CT.h1}</h1>
          <h2 className="de-hero-h">{CT.h2}</h2>
          <p style={{ margin: 0, font: '400 20px/32px var(--font-body)', color: 'var(--fg-on-inverse-2)', maxWidth: 520 }}>{CT.intro}</p>
        </div>
        <div className="de-stack" style={{ gap: 20, paddingTop: 32, borderTop: '1px solid var(--surface-frost-border)' }}>
          <ContactDetails onDark size={36} />
        </div>
      </div>
      <div className="ct-card" style={{ background: '#fff', borderRadius: 24, border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-lg)', padding: 40 }}>
        <div className="de-stack" style={{ gap: 24 }}>
          <Heading size={28}>{CT.formT}</Heading>
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
);
