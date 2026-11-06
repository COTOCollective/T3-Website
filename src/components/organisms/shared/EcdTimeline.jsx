/** Descarga el white paper desde assets/. */
const downloadWhitePaper = () => {
  const link = document.createElement('a');
  link.href = WHITEPAPER;
  link.download = WHITEPAPER_NAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
};

/**
 * Organismo: sección azul marino de Environmentally Conscious Design como línea de tiempo.
 * @param {object} props
 * @param {string} props.title Título de la sección.
 * @param {string[]} props.labels Etiqueta de cada paso.
 * @param {string[]} props.paragraphs Texto de cada paso (mismo orden que labels).
 * @param {string} props.link Texto del enlace a ECD.
 * @param {string} props.whitePaper Texto del botón de descarga.
 * @param {boolean} [props.compact] Tres columnas con texto pequeño (Environmental);
 *   si es false, dos columnas más amplias (Distribution).
 */
const EcdTimeline = ({ title, labels, paragraphs, link, whitePaper, compact }) => (
  <section className="de-section" style={{ background: 'var(--t3-navy)', overflow: 'hidden' }}>
    <RingBackdrop size={640} rings={0} style={{ position: 'absolute', right: -260, top: -200 }} />
    <Container className="de-stack" style={{ gap: compact ? 56 : 48, position: 'relative' }}>
      <div style={{ maxWidth: compact ? 760 : 820 }}><Heading onDark>{title}</Heading></div>
      <div className={compact ? 'de-grid de-g3 env-steps' : 'de-grid de-g2'} style={{ gap: 0, borderTop: '1px solid var(--surface-frost-border)' }}>
        {labels.map((label, i) => (
          <TimelineStep key={label} label={label} text={paragraphs[i]} compact={compact} padding={compact ? '32px 32px 0 0' : '32px 48px 0 0'} />
        ))}
      </div>
      <div className="de-row" style={{ gap: 24, flexWrap: 'wrap' }}>
        {/* HIDDEN: uncomment when the Environmentally Conscious Design page exists. */}
        {/* <MoreLink onDark>{link}</MoreLink> */}
        <Button variant="secondary" onDark iconRight="download" style={{ height: 48 }} onClick={downloadWhitePaper}>{whitePaper}</Button>
      </div>
    </Container>
  </section>
);
