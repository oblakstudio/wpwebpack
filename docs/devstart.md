# Development basics

If you aren't used to working with module bundlers, working with WPwebpack can be a bit daunting.<br>
This development guide will get you up and running in no time

## File organization

All necessary asset files are located in the `assets` folder, and they compile to `dist` folder in your project root.

Asset file/folder organization looks like this:
```
├───build
│   │   config.js
│   │   webpack.config.js
│   │   webpack.config.optimize.js
│   │   webpack.config.watch.js
│   │   wp-pot.js
│   │
│   └───util
│           assetManifestsFormatter.js
│
├───images
│       .gitkeep
│
├───scripts
│   │   admin.ts
│   │   main.ts
│   │
│   └───routes
│           Common.ts
│           Home.ts
│
└───styles
        admin.scss
        main.scss
```

### Build

Build directory contains all the files needed to run your builds. You can cutomize your builds by editing files in this folder

### Images

All of the images required by your theme/plugin go here

### Scripts

This folder holds two main output files `main.ts` and `admin.ts`. One for the public-facing part of your project, other for the wp-admin.

You'll notice that `main.ts` already has a boilerplate setup, and that admin.ts is empty. We'll get to that later.

### Styles

Same principle as the scripts folder - two files. `main.scss` and `admin.scss`.

## SASS / CSS

We understand that everyone has their own way of organizing stylesheets, includes, etc. So we're not enforcing any particular file / folder organization here.

The only important thing you need to know is that you can reference `.scss` and `.css` files from imported node modules by prepending `~` to the import path.

For example - if we wanted to include select2 stylesheet we can do it like this

```scss
@import "~select2/dist/css/select2";
```

## TypeScript

**Also known as - the elephant in the room 😅**

TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.

We based WPwebpack on TypeScript so you can understand JavaScript better and write better code.

If you you're familiar with WPwebpack's usage of TypeScript and if you understand our OOP approach, you can read one of our advanced guides [here](#), if not - keep reading.

### Routes system

WPwebpack provides DOM-based routing (via [BodyClassRouter](https://www.npmjs.com/package/body-class-router)) for your TS files enabling you to run specific scripts on specific pages. Routes (and the scripts they include) run when the route name matches a class on the `body` element of the current page.

That enables you to write structured code and prevents polluting of the global namespace

#### How it works

Routes are configured in `assets/scripts/main/ts`

```typescript
import { Router } from 'body-class-router';

import CommonRoute from './routes/common';
import HomeRoute from './routes/Home';

const routes = new Router({
  common: new CommonRoute(),
  home:   new HomeRoute(),
});

jQuery(() => {
  routes.loadEvents();
});
```

Out of the box we define two basic routes:
* common, which fires on all pages
* home, which fires on the home page (which has a body class `home`)

> Routes are defined with camelCase in the router, and are converted from dash case in the body class. So route for page **about-us** will become **aboutUs**

You should define every route in `assets/scripts/routes`

Each route class includes two methods and extends our `AbstractRoute`

```typescript
import { AbstractRoute } from 'body-class-router';

class Home extends AbstractRoute {

  public init() : void {

    //add some definitions here

  }

  public finalize() : void {

    // implement your functionalities here

  }

}

export default Home;
```

!> Don't forget the export default at the bottom of the file for your own routes

Order of execution is:

1. The init scripts in the `common` route
2. For each route matching the loaded page (e.g. `aboutUs`), the `init` script and then `finalize` script
3. The finalize scripts in the `common` route

Multiple routes can target a speficic page. For example, if you have two routes which target all single posts `single` and a route for single products `singleProduct`, both would fire when a product is viewed

Because all routes run after the browser has fired the DOM load event, you do not need to wrap the code in your routes within an event handler that watches for that event (e.g., `jQuery(document).ready()`).

#### Using jQuery

jQuery is defined as an [external](https://webpack.js.org/configuration/externals/) in our webpack configuration. We still need the jQuery include file and the types definition.

If you want to use jQuery in your routes, you need to add `const $ = jQuery` to your route, just before the class definition.

```typescript
import { AbstractRoute } from 'body-class-router';

const $ = jQuery;

class MyRoute extends AbstractRoute {

  public init() : void {
  }

  public finalize() : void {

    $('.some-dom-element').on('click', (e) => {
      this.myAwesomeThing(e.currentTarget);
    })

  }

}

export default MyRoute;
```

#### 3rd party packages

One of the main benefits of the typescript approach is that we can use (almost) any NPM package.

For example, if we want to add the select2 library to our route we need to do the following

Step 1 - Add the noUiSlider library to our `package.json`

```bash
yarn add nouislider
```

Step 2 - Import the library in our route.

```typescript
import { AbstractRoute } from 'body-class-router';
import noUiSlider from 'nouislider';
```

Step 3 - Use the library

```typescript
import { AbstractRoute } from 'body-class-router';
import noUiSlider from 'nouislider';

class MyRoute extends AbstractRoute {

  private slider: HTMLElement;

  public init() : void {
    this.slider = document.getElementById('my-awesome-slider');
  }

  public finalize() : void {
    noUiSlider.create(this.slider);
  }

}

export default MyRoute;
```

!> For some NPM modules you might not be able to use the `import` synthax, and you might need to use `require('module')`. Click [here](#) to read about module types.

Step 4 - Build your assets

```bash
yarn build
```
