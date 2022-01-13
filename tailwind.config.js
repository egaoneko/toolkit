module.exports = {
  content: {
    enabled: true,
    content: ['./src/**/*.{tsx,scss}'],
    options: {
      safelist: ['dark'],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
