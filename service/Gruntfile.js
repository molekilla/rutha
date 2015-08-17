module.exports = function (grunt) {
    var config = { //data passed into config.  Can use with <%= test %>
        nodeInspector: {
            webPort: 8081,
            debugPort: 5858
        },
        nodemon: {
            args: []
        },
//        es6: {
//            transpiler: 'babel',
//            options: {
//                sourceMap: false
//            }
//        },
//        es6: {
//            transpiler: 'ts',
//            options: {
//                sourceMap: false,
//                fast: 'never'
//            }
//        },
        migrations: {
            config: 'migrationOptions.json'
        },
        cwd: process.cwd()
    };
    var path = require('path');
    var RuthaMigrations = require('rutha-grunt-mongo-migrations')(grunt);
    var RuthaGruntService = require('rutha-grunt-tasks-service')(grunt, config);

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-service/grunt'), //path to task.js files, defaults to grunt dir
        overridePath: path.join(process.cwd(), 'node_modules/rutha-grunt-mongo-migrations/grunt'),
        init: true, //auto grunt.initConfig
        data: config,
        jitGrunt: {
            staticMappings: {
                instrument: 'grunt-istanbul',
                storeCoverage: 'grunt-istanbul',
                makeReport: 'grunt-istanbul',
                'validate-package': 'grunt-nsp-package'
            }
        }
    });


    RuthaGruntService.registerTasks();
    RuthaMigrations.registerTasks();
};