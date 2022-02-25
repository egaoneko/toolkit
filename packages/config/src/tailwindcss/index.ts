import theme from './theme';

export default {
  darkMode: 'class',
  content: {
    content: ['./src/**/*.{tsx,scss}'],
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
  theme,
};
