# Quick start

## Requirements

WPwebpack requires node.js version greater than 12.0.0 and yarn.

If you do not have node.js on your computer, you can download it from [here](https://nodejs.org) if you're running Windows, or you can install it using [nvm](https://github.com/nvm-sh/nvm) on linux.

## Install

It is recommended to install `wpwebpack` locally, which will help speed-up the installation process when setting up multiple projects

```bash
npm i wpwebpack -g
```

## Initialize

If you want to write the build files in the `./my-theme` subdirectory you can use the `--dir`/`-d` switch

```bash
wpwebpack --dir ./my-theme
```

**Initializing from NPX**

If you do not want to install `wpwebpack` globally, you can run it directly via [npx](https://www.npmjs.com/package/npx).

```bash
npx wpwebpack
```

## Configure

Edit the `wpwp.config.js` and set:

- **publicPath** - public path to your files (i.e. `/wp-content/themes/my-theme`)
- **devUrl** - local development url (i.e. `https://my-theme.test`)

## Building assets

Out-of-the-box, WPwebpack supports the following commands:

* `build` - Builds unminified/unoptimized assets with source maps
* `build:production` - Builds optimized/minified assets
* `watch` - Starts the browsersync session and monitors the files for changes

## Generating translation files

You can generate `.pot` file for the entire project by running the following

```bash
yarn build:pot
```

This will scan all the `php` files in the install directory and create a translation file
