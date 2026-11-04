/**
 * Átomo: título <h2> más ligero (700) usado en certificaciones y servicios relacionados.
 * @param {object} props
 * @param {React.ReactNode} props.children Texto del título.
 */
const SectionTitle = ({ children }) => (
  <h2 style={{ margin: 0, font: '700 40px/48px var(--font-display)', letterSpacing: '-.015em', color: 'var(--t3-navy)' }}>{children}</h2>
);
