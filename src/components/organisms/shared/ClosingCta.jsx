/**
 * Organismo: bloque azul marino de cierre de página con llamada a la acción.
 * @param {object} props
 * @param {string} props.title Título.
 * @param {string} [props.text] Párrafo opcional bajo el título.
 * @param {React.ReactNode} [props.children] Botones propios; por defecto se usan los CtaButtons.
 */
const ClosingCta = ({ title, text, children }) => (
  <section className="de-section" style={{ background: 'var(--t3-navy)', overflow: 'hidden' }}>
    <Overlay background={GLOW_TURQUOISE} />
    <RingBackdrop size={560} rings={2} style={{ position: 'absolute', left: -220, bottom: -260 }} />
    <Container className="de-stack" style={{ position: 'relative', alignItems: 'center', textAlign: 'center', gap: 24, maxWidth: 820 }}>
      <AccentBar />
      <Heading onDark size={52}>{title}</Heading>
      {text && <BodyText onDark lg>{text}</BodyText>}
      {children || <CtaButtons />}
    </Container>
  </section>
);
