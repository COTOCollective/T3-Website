/**
 * Molécula: dato de contacto con su etiqueta (Email, Phone, Location).
 * @param {object} props
 * @param {string} props.label Etiqueta en mayúsculas.
 * @param {string} props.labelColor Color de la etiqueta.
 * @param {React.ReactNode} props.children Valor (enlace grande o texto).
 */
const ContactDetail = ({ label, labelColor, children }) => (
  <div className="de-stack" style={{ gap: 6 }}>
    <span style={{ ...UPPERCASE_LABEL, color: labelColor }}>{label}</span>
    {children}
  </div>
);
