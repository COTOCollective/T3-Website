/* @ds-bundle: {"format":4,"namespace":"T3ConsultingDesignSystem_2ce685","components":[{"name":"CapabilityList","sourcePath":"components/content/CapabilityList.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FrostedPanel","sourcePath":"components/content/FrostedPanel.jsx"},{"name":"ImageCard","sourcePath":"components/content/ImageCard.jsx"},{"name":"RingBackdrop","sourcePath":"components/content/RingBackdrop.jsx"},{"name":"StatCounter","sourcePath":"components/content/StatCounter.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/CapabilityList.jsx":"3990d5b3fd37","components/content/Card.jsx":"ac658a981ba2","components/content/FrostedPanel.jsx":"4017d3f17fa7","components/content/ImageCard.jsx":"4bd72b060dfc","components/content/RingBackdrop.jsx":"5a8a5a3d1168","components/content/StatCounter.jsx":"fe24f4939be4","components/core/Badge.jsx":"6fae2157c996","components/core/Button.jsx":"b36b87dbf6d8","components/core/Eyebrow.jsx":"48bc4d79aba0","components/core/Icon.jsx":"485f72006b75","components/core/Tag.jsx":"c5ad91cfc572","components/forms/Checkbox.jsx":"1d93ea317ac4","components/forms/Input.jsx":"321b32f42aeb","components/forms/Select.jsx":"927b4d22d865","ui_kits/website/Chrome.jsx":"05c2c0444a9e","ui_kits/website/ContactScreen.jsx":"920981925cff","ui_kits/website/HomeScreen.jsx":"e4fa23541c65","ui_kits/website/ProjectsScreen.jsx":"8fcdd9bcc2a8","ui_kits/website/ServicesScreen.jsx":"5a88a08b169e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.T3ConsultingDesignSystem_2ce685 = window.T3ConsultingDesignSystem_2ce685 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function Card({
  tone = 'white',
  interactive = false,
  padding = 24,
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const t = {
    white: {
      background: '#fff',
      border: '1px solid var(--border-hairline)',
      color: 'var(--fg-2)'
    },
    navy: {
      background: 'var(--t3-navy)',
      border: '1px solid transparent',
      color: 'var(--fg-on-inverse-2)'
    }
  }[tone] || {
    background: '#fff',
    border: '1px solid var(--border-hairline)',
    color: 'var(--fg-2)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: interactive && h ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FrostedPanel.jsx
try { (() => {
function FrostedPanel({
  children,
  strong = false,
  padding = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: strong ? 'var(--surface-frost-strong)' : 'var(--surface-frost)',
      backdropFilter: 'blur(var(--blur-frost))',
      WebkitBackdropFilter: 'blur(var(--blur-frost))',
      border: '1px solid var(--surface-frost-border)',
      borderRadius: 'var(--radius-card)',
      padding,
      color: '#fff',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FrostedPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FrostedPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/RingBackdrop.jsx
try { (() => {
function RingBackdrop({
  size = 520,
  rings = 2,
  glow = true,
  opacity = .35,
  draw = true,
  style
}) {
  const [on, setOn] = React.useState(!draw);
  React.useEffect(() => {
    if (draw) {
      const t = setTimeout(() => setOn(true), 60);
      return () => clearTimeout(t);
    }
  }, []);
  const r0 = size / 2 - 2;
  const C = r => 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      width: size,
      height: size,
      pointerEvents: 'none',
      ...style
    }
  }, glow && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-20%',
      background: 'radial-gradient(closest-side,rgba(55,198,192,.18),rgba(55,198,192,0))'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: '0 0 ' + size + ' ' + size,
    style: {
      position: 'absolute',
      inset: 0
    }
  }, Array.from({
    length: Math.min(rings, 2)
  }).map((_, i) => {
    const r = r0 - i * size * .09;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#37C6C0",
      strokeOpacity: opacity * (1 - i * .4),
      strokeWidth: "1",
      strokeDasharray: C(r),
      strokeDashoffset: on ? 0 : C(r),
      style: {
        transition: 'stroke-dashoffset 1600ms var(--ease-out) ' + i * 200 + 'ms'
      }
    });
  })));
}
Object.assign(__ds_scope, { RingBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RingBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCounter.jsx
try { (() => {
function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  onDark = true,
  duration = 1200,
  tone = 'accent',
  style
}) {
  const ref = React.useRef(null);
  const num = typeof value === 'number';
  const [n, setN] = React.useState(num ? 0 : value);
  React.useEffect(() => {
    if (!num) return;
    const el = ref.current;
    let raf;
    const run = () => {
      const t0 = performance.now();
      const step = t => {
        const k = Math.min(1, (t - t0) / duration);
        const e = 1 - Math.pow(1 - k, 3);
        setN(Math.round(value * e));
        if (k < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        run();
        io.disconnect();
      }
    }, {
      threshold: .4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  const c = {
    accent: 'var(--accent)',
    green: 'var(--accent-support)',
    plain: onDark ? '#fff' : 'var(--t3-navy)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 40px/44px var(--font-mono)',
      color: c,
      letterSpacing: '-.01em'
    }
  }, prefix, n, suffix), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 11px/14px var(--font-display)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: onDark ? '#fff' : 'var(--fg-2)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCounter.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  number,
  tone = 'accent',
  bar = false,
  style
}) {
  const c = {
    accent: 'var(--t3-turq-600)',
    muted: 'var(--fg-2)',
    light: 'var(--accent)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, bar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 3,
      borderRadius: 2,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/16px var(--font-display)',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: c
    }
  }, number && /*#__PURE__*/React.createElement("span", null, number, " \xB7 "), children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const SRC = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js';
let loading = null;
function ensureLucide() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.lucide) return Promise.resolve();
  if (!loading) {
    loading = new Promise(r => {
      const s = document.createElement('script');
      s.src = SRC;
      s.onload = r;
      s.onerror = r;
      document.head.appendChild(s);
    });
  }
  return loading;
}
const pascal = n => n.split(/[-_ ]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [, force] = React.useState(0);
  React.useEffect(() => {
    if (!window.lucide) ensureLucide().then(() => force(x => x + 1));
  }, []);
  const L = typeof window !== 'undefined' && window.lucide;
  let node = L && L.icons && L.icons[pascal(name)];
  if (node && node[0] === 'svg') node = node[2];
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    },
    ...rest
  }, node ? node.map(([t, a], i) => React.createElement(t, {
    key: i,
    ...a
  })) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CapabilityList.jsx
try { (() => {
function CapabilityList({
  items = [],
  onDark = false,
  style
}) {
  const [h, setH] = React.useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(-1),
    onClick: it.onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 4px',
      borderTop: i ? '1px solid ' + (onDark ? 'var(--border-on-inverse)' : 'var(--border-hairline)') : 'none',
      cursor: it.onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-full)',
      background: onDark ? 'rgba(55,198,192,.12)' : 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon || 'zap',
    size: 18,
    color: onDark ? 'var(--accent)' : 'var(--t3-turq-700)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 15px/20px var(--font-display)',
      color: onDark ? '#fff' : 'var(--t3-navy)'
    }
  }, it.title), it.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/16px var(--font-mono)',
      color: onDark ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)'
    }
  }, it.meta)), it.onClick && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--accent)",
    style: {
      opacity: h === i ? 1 : 0,
      transform: h === i ? 'none' : 'translateX(-4px)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }))));
}
Object.assign(__ds_scope, { CapabilityList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityList.jsx", error: String((e && e.message) || e) }); }

// components/content/ImageCard.jsx
try { (() => {
function ImageCard({
  src,
  alt = '',
  title,
  meta,
  height = 260,
  onClick,
  placeholder = 'Field photograph',
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      background: 'var(--gradient-navy)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      transform: h ? 'scale(var(--hover-zoom))' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-turquoise)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 11px var(--font-mono)',
      color: 'rgba(255,255,255,.4)',
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, placeholder)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--photo-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '700 17px/22px var(--font-display)',
      color: '#fff'
    }
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--accent)",
    style: {
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateX(-6px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  })), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/18px var(--font-body)',
      color: 'rgba(255,255,255,.8)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ImageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ImageCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  icon = 'badge-check',
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      boxSizing: 'border-box',
      padding: '0 12px 0 8px',
      borderRadius: 'var(--radius-sm)',
      background: onDark ? 'rgba(255,255,255,.06)' : '#fff',
      border: '1px solid ' + (onDark ? 'var(--border-on-inverse)' : 'var(--border-hairline)'),
      font: '700 11px/1 var(--font-display)',
      letterSpacing: '.08em',
      color: onDark ? '#fff' : 'var(--t3-navy)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    color: "var(--accent-support)"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 13
  },
  md: {
    h: 44,
    px: 22,
    fs: 14
  },
  lg: {
    h: 52,
    px: 28,
    fs: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  onDark = false,
  disabled = false,
  iconRight,
  iconLeft,
  children,
  onClick,
  style,
  type = 'button'
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: s.h,
    padding: variant === 'link' ? 0 : '0 ' + s.px + 'px',
    borderRadius: 'var(--radius-full)',
    font: '600 ' + s.fs + 'px/1 var(--font-body)',
    letterSpacing: '.01em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1.5px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast),color var(--dur-fast),transform var(--dur-fast)',
    transform: p && !disabled ? 'scale(.98)' : 'none',
    whiteSpace: 'nowrap'
  };
  const fg = onDark ? '#fff' : 'var(--t3-navy)';
  const v = {
    primary: {
      background: h ? 'var(--button-bg-hover,var(--accent-hover))' : 'var(--button-bg,var(--accent))',
      color: 'var(--t3-navy)'
    },
    secondary: {
      background: h ? onDark ? 'rgba(255,255,255,.08)' : 'var(--accent-soft)' : 'transparent',
      color: fg,
      borderColor: onDark ? 'rgba(255,255,255,.5)' : 'var(--t3-steel)'
    },
    ghost: {
      background: h ? onDark ? 'rgba(255,255,255,.08)' : 'var(--accent-soft)' : 'transparent',
      color: fg
    },
    link: {
      background: 'transparent',
      color: onDark ? 'var(--accent)' : 'var(--t3-turq-700)',
      height: 'auto',
      textDecoration: h ? 'underline' : 'none',
      textUnderlineOffset: 4
    }
  }[variant];
  const dis = disabled ? {
    background: 'var(--t3-steel-50)',
    color: 'var(--t3-steel-300)',
    borderColor: 'transparent'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...base,
      ...v,
      ...dis,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16,
    style: {
      transition: 'transform var(--dur-fast) var(--ease-out)',
      transform: h ? 'translateX(2px)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'outline',
  onDark = false,
  selected = false,
  onClick,
  style
}) {
  const t = {
    outline: {
      border: '1px solid ' + (onDark ? 'rgba(55,198,192,.6)' : 'var(--border-accent)'),
      color: onDark ? '#fff' : 'var(--t3-navy)',
      background: 'transparent'
    },
    soft: {
      border: '1px solid transparent',
      background: 'var(--accent-soft)',
      color: 'var(--t3-turq-700)'
    },
    solid: {
      border: '1px solid transparent',
      background: 'var(--accent)',
      color: 'var(--t3-navy)'
    }
  }[selected ? 'solid' : tone];
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      boxSizing: 'border-box',
      padding: '0 12px',
      borderRadius: 'var(--radius-full)',
      font: '600 10px/1 var(--font-display)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      cursor: onClick ? 'pointer' : 'default',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [c, setC] = React.useState(defaultChecked);
  const on = checked ?? c;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    setC(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: '400 15px/22px var(--font-body)',
      color: 'var(--t3-navy)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: '1.5px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)'),
      background: on ? 'var(--accent)' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.5,
    color: "var(--t3-navy)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  multiline = false,
  rows = 4,
  type = 'text',
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  const fs = {
    width: '100%',
    boxSizing: 'border-box',
    padding: multiline ? '12px 14px' : '0 14px',
    height: multiline ? 'auto' : 44,
    borderRadius: 'var(--radius-input)',
    border: '1px solid ' + (error ? 'var(--t3-danger)' : f ? 'var(--accent)' : 'var(--border-default)'),
    boxShadow: f ? 'var(--focus-ring)' : 'none',
    background: disabled ? 'var(--t3-steel-50)' : '#fff',
    font: '400 15px/22px var(--font-body)',
    color: 'var(--t3-navy)',
    outline: 'none',
    transition: 'border-color var(--dur-fast),box-shadow var(--dur-fast)',
    resize: 'vertical'
  };
  const p = {
    id,
    placeholder,
    value,
    defaultValue,
    onChange,
    disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: fs
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: '600 13px/18px var(--font-body)',
      color: 'var(--t3-navy)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, p)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, p)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/16px var(--font-body)',
      color: error ? 'var(--t3-danger)' : 'var(--fg-2)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      font: '600 13px/18px var(--font-body)',
      color: 'var(--t3-navy)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    defaultValue: defaultValue ?? (placeholder ? '' : undefined),
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 44,
      padding: '0 40px 0 14px',
      borderRadius: 'var(--radius-input)',
      border: '1px solid ' + (f ? 'var(--accent)' : 'var(--border-default)'),
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      background: disabled ? 'var(--t3-steel-50)' : '#fff',
      font: '400 15px var(--font-body)',
      color: 'var(--t3-navy)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--t3-steel)",
    style: {
      position: 'absolute',
      right: 14,
      top: 13,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const NS = window.T3ConsultingDesignSystem_2ce685;
const {
  Button,
  Tag,
  Badge,
  Eyebrow,
  Icon,
  RingBackdrop
} = NS;
const LOGO_W = '../../assets/logo/t3-mark-white-512.png';
const LOGO_C = '../../assets/logo/t3-mark-color-512.png';
const NAV = [['home', 'Home'], ['services', 'Capabilities'], ['projects', 'Projects'], ['contact', 'Contact']];
function SiteHeader({
  page,
  go,
  scrolled
}) {
  const dark = !scrolled;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 76,
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      gap: 32,
      background: scrolled ? 'var(--surface-frost-strong)' : 'var(--t3-navy)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--surface-frost-border)' : 'transparent'),
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_W,
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 11px var(--font-display)',
      letterSpacing: '.22em',
      color: '#fff'
    }
  }, "T3 CONSULTING, INC.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      cursor: 'pointer',
      font: '500 14px var(--font-body)',
      color: page === k ? 'var(--accent)' : '#fff',
      textDecoration: 'none',
      paddingBottom: 4,
      borderBottom: '2px solid ' + (page === k ? 'var(--accent)' : 'transparent')
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('contact')
  }, "Request capability statement"));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--t3-navy-900)',
      color: 'var(--fg-on-inverse-2)',
      padding: '56px 48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_W,
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 11px var(--font-display)',
      letterSpacing: '.22em',
      color: '#fff'
    }
  }, "T3 CONSULTING, INC.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14px/22px var(--font-body)',
      maxWidth: 340
    }
  }, "Engineering & environmental, at the nexus."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    onDark: true
  }, "MWBE"), /*#__PURE__*/React.createElement(Badge, {
    onDark: true
  }, "DBE"), /*#__PURE__*/React.createElement(Badge, {
    onDark: true
  }, "SBE"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-display)',
      letterSpacing: '.18em',
      color: 'var(--accent)',
      marginBottom: 14
    }
  }, "EXPLORE"), NAV.map(([k, l]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => go(k),
    style: {
      cursor: 'pointer',
      font: '400 14px/30px var(--font-body)',
      color: '#fff'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-display)',
      letterSpacing: '.18em',
      color: 'var(--accent)',
      marginBottom: 14
    }
  }, "CREDENTIALS"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px/26px var(--font-mono)'
    }
  }, "PE in 50 states", /*#__PURE__*/React.createElement("br", null), "12\u2013500 kV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--border-on-inverse)',
      font: '600 10px var(--font-display)',
      letterSpacing: '.2em'
    }
  }, "\xA9 T3 CONSULTING, INC."));
}
function Section({
  children,
  tone = 'white',
  style
}) {
  const bg = tone === 'navy' ? 'var(--t3-navy)' : '#fff';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      borderTop: tone === 'divided' ? '1px solid var(--border-hairline)' : 'none',
      padding: '96px 48px',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative'
    }
  }, children));
}
function Reveal({
  children,
  delay = 0
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: .15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(20px)',
      transition: 'opacity 700ms var(--ease-out) ' + delay + 'ms,transform 700ms var(--ease-out) ' + delay + 'ms'
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  lede,
  onDark,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 720,
      margin: center ? '0 auto' : 0,
      textAlign: center ? 'center' : 'left',
      alignItems: center ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    tone: onDark ? 'light' : 'accent'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '800 44px/52px var(--font-display)',
      letterSpacing: '-.01em',
      color: onDark ? '#fff' : 'var(--t3-navy)',
      textWrap: 'balance'
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/28px var(--font-body)',
      color: onDark ? 'var(--fg-on-inverse-2)' : 'var(--fg-2)',
      textWrap: 'pretty'
    }
  }, lede));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Section,
  Reveal,
  SectionHead,
  LOGO_W,
  LOGO_C
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Input: CI,
  Select: CS,
  Checkbox: CCb,
  Button: CB,
  Card: CCard,
  Icon: CIc,
  Badge: CBadge,
  RingBackdrop: CR
} = window.T3ConsultingDesignSystem_2ce685;
function ContactScreen({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-navy)',
      padding: '80px 48px 96px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: 720
    }
  }, /*#__PURE__*/React.createElement(CR, {
    size: 600,
    style: {
      left: -240,
      bottom: -260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 64,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "Contact",
    title: "The engineer on the phone.",
    lede: "Request our capability statement or start a conversation about your program. You'll hear back from an engineer, not a sales desk."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-display)',
      color: '#fff'
    }
  }, "Danielle Tipping"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 11px var(--font-display)',
      letterSpacing: '.18em',
      color: 'var(--accent)'
    }
  }, "FOUNDER & CEO \xB7 PE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(CBadge, {
    onDark: true
  }, "MWBE"), /*#__PURE__*/React.createElement(CBadge, {
    onDark: true
  }, "DBE"), /*#__PURE__*/React.createElement(CBadge, {
    onDark: true
  }, "SBE"), /*#__PURE__*/React.createElement(CBadge, {
    onDark: true,
    icon: "map-pin"
  }, "PE in 50 states"))), /*#__PURE__*/React.createElement(CCard, {
    padding: 32,
    style: {
      boxShadow: 'var(--shadow-lg)',
      border: 'none'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 999,
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIc, {
    name: "check",
    size: 26,
    color: "var(--t3-turq-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '800 28px/36px var(--font-display)',
      color: 'var(--t3-navy)'
    }
  }, "Request received."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/26px var(--font-body)'
    }
  }, "We'll send the capability statement within one business day."), /*#__PURE__*/React.createElement(CB, {
    variant: "secondary",
    onClick: () => go('home')
  }, "Back to home")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CI, {
    label: "Full name",
    placeholder: "Jordan Lee"
  }), /*#__PURE__*/React.createElement(CI, {
    label: "Organization",
    placeholder: "Utility or agency"
  })), /*#__PURE__*/React.createElement(CI, {
    label: "Work email",
    type: "email",
    placeholder: "name@utility.com"
  }), /*#__PURE__*/React.createElement(CS, {
    label: "Area of interest",
    placeholder: "Choose one",
    options: ['Transmission & Distribution', 'Substation Engineering', 'Environmental & Permitting']
  }), /*#__PURE__*/React.createElement(CI, {
    label: "Project details",
    multiline: true,
    rows: 4,
    placeholder: "Voltage class, location, schedule\u2026",
    hint: "Optional"
  }), /*#__PURE__*/React.createElement(CCb, {
    label: "Send me the capability statement",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CB, {
    type: "submit",
    size: "lg",
    iconRight: "arrow-right"
  }, "Request capability statement"))))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button: HB,
  Tag: HT,
  Badge: HBadge,
  Eyebrow: HE,
  Icon: HI,
  RingBackdrop: HR,
  StatCounter: HS,
  CapabilityList: HCL,
  ImageCard: HIC,
  Card: HC,
  FrostedPanel: HFP
} = window.T3ConsultingDesignSystem_2ce685;
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-navy)',
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 48px 64px'
    }
  }, /*#__PURE__*/React.createElement(HR, {
    size: 640,
    style: {
      right: -140,
      top: -160
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(HE, {
    tone: "light"
  }, "Transmission \xB7 Distribution \xB7 Substation \xB7 Environmental"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '800 72px/76px var(--font-display)',
      letterSpacing: '-.015em',
      color: '#fff'
    }
  }, "Power delivery, engineered with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "the land in mind.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 19px/30px var(--font-body)',
      color: 'var(--fg-on-inverse-2)',
      maxWidth: 560
    }
  }, "Environmentally conscious design, applied to every transmission, distribution and substation project."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(HB, {
    size: "lg",
    onClick: () => go('projects')
  }, "See our work"), /*#__PURE__*/React.createElement(HB, {
    size: "lg",
    variant: "secondary",
    onDark: true,
    onClick: () => go('services')
  }, "Capabilities"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 72,
      marginTop: 96,
      paddingTop: 28,
      borderTop: '1px solid var(--border-on-inverse)'
    }
  }, /*#__PURE__*/React.createElement(HS, {
    value: 50,
    label: "States licensed",
    tone: "green"
  }), /*#__PURE__*/React.createElement(HS, {
    value: "12\u2013500",
    suffix: "kV",
    label: "T&D range",
    tone: "green"
  }), /*#__PURE__*/React.createElement(HS, {
    value: 2,
    label: "Utility primes",
    tone: "green"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "New direction",
    title: "Engineering & environmental, at the nexus.",
    lede: "Direct-engineer access on 12\u2013500 kV programs \u2014 fewer surprises, on schedule."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(HB, {
    onClick: () => go('contact')
  }, "Request capability statement"), /*#__PURE__*/React.createElement(HB, {
    variant: "secondary",
    onClick: () => go('projects')
  }, "View projects"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(HC, {
    padding: 12
  }, /*#__PURE__*/React.createElement(HCL, {
    items: [{
      icon: 'utility-pole',
      title: 'Transmission & Distribution',
      meta: '12–500 kV',
      onClick: () => go('services')
    }, {
      icon: 'zap',
      title: 'Substation Engineering',
      meta: 'design → energization',
      onClick: () => go('services')
    }, {
      icon: 'leaf',
      title: 'Environmental & Permitting',
      meta: 'CEQA / NEPA',
      onClick: () => go('services')
    }]
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "divided"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "In the field",
    title: "Real crews, real corridors."
  }), /*#__PURE__*/React.createElement(HB, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => go('projects')
  }, "All projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 16,
      marginTop: 40
    }
  }, [['Transmission across real terrain', 'Transmission & Distribution'], ['On-site', 'Substation'], ['Land & right-of-way', 'Environmental']].map(([t, m], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(HIC, {
    title: t,
    meta: m,
    height: 340,
    onClick: () => go('projects')
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(HR, {
    size: 520,
    style: {
      left: -260,
      bottom: -300
    },
    rings: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "Credentials",
    title: "A partner, not a vendor.",
    lede: "Woman-owned and certified \u2014 visible, but always secondary to competence."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, ['MWBE', 'DBE', 'SBE'].map(b => /*#__PURE__*/React.createElement(HBadge, {
    key: b,
    onDark: true
  }, b)), /*#__PURE__*/React.createElement(HBadge, {
    onDark: true,
    icon: "map-pin"
  }, "PE in 50 states")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
const {
  Tag: PT,
  ImageCard: PIC,
  Button: PB,
  Card: PC
} = window.T3ConsultingDesignSystem_2ce685;
const PROJECTS = [{
  t: 'Strategic Undergrounding Program',
  m: 'Southern California utility · 2026',
  c: 'Transmission'
}, {
  t: 'Transmission across real terrain',
  m: 'Transmission & Distribution',
  c: 'Transmission'
}, {
  t: 'On-site',
  m: 'Design & energization',
  c: 'Substation'
}, {
  t: 'People in the field',
  m: 'Substation',
  c: 'Substation'
}, {
  t: 'Land & right-of-way',
  m: 'Environmentally conscious',
  c: 'Environmental'
}];
function ProjectsScreen({
  go
}) {
  const [f, setF] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const list = PROJECTS.filter(p => f === 'All' || p.c === f);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    tone: "divided",
    style: {
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Project proof",
    title: "Infrastructure and land.",
    lede: "Project names and photography below are placeholders \u2014 swap in real case studies."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 32
    }
  }, ['All', 'Transmission', 'Substation', 'Environmental'].map(x => /*#__PURE__*/React.createElement(PT, {
    key: x,
    selected: f === x,
    onClick: () => setF(x)
  }, x)))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(PIC, {
    key: p.t,
    title: p.t,
    meta: p.m,
    height: i === 0 && f === 'All' ? 360 : 280,
    style: i === 0 && f === 'All' ? {
      gridColumn: 'span 2'
    } : null,
    onClick: () => setOpen(p)
  })))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,29,38,.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 640,
      background: '#fff',
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(PIC, {
    height: 280,
    title: open.t,
    meta: open.m
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(PT, {
    tone: "soft"
  }, open.c)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/26px var(--font-body)',
      color: 'var(--fg-2)'
    }
  }, "Case-study summary goes here: scope, voltage class, environmental constraints and outcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PB, {
    onClick: () => go('contact')
  }, "Request capability statement"), /*#__PURE__*/React.createElement(PB, {
    variant: "secondary",
    onClick: () => setOpen(null)
  }, "Close"))))));
}
window.ProjectsScreen = ProjectsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  Button: SB,
  Tag: ST,
  Icon: SI,
  Card: SC,
  RingBackdrop: SR,
  FrostedPanel: SFP,
  ImageCard: SIC
} = window.T3ConsultingDesignSystem_2ce685;
const SERVICES = [{
  k: 'td',
  icon: 'utility-pole',
  title: 'Transmission & Distribution',
  meta: '12–500 kV',
  body: 'Line design and engineering across real terrain, from distribution upgrades to high-voltage transmission.'
}, {
  k: 'sub',
  icon: 'zap',
  title: 'Substation Engineering',
  meta: 'design → energization',
  body: 'Physical, protection and control design carried from first study through energization.'
}, {
  k: 'env',
  icon: 'leaf',
  title: 'Environmental & Permitting',
  meta: 'CEQA / NEPA',
  body: 'Environmental review and permitting delivered by the same team that engineers the project.'
}];
const ENV = ['Construction Environmental Monitoring', 'Clean Water Act Permitting', 'Cultural Resources', 'Habitat Restoration', 'Biological Assessments Including Threatened & Endangered Species', 'California Environmental Quality Act (CEQA) & National Environmental Policy Act (NEPA) Permitting'];
function ServicesScreen({
  go
}) {
  const [sel, setSel] = React.useState('td');
  const s = SERVICES.find(x => x.k === sel);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--t3-navy)',
      padding: '80px 48px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SR, {
    size: 480,
    style: {
      right: -120,
      top: -140
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "Capabilities",
    title: "Three disciplines, one team.",
    lede: "T3 looks at engineering through an environmental lens, and environmental through an engineering lens."
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 32
    }
  }, SERVICES.map(x => /*#__PURE__*/React.createElement(ST, {
    key: x.k,
    selected: sel === x.k,
    onClick: () => setSel(x.k)
  }, x.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(SI, {
    name: s.icon,
    size: 24,
    color: "var(--t3-turq-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '800 32px/40px var(--font-display)',
      color: 'var(--t3-navy)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 14px var(--font-mono)',
      color: 'var(--t3-turq-700)'
    }
  }, s.meta), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/28px var(--font-body)',
      color: 'var(--fg-2)',
      maxWidth: 480
    }
  }, s.body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SB, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => go('projects')
  }, "See related projects"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SIC, {
    height: 380,
    placeholder: "Field photograph"
  }), /*#__PURE__*/React.createElement(SFP, {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-display)'
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-mono)',
      color: 'var(--accent)',
      marginTop: 4
    }
  }, s.meta, " \xB7 engineered end to end"))))), /*#__PURE__*/React.createElement(Section, {
    tone: "divided"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Environmental services",
    title: "T3 and our partners offer specialized environmental services, including:"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 40
    }
  }, ENV.map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(SC, {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SI, {
    name: "check",
    size: 20,
    color: "var(--accent-support)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 15px/22px var(--font-body)',
      color: 'var(--t3-navy)'
    }
  }, e)))))));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CapabilityList = __ds_scope.CapabilityList;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FrostedPanel = __ds_scope.FrostedPanel;

__ds_ns.ImageCard = __ds_scope.ImageCard;

__ds_ns.RingBackdrop = __ds_scope.RingBackdrop;

__ds_ns.StatCounter = __ds_scope.StatCounter;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
