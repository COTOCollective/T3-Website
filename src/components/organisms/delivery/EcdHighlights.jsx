const ECD_TILE = { gridColumn: 'span 4', borderRadius: 'var(--radius-card)', padding: 32, background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 16 };

/**
 * Organismo: "Engineering and Environmental Review Together" en tres tarjetas
 * (Delivery Engineering). La última frase se destaca en una tarjeta azul marino.
 */
const EcdHighlights = () => {
  const [lateRisk, sameFirm] = DE.ecd.p[2].split('. ');
  return (
    <section className="de-section">
      <Container className="de-stack v6-ecd" style={{ gap: 40 }}>
        <div className="de-grid de-g2 v6-ecd-top" style={{ gap: 64, alignItems: 'end' }}>
          <div className="de-stack" style={{ gap: 16 }}><Heading>{DE.ecd.title}</Heading></div>
          <BodyText lg>{DE.ecd.p[0]}</BodyText>
        </div>
        <div className="de-grid de-g12 v6-ecd-tiles" style={{ gap: 16 }}>
          <div className="v1-tile" style={ECD_TILE}>
            <Icon name="route" size={20} color="var(--t3-steel)" />
            <BodyText>{DE.ecd.p[1]}</BodyText>
          </div>
          <div style={ECD_TILE}>
            <Icon name="git-fork" size={20} color="var(--t3-steel)" />
            <BodyText>{lateRisk}.</BodyText>
          </div>
          <div style={{ ...ECD_TILE, background: 'var(--t3-navy)', border: 'none', boxShadow: 'none' }}>
            <Icon name="git-merge" size={20} color="var(--accent)" />
            <p style={{ margin: 0, font: '700 22px/30px var(--font-display)', color: '#fff' }}>{sameFirm}</p>
            {/* HIDDEN: uncomment when the Environmentally Conscious Design page exists. */}
            {/* <div style={{ marginTop: 'auto' }}><MoreLink onDark>{DE.ecd.link}</MoreLink></div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};
