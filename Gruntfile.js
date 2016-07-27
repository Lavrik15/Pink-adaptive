
module.exports = function(grunt) {

    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['js/*.js',],
                dest: 'js/build/prodaction.js',
                }
        },    
        uglify: {
            build: {
                src: 'js/build/prodaction.js',
                dest: 'js/build/prodaction.min.js'
            }    
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,jpeg,gif,svg}'],
                    dest: 'build/images'
                }]
            }
        },    
        watch: {
            options: { 
                livereload: true, 
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            }
        },
        less: {
              development: {
                options: {
                  compress: true,
                  optimization: 2
                },
                files: {
                  "css/style.css": "less/style.less" 
                }
              }
            }
          
            

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.registerTask('default', ['concat','uglify','imagemin','less','watch']);

};