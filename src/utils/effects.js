// Efectos globales del sitio que no pertenecen a un componente concreto.

/**
 * Hace que el brillo de las tarjetas .v6-card siga al cursor
 * (actualiza las variables CSS --mx y --my).
 * @param {MouseEvent} event Evento mousemove del documento.
 */
const trackCardGlow = (event) => {
  const card = event.target.closest && event.target.closest('.v6-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', (event.clientX - rect.left) + 'px');
  card.style.setProperty('--my', (event.clientY - rect.top) + 'px');
};

if (!window.__cardGlowInstalled) {
  window.__cardGlowInstalled = true;
  document.addEventListener('mousemove', trackCardGlow, { passive: true });
}

// Activa las animaciones CSS del sitio (desactivadas en exportaciones estáticas).
if (!window.DE_STATIC) document.documentElement.classList.add('de-live');
