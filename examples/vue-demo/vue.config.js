// vue.config.js
module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.module
      .rule("babel")
      .test(/\.js$/)
      .exclude.add(
        (file) =>
          /node_modules/.test(file) && !/\.vue\.js|ezuikit\.js/.test(file)
      )
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: ["@babel/preset-env"],
      });
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .use("vue-loader")
      .loader("vue-loader");
  },
};
