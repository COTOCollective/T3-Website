/**
 * Molécula: par de botones anterior / siguiente para los carruseles de servicios.
 * @param {object} props
 * @param {Function} props.onPrev Acción del botón "anterior".
 * @param {Function} props.onNext Acción del botón "siguiente".
 */
const CarouselControls = ({ onPrev, onNext }) => (
  <div className="de-row" style={{ gap: 12 }}>
    <button className="de-iconbtn light" onClick={onPrev} aria-label="Previous"><Icon name="arrow-left" size={20} /></button>
    <button className="de-iconbtn light" onClick={onNext} aria-label="Next"><Icon name="arrow-right" size={20} /></button>
  </div>
);
