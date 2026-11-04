/**
 * Molécula: los dos botones de llamada a la acción del cierre de página
 * ("Talk to a Technical Professional" y "Request our Capability Statement").
 */
const CtaButtons = () => (
  <div className="de-row" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
    <Button size="lg" iconRight="arrow-right" style={{ height: 48 }}>{DE.cta}</Button>
    <Button size="lg" variant="secondary" onDark style={{ height: 48 }}>{DE.capCta}</Button>
  </div>
);
