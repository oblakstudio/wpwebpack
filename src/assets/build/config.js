/* eslint-disable @typescript-eslint/no-var-requires */
const path      = require('path');
const { argv }  = require('yargs');
const { merge } = require('webpack-merge');

// eslint-disable-next-line import/no-dynamic-require
const userConfig = require('../../wpwp.config.js');

const isProduction = !!((argv.env && argv.env == 'production') || argv.p);
const rootPath = (userConfig.paths && userConfig.paths.root)
  ? userConfig.paths.root
  : process.cwd();

const config = merge({
  open: true,
  copy: 'images/**/*',
  cacheBusting: '[name]_[hash]',
  paths: {
    root: rootPath,
    assets: path.join(rootPath, 'assets'),
    dist: path.join(rootPath, 'dist'),
  },
  enabled: {
    sourceMaps: !isProduction,
    optimize: isProduction,
    cacheBusting: isProduction,
    watcher: !!argv.watch,
  },
  watch: [],
}, userConfig);

module.exports = merge(config, {
  env: Object.assign({ production: isProduction, development: !isProduction }, argv.env),
  publicPath: `${config.publicPath}/${path.basename(config.paths.dist)}/`,
  manifest: {},
});

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = isProduction ? 'production' : 'development';
}
