const path = require("path");

module.exports = {
  sassOptions: {
    // sass를 사용하기위해서는 sassOptions를 사용해야한다.
    includePaths: [path.join(__dirname, "styles")],
  },
};
