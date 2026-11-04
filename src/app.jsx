// Punto de entrada de la aplicación: enrutado por #hash y enlaces de los botones de contacto.

/** Rutas del sitio: #home, #delivery, #environmental, #distribution, #about, #contact. */
const PAGES = {
  home: { title: 'T3 Consulting', Component: HomePage },
  delivery: { title: 'Delivery Engineering | T3 Consulting', Component: DeliveryEngineeringPage },
  environmental: { title: 'Environmental | T3 Consulting', Component: EnvironmentalPage },
  distribution: { title: 'Distribution Engineering | T3 Consulting', Component: DistributionEngineeringPage },
  about: { title: 'About | T3 Consulting', Component: AboutPage },
  contact: { title: 'Contact | T3 Consulting', Component: ContactPage },
};

/** Textos de los botones que llevan a la página de contacto. */
const CTA_TEXTS = [DE.cta, DE.capCta, HM.cta];

/**
 * Devuelve la ruta actual según el hash de la URL.
 * @returns {string} Clave de PAGES; "home" si el hash no existe.
 */
const currentRoute = () => {
  const key = location.hash.slice(1);
  return PAGES[key] ? key : 'home';
};

/**
 * Navega a una ruta. Si ya estamos en ella, vuelve arriba.
 * @param {string} route Clave de PAGES.
 */
const goTo = (route) => {
  if (location.hash.slice(1) === route) window.scrollTo(0, 0);
  else location.hash = route;
};

/**
 * Conecta con las páginas los botones y tarjetas del diseño que no tienen href:
 * los botones de llamada a la acción van a Contact y las tarjetas con data-route a su página.
 * @param {MouseEvent} event Clic en el documento.
 */
const handleDocumentClick = (event) => {
  const button = event.target.closest('button, a');
  if (button && !button.closest('form') && CTA_TEXTS.some((text) => button.textContent.trim() === text)) {
    event.preventDefault();
    goTo('contact');
    return;
  }
  const card = event.target.closest('[data-route]');
  if (card) {
    event.preventDefault();
    goTo(card.dataset.route);
  }
};

/**
 * Marca como enlazables las tarjetas cuyo título coincide con una página
 * (pilares del inicio, "Related Services", etc.).
 */
const tagRouteCards = () => {
  document.querySelectorAll('.hm-pillar, .v6-card').forEach((card) => {
    const heading = card.querySelector('h3');
    const route = heading && ROUTES[heading.textContent.trim()];
    if (route) card.dataset.route = route;
  });
};

/**
 * Componente raíz: muestra la página correspondiente al hash actual.
 */
const Site = () => {
  const [route, setRoute] = React.useState(currentRoute);

  React.useEffect(() => {
    const handleHashChange = () => { setRoute(currentRoute()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    document.title = PAGES[route].title;
    tagRouteCards();
  }, [route]);

  const { Component } = PAGES[route];
  return <Component key={route} />;
};

document.addEventListener('click', handleDocumentClick);
window.DE_STATIC = false;
ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
