/**
 * Organismo: pie de página del sitio (marca, navegación, contacto y aviso legal).
 */
const SiteFooter = () => (
  <footer style={{ background: 'var(--t3-navy-900)', color: 'var(--fg-on-inverse-2)', padding: '64px 0 32px' }}>
    <Container>
      <div className="de-grid de-g-foot">
        <div className="foot-brand" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <BrandLockup light />
          <p style={{ margin: 0, font: '400 14px/22px var(--font-body)', maxWidth: 360 }}>Engineers licensed in all 50 states. Certifications listed on the /certifications page. Serving clients nationally across utilities, municipal, construction, and industrial markets.</p>
        </div>
        <div className="foot-nav">
          {NAV.map((label) => <a key={label} href={routeHref(label)} className="de-foot-a" style={{ height: 26 }}>{label}</a>)}
        </div>
        <div className="foot-contact">
          <div style={{ font: '500 13px/26px var(--font-mono)', color: '#fff', display: 'flex' }}>Contact: {DE.phone} · {DE.email}</div>
        </div>
      </div>
      <div className="foot-legal" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border-on-inverse)', display: 'flex', flexDirection: 'column', gap: 8, font: '300 12px/19px var(--font-body)', color: 'var(--t3-steel-300)' }}>
        <p style={{ margin: 0 }}>Engineering services provided by licensed Professional Engineers in the jurisdiction of the project. Environmental services provided by qualified professionals holding the applicable state or federal credentials for the scope of work.</p>
        <p style={{ margin: '12px 0 0', font: '500 12px var(--font-body)', color: 'var(--fg-on-inverse-2)' }}>© 2026 T3 Consulting, Inc. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);
