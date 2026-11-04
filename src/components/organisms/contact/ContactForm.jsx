/**
 * Organismo: formulario de contacto. Al enviarlo muestra un mensaje de confirmación
 * (no se envía a ningún servidor).
 */
const ContactForm = () => {
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) return <FormConfirmation message={CT.confirm} onBack={() => setSent(false)} />;

  return (
    <form className="de-stack ct-form" style={{ gap: 18 }} onSubmit={handleSubmit}>
      {CT.fields.map(([label, type]) => <FormField key={label} label={label} type={type} />)}
      <FormField label="Service area" type="select" options={CT.areas} />
      <FormField label="Project details" type="textarea" rows={5} />
      <Button type="submit" iconRight="arrow-right" style={{ alignSelf: 'flex-start', height: 48, marginTop: 6 }}>{CT.submit}</Button>
    </form>
  );
};
