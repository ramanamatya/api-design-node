module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  env: {
    node: true
  },
  extends: [
    'standard'
  ],
  rules: {
    'promise/catch-or-return': 'error',
    'semi': [2, 'always'],
    'comma-dangle': ["error", 'always-multiline'],
  }
}
