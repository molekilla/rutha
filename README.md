# Rutha Stack - Taming HapiJS and AngularJS #
**Ru** le 
**T** hem 
**H** apiJS 
**A** ngularJS

[![Build Status](https://travis-ci.org/molekilla/rutha.svg?branch=master)](https://travis-ci.org/molekilla/rutha)

Pure pragmatic NodeJS stack

#### Changelog: [changelog](changelog.md)

#### Last update: 1.1.0

#### Docs:

* [rutha - A Hapi and Angular boilerplate stack - English](http://yoworkeo.blogspot.com/2015/02/rutha-hapi-and-angular-boilerplate-stack.html)
* [Hapi View Partials - Spanish](http://yoworkeo.blogspot.com/2014/08/hapijs-view-partials-con-underscorejs.html)
* [Hapi REST Authentication - Spanish](http://yoworkeo.blogspot.com/2014/08/hapijs-autenticacion-rest-con-hapi-auth.html)
* [Hapi Tutorials](http://hapijs.com/tutorials)
* [BabelJS: Learn ES6](https://babeljs.io/docs/learn-es6/)
* [ECMAScript6 by Luke Hoban](https://github.com/lukehoban/es6features)
* [Typescript](http://www.typescriptlang.org/)
* [Taming Angular 1.3 forms by Year of Moo](http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html#html5-validators-and-parse-errors)
* [Jasmine BDD Introduction](http://jasmine.github.io/2.2/introduction.html)

### Main features ###

* **Rule Them All with a single environment**: Both development and production environment are the same. We concat, annotate, mix some ingredients and offer you the same production environment for development.
* **AngularJS 1.3.x**
* **Hapi 8.0.0**
* **ES6 ready** for service api layer (UI/Angular later mid 2015)
* **Jasmine NPM**

### Additional features
* **Grunt JIT**: Is JIT for Grunt. No more waits.
* **BrowserSync**: Choose this because it was painless to configure
* **Underscore for frontend server side templates**: To avoid issues with AngularJS.
* [Grunt ngAnnotate](https://github.com/mzgol/grunt-ng-annotate)
* [Grunt Angular Templates](https://github.com/ericclemmons/grunt-angular-templates)
* [Grunt  Wiredep](https://github.com/stephenplusplus/grunt-wiredep)
* **Specs and Functional Tests (Frontend)**: Based partially on [year of moo](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html) 
* **Frontend** [Todd Motto's](http://toddmotto.com/opinionated-angular-js-styleguide-for-teams/) AngularJS guideline: I also based some ideas on [PackPub's Angular Book](http://www.packtpub.com/angularjs-web-application-development/book?tag=dp/masteringwebwithangularjs-abr1/0913)
* **Visionmedia/debug** [module](https://github.com/visionmedia/debug) by default
* **Lout module** for [API docs](https://github.com/spumko/lout) by default
* [Chris Sevilleja's 'Easy Node authentication' local and facebook sample code for HapiJS](http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local)
* Basic cssmin task
* `grunt-nsp-package` support
* [Istanbul code coverage support](http://gotwarlost.github.io/istanbul/)
* Uses canned responses / server mocks / nobackend inspired by Euge's [canned responses](https://github.com/euge/canned-responses)
* [Angular Hint](https://github.com/angular/angular-hint)
* [Hapi Swagger](https://github.com/glennjones/hapi-swagger)
* [Grunt JSDoc3](https://github.com/krampstudio/grunt-jsdoc)

## Installing
1. Clone repo
2. Rename text containing `rutha` to `your_app_name`
3. Be sure to have node 0.10.32 or greater (e.g. nvm use 0.10.32)
4. Run `npm install grunt-cli -g`
5. Change dir to ui and run `npm install` and then `bower install`
6. Open a new tab and change dir to service and run `npm install`

## Deploying rutha apps with rutha_deploy ##

1. Run `grunt build` to generate frontend assets
2. Add zip file to commit e.g. git add releases/v0.1.0.zip. 
3. In rutha-deploy, configure group_vars with your settings

    ```ruby
    # devops
    domain: disrupting_app.com
    ssl_name: disrupting_app
    # rutha
    app_name: disrupting_app
    app_repo: git@github.com:molekilla/rutha.git
    app_branch: release0.1.0
    app_version: v0.1.0
    app_env: 
      NODE_ENV: production
    ```
    
4. Add hosts to /etc/ansible/hosts
5. Enable host in ui/Gruntfile.js by adding it to deploySettings.
6. Configure cloud / server with SSH key to get repo (or customize rutha-deploy to fetch from somewhere else).
7. Run `grunt deploy`

### Deploying rutha frontend app

1. Run `grunt build` to generate frontend assets
2. Add zip file to commit e.g. git add releases/v0.1.0.zip (or customize rutha-deploy to fetch from somewhere else).
3. In your devops workflow, unpack zip and run ui/lib/hapi/index.js 

### Deploying rutha service app

1. Copy service directory or get from repo
3. In your devops workflow, run service/lib/hapi/index.js 


## Grunt Help - Service tasks

* `grunt serve`: Serves API service
* `grunt spec`: Runs Jasmine 2.0 specs
* `grunt coverage`: Runs Istanbul code coverage. Outputs HTML reports to `test/coverage/reports`
* `grunt auditpkg`: Verifies modules that contains security issues
* `grunt migrate:create [--name]`: Creates a migration task. Args: --name: migration name (optional)
* `grunt migrate:up [--revision]`: Migrates up. Args: --revision: revision name (optional)
* `grunt migrate:down [--revision]`: Migrates down. Args: --revision: revision name (optional)
* `grunt docs`: Builds jsdoc3 documentation.

## Grunt Help - Frontend tasks

* `grunt serve`: Serves frontend service with no auto reload
* `grunt autosync`: Serves frontend service with auto reload
* `grunt spec`: Runs jshint and server side / UI specs
* `grunt test`: Runs E2E/Functional tests (Angular)
* `grunt build`: Prepares UI assets
* `grunt stagelocal`: Provisions Vagrant VM
* `grunt staging`: Provisions staging
* `grunt deploy`: Provisions production
* `grunt jshinting`: Verifies javascript using jshint
* `grunt auditpkg`: Verifies modules that contains security issues

###  About Angular Tests
`ui/src/test/lib` contains libs require for testing. Scope.SafeApply can be added as optional (see yearofmoo blog post)

### Nginx routes (Optional) ###

```
server { 
# simple reverse-proxy for Rutha (Very useful!)
    listen       80;
    server_name  localhost;
    access_log   dev.log;
    #error_page   http://here;

  location /api {
    proxy_pass      http://127.0.0.1:3002;
    proxy_redirect  default;
    proxy_set_header Host $host;
  }

  location / {
    proxy_pass      http://127.0.0.1:3005;
    proxy_redirect  default;
    proxy_set_header Host $host;
  }
}

```

### Maintainers, notes ###
Maintain by Rogelio Morrell C. 
Pull Request are welcome but I might not turn around those quickly. 

### Disclaimer ###
Feel free to fork.
