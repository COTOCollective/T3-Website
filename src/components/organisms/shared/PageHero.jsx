/**
 * Organismo: cabecera azul marino de una página de servicio (texto a la izquierda, imagen a la derecha).
 * @param {object} props
 * @param {string} props.title Título <h1>.
 * @param {string} props.lede Frase destacada bajo el título.
 * @param {string} props.ledeFont Valor CSS `font` de la frase destacada.
 * @param {string[]} props.paragraphs Párrafos de introducción (el primero limitado a 600 px).
 * @param {React.ReactNode} props.visual Imagen o composición de la derecha.
 */
const PageHero = ({ title, lede, ledeFont, paragraphs, visual }) => (
  <section style={{ background: 'var(--t3-navy)', position: 'relative', overflow: 'hidden', padding: '96px 0 112px' }}>
    <Overlay background={GLOW_TURQUOISE} />
    <Overlay background={turquoiseGlow('50% 70% at 25% 30%')} />
    <Container className="de-grid de-g-hero" style={{ position: 'relative', alignItems: 'flex-start', gap: 64 }}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1 className="de-hero-h">{title}</h1>
        <p style={{ margin: 0, font: ledeFont, color: '#fff', maxWidth: 620 }}>{lede}</p>
        {paragraphs.map((p, i) => <BodyText key={p} onDark style={i === 0 ? { maxWidth: 600 } : undefined}>{p}</BodyText>)}
        <Button iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48 }}>{DE.cta}</Button>
      </Reveal>
      {visual}
    </Container>
  </section>
);
