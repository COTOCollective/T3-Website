/**
 * Cierra un menú al pulsar fuera de él (solo en tablet y móvil, < 1280 px).
 * @param {boolean} isOpen Si el menú está abierto.
 * @param {React.RefObject} containerRef Elemento que contiene el menú.
 * @param {Function} close Función que cierra el menú.
 */
const useCloseOnOutsideClick = (isOpen, containerRef, close) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event) => {
      const container = containerRef.current;
      if (!container) return;
      const page = container.closest('.de-page');
      const pageWidth = page ? page.getBoundingClientRect().width / ((page.getBoundingClientRect().width / page.offsetWidth) || 1) : 0;
      if (pageWidth > 1279) return;
      if (!container.contains(event.target)) close();
    };
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [isOpen]);
};
