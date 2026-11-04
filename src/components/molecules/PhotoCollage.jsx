/**
 * Molécula: composición de tres fotos superpuestas (cabecera de Environmental).
 * @param {object} props
 * @param {[string, string, string]} props.photos Rutas de la foto grande, la pequeña y la inferior.
 */
const PhotoCollage = ({ photos }) => {
  const [main, small, bottom] = photos;
  return (
    <div className="env-hero" style={{ position: 'relative', height: '100%', minHeight: 640, paddingLeft: 56 }}>
      <Photo height={420} src={main} style={{ borderRadius: 16 }} />
      <div style={{ position: 'absolute', left: 0, top: 328, width: 240, borderRadius: 16, overflow: 'hidden' }}>
        <Photo height={200} src={small} style={{ borderRadius: 16 }} />
      </div>
      <div style={{ position: 'absolute', left: 264, right: 0, top: 444, bottom: 0, borderRadius: 16, overflow: 'hidden' }}>
        <Photo height="100%" src={bottom} style={{ borderRadius: 16 }} />
      </div>
    </div>
  );
};
