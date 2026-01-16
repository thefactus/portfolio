module.exports = {
  darkMode: 'class',
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Red palette
        'crimson': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Beige palette
        'sand': {
          50: '#fdfcfb',
          100: '#f9f6f2',
          200: '#f5ede4',
          300: '#e8dcc9',
          400: '#d4c4a8',
          500: '#c2ad8d',
          600: '#a89070',
          700: '#8c7459',
          800: '#735f4a',
          900: '#5f4f3e',
          950: '#322920',
        },
        // Warm neutrals
        'warm': {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d6cfc2',
          400: '#bdb3a0',
          500: '#a69882',
          600: '#8b7b64',
          700: '#736553',
          800: '#5f5445',
          900: '#504739',
          950: '#2a251e',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: []
}
