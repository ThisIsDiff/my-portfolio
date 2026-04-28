const config = {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': false, // don't strip vars, just parse
      },
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
