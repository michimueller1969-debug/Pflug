/* @ds-bundle: {"format":3,"namespace":"FerienhausPflugDesignSystem_14ec5f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"RoomCard","sourcePath":"components/display/RoomCard.jsx"}],"sourceHashes":{"components/android-frame.jsx":"70c8c3059eeb","components/core/Badge.jsx":"b0049c1615cf","components/core/Button.jsx":"0d501ccfbf63","components/core/Input.jsx":"21ac8bedb8a7","components/core/Tag.jsx":"91cc6bb6328c","components/display/Card.jsx":"5ef9e64d6e04","components/display/RoomCard.jsx":"43aafbad8c1a","components/ios-frame.jsx":"be3343be4b51","export/ferienhaus-pflug/android-frame.jsx":"70c8c3059eeb","export/ferienhaus-pflug/ds-bundle.js":"641fdf6f46ca","export/ferienhaus-pflug/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FerienhausPflugDesignSystem_14ec5f = window.FerienhausPflugDesignSystem_14ec5f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/android-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// Android.jsx — Simplified Android (Material 3) device frame
// Status bar + top app bar + content + gesture nav + keyboard.
// Based on Figma M3 spec. No dependencies, no image assets.
// Exports (to window): AndroidDevice, AndroidStatusBar, AndroidAppBar, AndroidListItem, AndroidNavBar, AndroidKeyboard
//
// Usage — wrap your screen content in <AndroidDevice> to get the bezel, status
// bar and gesture nav (props: title, large, keyboard, dark):
//
//   <AndroidDevice title="Inbox" large>
//     ...your screen content...
//   </AndroidDevice>
//   <AndroidDevice title="Compose" keyboard>…</AndroidDevice>
/* END USAGE */

const MD_C = {
  surface: '#f4fbf8',
  surfaceVariant: '#dae5e1',
  inverseOnSurface: '#ecf2ef',
  secondaryContainer: '#cde8e1',
  primaryFixedDim: '#83d5c6',
  onSurface: '#171d1b',
  onSurfaceVar: '#49454f',
  onPrimaryContainer: '#00201c',
  primary: '#006a60',
  frameBorder: 'rgba(116,119,117,0.5)'
};

// ─────────────────────────────────────────────────────────────
// Status bar (time left, wifi/cell/battery right)
// ─────────────────────────────────────────────────────────────
function AndroidStatusBar({
  dark = false
}) {
  const c = dark ? '#fff' : MD_C.onSurface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      position: 'relative',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
      lineHeight: '20px',
      color: c
    }
  }, "9:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 8,
      transform: 'translateX(-50%)',
      width: 24,
      height: 24,
      borderRadius: 100,
      background: '#2e2e2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingRight: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.67 14.67V1.33L1.33 14.67h13.34z",
    fill: c
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.75",
    y: "2",
    width: "8.5",
    height: "13",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "0.9",
    width: "5",
    height: "2",
    rx: "0.5",
    fill: c
  }))));
}

// ─────────────────────────────────────────────────────────────
// Top app bar (Material 3 small/medium)
// ─────────────────────────────────────────────────────────────
function AndroidAppBar({
  title = 'Title',
  large = false
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: MD_C.onSurfaceVar,
      opacity: 0.3
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.surface,
      padding: '4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, iconDot, !large && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title), large && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), iconDot), large && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 20px',
      fontSize: 28,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// List item (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidListItem({
  headline,
  supporting,
  leading
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      minHeight: 56,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: MD_C.primary,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 500,
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: MD_C.onSurface,
      lineHeight: '24px'
    }
  }, headline), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: MD_C.onSurfaceVar,
      lineHeight: '20px'
    }
  }, supporting)));
}

// ─────────────────────────────────────────────────────────────
// Gesture nav bar (pill)
// ─────────────────────────────────────────────────────────────
function AndroidNavBar({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      height: 4,
      borderRadius: 2,
      background: dark ? '#fff' : MD_C.onSurface,
      opacity: 0.4
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// Device frame — wraps everything
// ─────────────────────────────────────────────────────────────
function AndroidDevice({
  children,
  width = 412,
  height = 892,
  dark = false,
  title,
  large = false,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 18,
      overflow: 'hidden',
      background: dark ? '#1d1b20' : MD_C.surface,
      border: `8px solid ${MD_C.frameBorder}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(AndroidStatusBar, {
    dark: dark
  }), title !== undefined && /*#__PURE__*/React.createElement(AndroidAppBar, {
    title: title,
    large: large
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(AndroidKeyboard, null), /*#__PURE__*/React.createElement(AndroidNavBar, {
    dark: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — Gboard (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidKeyboard() {
  let _k = 0;
  const key = (l, {
    flex = 1,
    bg = MD_C.surface,
    r = 6,
    minW,
    fs = 21
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: _k++,
    style: {
      height: 46,
      borderRadius: r,
      flex,
      minWidth: minW,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto, system-ui',
      fontSize: fs,
      color: MD_C.onPrimaryContainer
    }
  }, l);
  const row = (keys, style = {}) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      ...style
    }
  }, keys.map(l => key(l)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.inverseOnSurface,
      padding: '0 8px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], {
    padding: '0 20px'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('', {
    bg: MD_C.surfaceVariant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 7,
      minWidth: 274
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l))), key('', {
    bg: MD_C.surfaceVariant
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('?123', {
    bg: MD_C.secondaryContainer,
    r: 100,
    minW: 58,
    fs: 14
  }), key(',', {
    bg: MD_C.surfaceVariant
  }), key('', {
    flex: 3,
    minW: 154
  }), key('.', {
    bg: MD_C.surfaceVariant
  }), key('', {
    bg: MD_C.primaryFixedDim,
    r: 100,
    minW: 58
  }))));
}
Object.assign(window, {
  AndroidDevice,
  AndroidStatusBar,
  AndroidAppBar,
  AndroidListItem,
  AndroidNavBar,
  AndroidKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/android-frame.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const badgeVariantMap = {
  default: {
    background: 'var(--neutral-200)',
    color: 'var(--neutral-700)'
  },
  wood: {
    background: 'var(--wood-100)',
    color: 'var(--wood-700)'
  },
  olive: {
    background: 'var(--olive-100)',
    color: 'var(--olive-700)'
  },
  charcoal: {
    background: 'var(--charcoal-500)',
    color: 'var(--neutral-100)'
  },
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-text)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--neutral-600)',
    border: '1px solid var(--neutral-300)'
  },
  woodOutline: {
    background: 'transparent',
    color: 'var(--wood-600)',
    border: '1px solid var(--wood-300)'
  }
};
const badgeSizeMap = {
  sm: {
    padding: '2px 8px',
    fontSize: '9.5px',
    lineHeight: '16px'
  },
  md: {
    padding: '3px 10px',
    fontSize: '10.5px',
    lineHeight: '18px'
  },
  lg: {
    padding: '5px 14px',
    fontSize: '12px',
    lineHeight: '20px'
  }
};
function Badge({
  children,
  variant = 'default',
  size = 'md'
}) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    borderRadius: 'var(--radius-full)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    ...badgeSizeMap[size],
    ...badgeVariantMap[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const buttonVariants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-primary-text)',
    border: '1.5px solid transparent'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-text)',
    border: '1.5px solid transparent'
  },
  dark: {
    background: 'var(--wood-800)',
    color: 'var(--neutral-100)',
    border: '1.5px solid transparent'
  },
  olive: {
    background: 'var(--color-accent)',
    color: 'var(--color-accent-text)',
    border: '1.5px solid transparent'
  }
};
const buttonHoverVariants = {
  primary: {
    background: 'var(--color-primary-hover)'
  },
  secondary: {
    background: 'var(--wood-50)'
  },
  ghost: {
    background: 'var(--neutral-200)'
  },
  dark: {
    background: 'var(--wood-900)'
  },
  olive: {
    background: 'var(--color-accent-hover)'
  }
};
const buttonSizes = {
  sm: {
    padding: '7px 16px',
    fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-widest)'
  },
  md: {
    padding: '11px 24px',
    fontSize: 'var(--text-sm)',
    letterSpacing: 'var(--tracking-wider)'
  },
  lg: {
    padding: '14px 32px',
    fontSize: 'var(--text-base)',
    letterSpacing: 'var(--tracking-wide)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  fullWidth = false,
  type = 'button'
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background 180ms ease, transform 120ms ease, box-shadow 180ms ease',
    borderRadius: 'var(--radius-sm)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    boxSizing: 'border-box',
    transform: pressed && !disabled ? 'scale(0.985)' : hovered && !disabled ? 'translateY(-1px)' : 'none',
    boxShadow: hovered && !disabled && variant === 'primary' ? 'var(--shadow-md)' : 'none',
    ...buttonSizes[size],
    ...buttonVariants[variant],
    ...(hovered && !disabled ? buttonHoverVariants[variant] : {})
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  hint,
  required = false,
  id
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    fontFamily: 'var(--font-body)'
  };
  const labelStyle = {
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-medium)',
    color: 'var(--color-text-secondary)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase'
  };
  const inputStyle = {
    padding: '10px 14px',
    fontSize: 'var(--text-sm)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-normal)',
    color: disabled ? 'var(--neutral-400)' : 'var(--color-text)',
    background: disabled ? 'var(--neutral-200)' : 'var(--color-surface)',
    border: `1.5px solid ${error ? 'oklch(55% 0.18 25)' : focused ? 'var(--wood-400)' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-sm)',
    outline: 'none',
    transition: 'border-color var(--transition-fast)',
    width: '100%',
    boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'text',
    boxShadow: focused ? '0 0 0 3px rgba(160,120,72,0.12)' : 'none'
  };
  const hintStyle = {
    fontSize: 'var(--text-xs)',
    color: error ? 'oklch(55% 0.18 25)' : 'var(--color-text-muted)',
    lineHeight: 1.4
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wood-500)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const tagVariantMap = {
  default: {
    background: 'var(--neutral-200)',
    color: 'var(--neutral-700)'
  },
  wood: {
    background: 'var(--wood-100)',
    color: 'var(--wood-800)'
  },
  olive: {
    background: 'var(--olive-100)',
    color: 'var(--olive-700)'
  },
  dark: {
    background: 'var(--wood-700)',
    color: 'var(--wood-100)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--neutral-600)',
    border: '1px solid var(--color-border)'
  }
};
function Tag({
  children,
  variant = 'wood',
  onRemove,
  icon
}) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 10px',
    borderRadius: 'var(--radius-xs)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-normal)',
    fontSize: 'var(--text-sm)',
    letterSpacing: 'var(--tracking-normal)',
    whiteSpace: 'nowrap',
    ...tagVariantMap[variant]
  };
  const removeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.12)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '10px',
    color: 'inherit',
    lineHeight: 1,
    padding: 0,
    marginLeft: '2px',
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      lineHeight: 1
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    style: removeStyle,
    onClick: onRemove,
    type: "button"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  image,
  imageAlt = '',
  imageHeight = 200,
  title,
  subtitle,
  children,
  footer,
  onClick,
  elevated = false,
  woodAccent = false
}) {
  const [hovered, setHovered] = React.useState(false);
  const cardStyle = {
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-lg)',
    border: woodAccent ? 'var(--border-wood)' : '1px solid var(--color-border-light)',
    overflow: 'hidden',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'box-shadow 200ms ease, transform 200ms ease',
    boxShadow: hovered ? 'var(--shadow-lg)' : elevated ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    transform: hovered && onClick ? 'translateY(-3px)' : 'none'
  };
  const imageStyle = {
    width: '100%',
    height: imageHeight,
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 350ms ease',
    transform: hovered && image ? 'scale(1.02)' : 'scale(1)'
  };
  const imageWrapStyle = {
    overflow: 'hidden'
  };
  const bodyStyle = {
    padding: 'var(--padding-card)'
  };
  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'var(--text-xl)',
    color: 'var(--color-text)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 'var(--leading-tight)',
    marginBottom: subtitle ? '5px' : children ? '12px' : 0
  };
  const subtitleStyle = {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--leading-normal)',
    marginBottom: children ? '14px' : 0
  };
  const footerStyle = {
    borderTop: '1px solid var(--color-border-light)',
    padding: '12px 24px',
    background: 'var(--neutral-100)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: cardStyle,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, image && /*#__PURE__*/React.createElement("div", {
    style: imageWrapStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: imageStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: bodyStyle
  }, title && /*#__PURE__*/React.createElement("div", {
    style: titleStyle
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: subtitleStyle
  }, subtitle), children), footer && /*#__PURE__*/React.createElement("div", {
    style: footerStyle
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/RoomCard.jsx
try { (() => {
const amenityIcons = {
  wifi: '⌁',
  parking: '⊡',
  kitchen: '⚏',
  bath: '⬚',
  tv: '▭',
  default: '·'
};
function RoomCard({
  name,
  description,
  capacity = 2,
  beds = 1,
  pricePerNight,
  currency = '€',
  amenities = [],
  imageUrl,
  imageAlt,
  available = true,
  onBook,
  unitNumber
}) {
  const [hovered, setHovered] = React.useState(false);
  const cardStyle = {
    background: 'var(--color-surface)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--color-border-light)',
    overflow: 'hidden',
    transition: 'box-shadow 200ms ease, transform 200ms ease',
    boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
    transform: hovered ? 'translateY(-3px)' : 'none',
    display: 'flex',
    flexDirection: 'column'
  };
  const imageWrapStyle = {
    position: 'relative',
    overflow: 'hidden'
  };
  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 350ms ease',
    transform: hovered ? 'scale(1.03)' : 'scale(1)'
  };
  const placeholderStyle = {
    width: '100%',
    height: '220px',
    background: 'var(--texture-wood-oak)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const unitBadgeStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'var(--wood-800)',
    color: 'var(--wood-100)',
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: '13px',
    letterSpacing: '0.08em',
    padding: '3px 10px',
    borderRadius: 'var(--radius-xs)'
  };
  const availBadgeStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: available ? 'var(--olive-500)' : 'var(--charcoal-500)',
    color: 'white',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: '9px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '3px 9px',
    borderRadius: 'var(--radius-full)'
  };
  const bodyStyle = {
    padding: '20px 22px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
  const namestyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'var(--text-2xl)',
    color: 'var(--color-text)',
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1.1
  };
  const metaStyle = {
    display: 'flex',
    gap: '14px',
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.04em'
  };
  const descStyle = {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    flexGrow: 1
  };
  const amenitiesRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '4px'
  };
  const tagStyle = {
    padding: '3px 9px',
    borderRadius: 'var(--radius-xs)',
    background: 'var(--wood-50)',
    border: '1px solid var(--wood-200)',
    color: 'var(--wood-700)',
    fontSize: '11px',
    fontFamily: 'var(--font-body)',
    letterSpacing: '0.02em'
  };
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid var(--color-border-light)',
    padding: '14px 22px',
    background: 'var(--neutral-100)'
  };
  const priceStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1px'
  };
  const priceAmountStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--text-2xl)',
    color: 'var(--wood-700)',
    letterSpacing: '-0.01em',
    lineHeight: 1
  };
  const priceUnitStyle = {
    fontSize: '10px',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase'
  };
  const bookBtnStyle = {
    padding: '9px 20px',
    background: available ? 'var(--color-primary)' : 'var(--neutral-300)',
    color: available ? 'white' : 'var(--neutral-500)',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-wider)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    cursor: available ? 'pointer' : 'default',
    transition: 'var(--transition-base)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: cardStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: imageWrapStyle
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: imageAlt || name,
    style: imageStyle
  }) : /*#__PURE__*/React.createElement("div", {
    style: placeholderStyle
  }), unitNumber && /*#__PURE__*/React.createElement("div", {
    style: unitBadgeStyle
  }, "Nr. ", unitNumber), /*#__PURE__*/React.createElement("div", {
    style: availBadgeStyle
  }, available ? 'Verfügbar' : 'Belegt')), /*#__PURE__*/React.createElement("div", {
    style: bodyStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: namestyle
  }, name), /*#__PURE__*/React.createElement("div", {
    style: metaStyle
  }, /*#__PURE__*/React.createElement("span", null, capacity, " ", capacity === 1 ? 'Person' : 'Personen'), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, beds, " ", beds === 1 ? 'Bett' : 'Betten')), description && /*#__PURE__*/React.createElement("div", {
    style: descStyle
  }, description), amenities.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: amenitiesRowStyle
  }, amenities.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: tagStyle
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: footerStyle
  }, /*#__PURE__*/React.createElement("div", {
    style: priceStyle
  }, pricePerNight && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: priceAmountStyle
  }, currency, " ", pricePerNight), /*#__PURE__*/React.createElement("span", {
    style: priceUnitStyle
  }, "pro Nacht"))), /*#__PURE__*/React.createElement("button", {
    style: bookBtnStyle,
    onClick: available ? onBook : undefined,
    type: "button"
  }, available ? 'Jetzt buchen' : 'Nicht verfügbar')));
}
Object.assign(__ds_scope, { RoomCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/RoomCard.jsx", error: String((e && e.message) || e) }); }

// components/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ios-frame.jsx", error: String((e && e.message) || e) }); }

// export/ferienhaus-pflug/android-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// Android.jsx — Simplified Android (Material 3) device frame
// Status bar + top app bar + content + gesture nav + keyboard.
// Based on Figma M3 spec. No dependencies, no image assets.
// Exports (to window): AndroidDevice, AndroidStatusBar, AndroidAppBar, AndroidListItem, AndroidNavBar, AndroidKeyboard
//
// Usage — wrap your screen content in <AndroidDevice> to get the bezel, status
// bar and gesture nav (props: title, large, keyboard, dark):
//
//   <AndroidDevice title="Inbox" large>
//     ...your screen content...
//   </AndroidDevice>
//   <AndroidDevice title="Compose" keyboard>…</AndroidDevice>
/* END USAGE */

const MD_C = {
  surface: '#f4fbf8',
  surfaceVariant: '#dae5e1',
  inverseOnSurface: '#ecf2ef',
  secondaryContainer: '#cde8e1',
  primaryFixedDim: '#83d5c6',
  onSurface: '#171d1b',
  onSurfaceVar: '#49454f',
  onPrimaryContainer: '#00201c',
  primary: '#006a60',
  frameBorder: 'rgba(116,119,117,0.5)'
};

// ─────────────────────────────────────────────────────────────
// Status bar (time left, wifi/cell/battery right)
// ─────────────────────────────────────────────────────────────
function AndroidStatusBar({
  dark = false
}) {
  const c = dark ? '#fff' : MD_C.onSurface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      position: 'relative',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 128,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
      lineHeight: '20px',
      color: c
    }
  }, "9:30")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 8,
      transform: 'translateX(-50%)',
      width: 24,
      height: 24,
      borderRadius: 100,
      background: '#2e2e2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      paddingRight: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    style: {
      marginRight: -2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14.67 14.67V1.33L1.33 14.67h13.34z",
    fill: c
  }))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3.75",
    y: "2",
    width: "8.5",
    height: "13",
    rx: "1.5",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "0.9",
    width: "5",
    height: "2",
    rx: "0.5",
    fill: c
  }))));
}

// ─────────────────────────────────────────────────────────────
// Top app bar (Material 3 small/medium)
// ─────────────────────────────────────────────────────────────
function AndroidAppBar({
  title = 'Title',
  large = false
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: MD_C.onSurfaceVar,
      opacity: 0.3
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.surface,
      padding: '4px 4px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, iconDot, !large && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 22,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title), large && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), iconDot), large && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 20px',
      fontSize: 28,
      fontWeight: 400,
      color: MD_C.onSurface,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// List item (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidListItem({
  headline,
  supporting,
  leading
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 16px',
      minHeight: 56,
      boxSizing: 'border-box',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }
  }, leading && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: MD_C.primary,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 500,
      flexShrink: 0
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: MD_C.onSurface,
      lineHeight: '24px'
    }
  }, headline), supporting && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: MD_C.onSurfaceVar,
      lineHeight: '20px'
    }
  }, supporting)));
}

// ─────────────────────────────────────────────────────────────
// Gesture nav bar (pill)
// ─────────────────────────────────────────────────────────────
function AndroidNavBar({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 108,
      height: 4,
      borderRadius: 2,
      background: dark ? '#fff' : MD_C.onSurface,
      opacity: 0.4
    }
  }));
}

// ─────────────────────────────────────────────────────────────
// Device frame — wraps everything
// ─────────────────────────────────────────────────────────────
function AndroidDevice({
  children,
  width = 412,
  height = 892,
  dark = false,
  title,
  large = false,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 18,
      overflow: 'hidden',
      background: dark ? '#1d1b20' : MD_C.surface,
      border: `8px solid ${MD_C.frameBorder}`,
      boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(AndroidStatusBar, {
    dark: dark
  }), title !== undefined && /*#__PURE__*/React.createElement(AndroidAppBar, {
    title: title,
    large: large
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(AndroidKeyboard, null), /*#__PURE__*/React.createElement(AndroidNavBar, {
    dark: dark
  }));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — Gboard (Material 3)
// ─────────────────────────────────────────────────────────────
function AndroidKeyboard() {
  let _k = 0;
  const key = (l, {
    flex = 1,
    bg = MD_C.surface,
    r = 6,
    minW,
    fs = 21
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: _k++,
    style: {
      height: 46,
      borderRadius: r,
      flex,
      minWidth: minW,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto, system-ui',
      fontSize: fs,
      color: MD_C.onPrimaryContainer
    }
  }, l);
  const row = (keys, style = {}) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      ...style
    }
  }, keys.map(l => key(l)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: MD_C.inverseOnSurface,
      padding: '0 8px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], {
    padding: '0 20px'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('', {
    bg: MD_C.surfaceVariant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 7,
      minWidth: 274
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l))), key('', {
    bg: MD_C.surfaceVariant
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, key('?123', {
    bg: MD_C.secondaryContainer,
    r: 100,
    minW: 58,
    fs: 14
  }), key(',', {
    bg: MD_C.surfaceVariant
  }), key('', {
    flex: 3,
    minW: 154
  }), key('.', {
    bg: MD_C.surfaceVariant
  }), key('', {
    bg: MD_C.primaryFixedDim,
    r: 100,
    minW: 58
  }))));
}
Object.assign(window, {
  AndroidDevice,
  AndroidStatusBar,
  AndroidAppBar,
  AndroidListItem,
  AndroidNavBar,
  AndroidKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ferienhaus-pflug/android-frame.jsx", error: String((e && e.message) || e) }); }

// export/ferienhaus-pflug/ds-bundle.js
try { (() => {
/* @ds-bundle: {"format":3,"namespace":"FerienhausPflugDesignSystem_14ec5f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"RoomCard","sourcePath":"components/display/RoomCard.jsx"}],"sourceHashes":{"components/android-frame.jsx":"70c8c3059eeb","components/core/Badge.jsx":"b0049c1615cf","components/core/Button.jsx":"0d501ccfbf63","components/core/Input.jsx":"21ac8bedb8a7","components/core/Tag.jsx":"91cc6bb6328c","components/display/Card.jsx":"5ef9e64d6e04","components/display/RoomCard.jsx":"43aafbad8c1a","components/ios-frame.jsx":"be3343be4b51"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {
  const __ds_ns = window.FerienhausPflugDesignSystem_14ec5f = window.FerienhausPflugDesignSystem_14ec5f || {};
  const __ds_scope = {};
  __ds_ns.__errors = __ds_ns.__errors || [];

  // components/android-frame.jsx
  try {
    (() => {
      // @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

      /* BEGIN USAGE */
      // Android.jsx — Simplified Android (Material 3) device frame
      // Status bar + top app bar + content + gesture nav + keyboard.
      // Based on Figma M3 spec. No dependencies, no image assets.
      // Exports (to window): AndroidDevice, AndroidStatusBar, AndroidAppBar, AndroidListItem, AndroidNavBar, AndroidKeyboard
      //
      // Usage — wrap your screen content in <AndroidDevice> to get the bezel, status
      // bar and gesture nav (props: title, large, keyboard, dark):
      //
      //   <AndroidDevice title="Inbox" large>
      //     ...your screen content...
      //   </AndroidDevice>
      //   <AndroidDevice title="Compose" keyboard>…</AndroidDevice>
      /* END USAGE */

      const MD_C = {
        surface: '#f4fbf8',
        surfaceVariant: '#dae5e1',
        inverseOnSurface: '#ecf2ef',
        secondaryContainer: '#cde8e1',
        primaryFixedDim: '#83d5c6',
        onSurface: '#171d1b',
        onSurfaceVar: '#49454f',
        onPrimaryContainer: '#00201c',
        primary: '#006a60',
        frameBorder: 'rgba(116,119,117,0.5)'
      };

      // ─────────────────────────────────────────────────────────────
      // Status bar (time left, wifi/cell/battery right)
      // ─────────────────────────────────────────────────────────────
      function AndroidStatusBar({
        dark = false
      }) {
        const c = dark ? '#fff' : MD_C.onSurface;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            position: 'relative',
            fontFamily: 'Roboto, system-ui, sans-serif'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 128,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 0.25,
            lineHeight: '20px',
            color: c
          }
        }, "9:30")), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            left: '50%',
            top: 8,
            transform: 'translateX(-50%)',
            width: 24,
            height: 24,
            borderRadius: 100,
            background: '#2e2e2e'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            paddingRight: 2
          }
        }, /*#__PURE__*/React.createElement("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          style: {
            marginRight: -2
          }
        }, /*#__PURE__*/React.createElement("path", {
          d: "M8 13.3L.67 5.97a10.37 10.37 0 0114.66 0L8 13.3z",
          fill: c
        })), /*#__PURE__*/React.createElement("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          style: {
            marginRight: -2
          }
        }, /*#__PURE__*/React.createElement("path", {
          d: "M14.67 14.67V1.33L1.33 14.67h13.34z",
          fill: c
        }))), /*#__PURE__*/React.createElement("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "3.75",
          y: "2",
          width: "8.5",
          height: "13",
          rx: "1.5",
          fill: c
        }), /*#__PURE__*/React.createElement("rect", {
          x: "5.5",
          y: "0.9",
          width: "5",
          height: "2",
          rx: "0.5",
          fill: c
        }))));
      }

      // ─────────────────────────────────────────────────────────────
      // Top app bar (Material 3 small/medium)
      // ─────────────────────────────────────────────────────────────
      function AndroidAppBar({
        title = 'Title',
        large = false
      }) {
        const iconDot = /*#__PURE__*/React.createElement("div", {
          style: {
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: MD_C.onSurfaceVar,
            opacity: 0.3
          }
        }));
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: MD_C.surface,
            padding: '4px 4px 0'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            height: 56,
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }
        }, iconDot, !large && /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            fontSize: 22,
            fontWeight: 400,
            color: MD_C.onSurface,
            fontFamily: 'Roboto, system-ui, sans-serif'
          }
        }, title), large && /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1
          }
        }), iconDot), large && /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '16px 16px 20px',
            fontSize: 28,
            fontWeight: 400,
            color: MD_C.onSurface,
            fontFamily: 'Roboto, system-ui, sans-serif'
          }
        }, title));
      }

      // ─────────────────────────────────────────────────────────────
      // List item (Material 3)
      // ─────────────────────────────────────────────────────────────
      function AndroidListItem({
        headline,
        supporting,
        leading
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '12px 16px',
            minHeight: 56,
            boxSizing: 'border-box',
            fontFamily: 'Roboto, system-ui, sans-serif'
          }
        }, leading && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: MD_C.primary,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            fontWeight: 500,
            flexShrink: 0
          }
        }, leading), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            minWidth: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 16,
            color: MD_C.onSurface,
            lineHeight: '24px'
          }
        }, headline), supporting && /*#__PURE__*/React.createElement("div", {
          style: {
            fontSize: 14,
            color: MD_C.onSurfaceVar,
            lineHeight: '20px'
          }
        }, supporting)));
      }

      // ─────────────────────────────────────────────────────────────
      // Gesture nav bar (pill)
      // ─────────────────────────────────────────────────────────────
      function AndroidNavBar({
        dark = false
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 108,
            height: 4,
            borderRadius: 2,
            background: dark ? '#fff' : MD_C.onSurface,
            opacity: 0.4
          }
        }));
      }

      // ─────────────────────────────────────────────────────────────
      // Device frame — wraps everything
      // ─────────────────────────────────────────────────────────────
      function AndroidDevice({
        children,
        width = 412,
        height = 892,
        dark = false,
        title,
        large = false,
        keyboard = false
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width,
            height,
            borderRadius: 18,
            overflow: 'hidden',
            background: dark ? '#1d1b20' : MD_C.surface,
            border: `8px solid ${MD_C.frameBorder}`,
            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
          }
        }, /*#__PURE__*/React.createElement(AndroidStatusBar, {
          dark: dark
        }), title !== undefined && /*#__PURE__*/React.createElement(AndroidAppBar, {
          title: title,
          large: large
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            overflow: 'auto'
          }
        }, children), keyboard && /*#__PURE__*/React.createElement(AndroidKeyboard, null), /*#__PURE__*/React.createElement(AndroidNavBar, {
          dark: dark
        }));
      }

      // ─────────────────────────────────────────────────────────────
      // Keyboard — Gboard (Material 3)
      // ─────────────────────────────────────────────────────────────
      function AndroidKeyboard() {
        let _k = 0;
        const key = (l, {
          flex = 1,
          bg = MD_C.surface,
          r = 6,
          minW,
          fs = 21
        } = {}) => /*#__PURE__*/React.createElement("div", {
          key: _k++,
          style: {
            height: 46,
            borderRadius: r,
            flex,
            minWidth: minW,
            background: bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Roboto, system-ui',
            fontSize: fs,
            color: MD_C.onPrimaryContainer
          }
        }, l);
        const row = (keys, style = {}) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6,
            justifyContent: 'center',
            ...style
          }
        }, keys.map(l => key(l)));
        return /*#__PURE__*/React.createElement("div", {
          style: {
            background: MD_C.inverseOnSurface,
            padding: '0 8px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            height: 44
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }
        }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], {
          padding: '0 20px'
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6
          }
        }, key('', {
          bg: MD_C.surfaceVariant
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6,
            flex: 7,
            minWidth: 274
          }
        }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l))), key('', {
          bg: MD_C.surfaceVariant
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6
          }
        }, key('?123', {
          bg: MD_C.secondaryContainer,
          r: 100,
          minW: 58,
          fs: 14
        }), key(',', {
          bg: MD_C.surfaceVariant
        }), key('', {
          flex: 3,
          minW: 154
        }), key('.', {
          bg: MD_C.surfaceVariant
        }), key('', {
          bg: MD_C.primaryFixedDim,
          r: 100,
          minW: 58
        }))));
      }
      Object.assign(window, {
        AndroidDevice,
        AndroidStatusBar,
        AndroidAppBar,
        AndroidListItem,
        AndroidNavBar,
        AndroidKeyboard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/android-frame.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Badge.jsx
  try {
    (() => {
      const badgeVariantMap = {
        default: {
          background: 'var(--neutral-200)',
          color: 'var(--neutral-700)'
        },
        wood: {
          background: 'var(--wood-100)',
          color: 'var(--wood-700)'
        },
        olive: {
          background: 'var(--olive-100)',
          color: 'var(--olive-700)'
        },
        charcoal: {
          background: 'var(--charcoal-500)',
          color: 'var(--neutral-100)'
        },
        primary: {
          background: 'var(--color-primary)',
          color: 'var(--color-primary-text)'
        },
        outline: {
          background: 'transparent',
          color: 'var(--neutral-600)',
          border: '1px solid var(--neutral-300)'
        },
        woodOutline: {
          background: 'transparent',
          color: 'var(--wood-600)',
          border: '1px solid var(--wood-300)'
        }
      };
      const badgeSizeMap = {
        sm: {
          padding: '2px 8px',
          fontSize: '9.5px',
          lineHeight: '16px'
        },
        md: {
          padding: '3px 10px',
          fontSize: '10.5px',
          lineHeight: '18px'
        },
        lg: {
          padding: '5px 14px',
          fontSize: '12px',
          lineHeight: '20px'
        }
      };
      function Badge({
        children,
        variant = 'default',
        size = 'md'
      }) {
        const style = {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          borderRadius: 'var(--radius-full)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-medium)',
          letterSpacing: 'var(--tracking-wide)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          ...badgeSizeMap[size],
          ...badgeVariantMap[variant]
        };
        return /*#__PURE__*/React.createElement("span", {
          style: style
        }, children);
      }
      Object.assign(__ds_scope, {
        Badge
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Badge.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Button.jsx
  try {
    (() => {
      const buttonVariants = {
        primary: {
          background: 'var(--color-primary)',
          color: 'var(--color-primary-text)',
          border: '1.5px solid transparent'
        },
        secondary: {
          background: 'transparent',
          color: 'var(--color-primary)',
          border: '1.5px solid var(--color-primary)'
        },
        ghost: {
          background: 'transparent',
          color: 'var(--color-text)',
          border: '1.5px solid transparent'
        },
        dark: {
          background: 'var(--wood-800)',
          color: 'var(--neutral-100)',
          border: '1.5px solid transparent'
        },
        olive: {
          background: 'var(--color-accent)',
          color: 'var(--color-accent-text)',
          border: '1.5px solid transparent'
        }
      };
      const buttonHoverVariants = {
        primary: {
          background: 'var(--color-primary-hover)'
        },
        secondary: {
          background: 'var(--wood-50)'
        },
        ghost: {
          background: 'var(--neutral-200)'
        },
        dark: {
          background: 'var(--wood-900)'
        },
        olive: {
          background: 'var(--color-accent-hover)'
        }
      };
      const buttonSizes = {
        sm: {
          padding: '7px 16px',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-widest)'
        },
        md: {
          padding: '11px 24px',
          fontSize: 'var(--text-sm)',
          letterSpacing: 'var(--tracking-wider)'
        },
        lg: {
          padding: '14px 32px',
          fontSize: 'var(--text-base)',
          letterSpacing: 'var(--tracking-wide)'
        }
      };
      function Button({
        children,
        variant = 'primary',
        size = 'md',
        disabled = false,
        onClick,
        fullWidth = false,
        type = 'button'
      }) {
        const [hovered, setHovered] = React.useState(false);
        const [pressed, setPressed] = React.useState(false);
        const style = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-medium)',
          textTransform: 'uppercase',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.45 : 1,
          transition: 'background 180ms ease, transform 120ms ease, box-shadow 180ms ease',
          borderRadius: 'var(--radius-sm)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          width: fullWidth ? '100%' : 'auto',
          boxSizing: 'border-box',
          transform: pressed && !disabled ? 'scale(0.985)' : hovered && !disabled ? 'translateY(-1px)' : 'none',
          boxShadow: hovered && !disabled && variant === 'primary' ? 'var(--shadow-md)' : 'none',
          ...buttonSizes[size],
          ...buttonVariants[variant],
          ...(hovered && !disabled ? buttonHoverVariants[variant] : {})
        };
        return /*#__PURE__*/React.createElement("button", {
          type: type,
          style: style,
          disabled: disabled,
          onClick: onClick,
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => {
            setHovered(false);
            setPressed(false);
          },
          onMouseDown: () => setPressed(true),
          onMouseUp: () => setPressed(false)
        }, children);
      }
      Object.assign(__ds_scope, {
        Button
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Button.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Input.jsx
  try {
    (() => {
      function Input({
        label,
        type = 'text',
        placeholder,
        value,
        onChange,
        disabled = false,
        error,
        hint,
        required = false,
        id
      }) {
        const [focused, setFocused] = React.useState(false);
        const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
        const wrapStyle = {
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          fontFamily: 'var(--font-body)'
        };
        const labelStyle = {
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-medium)',
          color: 'var(--color-text-secondary)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase'
        };
        const inputStyle = {
          padding: '10px 14px',
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-normal)',
          color: disabled ? 'var(--neutral-400)' : 'var(--color-text)',
          background: disabled ? 'var(--neutral-200)' : 'var(--color-surface)',
          border: `1.5px solid ${error ? 'oklch(55% 0.18 25)' : focused ? 'var(--wood-400)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-sm)',
          outline: 'none',
          transition: 'border-color var(--transition-fast)',
          width: '100%',
          boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'text',
          boxShadow: focused ? '0 0 0 3px rgba(160,120,72,0.12)' : 'none'
        };
        const hintStyle = {
          fontSize: 'var(--text-xs)',
          color: error ? 'oklch(55% 0.18 25)' : 'var(--color-text-muted)',
          lineHeight: 1.4
        };
        return /*#__PURE__*/React.createElement("div", {
          style: wrapStyle
        }, label && /*#__PURE__*/React.createElement("label", {
          htmlFor: inputId,
          style: labelStyle
        }, label, required && /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'var(--wood-500)',
            marginLeft: '3px'
          }
        }, "*")), /*#__PURE__*/React.createElement("input", {
          id: inputId,
          type: type,
          placeholder: placeholder,
          value: value,
          onChange: onChange,
          disabled: disabled,
          style: inputStyle,
          onFocus: () => setFocused(true),
          onBlur: () => setFocused(false)
        }), (error || hint) && /*#__PURE__*/React.createElement("span", {
          style: hintStyle
        }, error || hint));
      }
      Object.assign(__ds_scope, {
        Input
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Input.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/core/Tag.jsx
  try {
    (() => {
      const tagVariantMap = {
        default: {
          background: 'var(--neutral-200)',
          color: 'var(--neutral-700)'
        },
        wood: {
          background: 'var(--wood-100)',
          color: 'var(--wood-800)'
        },
        olive: {
          background: 'var(--olive-100)',
          color: 'var(--olive-700)'
        },
        dark: {
          background: 'var(--wood-700)',
          color: 'var(--wood-100)'
        },
        outline: {
          background: 'transparent',
          color: 'var(--neutral-600)',
          border: '1px solid var(--color-border)'
        }
      };
      function Tag({
        children,
        variant = 'wood',
        onRemove,
        icon
      }) {
        const style = {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          padding: '4px 10px',
          borderRadius: 'var(--radius-xs)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-normal)',
          fontSize: 'var(--text-sm)',
          letterSpacing: 'var(--tracking-normal)',
          whiteSpace: 'nowrap',
          ...tagVariantMap[variant]
        };
        const removeStyle = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.12)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '10px',
          color: 'inherit',
          lineHeight: 1,
          padding: 0,
          marginLeft: '2px',
          flexShrink: 0
        };
        return /*#__PURE__*/React.createElement("span", {
          style: style
        }, icon && /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: '13px',
            lineHeight: 1
          }
        }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
          style: removeStyle,
          onClick: onRemove,
          type: "button"
        }, "\xD7"));
      }
      Object.assign(__ds_scope, {
        Tag
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/core/Tag.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/Card.jsx
  try {
    (() => {
      function Card({
        image,
        imageAlt = '',
        imageHeight = 200,
        title,
        subtitle,
        children,
        footer,
        onClick,
        elevated = false,
        woodAccent = false
      }) {
        const [hovered, setHovered] = React.useState(false);
        const cardStyle = {
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          border: woodAccent ? 'var(--border-wood)' : '1px solid var(--color-border-light)',
          overflow: 'hidden',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          boxShadow: hovered ? 'var(--shadow-lg)' : elevated ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transform: hovered && onClick ? 'translateY(-3px)' : 'none'
        };
        const imageStyle = {
          width: '100%',
          height: imageHeight,
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 350ms ease',
          transform: hovered && image ? 'scale(1.02)' : 'scale(1)'
        };
        const imageWrapStyle = {
          overflow: 'hidden'
        };
        const bodyStyle = {
          padding: 'var(--padding-card)'
        };
        const titleStyle = {
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'var(--text-xl)',
          color: 'var(--color-text)',
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 'var(--leading-tight)',
          marginBottom: subtitle ? '5px' : children ? '12px' : 0
        };
        const subtitleStyle = {
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-normal)',
          marginBottom: children ? '14px' : 0
        };
        const footerStyle = {
          borderTop: '1px solid var(--color-border-light)',
          padding: '12px 24px',
          background: 'var(--neutral-100)'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: cardStyle,
          onClick: onClick,
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false)
        }, image && /*#__PURE__*/React.createElement("div", {
          style: imageWrapStyle
        }, /*#__PURE__*/React.createElement("img", {
          src: image,
          alt: imageAlt,
          style: imageStyle
        })), /*#__PURE__*/React.createElement("div", {
          style: bodyStyle
        }, title && /*#__PURE__*/React.createElement("div", {
          style: titleStyle
        }, title), subtitle && /*#__PURE__*/React.createElement("div", {
          style: subtitleStyle
        }, subtitle), children), footer && /*#__PURE__*/React.createElement("div", {
          style: footerStyle
        }, footer));
      }
      Object.assign(__ds_scope, {
        Card
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/Card.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/display/RoomCard.jsx
  try {
    (() => {
      const amenityIcons = {
        wifi: '⌁',
        parking: '⊡',
        kitchen: '⚏',
        bath: '⬚',
        tv: '▭',
        default: '·'
      };
      function RoomCard({
        name,
        description,
        capacity = 2,
        beds = 1,
        pricePerNight,
        currency = '€',
        amenities = [],
        imageUrl,
        imageAlt,
        available = true,
        onBook,
        unitNumber
      }) {
        const [hovered, setHovered] = React.useState(false);
        const cardStyle = {
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-light)',
          overflow: 'hidden',
          transition: 'box-shadow 200ms ease, transform 200ms ease',
          boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
          transform: hovered ? 'translateY(-3px)' : 'none',
          display: 'flex',
          flexDirection: 'column'
        };
        const imageWrapStyle = {
          position: 'relative',
          overflow: 'hidden'
        };
        const imageStyle = {
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 350ms ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)'
        };
        const placeholderStyle = {
          width: '100%',
          height: '220px',
          background: 'var(--texture-wood-oak)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        };
        const unitBadgeStyle = {
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'var(--wood-800)',
          color: 'var(--wood-100)',
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: '13px',
          letterSpacing: '0.08em',
          padding: '3px 10px',
          borderRadius: 'var(--radius-xs)'
        };
        const availBadgeStyle = {
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: available ? 'var(--olive-500)' : 'var(--charcoal-500)',
          color: 'white',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '9px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '3px 9px',
          borderRadius: 'var(--radius-full)'
        };
        const bodyStyle = {
          padding: '20px 22px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        };
        const namestyle = {
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'var(--text-2xl)',
          color: 'var(--color-text)',
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 1.1
        };
        const metaStyle = {
          display: 'flex',
          gap: '14px',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.04em'
        };
        const descStyle = {
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-relaxed)',
          flexGrow: 1
        };
        const amenitiesRowStyle = {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '5px',
          marginTop: '4px'
        };
        const tagStyle = {
          padding: '3px 9px',
          borderRadius: 'var(--radius-xs)',
          background: 'var(--wood-50)',
          border: '1px solid var(--wood-200)',
          color: 'var(--wood-700)',
          fontSize: '11px',
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.02em'
        };
        const footerStyle = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--color-border-light)',
          padding: '14px 22px',
          background: 'var(--neutral-100)'
        };
        const priceStyle = {
          display: 'flex',
          flexDirection: 'column',
          gap: '1px'
        };
        const priceAmountStyle = {
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 'var(--text-2xl)',
          color: 'var(--wood-700)',
          letterSpacing: '-0.01em',
          lineHeight: 1
        };
        const priceUnitStyle = {
          fontSize: '10px',
          color: 'var(--color-text-muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase'
        };
        const bookBtnStyle = {
          padding: '9px 20px',
          background: available ? 'var(--color-primary)' : 'var(--neutral-300)',
          color: available ? 'white' : 'var(--neutral-500)',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          borderRadius: 'var(--radius-sm)',
          border: 'none',
          cursor: available ? 'pointer' : 'default',
          transition: 'var(--transition-base)'
        };
        return /*#__PURE__*/React.createElement("div", {
          style: cardStyle,
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false)
        }, /*#__PURE__*/React.createElement("div", {
          style: imageWrapStyle
        }, imageUrl ? /*#__PURE__*/React.createElement("img", {
          src: imageUrl,
          alt: imageAlt || name,
          style: imageStyle
        }) : /*#__PURE__*/React.createElement("div", {
          style: placeholderStyle
        }), unitNumber && /*#__PURE__*/React.createElement("div", {
          style: unitBadgeStyle
        }, "Nr. ", unitNumber), /*#__PURE__*/React.createElement("div", {
          style: availBadgeStyle
        }, available ? 'Verfügbar' : 'Belegt')), /*#__PURE__*/React.createElement("div", {
          style: bodyStyle
        }, /*#__PURE__*/React.createElement("div", {
          style: namestyle
        }, name), /*#__PURE__*/React.createElement("div", {
          style: metaStyle
        }, /*#__PURE__*/React.createElement("span", null, capacity, " ", capacity === 1 ? 'Person' : 'Personen'), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, beds, " ", beds === 1 ? 'Bett' : 'Betten')), description && /*#__PURE__*/React.createElement("div", {
          style: descStyle
        }, description), amenities.length > 0 && /*#__PURE__*/React.createElement("div", {
          style: amenitiesRowStyle
        }, amenities.map((a, i) => /*#__PURE__*/React.createElement("span", {
          key: i,
          style: tagStyle
        }, a)))), /*#__PURE__*/React.createElement("div", {
          style: footerStyle
        }, /*#__PURE__*/React.createElement("div", {
          style: priceStyle
        }, pricePerNight && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
          style: priceAmountStyle
        }, currency, " ", pricePerNight), /*#__PURE__*/React.createElement("span", {
          style: priceUnitStyle
        }, "pro Nacht"))), /*#__PURE__*/React.createElement("button", {
          style: bookBtnStyle,
          onClick: available ? onBook : undefined,
          type: "button"
        }, available ? 'Jetzt buchen' : 'Nicht verfügbar')));
      }
      Object.assign(__ds_scope, {
        RoomCard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/display/RoomCard.jsx",
      error: String(e && e.message || e)
    });
  }

  // components/ios-frame.jsx
  try {
    (() => {
      // @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

      /* BEGIN USAGE */
      // iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
      // Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
      // Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
      //
      // Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
      // and home indicator (props: title, dark, keyboard):
      //
      //   <IOSDevice title="Settings">
      //     ...your screen content...
      //   </IOSDevice>
      //   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
      /* END USAGE */

      // ─────────────────────────────────────────────────────────────
      // Status bar
      // ─────────────────────────────────────────────────────────────
      function IOSStatusBar({
        dark = false,
        time = '9:41'
      }) {
        const c = dark ? '#fff' : '#000';
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 154,
            alignItems: 'center',
            justifyContent: 'center',
            padding: '21px 24px 19px',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 20,
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            height: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 1.5
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: '-apple-system, "SF Pro", system-ui',
            fontWeight: 590,
            fontSize: 17,
            lineHeight: '22px',
            color: c
          }
        }, time)), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            height: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 7,
            paddingTop: 1,
            paddingRight: 1
          }
        }, /*#__PURE__*/React.createElement("svg", {
          width: "19",
          height: "12",
          viewBox: "0 0 19 12"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "0",
          y: "7.5",
          width: "3.2",
          height: "4.5",
          rx: "0.7",
          fill: c
        }), /*#__PURE__*/React.createElement("rect", {
          x: "4.8",
          y: "5",
          width: "3.2",
          height: "7",
          rx: "0.7",
          fill: c
        }), /*#__PURE__*/React.createElement("rect", {
          x: "9.6",
          y: "2.5",
          width: "3.2",
          height: "9.5",
          rx: "0.7",
          fill: c
        }), /*#__PURE__*/React.createElement("rect", {
          x: "14.4",
          y: "0",
          width: "3.2",
          height: "12",
          rx: "0.7",
          fill: c
        })), /*#__PURE__*/React.createElement("svg", {
          width: "17",
          height: "12",
          viewBox: "0 0 17 12"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
          fill: c
        }), /*#__PURE__*/React.createElement("path", {
          d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
          fill: c
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "8.5",
          cy: "10.5",
          r: "1.5",
          fill: c
        })), /*#__PURE__*/React.createElement("svg", {
          width: "27",
          height: "13",
          viewBox: "0 0 27 13"
        }, /*#__PURE__*/React.createElement("rect", {
          x: "0.5",
          y: "0.5",
          width: "23",
          height: "12",
          rx: "3.5",
          stroke: c,
          strokeOpacity: "0.35",
          fill: "none"
        }), /*#__PURE__*/React.createElement("rect", {
          x: "2",
          y: "2",
          width: "20",
          height: "9",
          rx: "2",
          fill: c
        }), /*#__PURE__*/React.createElement("path", {
          d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
          fill: c,
          fillOpacity: "0.4"
        }))));
      }

      // ─────────────────────────────────────────────────────────────
      // Liquid glass pill — blur + tint + shine
      // ─────────────────────────────────────────────────────────────
      function IOSGlassPill({
        children,
        dark = false,
        style = {}
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            height: 44,
            minWidth: 44,
            borderRadius: 9999,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
            ...style
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            borderRadius: 9999,
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            borderRadius: 9999,
            boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
            border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '0 4px'
          }
        }, children));
      }

      // ─────────────────────────────────────────────────────────────
      // Navigation bar — glass pills + large title
      // ─────────────────────────────────────────────────────────────
      function IOSNavBar({
        title = 'Title',
        dark = false,
        trailingIcon = true
      }) {
        const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
        const text = dark ? '#fff' : '#000';
        const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
          dark: dark
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }, content));
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            paddingTop: 62,
            paddingBottom: 10,
            position: 'relative',
            zIndex: 5
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px'
          }
        }, pillIcon(/*#__PURE__*/React.createElement("svg", {
          width: "12",
          height: "20",
          viewBox: "0 0 12 20",
          fill: "none",
          style: {
            marginLeft: -1
          }
        }, /*#__PURE__*/React.createElement("path", {
          d: "M10 2L2 10l8 8",
          stroke: muted,
          strokeWidth: "2.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
          width: "22",
          height: "6",
          viewBox: "0 0 22 6"
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "3",
          cy: "3",
          r: "2.5",
          fill: muted
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "11",
          cy: "3",
          r: "2.5",
          fill: muted
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "19",
          cy: "3",
          r: "2.5",
          fill: muted
        })))), /*#__PURE__*/React.createElement("div", {
          style: {
            padding: '0 16px',
            fontFamily: '-apple-system, system-ui',
            fontSize: 34,
            fontWeight: 700,
            lineHeight: '41px',
            color: text,
            letterSpacing: 0.4
          }
        }, title));
      }

      // ─────────────────────────────────────────────────────────────
      // Grouped list (inset card, r:26) + row (52px)
      // ─────────────────────────────────────────────────────────────
      function IOSListRow({
        title,
        detail,
        icon,
        chevron = true,
        isLast = false,
        dark = false
      }) {
        const text = dark ? '#fff' : '#000';
        const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
        const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
        const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
        return /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            minHeight: 52,
            padding: '0 16px',
            position: 'relative',
            fontFamily: '-apple-system, system-ui',
            fontSize: 17,
            letterSpacing: -0.43
          }
        }, icon && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 30,
            height: 30,
            borderRadius: 7,
            background: icon,
            marginRight: 12,
            flexShrink: 0
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            color: text
          }
        }, title), detail && /*#__PURE__*/React.createElement("span", {
          style: {
            color: sec,
            marginRight: 6
          }
        }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
          width: "8",
          height: "14",
          viewBox: "0 0 8 14",
          style: {
            flexShrink: 0
          }
        }, /*#__PURE__*/React.createElement("path", {
          d: "M1 1l6 6-6 6",
          stroke: ter,
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })), !isLast && /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: icon ? 58 : 16,
            height: 0.5,
            background: sep
          }
        }));
      }
      function IOSList({
        header,
        children,
        dark = false
      }) {
        const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
        const bg = dark ? '#1C1C1E' : '#fff';
        return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: '-apple-system, system-ui',
            fontSize: 13,
            color: hc,
            textTransform: 'uppercase',
            padding: '8px 36px 6px',
            letterSpacing: -0.08
          }
        }, header), /*#__PURE__*/React.createElement("div", {
          style: {
            background: bg,
            borderRadius: 26,
            margin: '0 16px',
            overflow: 'hidden'
          }
        }, children));
      }

      // ─────────────────────────────────────────────────────────────
      // Device frame
      // ─────────────────────────────────────────────────────────────
      function IOSDevice({
        children,
        width = 402,
        height = 874,
        dark = false,
        title,
        keyboard = false
      }) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width,
            height,
            borderRadius: 48,
            overflow: 'hidden',
            position: 'relative',
            background: dark ? '#000' : '#F2F2F7',
            boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
            fontFamily: '-apple-system, system-ui, sans-serif',
            WebkitFontSmoothing: 'antialiased'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 11,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 37,
            borderRadius: 24,
            background: '#000',
            zIndex: 50
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10
          }
        }, /*#__PURE__*/React.createElement(IOSStatusBar, {
          dark: dark
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
          title: title,
          dark: dark
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            overflow: 'auto'
          }
        }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
          dark: dark
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 60,
            height: 34,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 8,
            pointerEvents: 'none'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            width: 139,
            height: 5,
            borderRadius: 100,
            background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
          }
        })));
      }

      // ─────────────────────────────────────────────────────────────
      // Keyboard — iOS 26 liquid glass
      // ─────────────────────────────────────────────────────────────
      function IOSKeyboard({
        dark = false
      }) {
        const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
        const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
        const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

        // special-key icons
        const icons = {
          shift: /*#__PURE__*/React.createElement("svg", {
            width: "19",
            height: "17",
            viewBox: "0 0 19 17"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
            fill: glyph
          })),
          del: /*#__PURE__*/React.createElement("svg", {
            width: "23",
            height: "17",
            viewBox: "0 0 23 17"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
            fill: "none",
            stroke: glyph,
            strokeWidth: "1.6",
            strokeLinejoin: "round"
          }), /*#__PURE__*/React.createElement("path", {
            d: "M10 5l7 7M17 5l-7 7",
            stroke: glyph,
            strokeWidth: "1.6",
            strokeLinecap: "round"
          })),
          ret: /*#__PURE__*/React.createElement("svg", {
            width: "20",
            height: "14",
            viewBox: "0 0 20 14"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M18 1v6H4m0 0l4-4M4 7l4 4",
            fill: "none",
            stroke: "#fff",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }))
        };
        const key = (content, {
          w,
          flex,
          ret,
          fs = 25,
          k
        } = {}) => /*#__PURE__*/React.createElement("div", {
          key: k,
          style: {
            height: 42,
            borderRadius: 8.5,
            flex: flex ? 1 : undefined,
            width: w,
            minWidth: 0,
            background: ret ? '#08f' : keyBg,
            boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '-apple-system, "SF Compact", system-ui',
            fontSize: fs,
            fontWeight: 458,
            color: ret ? '#fff' : glyph
          }
        }, content);
        const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6.5,
            justifyContent: 'center',
            padding: `0 ${pad}px`
          }
        }, keys.map(l => key(l, {
          flex: true,
          k: l
        })));
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            zIndex: 15,
            borderRadius: 27,
            overflow: 'hidden',
            padding: '11px 0 2px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            borderRadius: 27,
            backdropFilter: 'blur(12px) saturate(180%)',
            WebkitBackdropFilter: 'blur(12px) saturate(180%)',
            background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'absolute',
            inset: 0,
            borderRadius: 27,
            boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
            border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
            pointerEvents: 'none'
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 20,
            alignItems: 'center',
            padding: '8px 22px 13px',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative'
          }
        }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
          key: i
        }, i > 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            width: 1,
            height: 25,
            background: '#ccc',
            opacity: 0.3
          }
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            flex: 1,
            textAlign: 'center',
            fontFamily: '-apple-system, system-ui',
            fontSize: 17,
            color: sugg,
            letterSpacing: -0.43,
            lineHeight: '22px'
          }
        }, w)))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 13,
            padding: '0 6.5px',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative'
          }
        }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 14.25,
            alignItems: 'center'
          }
        }, key(icons.shift, {
          w: 45,
          k: 'shift'
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6.5,
            flex: 1
          }
        }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
          flex: true,
          k: l
        }))), key(icons.del, {
          w: 45,
          k: 'del'
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 6,
            alignItems: 'center'
          }
        }, key('ABC', {
          w: 92.25,
          fs: 18,
          k: 'abc'
        }), key('', {
          flex: true,
          k: 'space'
        }), key(icons.ret, {
          w: 92.25,
          ret: true,
          k: 'ret'
        }))), /*#__PURE__*/React.createElement("div", {
          style: {
            height: 56,
            width: '100%',
            position: 'relative'
          }
        }));
      }
      Object.assign(window, {
        IOSDevice,
        IOSStatusBar,
        IOSNavBar,
        IOSGlassPill,
        IOSList,
        IOSListRow,
        IOSKeyboard
      });
    })();
  } catch (e) {
    __ds_ns.__errors.push({
      path: "components/ios-frame.jsx",
      error: String(e && e.message || e)
    });
  }
  __ds_ns.Badge = __ds_scope.Badge;
  __ds_ns.Button = __ds_scope.Button;
  __ds_ns.Input = __ds_scope.Input;
  __ds_ns.Tag = __ds_scope.Tag;
  __ds_ns.Card = __ds_scope.Card;
  __ds_ns.RoomCard = __ds_scope.RoomCard;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ferienhaus-pflug/ds-bundle.js", error: String((e && e.message) || e) }); }

// export/ferienhaus-pflug/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/ferienhaus-pflug/ios-frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RoomCard = __ds_scope.RoomCard;

})();
