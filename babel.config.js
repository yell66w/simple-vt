export const presets = [
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/preset-typescript",
];
export const plugins = [
  [
    "react-css-modules",
    {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      webpackHotModuleReloading: true,
    },
  ],
];
