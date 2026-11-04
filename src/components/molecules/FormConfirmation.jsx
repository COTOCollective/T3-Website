/**
 * Molécula: mensaje de confirmación tras enviar el formulario.
 * @param {object} props
 * @param {string} props.message Texto de confirmación.
 * @param {Function} props.onBack Acción del enlace "Back to form".
 */
const FormConfirmation = ({ message, onBack }) => (
  <div className="de-stack ct-confirm" style={{ gap: 20, padding: '8px 0' }}>
    <span style={{ width: 48, height: 48, borderRadius: 99, background: 'var(--t3-turq-100)', color: 'var(--t3-turq-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={24} /></span>
    <BodyText lg style={{ color: 'var(--t3-navy)' }}>{message}</BodyText>
    <button type="button" className="de-link" style={{ all: 'unset', cursor: 'pointer', font: '600 14px/20px var(--font-body)', color: 'var(--t3-turq-700)' }} onClick={onBack}>Back to form</button>
  </div>
);
