module.exports = function(grunt) {
    var path = require('path');
    var config = { 
            deploySettings: {
              ruthaDeploy: '/home/rogelio/Code/provisioning/ruthan_deploy',
              playbook: '~/Code/provisioning/rutha_deploy/provisioning/playbook.yml',
              hosts: {
                production: {
                  name: 'aws',
                  sshKey: 'fill_here',
                  remoteUser: 'ubuntu'
                },
                staging: {
                  name: 'staging',
                  sshKey: 'fill_here',
                  remoteUser: 'ubuntu'
                },
                vagrant: {
                  name: 'all',
                  remoteUser: 'vagrant'
                }
              }
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
            es6: {
                transpiler: 'ts',
                options: {
                    module: 'system',
                    sourceMap: false,
                    fast: 'never',
                    emitDecoratorMetadata: true
                }
            },
            devEnvironment: {
                distFolder: 'dist'
            },        
            wiredepConfig: {
                src: ['views/**/*.html'],
                options: {
                    cwd: process.cwd()
                }
            },        
            cwd: process.cwd(),
            pkg: grunt.file.readJSON('package.json')
        };
    var RuthaGruntUI = require('rutha-grunt-tasks-ui')(grunt, config);

    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'node_modules/rutha-grunt-tasks-ui/grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: config,
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
     
};
