module.exports = function(grunt) {
    var path = require('path');
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: { //data passed into config.  Can use with <%= test %>
            test: false
        },
        jitGrunt: {
            instrument: 'grunt-istanbul',
            storeCoverage: 'grunt-istanbul',
            makeReport: 'grunt-istanbul',
            'validate-package': 'grunt-nsp-package'
        }
    });

    // Default task.
    //grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('serve', ['concurrent']);
    grunt.registerTask('spec', ['jshint', 'jasmine_node:dev']);
    grunt.registerTask('coverage', ['jshint', 'clean:coverage', 'env:coverage',
        'instrument', 'jasmine_node:coverage', 'storeCoverage', 'makeReport']);
    
    // verifies security
    grunt.registerTask('auditpkg', ['validate-package']);
};
