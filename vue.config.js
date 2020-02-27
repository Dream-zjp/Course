"use strict";

const port = 8080;

const proxy = {};

proxy["/api"] = {
  target: `http://localhost:9091`,
  changeOrigin: true,
  pathRewrite: {
    "^/api": ""
  }
};

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: proxy
  }
};
