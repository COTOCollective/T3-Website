/**
 * Anima la entrada de los bloques de cada sección (salvo la primera) cuando
 * aparecen en pantalla. Les añade la clase .rv y después .in (ver styles/site.css).
 * @param {React.RefObject} anchorRef Cualquier elemento dentro de la página (.de-page).
 */
const useSectionReveal = (anchorRef) => {
  React.useEffect(() => {
    if (window.DE_STATIC || !anchorRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Busca la .de-page más externa que contiene al elemento.
    let page = null;
    for (let el = anchorRef.current; el; el = el.parentElement) {
      if (el.classList && el.classList.contains('de-page')) page = el;
    }
    if (!page) return;

    const sections = [...page.querySelectorAll('section')].slice(1);
    const blocks = sections.flatMap((section) => [...section.children].filter((child) =>
      child.classList.contains('de-wrap') || child.classList.contains('de-rail-wrap')));
    const pending = new Set();

    const show = (el) => { el.classList.add('in'); pending.delete(el); observer.unobserve(el); };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting || entry.boundingClientRect.top < 0) show(entry.target);
    }), { threshold: .08 });
    const showPassedBlocks = () => pending.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
    });

    blocks.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('rv'); pending.add(el); observer.observe(el); }
    });
    window.addEventListener('scroll', showPassedBlocks, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', showPassedBlocks); };
  }, []);
};
