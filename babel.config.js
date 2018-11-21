module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: 'ie >= 11',
        },
      },
    ],
  ],
};
