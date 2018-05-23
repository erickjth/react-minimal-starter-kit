# react-minimal-starter-kit

## Installation

* `yarn install`
* `yarn start`
* Go to `http://localhost:3000/`

## Build
* `yarn build`

## Environment

* React 16
* Webpack 4
* Babel 6
* React Router
* Redux
* Redux Saga
* Redux Persist
* Redux Logger
* Apisouce
* Reduxsouce
* redux-devtools
* reselect
* bootstrap

## Redux Structure
This project uses an approach based on the redux ducks modular which includes the following directory strcuture:

* modules/ (path to locate every redux module. e.g. account, auth, etc.)
* saga/ (redux module might or might not have a saga related into this path.)
* store/ (Setting for redux)

## Other directories
* services/ (api/mockApi)
* common/ (helpers, libraries, etc.)
* router/ (route definition)
* config/ (this is an important directory, in there, you'll be able to find config file for different enviroments being the base.js the base setting. It can be override in the prod, dev or test)
* components/ (UI components, they only take care about the presentation).
* styles/ (SASS styles)
* views/ (Containers Component. They are able to connect to redux state).



