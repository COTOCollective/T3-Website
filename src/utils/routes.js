// Navegación del sitio.

/** Enlaces del menú principal. */
const NAV = ['Engineering', 'Environmental', 'About'];

/** Subpáginas que cuelgan de "Engineering" en el menú desplegable. */
const ENGINEERING_SUBPAGES = ['Distribution Engineering'];

/** Relaciona cada texto de navegación o título de tarjeta con su ruta (#hash). */
const ROUTES = {
  'Home': 'home',
  'Engineering': 'delivery',
  'Delivery Engineering': 'delivery',
  'Distribution Engineering': 'distribution',
  'Environmental': 'environmental',
  'About': 'about',
  'Contact': 'contact',
};

/**
 * Devuelve el href de una etiqueta de navegación.
 * @param {string} label Texto del enlace (p. ej. "About").
 * @returns {string} Hash de la ruta; "#home" si la etiqueta no existe.
 */
const routeHref = (label) => '#' + (ROUTES[label] || 'home');
