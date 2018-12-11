module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    // JS lints
    'dot-notation': 'error',
    'space-infix-ops': 'error',
    'func-call-spacing': 'error',
    'no-useless-concat': 'error',
    'no-trailing-spaces': 'error',

    'curly': ['error', 'all'],
    'semi': ['error', 'always'],
    'no-empty': ['error'],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'spaced-comment': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'operator-linebreak': ['error', 'before'],
    'space-before-blocks': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'max-statements-per-line': ['error', { 'max': 1 }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'space-before-function-paren': ['error', 'never'],

    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'one-var': ['error', { 'uninitialized': 'always', 'initialized': 'never' }],
    'camelcase': ['error', { 'properties': 'always' }],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-unary-ops': ['error', { 'words': false, 'nonwords': false }],
    'keyword-spacing': ['error', { 'overrides': { 'catch': { 'after': false } } }],

    // ES6 lints
    'no-var': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'no-useless-rename': 'error',
    'prefer-destructuring': 'error',

    'eol-last': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'object-shorthand': ['error', 'always'],

    'new-cap': ['error', { 'capIsNewExceptions': ['A'] }],
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],

    // eslint-plugin-ember
    'ember/no-observers': 1,
    'ember/use-ember-get-and-set': 0,
    'ember/named-functions-in-promises': 0
  },
  overrides: [
    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
