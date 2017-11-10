module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.resolve.extensions.push(".tsx");
  storybookBaseConfig.resolve.extensions.push(".ts");
  storybookBaseConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  });

  return storybookBaseConfig;
};