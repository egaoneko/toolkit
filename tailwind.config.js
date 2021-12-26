module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{tsx,scss}'],
    options: {
      safelist: ['dark'],
    },
  },
  darkMode: 'media',
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
