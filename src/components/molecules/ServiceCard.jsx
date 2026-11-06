/**
 * Molécula: tarjeta de servicio del carrusel (foto, descripción, viñetas y enlace).
 * @param {object} props
 * @param {string} props.title Nombre del servicio (aparece sobre la foto).
 * @param {string} props.image Ruta de la foto.
 * @param {string[]} props.paragraphs Párrafos de descripción.
 * @param {string[]} [props.bullets] Lista opcional de viñetas.
 * @param {string} [props.linkLabel] Texto del enlace final (opcional).
 */
const ServiceCard = ({ title, image, paragraphs, bullets, linkLabel }) => (
  <article className="de-stack" style={{ gap: 20 }}>
    <Photo height={300} title={title} src={image} onClick={() => {}} />
    {paragraphs.map((p) => <BodyText key={p} style={{ fontSize: 15, lineHeight: '24px' }}>{p}</BodyText>)}
    <BulletList items={bullets} />
    {/* HIDDEN: uncomment when the individual service pages exist
        (Engineering Services and Environmental Services carousels). */}
    {/* {linkLabel && <TextLink>{linkLabel}</TextLink>} */}
  </article>
);
