/**
 * Organismo: sección con título y carrusel horizontal de tarjetas de servicio.
 * @param {object} props
 * @param {string} props.title Título de la sección.
 * @param {React.ReactNode} props.children Tarjetas (ServiceCard, HighlightServiceCard...).
 */
const ServicesRail = ({ title, children }) => {
  const [railRef, scrollRail] = useRailScroll();
  return (
    <section className="de-section">
      <Container className="de-stack" style={{ gap: 48 }}>
        <div className="de-row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Heading>{title}</Heading>
          <CarouselControls onPrev={() => scrollRail(-1)} onNext={() => scrollRail(1)} />
        </div>
      </Container>
      <div className="de-rail-wrap" style={{ paddingLeft: 'max(48px, calc((100% - 1200px) / 2))', marginTop: 48 }}>
        <div ref={railRef} className="de-rail" style={{ paddingRight: 48 }}>{children}</div>
      </div>
    </section>
  );
};
