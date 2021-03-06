<div align="center">

  <img src="https://repo.oblak.studio/wpwebpack.png">

  ![npm](https://img.shields.io/npm/v/wpwebpack)

  ![node-current](https://img.shields.io/node/v/wpwebpack)
  ![NPM](https://img.shields.io/npm/l/wpwp)
  [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
  ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/oblakstudio/wpwebpack/Release/master)

  # WPwebpack

  Bleeding edge webpack build workflow for WordPress plugins and themes.

</div>

## Quick start

Install with `npx`:

```bash
npx wpwebpack
```

**or**

Install to specific directory

```bash
npx wpwebpack -d my-theme
```

## Introduction

WPwebpack is a webpack wrapper designed to be used in WordPress ecosystem. It's main purpose is to compile static assets(stylesheets, scripts, images and fonts) for use in themes or plugins.

**TL;DR**

* Generates separate `css` and `js` files for frontend and admin section
* Enables you to use [TypeScript](https://www.typescriptlang.org/) with all the benefits of the language (*i.e. module importing*)
* Minifies the files
* Optimizes images
* Speeds-up development

### Get Started

Check out our quick [Get started](https://rtfm.oblak.studio/wpwebpack/#/getstarted) guide

## Features

Some of the things WPwebpack can manage for you.

### Styles

* Compile SASS to CSS
* Style linting and error detection (via *StyleLint*)
* Autoprefixing (via *PostCSS*)
* Minification (via *CSSMinimizer*)
* Sourcemaps

### JavaScript

* TypeScript to JavaScript transpiling (via *Babel*)
* Static code analysis and error detection (via *ESLint*)
* Automatic polyfills (via *Browserlist*)
* Dynamic code execution (via *body-class-router*)
* Object-oriented development approach
* Minification (via *Terser*)

### Images

* Automatic optimization of images (via *ImageMinimizer*)
* Supported file types: `.png` `.jpg` `.jpeg` `.gif` `.svg`

### Translation

* `.pot` file generation for translation (via *wp-pot*)

### Development

* A sane-default `.editorconfig`
* Live reload using *BrowserSync*
* Hot Module Replacement
* Auto-recompile on save (file watching)

## Credits

WPwebpack borrows some ideas and concepts from the following projects:

* [roots/sage@9.x](https://github.com/roots/sage/tree/9.x) - build system organization and general idea
* [WPGulp](https://github.com/ahmadawais/WPGulp) - npx installer
