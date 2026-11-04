/**
 * Molécula: logotipo de T3 + nombre de la empresa, enlazado al inicio.
 * @param {object} props
 * @param {boolean} [props.light] Versión blanca para fondos oscuros.
 */
const BrandLockup = ({ light }) => (
  <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
    <img src={light ? LOGO_WHITE : LOGO_COLOR} alt="T3 Consulting" style={{ height: 38 }} />
    <span className="de-hide-sm" style={{ font: '700 11px var(--font-display)', letterSpacing: '.22em', color: light ? '#fff' : 'var(--t3-navy)' }}>T3 CONSULTING, INC.</span>
  </a>
);
