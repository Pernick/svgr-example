const template = require('./src/templates/icon');
const indexTemplate = require('./src/templates/index');

module.exports = {
  template,
  indexTemplate,
  icon: true,
  typescript: true,
  ext: 'tsx',
  svgProps: {
    fill: 'currentColor',
  },
};
