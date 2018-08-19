const path = require('path');

module.exports = {
  extends: ['plugin:patternfly-react/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'import/no-named-as-default': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
