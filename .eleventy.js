const fs = require("fs");
const Image = require("@11ty/eleventy-img");

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

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/js/");

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
