module.exports = function(grunt) {

        grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),

            less: {

                development: {

                    files: [{

                        expand: true,

                        cwd: './static/less',

                        src: ['**/*.less'],

                        dest: 'static/css',

                        ext: '.css'

                    }]

                }

            },

            watch: {

                options: {

                    livereload: true

                },

                scripts: {

                    files: ['./static/less/**/*.less'],

                    tasks: ['less'],

                    options: {

                        spawn: false,

                    },

                },

            },

        });

        grunt.loadNpmTasks('grunt-contrib-less');

        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.registerTask('default', ['less', 'watch']);

    }