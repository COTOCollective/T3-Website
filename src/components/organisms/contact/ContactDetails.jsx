/**
 * Organismo: correo, teléfono y ubicación de T3.
 * @param {object} props
 * @param {boolean} [props.onDark] Variante para fondos oscuros.
 * @param {number} [props.size] Tamaño en px del correo y el teléfono.
 */
const ContactDetails = ({ onDark, size }) => {
  const labelColor = onDark ? 'var(--accent)' : 'var(--t3-steel)';
  return (
    <div className="de-stack" style={{ gap: 28 }}>
      <ContactDetail label="Email" labelColor={labelColor}>
        <BigLink href={'mailto:' + CT.email} onDark={onDark} size={size}>{CT.email}</BigLink>
      </ContactDetail>
      <ContactDetail label="Phone" labelColor={labelColor}>
        <BigLink href={'tel:' + CT.phone} onDark={onDark} size={size}>{CT.phone}</BigLink>
      </ContactDetail>
      <ContactDetail label="Location" labelColor={labelColor}>
        <BodyText onDark={onDark}>{CT.loc}</BodyText>
      </ContactDetail>
    </div>
  );
};
