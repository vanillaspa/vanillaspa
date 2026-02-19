## Hi there 👋

# Vanilla SPA

With Vanilla SPA your web development experience can become a dream. There is nothing so complicated that it can't be made simple.

I kid You not: Vanilla SPA is an advanced, yet minimalistic WebComponents framework featuring most of the functionality of popular JavaScript frameworks, but in a fraction of their complexity. It is written in vanilla JavaScript.

This is free and unencumbered software released into the public domain. [The Unlicense](https://choosealicense.com/licenses/unlicense/)

## Installation

### Prerequisites

You need to have <a title="NodeJS" href="https://nodejs.org"><img height="20" alt="NodeJS-logo" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"></a> installed.

The Vanilla SPA boilerplate consists of
[web-components](https://github.com/vanillaspa/web-components)
[event-bus](https://github.com/vanillaspa/event-bus),
[sqlite-database](https://github.com/vanillaspa/sqlite-database), a <a title="SQLite" href="https://sqlite.org/wasm"><img height="20" alt="SQLite-logo" src="https://sqlite.org/images/sqlite370_banner.gif"></a> database within the [Origin Private Filesystem (OPFS)](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system)
on top of <a title="Vite" href="https://vitejs.dev"><img height="20" alt="Vitejs-logo" src="https://vitejs.dev/logo.svg"></a>

### Getting started

Running Vanilla SPA is as easy as cloning the current repository.
```bash
  git clone https://github.com/vanillaspa/vanillaspa.git
  cd vanillaspa
  npm install
```
and then simply 
```bash
  npm run build
  npm run preview
```
to quickly setup a vanillaspa project. You can then access the app via https://localhost:4173 in your browser.

## How-To

You will be using dedicated `.html` files to create your Single File Components (SFCs). Just implement your SFCs à la Vue or Svelte with a ```script```, ```style``` and ```template``` tag on the top-level of the `.html` file.

Just put your custom elements in the [./public/components/](https://github.com/vanillaspa/vanillaspa/public/components) folder. A `/src/components/index.js` file with a map of your components is automagically generated each time you run `npm run dev`.

You just have to stick to (custom elements naming conventions)[https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name].

After having imported the `web-components` module, your custom elements can be instantiated immediately.

## API description

- `shadowDocument` is the private scope DOM on each of your custom `HTMLElement`s. Most methods available on the `document` are also available on the `shadowDocument`, for instance `getElementById` or  `querySelector`.
- `createDB`, `deleteAndTerminateDB`, `downloadDB`, `executeQuery`, `executeStatement`, `getWorker`, `getWorkers`, `uploadDB`, `terminate` are available on the `sqlite` object.
- `addEventListener`, `removeEventListener`, `dispatchEvent` are available on the `eventbus` object.

## Features

- written in vanilla JavaScript
- support for custom elements in dedicated .html files (SinglePageApplications SPAs and SingleFile WebComponents SFCs). Now you can create or use your own library of custom-elements!
- following [W3C standards and MDN-recommended best practices](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) with just a few hacks to accomplish things where people claim: *"This is impossible with WebComponents"*
- direct access to ShadowDOM in each component's script (via `shadowDocument`)
- out of the box SCSS support
- direct access to each module (via its `{moduleName}`)
- Event-Bus!!!!
- local first SQLite database for global state management with the Origin Private File System (OPFS). Your data stays private.
- dedicated workers for database pooling
- offline capabilities
- history-driven sitemap router [navigation module](https://github.com/vanillaspa/vanillaspa/blob/main/public/components/app/app-router.html)
- support for containerized builds. Docker ready.
- https support out of the box ([@vitejs/plugin-basic-ssl](https://github.com/vitejs/vite-plugin-basic-ssl))
- basic functionality in under <100LOC

## Component Lifecycle

In case you want some deeper insights you should learn and understand how the [WebComponents lifecycle](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) is working.

## Feedback

If you still have questions please let me know. Your opinion is valuable to me and sharing what you think is higly appreciated! If you have any feedback and want to share your suggestions please consider the contribution guidelines and reach out to @jahro_me

## Example

Adding a router navigation is very easy. [As the example shows](https://github.com/vanillaspa/vanillaspa/blob/main/public/components/app/app-router.html) You can have an entire navigation in one single html file defined as just another custom element. After having it integrated into your app with a single tag (`<app-router></app-router>`), you can have routing support and all the things you would expect.

Of course you are completely free to customize the themes, modules and components and make them whatever you want them to become!
