module.exports = {
  tabWidth: 4,
  printWidth: 120,
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '{*.js?(on),.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
