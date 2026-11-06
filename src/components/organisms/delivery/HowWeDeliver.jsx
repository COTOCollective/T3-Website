/**
 * Organismo: "How We Deliver" en una tarjeta blanca con dos columnas.
 */
const HowWeDeliver = () => (
  <section className="de-section">
    <Container>
      <div style={{ borderRadius: 'var(--radius-card)', padding: 48, background: '#fff', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-sm)' }}>
        <div className="de-stack" style={{ gap: 48 }}>
          <Heading size={36}>{DE.std.t}</Heading>
          <div className="de-grid de-g2" style={{ gap: 48 }}>
            {DE.std.items.map((item) => (
              <div key={item.t} className="de-stack" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 className="de-h3">{item.t}</h3>
                {item.p.map((p) => <BodyText key={p}>{p}</BodyText>)}
                {/* HIDDEN: uncomment when the strategic undergrounding case study page exists. */}
                {/* {item.link && <MoreLink onDark style={MORE_LINK_ON_LIGHT}>{item.link}</MoreLink>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);
