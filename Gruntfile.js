module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    //initialize
    grunt.initConfig({
        pkg: pkg,
        jshint: require('./tasks/jshint.js'),
        uglify: require('./tasks/uglify.js')
    });

    //load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('build', [
        //check jss
        'jshint',
        'uglify'
    ]);

};
