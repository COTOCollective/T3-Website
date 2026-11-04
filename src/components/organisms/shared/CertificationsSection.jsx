/**
 * Organismo: sección "Licensure and Certifications" con su panel azul marino.
 * @param {object} props
 * @param {string} props.title Título de la sección.
 * @param {string} [props.className='de-section'] Clases de la sección.
 * @param {object} [props.style] Estilos de la sección.
 * @param {boolean} [props.withRings=true] Muestra los anillos decorativos a la izquierda.
 * @param {object} props.panel Props de CertificationsPanel (lead, leadSize, notes, linkLabel...).
 */
const CertificationsSection = ({ title, className = 'de-section', style, withRings = true, panel }) => (
  <section className={className} style={style}>
    {withRings && <RingBackdrop size={520} rings={1} glow={false} opacity={.6} style={{ position: 'absolute', left: -440, top: 0 }} />}
    <Container className="de-stack" style={{ gap: 40 }}>
      <SectionTitle>{title}</SectionTitle>
      <CertificationsPanel {...panel} />
    </Container>
  </section>
);
