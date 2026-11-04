// Rutas de imágenes y logotipos.

const LOGO_WHITE = 'assets/t3-mark-white.png';
const LOGO_COLOR = 'assets/t3-mark-color.png';

/**
 * Devuelve la ruta de una foto de assets/photos.
 * @param {string} name Nombre del archivo; si no lleva extensión se asume ".jpg" (p. ej. "p11").
 * @returns {string} Ruta relativa de la foto.
 */
const photoPath = (name) => 'assets/photos/' + (/\.\w+$/.test(name) ? name : name + '.jpg');
