module.exports = function(grunt) {
    var path = require('path');
    var RuthaGruntUI = require('rutha-grunt-tasks-ui')(grunt);

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-ui/grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: { 
            releaseInclude: {
              css: ['dist/components/bootstrap/dist/css/bootstrap.css'],
              js:  []
            },
            bowerConcat: {
              exclude: ['angular', 'jquery', 'kendo-ui-core'],
              dependencies: null
            },          
            nodeInspector: {
                webPort: 8082,
                debugPort: 5859
            },
            nodemon: {
                args: ['--debug']
            },
            ngTemplates: {
                moduleNamespace: 'rutha.templates'
            },
            wiredepConfig: {
                src: ['views/**/*.html'],
                options: {
                    cwd: process.cwd()
                }
            },
            cwd: process.cwd(),
            pkg: grunt.file.readJSON('package.json')
        },
        jitGrunt: { 
          staticMappings: {
            protractor: 'grunt-protractor-runner',
            ngAnnotate: 'grunt-ng-annotate',
            ngtemplates: 'grunt-angular-templates',
            'validate-package': 'grunt-nsp-package'
          }
        }
    });

    //
    // Default tasks
    //
    RuthaGruntUI.registerTasks();
     
    //
    // Rutha says: Override these register tasks for customization
    //
    // // server dev environment with browsersync
    // grunt.registerTask('autosync', RuthaGruntUI.help.autosync,
    //   ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 'wiredep:dev', 'concurrent:auto']);
    
    // // server dev environment no auto refresh
    // grunt.registerTask('serve', RuthaGruntUI.help.serve,
    //   ['ngtemplates:dev', 'concat:dev', 'ngAnnotate:dev', 'uglify:dev', 'wiredep:dev', 'concurrent:dev']);
      
    // // runs server side specs and UI specs
    // grunt.registerTask('spec', RuthaGruntUI.help.spec,
    //   ['jshint', 'jasmine_node', 'ngtemplates:specs', 'wiredep:test', 'karma:unit']);

    // // builds deployment assets
    // grunt.registerTask('build', RuthaGruntUI.help.build,
    //   ['ngtemplates:build', 'concat:build', 'ngAnnotate:build', 'uglify:build', 'cssmin:build']);

    // // runs functional tests
    // grunt.registerTask('test', RuthaGruntUI.help.test,
    //   ['concurrent:test']);

    // // verfies javascript using jshint
    // grunt.registerTask('jshinting', RuthaGruntUI.help.jshint,
    //   ['jshint']);

    // // verifies security
    // grunt.registerTask('auditpkg', RuthaGruntUI.help.auditpkg,
    //   ['validate-package']);
};
