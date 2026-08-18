/* @ds-bundle: {"format":4,"namespace":"BridgeAppDesignSystem_9fd6e3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DoDontList","sourcePath":"components/editorial/DoDontList.jsx"},{"name":"PhraseChip","sourcePath":"components/editorial/PhraseChip.jsx"},{"name":"RuleBanner","sourcePath":"components/editorial/RuleBanner.jsx"},{"name":"SectionHeader","sourcePath":"components/editorial/SectionHeader.jsx"},{"name":"ApplicationRow","sourcePath":"components/product/ApplicationRow.jsx"},{"name":"DeadlineRow","sourcePath":"components/product/DeadlineRow.jsx"},{"name":"Logo","sourcePath":"components/product/Logo.jsx"},{"name":"PathwayProgress","sourcePath":"components/product/PathwayProgress.jsx"},{"name":"StatBlock","sourcePath":"components/product/StatBlock.jsx"}],"sourceHashes":{"components/core/Button.jsx":"1277896ee84a","components/core/Card.jsx":"08ccbab75c1f","components/core/Icon.jsx":"ea108b525cc5","components/core/Tag.jsx":"8639a61d0e0c","components/editorial/DoDontList.jsx":"1e6012f5f437","components/editorial/PhraseChip.jsx":"b8af24bb64a6","components/editorial/RuleBanner.jsx":"dcc374d3f37b","components/editorial/SectionHeader.jsx":"04dbb23e3539","components/product/ApplicationRow.jsx":"8980305092b7","components/product/DeadlineRow.jsx":"d766cff941b1","components/product/Logo.jsx":"2622213d2797","components/product/PathwayProgress.jsx":"975acebf7346","components/product/StatBlock.jsx":"97e65af5b049","ui_kits/apps/Screens.jsx":"8cfb13a5a5a7","ui_kits/marketing-site/Hero.jsx":"4f7306bf783f","ui_kits/marketing-site/Navbar.jsx":"3a25113f4817","ui_kits/marketing-site/Products.jsx":"da5fac75f5a7","ui_kits/marketing-site/Sections.jsx":"122d74a0928a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BridgeAppDesignSystem_9fd6e3 = window.BridgeAppDesignSystem_9fd6e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SURFACES = {
  white: {
    background: "#fff",
    color: "var(--brand-navy)",
    border: "1px solid var(--border-hairline)"
  },
  cream: {
    background: "var(--surface-cream)",
    color: "var(--brand-navy)",
    border: "1px solid var(--border-hairline)"
  },
  navy: {
    background: "var(--brand-navy)",
    color: "#fff",
    border: "1px solid var(--brand-navy)"
  },
  blue: {
    background: "var(--brand-blue)",
    color: "#fff",
    border: "none"
  },
  yellow: {
    background: "var(--brand-yellow)",
    color: "var(--brand-navy)",
    border: "none"
  },
  orange: {
    background: "var(--brand-orange)",
    color: "#fff",
    border: "none"
  },
  stone: {
    background: "var(--surface-stone)",
    color: "var(--brand-navy)",
    border: "1px solid var(--border-hairline)"
  },
  glass: {
    background: "var(--glass-fill)",
    color: "#fff",
    border: "1px solid var(--glass-border)",
    backdropFilter: "var(--blur-glass)",
    boxShadow: "var(--shadow-glass)"
  }
};
function Card({
  children,
  surface = "white",
  accent,
  pad = 20,
  rounded = false,
  style,
  ...rest
}) {
  const s = SURFACES[surface] || SURFACES.white;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-sans)",
      padding: pad,
      borderRadius: rounded ? "var(--radius-lg)" : "var(--radius-none)",
      ...s,
      ...(accent ? {
        borderLeft: `4px solid ${accent}`
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucide glyphs, path data copied verbatim from lucide-static so this stays the
 * same icon set the BridgeApp product and brand book already use.
 */
const PATHS = {
  "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
  "arrow-left": ["m12 19-7-7 7-7", "M19 12H5"],
  "chevron-down": ["m6 9 6 6 6-6"],
  "chevron-right": ["m9 18 6-6-6-6"],
  check: ["M20 6 9 17l-5-5"],
  "check-circle": ["M21.801 10A10 10 0 1 1 17 3.335", "m9 11 3 3L22 4"],
  x: ["M18 6 6 18", "m6 6 12 12"],
  menu: ["M4 5h16", "M4 12h16", "M4 19h16"],
  compass: ["m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z", "M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20"],
  "book-open": ["M12 7v14", "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],
  target: ["M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20", "M12 6a6 6 0 1 0 0 12 6 6 0 1 0 0-12", "M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4"],
  "trending-up": ["M16 7h6v6", "m22 7-8.5 8.5-5-5L2 17"],
  "graduation-cap": ["M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z", "M22 10v6", "M6 12.5V16a6 3 0 0 0 12 0v-3.5"],
  star: ["M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"],
  trophy: ["M6 9H4.5a2.5 2.5 0 0 1 0-5H6", "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", "M4 22h16", "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", "M18 2H6v7a6 6 0 0 0 12 0z"],
  instagram: ["M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37", "M17.5 6.5h.01", "M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3"],
  twitter: ["M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"],
  linkedin: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6", "M2 9h4v12H2z", "M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4"],
  facebook: ["M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"],
  search: ["m21 21-4.34-4.34", "M11 19a8 8 0 1 0 0-16 8 8 0 1 0 0 16"],
  calendar: ["M8 2v4", "M16 2v4", "M3 6h18v16H3z", "M3 10h18"]
};
function Icon({
  name,
  size = 16,
  strokeWidth = 2,
  filled = false,
  style,
  ...rest
}) {
  const d = PATHS[name] || PATHS["arrow-right"];
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": name,
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest, {
    style: {
      display: "inline-block",
      flexShrink: 0,
      verticalAlign: "middle",
      ...style
    }
  }), d.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  pathfinder: {
    background: "var(--brand-blue)",
    color: "#fff",
    border: "none"
  },
  uniapply: {
    background: "var(--brand-yellow)",
    color: "var(--brand-navy)",
    border: "none"
  },
  futureclub: {
    background: "var(--brand-orange)",
    color: "#fff",
    border: "none"
  },
  secondary: {
    background: "transparent",
    color: "var(--brand-navy)",
    border: "1px solid var(--brand-navy)"
  },
  ghost: {
    background: "rgba(15,42,74,0.08)",
    color: "var(--brand-navy)",
    border: "1px solid var(--navy-a22)"
  },
  onDark: {
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "2px solid rgba(255,255,255,0.25)"
  }
};
const SIZES = {
  sm: {
    padding: "8px 16px",
    fontSize: "0.72rem"
  },
  md: {
    padding: "10px 20px",
    fontSize: "0.8rem"
  },
  lg: {
    padding: "16px 28px",
    fontSize: "1rem"
  }
};
const SHADOWS = {
  pathfinder: "var(--shadow-cta-blue)",
  uniapply: "var(--shadow-cta-yellow)"
};
function Button({
  children,
  variant = "pathfinder",
  size = "md",
  shape = "square",
  arrow = false,
  block = false,
  elevated = false,
  disabled = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.pathfinder;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, rest, {
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : undefined,
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.2,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      borderRadius: shape === "pill" ? "var(--radius-pill)" : shape === "rounded" ? "var(--radius-md)" : "var(--radius-none)",
      transition: "transform var(--duration-base) var(--ease-standard), filter var(--duration-base) var(--ease-standard)",
      boxShadow: elevated ? SHADOWS[variant] || "none" : "none",
      ...v,
      ...s,
      ...style
    }
  }), children, arrow && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: size === "lg" ? 18 : 13,
    style: {
      marginLeft: "auto"
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  pathfinder: {
    bg: "var(--brand-blue)",
    fg: "#fff"
  },
  uniapply: {
    bg: "var(--brand-yellow)",
    fg: "var(--brand-navy)"
  },
  futureclub: {
    bg: "var(--brand-orange)",
    fg: "#fff"
  },
  accepted: {
    bg: "var(--status-accepted)",
    fg: "#fff"
  },
  review: {
    bg: "var(--brand-yellow)",
    fg: "var(--brand-navy)"
  },
  submitted: {
    bg: "var(--brand-blue)",
    fg: "#fff"
  },
  draft: {
    bg: "var(--navy-a12)",
    fg: "var(--navy-a60)"
  },
  due: {
    bg: "var(--status-due)",
    fg: "#fff"
  },
  navy: {
    bg: "var(--brand-navy)",
    fg: "#fff"
  }
};
function Tag({
  children,
  tone = "pathfinder",
  soft = false,
  shape = "square",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.pathfinder;
  const solid = {
    background: t.bg,
    color: t.fg,
    border: "none"
  };
  const softened = {
    background: "transparent",
    color: t.bg,
    border: `1px solid ${t.bg}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "0.68rem",
      lineHeight: 1.4,
      borderRadius: shape === "pill" ? "var(--radius-pill)" : shape === "rounded" ? "var(--radius-sm)" : "var(--radius-none)",
      ...(soft ? softened : solid),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DoDontList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DoDontList({
  mode = "do",
  label,
  items = [],
  style,
  ...rest
}) {
  const isDo = mode === "do";
  const bg = isDo ? "var(--brand-yellow)" : "var(--surface-stone)";
  const fg = isDo ? "var(--brand-navy)" : "var(--navy-a60)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: bg,
      border: isDo ? "none" : "1px solid var(--border-hairline)",
      padding: 24,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isDo ? "check" : "x",
    size: 14,
    style: {
      color: fg
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: fg,
      fontWeight: "var(--weight-bold)",
      fontSize: "0.6rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, label || (isDo ? "Always Do" : "Never Do"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      color: isDo ? "var(--brand-navy)" : "var(--navy-a40)",
      fontWeight: isDo ? "var(--weight-bold)" : "var(--weight-regular)",
      fontSize: "0.9rem",
      lineHeight: "var(--leading-tight)",
      textDecoration: isDo ? "none" : "line-through",
      textDecorationColor: "rgba(15,42,74,0.3)"
    }
  }, t))));
}
Object.assign(__ds_scope, { DoDontList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DoDontList.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PhraseChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    background: "var(--brand-blue)",
    color: "#fff"
  },
  yellow: {
    background: "var(--brand-yellow)",
    color: "var(--brand-navy)"
  },
  orange: {
    background: "var(--brand-orange)",
    color: "#fff"
  },
  navy: {
    background: "var(--brand-navy)",
    color: "#fff"
  }
};
function PhraseChip({
  children,
  tone = "blue",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-block",
      padding: "8px 16px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "0.78rem",
      ...(TONES[tone] || TONES.blue),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { PhraseChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PhraseChip.jsx", error: String((e && e.message) || e) }); }

// components/editorial/RuleBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RuleBanner({
  children,
  accent = "var(--brand-yellow)",
  right,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 16,
      padding: 20,
      background: "var(--brand-navy)",
      borderLeft: `5px solid ${accent}`,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: "var(--weight-black)",
      fontSize: "1rem",
      lineHeight: 1.35
    }
  }, children), right && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, right));
}
Object.assign(__ds_scope, { RuleBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/RuleBanner.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  eyebrowColor = "var(--brand-blue)",
  title,
  lede,
  rule = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      color: eyebrowColor,
      fontWeight: "var(--weight-bold)",
      fontSize: "0.6rem",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      marginBottom: "0.4rem"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: "var(--brand-navy)",
      fontWeight: "var(--weight-black)",
      fontSize: "var(--fluid-h2)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-h1)",
      textTransform: "uppercase"
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-hairline)",
      margin: "1.5rem 0"
    }
  }), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "0.82rem",
      lineHeight: 1.65,
      maxWidth: "var(--editorial-rail)"
    }
  }, lede));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/product/ApplicationRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ApplicationRow({
  institution,
  status,
  tone = "submitted",
  meta,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: onDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--border-hairline)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: onDark ? "#fff" : "var(--brand-navy)",
      fontWeight: "var(--weight-bold)",
      fontSize: "0.86rem"
    }
  }, institution), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      fontSize: "0.7rem",
      marginTop: 2
    }
  }, meta)), status && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tone
  }, status));
}
Object.assign(__ds_scope, { ApplicationRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ApplicationRow.jsx", error: String((e && e.message) || e) }); }

// components/product/DeadlineRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DeadlineRow({
  date,
  institutions,
  status = "OPEN",
  style,
  ...rest
}) {
  const closing = status.toUpperCase() === "CLOSING";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "14px 18px",
      background: "rgba(255,255,255,0.16)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: "var(--weight-black)",
      fontSize: "1.05rem",
      minWidth: 92
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: "#fff",
      fontWeight: "var(--weight-bold)",
      fontSize: "0.9rem"
    }
  }, institutions), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: closing ? "#fff" : "var(--brand-yellow)",
      color: closing ? "var(--brand-orange)" : "var(--brand-navy)",
      fontWeight: "var(--weight-black)",
      fontSize: "0.72rem",
      letterSpacing: "0.04em"
    }
  }, status.toUpperCase()));
}
Object.assign(__ds_scope, { DeadlineRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/DeadlineRow.jsx", error: String((e && e.message) || e) }); }

// components/product/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  bridgeapp: "logo-bridgeapp.png",
  gradesmatch: "logo-bridgeapp-gradesmatch.png",
  pathfinder: "logo-pathfinder-lockup.png",
  uniapply: "logo-uniapply-lockup.png"
};

/** Override globally with window.BRIDGEAPP_ASSETS = "/path/to/assets/". */
function base(p) {
  if (p) return p;
  if (typeof window !== "undefined" && window.BRIDGEAPP_ASSETS) return window.BRIDGEAPP_ASSETS;
  return "assets/";
}
function Logo({
  lockup = "bridgeapp",
  height = 40,
  width,
  assetPath,
  style,
  ...rest
}) {
  const file = FILES[lockup] || FILES.bridgeapp;
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: base(assetPath) + file,
    alt: lockup === "bridgeapp" ? "BridgeApp" : "BridgeApp " + lockup,
    style: {
      ...(width ? {
        width,
        height: "auto"
      } : {
        height,
        width: "auto"
      }),
      objectFit: "contain",
      display: "block",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/Logo.jsx", error: String((e && e.message) || e) }); }

// components/product/PathwayProgress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT = ["Assessment", "Career Match", "Subject Plan", "Apply"];
function PathwayProgress({
  steps = DEFAULT,
  current = 3,
  accent = "var(--brand-blue)",
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      padding: 16,
      background: onDark ? "rgba(255,255,255,0.03)" : "#fff",
      border: onDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid var(--border-hairline)",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }), steps.map((s, i) => {
    const done = i < current;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: done ? accent : onDark ? "rgba(74,144,217,0.10)" : "rgba(15,42,74,0.08)",
        border: done ? "none" : `1px dashed ${onDark ? "rgba(74,144,217,0.3)" : "var(--navy-a22)"}`
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 11,
      style: {
        color: "#fff"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: onDark ? "rgba(74,144,217,0.5)" : "var(--navy-a40)",
        fontSize: "0.6rem",
        fontWeight: 700
      }
    }, i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: done ? accent : onDark ? "rgba(255,255,255,0.06)" : "var(--border-hairline)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: done ? onDark ? "#fff" : "var(--brand-navy)" : onDark ? "rgba(255,255,255,0.22)" : "var(--navy-a40)",
        fontWeight: done ? "var(--weight-bold)" : "var(--weight-regular)",
        fontSize: "0.74rem"
      }
    }, s));
  }));
}
Object.assign(__ds_scope, { PathwayProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PathwayProgress.jsx", error: String((e && e.message) || e) }); }

// components/product/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  note,
  accent,
  onDark = false,
  size = "md",
  style,
  ...rest
}) {
  const sizes = {
    sm: "1.6rem",
    md: "2rem",
    lg: "2.75rem"
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: accent || (onDark ? "var(--brand-blue)" : "var(--brand-navy)"),
      fontWeight: "var(--weight-black)",
      fontSize: sizes[size] || sizes.md,
      lineHeight: 1,
      letterSpacing: "var(--tracking-h2)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      color: onDark ? "var(--text-on-dark-muted)" : "var(--text-muted)",
      fontSize: "0.8rem",
      marginTop: 6,
      fontWeight: "var(--weight-medium)"
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      color: onDark ? "var(--text-on-dark-faint)" : "var(--text-faint)",
      fontSize: "0.7rem",
      marginTop: 2
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/apps/Screens.jsx
try { (() => {
const {
  Button,
  Tag,
  Icon,
  PathwayProgress,
  ApplicationRow,
  Logo,
  StatBlock
} = window.BridgeAppDesignSystem_9fd6e3;
function Phone({
  children,
  bg,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderRadius: "var(--radius-device)",
      border: "1px solid var(--navy-a18)",
      background: bg,
      aspectRatio: "9/16",
      width: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      height: "100%",
      boxSizing: "border-box",
      overflow: "hidden"
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--navy-a45)",
      fontSize: 10,
      textAlign: "center",
      marginTop: 8,
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, caption));
}
function PathfinderHome({
  onOpen
}) {
  const items = [["Take the Subject Quiz", "var(--brand-yellow)", "var(--brand-navy)"], ["Career Match: STEM", "var(--brand-yellow)", "var(--brand-navy)"], ["Ask a Future Coach", "rgba(255,255,255,0.12)", "#fff"]];
  return /*#__PURE__*/React.createElement(Phone, {
    bg: "var(--brand-blue)",
    caption: "Pathfinder \xB7 Home"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.5)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "Hi Lerato"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 20,
      marginBottom: 10
    }
  }, "Find your path."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      marginBottom: 14,
      borderRadius: 8,
      background: "rgba(255,255,255,0.12)",
      color: "rgba(255,255,255,0.45)",
      fontSize: 11
    }
  }, "Search subjects, careers\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.4)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 6
    }
  }, "For You"), items.map(([l, bg, fg]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: onOpen,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      marginBottom: 6,
      borderRadius: 8,
      background: bg,
      color: fg,
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 10,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trophy",
    size: 16,
    style: {
      color: "var(--brand-yellow)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 11
    }
  }, "School Clash 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.38)",
      fontSize: 10
    }
  }, "Your school is #4 nationally"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(PathwayProgress, {
    onDark: true,
    current: 2,
    style: {
      padding: 10
    }
  })));
}
function SchoolClash() {
  const rows = [[1, "St. Mary's College", "4,120", false], [2, "Westville Boys", "3,560", false], [3, "Crawford North", "3,010", false], [4, "Greenstone High", "2,840", true], [5, "Hilton Academy", "2,400", false]];
  return /*#__PURE__*/React.createElement(Phone, {
    bg: "var(--brand-navy)",
    caption: "School Clash \xB7 Live"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.35)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      marginBottom: 2
    }
  }, "Inter-Schools"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 20,
      lineHeight: 1
    }
  }, "SCHOOL"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-yellow)",
      fontWeight: 900,
      fontSize: 20,
      lineHeight: 1,
      marginBottom: 10
    }
  }, "CLASH 26"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      marginBottom: 14,
      background: "var(--brand-yellow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--navy-a60)",
      fontSize: 9,
      textTransform: "uppercase"
    }
  }, "Your School"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-navy)",
      fontWeight: 900,
      fontSize: 14
    }
  }, "Greenstone High"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--navy-a60)",
      fontSize: 11
    }
  }, "Rank #4 \xB7 2,840 pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.3)",
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginBottom: 4
    }
  }, "Leaderboard"), rows.map(([r, n, p, hl]) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 4px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: hl ? "rgba(251,191,36,0.12)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: hl ? "var(--brand-yellow)" : "rgba(255,255,255,0.28)",
      fontWeight: 700,
      fontSize: 11,
      width: 12
    }
  }, r), /*#__PURE__*/React.createElement("span", {
    style: {
      color: hl ? "#fff" : "rgba(255,255,255,0.5)",
      fontSize: 12,
      flex: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: hl ? "var(--brand-yellow)" : "rgba(255,255,255,0.35)",
      fontWeight: 700,
      fontSize: 11
    }
  }, p))));
}
function UniApplyTracker() {
  const rows = [["Wits University", "Interview booked", "submitted"], ["UCT", "Docs missing", "due"], ["Stellenbosch", "Submitted", "review"], ["Rhodes", "In progress", "draft"]];
  return /*#__PURE__*/React.createElement(Phone, {
    bg: "var(--brand-orange)",
    caption: "UniApply \xB7 Tracker"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.55)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.12em"
    }
  }, "UniApply"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 18
    }
  }, "Applications"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.55)",
      fontSize: 11,
      marginBottom: 14
    }
  }, "5 apps \xB7 2 deadlines this week"), rows.map(([u, s, t]) => /*#__PURE__*/React.createElement("div", {
    key: u,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 12,
      flex: 1
    }
  }, u), /*#__PURE__*/React.createElement(Tag, {
    tone: t,
    style: {
      fontSize: 9,
      padding: "3px 8px"
    }
  }, s))), /*#__PURE__*/React.createElement(Button, {
    variant: "pathfinder",
    block: true,
    size: "sm",
    style: {
      marginTop: 14,
      justifyContent: "center"
    }
  }, "+ ADD UNIVERSITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 12,
      background: "rgba(255,255,255,0.14)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.6)",
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, "Next deadline"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 900,
      fontSize: 16,
      marginTop: 2
    }
  }, "30 Jun \xB7 Wits")));
}
Object.assign(window, {
  Phone,
  PathfinderHome,
  SchoolClash,
  UniApplyTracker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/apps/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
const {
  Button,
  StatBlock,
  Icon
} = window.BridgeAppDesignSystem_9fd6e3;
const HERO_IMAGE = "https://images.unsplash.com/photo-1565490129165-bd6a24996c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBzdHVkZW50cyUyMHNtaWxpbmclMjBmdXR1cmV8ZW58MXx8fHwxNzc3OTM0NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080";
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "var(--brand-navy)",
      marginTop: -72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO_IMAGE,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--gradient-hero-navy)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 80,
      right: 40,
      width: 384,
      height: 384,
      borderRadius: "50%",
      filter: "blur(64px)",
      background: "rgba(74,144,217,0.2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 80,
      left: 40,
      width: 288,
      height: 288,
      borderRadius: "50%",
      filter: "blur(64px)",
      background: "rgba(74,144,217,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      maxWidth: 1280,
      margin: "0 auto",
      padding: "128px 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: "var(--radius-pill)",
      padding: "8px 16px",
      marginBottom: 24,
      background: "rgba(74,144,217,0.2)",
      border: "1px solid rgba(74,144,217,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-blue)",
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, "From Subject Choice to University Acceptance")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 24px",
      color: "#fff",
      fontWeight: 900,
      fontSize: "clamp(2.8rem,5vw,4.6rem)",
      letterSpacing: "-0.02em",
      lineHeight: 1.05
    }
  }, "Your Partner In ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(90deg,#4A90D9,#60B4FF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "Creating"), " Your Future."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 40px",
      maxWidth: 560,
      color: "rgba(255,255,255,0.7)",
      fontSize: "1.15rem",
      lineHeight: 1.7
    }
  }, "Don't guess your future. BridgeApp gives every student the tools, clarity, and direction to own their path \u2014 from choosing subjects to landing university acceptance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "pathfinder",
    shape: "pill",
    size: "lg",
    elevated: true,
    arrow: true,
    onClick: () => go("pathfinder")
  }, "Explore Pathfinder"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    shape: "pill",
    size: "lg",
    arrow: true,
    onClick: () => go("uniapply")
  }, "Apply with UniApply")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      display: "flex",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "10K+",
    label: "Students Guided"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "500+",
    label: "Universities"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    value: "95%",
    label: "Satisfaction Rate"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 320,
      height: 320,
      borderRadius: "50%",
      filter: "blur(64px)",
      background: "rgba(74,144,217,0.25)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      padding: 24,
      width: 320,
      background: "var(--glass-fill-strong)",
      backdropFilter: "var(--blur-glass)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "var(--shadow-hero-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--brand-blue)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "compass",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 15
    }
  }, "Pathfinder"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.5)",
      fontSize: 12
    }
  }, "Find your direction"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ["Subject Selection", "Career Matching", "Study Path Guide"].map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderRadius: 12,
      padding: "8px 12px",
      background: "rgba(74,144,217,0.15)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand-blue)",
      opacity: 1 - i * 0.2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.8)",
      fontSize: 13
    }
  }, item), /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    style: {
      marginLeft: "auto",
      color: "var(--brand-blue)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      borderRadius: 16,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(251,191,36,0.15)",
      border: "1px solid rgba(251,191,36,0.3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "graduation-cap",
    size: 20,
    style: {
      color: "var(--brand-yellow)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-yellow)",
      fontWeight: 700,
      fontSize: 13
    }
  }, "UniApply Ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.5)",
      fontSize: 11
    }
  }, "Apply to 500+ universities")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -16,
      right: -16,
      borderRadius: 16,
      padding: "8px 16px",
      background: "rgba(74,144,217,0.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13
    }
  }, "Built Different")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -16,
      left: -24,
      borderRadius: 16,
      padding: "8px 16px",
      background: "rgba(251,191,36,0.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-navy)",
      fontWeight: 700,
      fontSize: 13
    }
  }, "Future Club")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Navbar.jsx
try { (() => {
const {
  Logo,
  Icon
} = window.BridgeAppDesignSystem_9fd6e3;
function Navbar({
  scrolled,
  active,
  go
}) {
  const items = [["Pathfinder", "pathfinder"], ["UniApply", "uniapply"], ["Impact", "impact"], ["Testimonials", "testimonials"]];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      transition: "all 300ms ease-out",
      background: scrolled ? "rgba(15,42,74,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(74,144,217,0.2)" : "1px solid transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go("hero"),
    style: {
      cursor: "pointer",
      background: "#fff",
      padding: "6px 12px",
      borderRadius: 8,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "bridgeapp",
    height: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, items.map(([label, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: "0.01em",
      color: active === id ? "#fff" : "rgba(255,255,255,0.8)"
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("uniapply"),
    style: {
      padding: "8px 20px",
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: "pointer",
      background: "var(--brand-blue)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 14
    }
  }, "Get Started"))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Products.jsx
try { (() => {
const {
  Button,
  Tag,
  Icon,
  PathwayProgress,
  ApplicationRow,
  Logo
} = window.BridgeAppDesignSystem_9fd6e3;
const PATHFINDER_IMAGE = "https://images.unsplash.com/photo-1661555144338-093c85f8c588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY2FyZWVyJTIwcGF0aCUyMHBsYW5uaW5nJTIwZnV0dXJlfGVufDF8fHx8MTc3NzkzNDU5Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const FEATURES = [["compass", "Career Compass", "AI-powered matching that aligns your personality, strengths, and interests to real career paths."], ["book-open", "Subject Selection", "Never pick the wrong subjects again. Get guided recommendations based on where you want to go."], ["target", "Goal Mapping", "Set your destination and let Pathfinder build the roadmap that gets you there, step by step."], ["trending-up", "Progress Tracking", "Monitor your journey with real-time insight into how close you are to your goal."]];
function PathfinderSection({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "pathfinder",
    style: {
      background: "var(--brand-navy)",
      padding: "112px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "pathfinder",
    shape: "pill",
    style: {
      marginBottom: 20
    }
  }, "Pathfinder"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      color: "#fff",
      fontWeight: 900,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em"
    }
  }, "Choose your subjects,", /*#__PURE__*/React.createElement("br", null), "choose your future."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      maxWidth: 520,
      color: "rgba(255,255,255,0.65)",
      fontSize: "1.05rem",
      lineHeight: 1.7
    }
  }, "Pathfinder turns subject choice from a guess into a decision. Take the assessment, match to real careers, and get the subject plan that gets you there."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginBottom: 32
    }
  }, FEATURES.map(([icon, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      padding: 16,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    style: {
      color: "var(--brand-blue)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 14,
      marginTop: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.45)",
      fontSize: 12,
      lineHeight: 1.6,
      marginTop: 4
    }
  }, desc)))), /*#__PURE__*/React.createElement(Button, {
    variant: "pathfinder",
    shape: "pill",
    size: "lg",
    elevated: true,
    arrow: true,
    onClick: () => go("uniapply")
  }, "Start Pathfinder \xB7 from R99")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PATHFINDER_IMAGE,
    alt: "",
    style: {
      width: "100%",
      height: 420,
      objectFit: "cover",
      borderRadius: 24,
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -28,
      left: -28,
      width: 280,
      background: "rgba(15,42,74,0.92)",
      backdropFilter: "var(--blur-glass)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 24,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.4)",
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "Your pathway"), /*#__PURE__*/React.createElement(PathwayProgress, {
    onDark: true,
    current: 3,
    style: {
      background: "transparent",
      border: "none",
      padding: 0
    }
  })))));
}
function UniApplySection({
  go
}) {
  const rows = [["Wits University", "Interview booked", "submitted"], ["University of Cape Town", "Docs missing", "due"], ["Stellenbosch University", "Submitted", "review"], ["Rhodes University", "In progress", "draft"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "uniapply",
    style: {
      background: "var(--surface-cream)",
      padding: "112px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "uniapply",
    height: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, "5 apps \xB7 2 deadlines this week")), rows.map(([u, s, t]) => /*#__PURE__*/React.createElement(ApplicationRow, {
    key: u,
    institution: u,
    status: s,
    tone: t
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "pathfinder",
    block: true,
    style: {
      marginTop: 18,
      justifyContent: "center"
    }
  }, "+ ADD UNIVERSITY")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "uniapply",
    shape: "pill",
    style: {
      marginBottom: 20
    }
  }, "UniApply"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      color: "var(--brand-navy)",
      fontWeight: 900,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em"
    }
  }, "Apply with confidence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      maxWidth: 520,
      color: "var(--text-body)",
      fontSize: "1.05rem",
      lineHeight: 1.7
    }
  }, "UniApply removes the chaos from the application process and puts you in control. Every deadline, every document, every university \u2014 tracked in one place."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 28
    }
  }, ["500+ universities", "Deadline alerts", "Document checklist", "Parent-friendly"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: "6px 14px",
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      fontSize: 12,
      fontWeight: 500
    }
  }, t))), /*#__PURE__*/React.createElement(Button, {
    variant: "uniapply",
    shape: "pill",
    size: "lg",
    elevated: true,
    arrow: true,
    onClick: () => go("impact")
  }, "Unlock UniApply \xB7 from R550"))));
}
Object.assign(window, {
  PathfinderSection,
  UniApplySection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
const {
  Button,
  StatBlock,
  Icon,
  Logo,
  PhraseChip
} = window.BridgeAppDesignSystem_9fd6e3;
const IMPACT_IMAGE = "https://images.unsplash.com/photo-1651349252802-1ba3eca86f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9uJTIwZW5lcmd5fGVufDF8fHx8MTc3ODE0OTYxOXww&ixlib=rb-4.1.0&q=80&w=1080";
const TESTIMONIALS = [["Lerato M.", "Grade 11 · Johannesburg", "I had no idea what subjects to take. Pathfinder matched me to engineering and gave me the exact plan.", 5], ["Sipho K.", "Matric · Durban", "I was lost — now I have a full plan and got accepted to my dream university through UniApply.", 5], ["Naledi P.", "Parent · Pretoria", "For the first time the whole matric year made sense to us as a family. Worth every rand.", 5]];
function ImpactSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "impact",
    style: {
      position: "relative",
      background: "var(--brand-navy)",
      padding: "112px 24px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMPACT_IMAGE,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1152,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-orange)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Impact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      color: "#fff",
      fontWeight: 900,
      fontSize: "clamp(2.2rem,4.5vw,4rem)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      textTransform: "uppercase"
    }
  }, "Not a product.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-yellow)"
    }
  }, "A movement.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 auto 48px",
      maxWidth: 640,
      color: "rgba(255,255,255,0.6)",
      fontSize: "1.05rem",
      lineHeight: 1.7
    }
  }, "Real students, real outcomes, real futures being built every day across South Africa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32,
      textAlign: "left",
      maxWidth: 900,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    size: "lg",
    value: "10K+",
    label: "Students guided"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    size: "lg",
    value: "50+",
    label: "Partner schools"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    size: "lg",
    value: "500+",
    label: "Universities covered"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    onDark: true,
    size: "lg",
    value: "95%",
    label: "Satisfaction rate"
  }))));
}
function TestimonialsSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    style: {
      background: "var(--surface-cream)",
      padding: "112px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-blue)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Testimonials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 40px",
      color: "var(--brand-navy)",
      fontWeight: 900,
      fontSize: "clamp(2rem,4vw,3.4rem)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      textTransform: "uppercase"
    }
  }, "Built different. Says who?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, TESTIMONIALS.map(([name, meta, quote, rating]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      color: "var(--brand-yellow)"
    }
  }, Array.from({
    length: rating
  }).map((_, i) => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 14,
    style: {
      fill: "currentColor"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--brand-navy)",
      fontWeight: 500,
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: 11
    }
  }, meta)))))));
}
function CTASection({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--brand-orange)",
      padding: "96px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 32,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      color: "#fff",
      fontWeight: 900,
      fontSize: "clamp(2rem,4vw,3.4rem)",
      lineHeight: 1,
      letterSpacing: "-0.03em",
      textTransform: "uppercase"
    }
  }, "Don't miss", /*#__PURE__*/React.createElement("br", null), "your chance."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "rgba(255,255,255,0.85)",
      fontSize: "1.05rem",
      maxWidth: 460,
      lineHeight: 1.6
    }
  }, "Applications close faster than you think. Start today and your future self will thank you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "uniapply",
    shape: "pill",
    size: "lg",
    arrow: true,
    onClick: () => go("hero")
  }, "Start for R99"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    shape: "pill",
    size: "lg",
    arrow: true,
    onClick: () => go("uniapply")
  }, "Talk to our team"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--brand-navy)",
      padding: "64px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1152,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr",
      gap: 32,
      paddingBottom: 40,
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      display: "inline-flex",
      padding: "8px 12px",
      borderRadius: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    lockup: "gradesmatch",
    height: 34
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 16px",
      color: "rgba(255,255,255,0.5)",
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, "From subject choice to university acceptance \u2014 BridgeApp guides every step of your journey."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      color: "rgba(255,255,255,0.6)"
    }
  }, ["instagram", "twitter", "linkedin", "facebook"].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 18
  })))), [["Products", ["Pathfinder", "UniApply", "Future Club", "School Clash"]], ["Company", ["About", "Schools", "Partners", "Careers"]], ["Support", ["Help centre", "Contact", "Privacy", "Terms"]]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 12
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "rgba(255,255,255,0.5)",
      fontSize: 13,
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      justifyContent: "space-between",
      paddingTop: 24,
      color: "rgba(255,255,255,0.35)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 BridgeApp. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(PhraseChip, {
    tone: "blue",
    style: {
      fontSize: 11,
      padding: "4px 10px"
    }
  }, "Don't guess your future")))));
}
Object.assign(window, {
  ImpactSection,
  TestimonialsSection,
  CTASection,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DoDontList = __ds_scope.DoDontList;

__ds_ns.PhraseChip = __ds_scope.PhraseChip;

__ds_ns.RuleBanner = __ds_scope.RuleBanner;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ApplicationRow = __ds_scope.ApplicationRow;

__ds_ns.DeadlineRow = __ds_scope.DeadlineRow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PathwayProgress = __ds_scope.PathwayProgress;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
