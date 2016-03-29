/**
 * @param {Object} config - webpack config which merged cli options and settings in package.json
 * @param {Object} options - cli arguments
 * @return {Object} config - new webpack config
 */
export default function (config, options) {
  // modify config can override everything defined via CLI and package.json
  // config.entry = './path/to/entry'
}