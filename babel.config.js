module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

module.exports = function (api) {
  return {
    plugins: ['macros'],
  }
}

