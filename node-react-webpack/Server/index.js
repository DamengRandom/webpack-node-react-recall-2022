const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const compiler = webpack(webpackConfig);

const app = express();
const port = process.env.PORT || 8549;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const mockResponse = {
  foo: "bar1.1",
  bar: "foo2.2.2",
};

app.use(express.static(DIST_DIR));
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.get("/api", (req, res) => {
  res.send(mockResponse);
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log("App is up and running on port: " + port);
});
