module.exports = api => {
  api.cache(true);
  return {
    env: {
      development: {
        plugins: [
          'babel-plugin-styled-mock',
          [
            'module-resolver',
            {
              root: ['./src'],
            },
          ],
        ],
      },
    },
    presets: ['@babel/preset-env', '@babel/preset-react'],
    compact: true,
  };
};
