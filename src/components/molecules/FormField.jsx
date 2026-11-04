const FIELD_STYLE = { display: 'flex', flexDirection: 'column', gap: 8 };
const FIELD_LABEL_STYLE = { font: '600 14px/20px var(--font-body)', color: 'var(--t3-navy)' };
const FIELD_INPUT_STYLE = { font: '400 16px/24px var(--font-body)', color: 'var(--t3-navy)', padding: '12px 14px', borderRadius: 8, border: '1px solid var(--border-strong)', background: '#fff', width: '100%', boxSizing: 'border-box' };

/**
 * Molécula: campo de formulario con su etiqueta.
 * @param {object} props
 * @param {string} props.label Texto de la etiqueta.
 * @param {string} [props.type='text'] Tipo de input; también admite "select" y "textarea".
 * @param {string[]} [props.options] Opciones cuando type es "select".
 * @param {number} [props.rows] Filas cuando type es "textarea".
 */
const FormField = ({ label, type = 'text', options = [], rows }) => {
  const renderControl = () => {
    if (type === 'select') {
      return (
        <select style={{ ...FIELD_INPUT_STYLE, appearance: 'auto' }} defaultValue="">
          <option value="" disabled></option>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
      );
    }
    if (type === 'textarea') return <textarea rows={rows} style={{ ...FIELD_INPUT_STYLE, resize: 'vertical' }}></textarea>;
    return <input type={type} style={FIELD_INPUT_STYLE} />;
  };

  return (
    <label style={FIELD_STYLE}>
      <span style={FIELD_LABEL_STYLE}>{label}</span>
      {renderControl()}
    </label>
  );
};
