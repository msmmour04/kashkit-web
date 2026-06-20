import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // KashKit brand palette — matches the iOS app + admin panel.
        bone:     '#F4F1EC',  // canvas
        bone2:    '#EBE6DE',  // soft surface
        paper:    '#FFFFFF',  // cards
        ink:      '#1A1A1A',  // primary text
        muted:    '#6E6B66',
        soft:     '#8A867E',
        hairline: '#E7E2DA',
        mist:     '#F1EFEC',
        red:      '#E7352C',  // signature
        redDeep:  '#B02820',
        emerald:  '#10B981',
        emerald2: '#047857',
        amber:    '#F59E0B',
        indigo:   '#6366F1',
      },
      fontFamily: {
        // Loaded via next/font in app/layout.tsx and exposed as CSS variables.
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Editorial display scale — for hero/section headlines.
        'display-2xl': ['clamp(3.5rem, 8vw, 7.5rem)',  { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl':  ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-lg':  ['clamp(2.25rem, 5vw, 4rem)',   { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md':  ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        tile: '20px',
        pill: '999px',
      },
      boxShadow: {
        card:      '0 1px 2px rgba(26,26,26,0.04), 0 8px 24px -8px rgba(26,26,26,0.08)',
        elevated:  '0 12px 40px -8px rgba(26,26,26,0.18)',
        red:       '0 12px 32px -8px rgba(231,53,44,0.45)',
      },
      keyframes: {
        // Slow drifting blobs for the gradient mesh background.
        'blob-drift-1': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%':      { transform: 'translate3d(8%, -6%, 0) scale(1.08)' },
          '66%':      { transform: 'translate3d(-5%, 4%, 0) scale(0.95)' },
        },
        'blob-drift-2': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%':      { transform: 'translate3d(-7%, 5%, 0) scale(1.05)' },
          '66%':      { transform: 'translate3d(6%, -4%, 0) scale(0.93)' },
        },
        'blob-drift-3': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%':      { transform: 'translate3d(4%, 7%, 0) scale(1.1)' },
        },
        // Subtle marquee for the social-proof row.
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Pulse-glow used on the hero pill.
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55' },
          '50%':      { opacity: '1' },
        },
      },
      animation: {
        'blob-1':  'blob-drift-1 22s ease-in-out infinite',
        'blob-2':  'blob-drift-2 28s ease-in-out infinite',
        'blob-3':  'blob-drift-3 24s ease-in-out infinite',
        marquee:   'marquee 38s linear infinite',
        'pulse-soft': 'pulse-soft 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
