/**
 * Plantilla: estructura común de todas las páginas (cabecera opcional, secciones y pie).
 * @param {object} props
 * @param {React.ReactNode} [props.header] Cabecera del sitio; se omite si la primera sección ya la incluye.
 * @param {React.ReactNode} props.children Secciones (organismos) de la página.
 */
const PageTemplate = ({ header, children }) => (
  <div className="de-page">
    {header}
    {children}
    <SiteFooter />
  </div>
);
