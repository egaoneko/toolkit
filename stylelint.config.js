module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'no-descending-specificity': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['box-orient', 'mask-image', 'box-shadow'],
      },
    ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['dummyValue'],
      },
    ],
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
