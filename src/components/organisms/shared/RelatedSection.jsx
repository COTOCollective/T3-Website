/**
 * Organismo: cuadrícula de páginas o servicios relacionados.
 * @param {object} props
 * @param {string} props.title Título de la sección.
 * @param {Array<{k: string, i: string}>} props.items Título e icono de cada tarjeta.
 * @param {2|3} [props.columns=3] Número de columnas.
 * @param {object} [props.style] Estilos de la sección.
 * @param {boolean} [props.animated] Hace aparecer las tarjetas de forma escalonada.
 */
const RelatedSection = ({ title, items, columns = 3, style = { paddingTop: 48 }, animated }) => (
  <section className="de-section" style={style}>
    <Container className="de-stack" style={{ gap: 40 }}>
      <SectionTitle>{title}</SectionTitle>
      <div className={'de-grid de-g' + columns} style={{ gap: 20 }}>
        {items.map((item, n) => animated
          ? <Reveal key={item.k} delay={n * 60}><RelatedCard icon={item.i} title={item.k} style={{ height: '100%' }} /></Reveal>
          : <RelatedCard key={item.k} icon={item.i} title={item.k} />)}
      </div>
    </Container>
  </section>
);
