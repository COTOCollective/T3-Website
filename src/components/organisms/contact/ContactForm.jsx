/**
 * Organismo: formulario de contacto embebido desde GoHighLevel.
 * El script de embed redimensiona el iframe según el contenido del formulario.
 */
const GHL_FORM_SCRIPT = 'https://link.coto.services/js/form_embed.js';

const ContactForm = () => {
  React.useEffect(() => {
    if (document.querySelector(`script[src="${GHL_FORM_SCRIPT}"]`)) return undefined;
    const script = document.createElement('script');
    script.src = GHL_FORM_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
    return undefined;
  }, []);

  return (
    <iframe
      src="https://link.coto.services/widget/form/bbrBt5Oss6Rx36pG6cmJ"
      id="inline-bbrBt5Oss6Rx36pG6cmJ"
      title="Send us your project details"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Form 0"
      data-height="768"
      data-layout-iframe-id="inline-bbrBt5Oss6Rx36pG6cmJ"
      data-form-id="bbrBt5Oss6Rx36pG6cmJ"
      data-cookie-consent="true"
      data-cookie-consent-provider="auto"
      style={{ width: '100%', height: 768, border: 'none', borderRadius: 8, display: 'block' }}
    />
  );
};
