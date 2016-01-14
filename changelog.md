# rutha
## an hapi/angular frontend and service stack

### Changelog ###

#### 2.1.0

* Service: Migrated to hapi 12.x
* UI: Migrated to hapi 12.x

#### 2.0.0

* NodeJS: Updated dependencies to make it work for NodeJS 4.2.x
* Service: Migrated to hapi 10.x
* UI: Migrated to hapi 10.x


#### 1.2.0

* NodeJS: Updated dependencies to make it work for NodeJS 0.12.x
* Service: Bumped dependencies, hapi to 8.8.1, hapi-swagger to 0.8.2 and ES6 tasks (grunt-ts and grunt-babel)
* UI: Migrated to hapi 9.x
* UI: Removed lib/hapi/server.js

#### 1.1.0

* ES6: service specs folder enabled in `grunt spec`
* Bumped dependencies (hapi, rutha-grunt-tasks-*)
* (New - ui): Adds src/assets, which copies assets as is to dist folder
* (New - ui): Adds src/app/fonts
* (New - ui): Removes `grunt autosync`
* (New - service): Included models, migrations and spec for ES6 / Typescript transpilers
* (New - service): Included shared and service/models for JSDoc

#### 1.0.0

* Completed ES6 story roadmap for `service`. See [Babel](https://babeljs.io/docs/usage/options/) and [Typescript](http://www.typescriptlang.org/Handbook) for more.
* Added feature toggles.
* Bumped dependencies.

#### 0.7.2

* Bump `grunt-node-inspector` 0.1.6

#### 0.7.1

* Replaced `jasmine-node` with Jasmine NPM for service specs. Coverage still uses `jasmine-node`.

#### 0.7.0

##### Service
* Added task grunt-babel. Any *.es6 will transpile to ES5 / *.js
* Added better JSHint
* `grunt serve` now runs Babel and JSHint immediately

##### UI

* Added task `grunt-babel` for UI frontend hapi. Any *.es6 will transpile to ES5 / *.js
* Updated `grunt staging` and `grunt deploy` tasks with Ansible coloring

#### 0.6.5

* Bump ui and service dependencies
* Bump `hapi` to 8.2.0
* Update `rutha-grunt-tasks-ui` module to 0.4.0, which adds support for rutha_deploy

#### 0.6.4

* Bump ui dependencies
* Bump `hapi` to 8.1.0
* Adding `grunt-preprocess`.
* Update `rutha-grunt-tasks-ui` module to 0.3.6.

#### 0.6.3

* Adding `grunt-bower-concat`. Wiredep still used by Angular Unit Tests.
* Update `rutha-grunt-tasks-ui` module to 0.3.5.
* `grunt build` integrated with `rutha-deploy` making rutha apps deployments easier.

#### 0.6.2

* Adding `grunt-jsdoc` in service (with `rutha-grunt-tasks-service`). Closes issue #21.
* Adding `hapi-swagger` in service. Closes issue #12.

#### 0.6.1

* Adding missing `bcrypt-nodejs` dependency in service
* Bump ui `rutha-grunt-tasks-ui` module to 0.2.3
* Bump some dev dependencies
* Updating installation steps
* UI specs: Added `app/app.js` in karma.conf to fix issues with modules not being loaded

#### 0.6.0

* Bump service `hapi` module to 8.0.0
* Added server.js which loads both frontend and api servers
* Bump dependencies.
* Updated README
* Added `shared` folder, required with server.js. Contains shared config and log.
* Moved models to service. Frontend now uses this as shared model location.

#### 0.5.0

* Bump service `hapi` module to 7.5.x
* Bump some dependencies.
* Bump ui `angular` to 1.3.x
* Bump `rutha-utils` to 1.0.0, contains breaking changes
* Using `angular-hint` v0.1.0
* Fix HTML for index.html


#### 0.4.6

* Bump service `hapi` module to 7.0.0 and ui `rutha-grunt-tasks-ui` module to 0.1.8
* Bump some dependencies.


#### 0.4.5

* Bump some dependencies.
* Contains service tasks help description.
* Moved registered tasks to https://github.com/molekilla/rutha-grunt-tasks-service.
* Uses `mongo-migrate` and `rutha-grunt-mongo-migrations` (adds grunt tasks) for MongoDB data migrations.

#### 0.4.4
* Added KendoUI (https://github.com/molekilla/rutha/pull/15)
* Bump some dependencies
* Contains tasks help description
* Contains autowiring for karma.conf, based from https://github.com/yeoman/generator-angular/issues/856
* Contains ngTemplates support for specs (karma)
* Contains the initial build release workflow
* Moved registered tasks to https://github.com/molekilla/rutha-grunt-tasks-ui

#### 0.4.3

* Separated rutha UI grunt tasks into `rutha-grunt-tasks-ui`. This allows existing projects to get the latest and greatest dev stack updates.
* Set `grunt-nodemon` to 0.2.1 as latest has issues

#### 0.4.2

* Uses canned responses / server mocks / nobackend inspired by Euge's [canned responses](https://github.com/euge/canned-responses)
* Bumped AngularJS and HapiJS

#### 0.4.1

* Separated rutha service grunt tasks into `rutha-grunt-tasks-service`. This allows existing projects to get the latest and greatest dev stack updates.
* Bumped dev dependencies (jit-grunt, load-grunt-config)

#### 0.4.0

* Added Istanbul code coverage to API / Service.
* Bumped HapiJS to 6.7.1
* Added `grunt auditpkg` to run `grunt-nsp-package` security checks to API / Service.

#### 0.3.0

* Fixed Travis CI config
* Fixed E2E tests
* Added package.json to root
* Added `jshint-stylish` reporter to JSHint config

#### 0.2.5
* Bumped to Underscore 1.7.0 and Hapi 6.6.0, plus others (e.g. HapiJS Bell)
* Changed Underscore server side template compiler to support Underscore 1.7.0

#### 0.2.4
* Separated BrowserSync task due to some nodemon - hapi restart issues. Use `grunt autosync` to live sync.
* Added update to wiredep sync, it will detect any HTML file under views folder.
* Added 900 ms delay to nodemon to fix `grunt autosync` and `grunt serve`.
* Added `grunt auditpkg` to run `grunt-nsp-package` security checks.
* Added missing MIT license
* Added Hapi Partials code sample
* Added Made in Panama

#### 0.2.3
* Fixed BrowserSync issue.
* Added cssmin
* Better start page design

#### 0.2.2
* Added Hapi Local and FB OAuth authentication sample code. Based from [Scotch.io / Chris Sevilleja](http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local) and  [EmptyMind](http://emptymind.me/user-authentication-with-hapi-hapi-auth-cookie-and-mongoose/)

#### 0.2.1
* Added hapi-auth-bearer-token to authenticate API. Use Bearer authentication for API calls.

#### 0.2.0

* Added [rutha-utils](https://github.com/molekilla/rutha-utils), which are boilerplate wrappers for nconf, winston and mongoose
* REST API versioning sample
* REST API health check
* How to use Mongoose loader
* Better `lib/hapi/index.js` loader for REST service and UI
* Bumping to HapiJS 6.4.0
* Preparing UI to 0.2.x, which will include authentication boilerplate, by adding bell, hapi-auth-cookie and joi modules
