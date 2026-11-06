/**
 * Organismo: presentación de Environmentally Conscious Design en el inicio.
 * La primera frase del texto va destacada y el resto se reparte en tres columnas con icono.
 */
const EcdFeature = () => {
  const [intro, ...points] = HM.ecd.split(/(?<=\.)\s+/);
  return (
    <section className="de-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <Container className="de-stack" style={{ gap: 48, position: 'relative' }}>
        <Reveal className="de-stack" style={{ gap: 24, maxWidth: 860 }}>
          <Heading size={44}>{HM.ecdT}</Heading>
          <p style={{ margin: 0, font: '600 24px/34px var(--font-display)', color: 'var(--t3-navy)', textWrap: 'pretty', maxWidth: 820 }}>{intro}</p>
          {/* HIDDEN: uncomment when the Environmentally Conscious Design page exists. */}
          {/* <MoreLink onDark style={MORE_LINK_ON_LIGHT}>{HM.ecdLink}</MoreLink> */}
        </Reveal>
        <div className="de-grid de-g3" style={{ gap: '30px 30px' }}>
          {points.map((point, i) => (
            <Reveal key={i} delay={i * 60} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, padding: '0' }}>
              <span style={{ width: 48, height: 48, borderRadius: 99, background: 'var(--t3-turq-100)', color: 'var(--t3-turq-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={HM.ecdIcons[i]} size={22} />
              </span>
              <div className="de-stack" style={{ gap: 8 }}><BodyText lg>{point}</BodyText></div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
