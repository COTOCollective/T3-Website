// Contenido de la página de inicio (#home).
const HM = {
  h1: 'Infrastructure Engineering and Environmental Compliance in One Firm',
  sub: 'For utilities, municipal, construction, and industrial clients. Direct-engineer access on every project.',
  lic: 'Engineers licensed in all 50 states.',
  cta: 'Talk to a Technical Professional',
  heroSlides: [
    { src: 'assets/photos/p12.jpg', label: 'Environmental' },
    { src: 'assets/photos/g2.jpg', label: 'Sustainability' },
    { src: 'assets/photos/g3.jpg', label: 'Engineering & Design' },
    { src: 'assets/photos/g1.jpg', label: 'Program Management' },
    { src: 'assets/photos/stakeholder.png', label: 'Stakeholder Engagement' },
  ],
  pillarsT: 'What T3 Does',
  pillars: [
    { k: 'Engineering', b: 'Substation, transmission, and distribution design from 12 kV through 500 kV, from first concept to the last design submittal.', i: 'zap' },
    { k: 'Environmental', b: 'Stormwater permitting and compliance, environmental review and permitting, Phase I Environmental Site Assessments, and sustainability advisory.', i: 'leaf' },
    { k: 'Project and Program Management', b: 'Scheduling, cost control, and risk analysis for capital programs, run on your program cadence.', i: 'layers' },
  ],
  ecdT: 'Environmentally Conscious Design™',
  ecd: 'Environmentally Conscious Design (ECD) means the engineering and the environmental review happen together, from the first decision. T3 weighs route options, foundations, and structures against both sets of constraints before drawings begin. Environmental risk gets named early, while it is still a design choice, instead of late, when it is a schedule problem. Stakeholder engagement runs on the same early timeline, so the people who can hold a project up are brought in while the design can still change.',
  ecdIcons: ['route', 'shield-alert', 'users'],
  ecdLink: 'See How Environmentally Conscious Design Works',
  proofT: 'Proven Results',
  quote: 'They see the big picture and identify risks and gaps in the work.',
  quoteBy: 'Matt Merscheim, Par Western Line Contractors',
  proofPhoto: { src: 'assets/photos/p06.jpg', alt: 'Crew in hi-vis overlooking a lake from a pole line' },
  caseT: 'A 14-mile strategic undergrounding program for a leading utility company in Southern California, delivered across two projects.',
  case1: 'One circuit was accelerated approximately seven months into 2024, allowing the utility to hit an annual mileage target it would have otherwise missed. Pricing came in 15 to 20 percent below the average engineering and design contractor on the program.',
  case2: 'Program results reflect the specific scope and site conditions of that project.',
  caseLink: 'See the Full Program in Projects and Case Studies',
  certT: 'Certifications and Licensure',
  cert1: 'Engineers licensed in all 50 states, whether or not a project requires it.',
  cert2: 'T3 is also a certified diverse business. The verified roster, with certifying bodies and identifiers, is on the Certifications page.',
  closeT: 'Talk to a Technical Professional',
  close: 'Tell us the scope and the date it has to be done by. You will be on the phone with the technical professional who would do the work, not an account manager.',
};

// El carrusel de testimonios repite la cita disponible hasta tener más clientes.
HM.quotes = [1, 2, 3].map(() => ({ q: HM.quote, by: HM.quoteBy }));
