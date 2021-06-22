const fs = require("fs");
const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

(() => {
  // directory path
  const imgDir = "./src/assets/img/";

  // list all files in the directory
  fs.readdir(imgDir, (err, files) => {
    if (err) {
      throw err;
    }
    files.forEach((file) => {
      if (file !== ".DS_Store") {
        (async () => {
          let url = imgDir + file;
          await Image(url, {
            widths: [320, 640, 800],
            outputDir: "./public/assets/img/",
            filenameFormat: function (id, src, width, format, options) {
              const filename = file.substr(0, file.lastIndexOf("."));
              return `${filename}-${width}w.${format}`;
            },
          });
        })();
      }
    });
  });
})();

(async () => {
  await Image("./src/assets/icons/favicon.png", {
    widths: [32, 48, 72, 96, 144, 192, 256, 384, 512],
    formats: ["png"],
    outputDir: "./public/assets/icons/",
    filenameFormat: function (id, src, width, format, options) {
      return `favicon-${width}x${width}.${format}`;
    },
  });
})();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/js/");

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
