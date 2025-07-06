module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        cyber: {
          neon: '#0ff',
          bg: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
