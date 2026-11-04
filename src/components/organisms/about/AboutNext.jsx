/**
 * Organismo: "Where the Firm Is Going" (lista numerada de objetivos).
 */
const AboutNext = () => (
  <section className="de-section">
    <Container className="de-stack" style={{ gap: 40 }}>
      <Heading>{AB.next.t}</Heading>
      <ol className="ct-steps ab-steps de-grid de-g3" style={{ margin: 0, padding: 0, listStyle: 'none', gap: 32 }}>
        {AB.next.items.map(([goal, detail], i) => (
          <NumberedStep key={goal} number={i + 1} className="rv-li" style={{ transitionDelay: (i * 60) + 'ms' }}>
            <b style={{ fontWeight: 600, color: 'var(--t3-navy)' }}>{goal}</b> {detail}
          </NumberedStep>
        ))}
      </ol>
    </Container>
  </section>
);
