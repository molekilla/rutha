module.exports = function(grunt) {
    var path = require('path');
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
        init: true, //auto grunt.initConfig
        data: { //data passed into config.  Can use with <%= test %>
            test: false
        },
        jitGrunt: true
    });

    // Default task.
    //grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('serve', ['concurrent']);
    grunt.registerTask('spec', ['jshint', 'jasmine_node']);

};