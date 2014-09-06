module.exports = function(grunt) {
    var path = require('path');
    var ruthaGruntModules = path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-service/node_modules');
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-service/grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: { //data passed into config.  Can use with <%= test %>
            nodeInspector: {
                webPort: 8081,
                debugPort: 5858
            },
            nodemon: {
                args: ['--debug']
            },
            cwd: process.cwd()
        },
        jitGrunt: {
            instrument: 'grunt-istanbul',
            storeCoverage: 'grunt-istanbul',
            makeReport: 'grunt-istanbul',
            'validate-package': 'grunt-nsp-package'
        }
    });

    // Default task.
    grunt.registerTask('serve', ['concurrent']);
    grunt.registerTask('spec', ['jshint', 'jasmine_node:dev']);
    grunt.registerTask('coverage', ['jshint', 'clean:coverage', 'env:coverage',
        'instrument', 'jasmine_node:coverage', 'storeCoverage', 'makeReport']);
    
    // verifies security
    grunt.registerTask('auditpkg', ['validate-package']);
};
