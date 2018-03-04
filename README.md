# My Website & Blog

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

My website & blog based on [Gatsby.js](https://www.gatsbyjs.org)

## Developing

### Setup

As this website/blog is based on Gatsby.js it heavily relies on Javascript and [React](https://reactjs.org/).
To get it running locally you need [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/) installed.

As I use yarn it would be best for you to use yarn as well. This repo comes with an own yarn version to reduce inconsistencies between different yarn-versions (for more information see [Yarn determinism](https://yarnpkg.com/blog/2017/05/31/determinism/)). To get this working deterministicly you need [at least yarn version 1.0](https://yarnpkg.com/en/docs/yarnrc).

Nonetheless after [cloning](https://help.github.com/articles/cloning-a-repository/) the Repository the first thing you should run is:

```sh
yarn global add gatsby-cli # npm install --global gatsby-cli
yarn # npm install
```

This should install all required dependencies.
After that you can run:

```sh
gatsby develop
```

This should start a hot-reloading development environment accessible at [localhost:8000](localhost:8000)

Form there on you are good to go to make changes on the website.
See the [Gatsby documentation](https://www.gatsbyjs.org/docs/) for more information on that.

### Linting, Formatting and Typechecking

To ensure a consistent codestyle & formatting this project relies on [prettier](https://prettier.io/) as well as [eslint](https://eslint.org/). Both gets setup when you run `yarn # npm install` in the [setup](#setup) stage.

To check for linting & formatting errors in your code simply run `yarn test:lint # npm run test:lint`. You can also automatically fix every linting error with `yarn test:lint:fix # npm run test:lint:fix`. Same goes for formatting with `yarn format # npm run format`.

You can also check for typesafety with [flow](https://flow.org). To run it simply run `yarn test:typecheck # npm run test:typecheck`. This will check all files marked with a flowmarker. You could also run `yarn test:typecheck:all # npm run test:typecheck:all` to run it on all files.

In the end if you want to check for lint, formatting errors and typeerrors you can simply execute `yarn test # npm run test` to run all mentioned checks.

### Building

After developing and checking your changes you can build it with:

```sh
gatsby build
```

Additionaly you can check the final result with:

```sh
gatsby serve
```

To get the Page online for others to see, look at the [Gatsby documentation](https://www.gatsbyjs.org/docs/deploy-gatsby/)
