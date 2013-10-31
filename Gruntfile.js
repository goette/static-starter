module.exports = function(grunt) {

    var HOST = 'localhost',
        PORT = '9001';

    grunt.initConfig({
        clean: {
            screens: ['dist/screens'],
            assets: ['dist/images', 'dist/font']
        },
        'compile-handlebars' : {
            globbedTemplateAndOutput: {
                preHTML: 'dev/_layouts/head.html',
                postHTML: 'dev/_layouts/foot.html',
                template: 'dev/_screens/**/*.handlebars',
                templateData: 'dev/_data/screens/**/*.json',
                helpers: 'dev/_helpers/*.js',
                partials: 'dev/_partials/*.handlebars',
                globals: [
                    'dev/_data/globals/globals.json',
                    'dev/_data/globals/textspec.json'
                ],
                output: 'dist/screens/**/*.html'
            }
        },
        compass: {
            options: {
                sassDir: 'dev/styles',
                cssDir: 'dist/styles',
                generatedImagesDir: 'dist/images',
                imagesDir: 'dev/images',
                javascriptsDir: 'dev/scripts',
                fontsDir: 'dev/font',
                //importPath: 'dev/bower_components',
                httpImagesPath: 'dist/images',
                httpGeneratedImagesPath: 'dist/images',
                httpFontsPath: 'dist/font',
                relativeAssets: false
            }
        },

        copy: {
            main: {
                files: [
                  {expand: true, flatten: true, src: ['dev/font/*'], dest: 'dist/font', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['dev/images/*'], dest: 'dist/images', filter: 'isFile'}
                ]
            }
        },

        connect: {
            server: {
                options: {
                    port: PORT,
                    hostname: HOST,
                    base: 'dist'
                }
            }
        },

        open: {
            all: {
                path: 'http://' + HOST + ':' + PORT + '/screens',
                app: 'Google Chrome Canary'
            }
        },

        watch: {
            compile: {
                files: ['dev/**/*.handlebars', 'dev/**/*.json'],
                tasks: ['clean', 'compile-handlebars'],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: ['dev/styles/**/*.sass'],
                tasks: ['compass', 'copy'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    grunt.registerTask('default', ['clean', 'compass', 'copy', 'compile-handlebars', 'connect', 'open', 'watch']);
};