export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#071311', charcoal: '#0D201B', accent: '#4ADE80', violet: '#A3E635', muted: '#A8B8B1' },
    fontFamily: { sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'], display: ['Space Grotesk', 'system-ui', 'sans-serif'] },
    boxShadow: { glow: '0 0 48px -12px rgba(74,222,128,.45)' }
  } },
  plugins: []
}
