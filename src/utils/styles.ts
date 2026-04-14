// ─── Shared ────────────────────────────────────────────────────────────────
export const shared = {
  glassPanel: "bg-white/5 backdrop-blur-md border border-white/5",
  textAccent:  "text-[#5b97cd]",
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export const navbar = {
  base:        "fixed top-0 w-full z-50 transition-all duration-300",
  top:         "bg-transparent py-6",
  scrolled:    "bg-black/50 backdrop-blur-md border-b border-white/10 py-4 shadow-lg",
  container:   "max-w-7xl mx-auto px-6 flex items-center justify-between",
  logo:        "flex-shrink-0 transition-transform hover:scale-105",
  links:       "hidden md:flex items-center gap-8",
  link:        "text-sm font-medium text-gray-300 hover:text-white transition-colors",
  btn:         "hidden md:inline-flex px-6 py-2 text-sm font-bold text-black bg-white rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export const faq = {
  section:        "py-24 px-6 max-w-4xl mx-auto w-full",
  header:         "text-center mb-16",
  title:          "text-3xl md:text-5xl font-bold mb-4",
  subtitle:       "text-gray-400 text-lg",
  list:           "flex flex-col gap-4",
  item:           "rounded-2xl overflow-hidden",
  question:       "w-full flex items-center justify-between p-6 text-left font-semibold text-lg text-white hover:bg-white/5 transition-colors",
  answerWrapper:  "overflow-hidden",
  answer:         "p-6 pt-0 text-gray-400 leading-relaxed",
};

// ─── Icons ─────────────────────────────────────────────────────────────────
export const icons = {
  green:      "w-6 h-6 text-[#5b97cd]",
  purple:     "w-6 h-6 text-purple-400",
  yellow:     "w-6 h-6 text-yellow-400",
  blue:       "w-6 h-6 text-blue-400",
  greenSmall: "w-5 h-5 text-[#5b97cd]",
};

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  section:        "relative h-screen w-full flex items-center justify-center overflow-hidden",
  bg:             "absolute inset-0 w-full h-full z-0",
  video:          "object-cover w-full h-full opacity-40 mix-blend-screen",
  overlay:        "absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]",
  content:        "relative z-10 flex flex-col items-center text-center max-w-4xl px-6",
  badge:          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-gray-300 mb-6",
  badgeDot:       "w-2 h-2 rounded-full bg-[#5b97cd] animate-pulse",
  title:          "text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500",
  titleHighlight: "text-white drop-shadow-[0_0_15px_rgba(91,151,205,0.5)]",
  desc:           "text-lg md:text-xl text-gray-400 mb-10 max-w-2xl",
  btn:            "inline-flex relative px-8 py-4 font-semibold text-black bg-white rounded-full overflow-hidden transition-all group hover:scale-105 hover:shadow-[0_0_40px_rgba(91,151,205,0.4)]",
  btnContent:     "relative z-10 flex items-center gap-2",
  btnIcon:        "w-4 h-4 group-hover:translate-x-1 transition-transform",
};

// ─── Bento Features ─────────────────────────────────────────────────────────
export const bento = {
  section:         "py-24 px-6 max-w-6xl mx-auto",
  header:          "text-center mb-16",
  title:           "text-3xl md:text-5xl font-bold mb-4",
  subtitle:        "text-gray-400",
  grid:            "grid grid-cols-1 md:grid-cols-3 gap-6",
  card:            "p-8 rounded-3xl flex flex-col justify-between hover:bg-white/5 transition-colors",
  cardIconWrapper: "bg-black/50 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 mb-6",
  cardTitle:       "text-xl font-semibold mb-2",
  cardDesc:        "text-gray-400",
};

// ─── Products Packshot ──────────────────────────────────────────────────────
export const packshotStyles = {
  section: "py-24 px-6 max-w-6xl mx-auto w-full",
  wrapper: "relative overflow-hidden rounded-3xl border border-white/10 packshot-glow",
  glow:    "absolute inset-0 bg-[#5b97cd]/5 blur-[100px] pointer-events-none",
  img:     "relative z-10 w-full h-auto block",
};

// ─── CTA ────────────────────────────────────────────────────────────────────
export const ctaStyles = {
  section:      "py-24 px-6 w-full max-w-5xl mx-auto",
  container:    "relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center border border-white/10",
  glowBg:       "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#5b97cd]/10 to-transparent blur-[100px] z-0",
  content:      "relative z-10 flex flex-col items-center",
  title:        "text-4xl md:text-5xl font-bold mb-6 tracking-tight",
  desc:         "text-lg text-gray-400 max-w-2xl mb-10",
  form:         "w-full max-w-md flex flex-col gap-4",
  input:        "cta-input",
  btnSubmit:    "cta-btn-submit",
};
