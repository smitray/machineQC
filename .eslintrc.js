module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'comma-dangle': [
      'error', {
        functions: 'ignore'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
        optionalDependencies: true
      }
    ],
    'import/extensions': [
      'error',
      'always', {
        js: 'never',
        vue: 'never'
      }
    ],
    'no-param-reassign': [
      'error', {
        props: false
      }
    ],
    'no-underscore-dangle': [
      'error', {
        allow: [
          '_id',
          '_axios'
        ]
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
