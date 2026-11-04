// Estilos compartidos entre varios componentes.

/** Superficie blanca de tarjeta con borde fino y sombra suave. */
const CARD_SURFACE = {
  borderRadius: 'var(--radius-card)',
  background: '#fff',
  border: '1px solid var(--border-hairline)',
  boxShadow: 'var(--shadow-sm)',
};

/** Etiqueta pequeña en mayúsculas (página de contacto). */
const UPPERCASE_LABEL = { font: '600 12px/16px var(--font-display)', letterSpacing: '.14em', textTransform: 'uppercase' };

/** Degradado turquesa del sistema de diseño. */
const GLOW_TURQUOISE = 'var(--glow-turquoise)';

/**
 * Crea un resplandor radial turquesa.
 * @param {string} shape Forma y posición del degradado (p. ej. "50% 70% at 25% 30%").
 * @param {number} [alpha=.2] Opacidad del centro.
 * @returns {string} Valor CSS para `background`.
 */
const turquoiseGlow = (shape, alpha = .2) => `radial-gradient(${shape},rgba(55,198,192,${alpha}),rgba(55,198,192,0) 70%)`;

/** Evita la navegación de los enlaces que todavía no tienen destino. */
const preventDefault = (event) => event.preventDefault();
