/**
 * Organismo: "What Happens When You Reach Out" (tres pasos numerados).
 */
const ContactSteps = () => (
  <section className="de-section">
    <Container className="de-stack" style={{ gap: 40 }}>
      <Heading>{CT.stepsT}</Heading>
      <ol className="ct-steps de-grid de-g3" style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 32 }}>
        {CT.steps.map((step, i) => <NumberedStep key={i} number={i + 1}>{step}</NumberedStep>)}
      </ol>
    </Container>
  </section>
);
