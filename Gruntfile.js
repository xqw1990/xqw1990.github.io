'use strict()';


module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);


  	// Project configuration.
  	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),

  		uglify: {
  			options: {
  				compress: {
  					drop_console: false
  				}
  			},
  			my_target: {
  				files: {
  					'./public/js/script.min.js': [
  					'./public/js/third-party/jquery-3.1.1.min.js',
  					'./public/js/third-party/animsition.min.js',
  					'./public/js/third-party/headroom.js',
  					'./public/js/third-party/jquery.bxslider.min.js',
  					'./public/js/third-party/masonry.pkgd.min.js',
  					'./public/js/third-party/modernizr-custom.js',
					// our scripts ---
					'./public/js/script.js'
					]
				}
			}
		},

		clean: {
			css: ['./public/styles/*.css','./public/styles/*.css.map'],
			js: ['./public/js/*.min.js'],
		},


		jshint: {
			options: {
				reporter: require('jshint-stylish')
				// force: true,
				// jshintrc: ".jshintrc",
				// reporterOutput : ""
			},
			// target: ['Gruntfile.js','./public/**/*.js']
			target: ['Gruntfile.js']
		},

		sass: {
			dist: {
				options: {
					style      : 'expanded',
					debugInfo  : false,
					lineNumbers: true
				},
				files: [{
					expand: true,
					cwd: './public/styles/',
					src: ['*.scss'],
					dest: './public/styles/',
					ext: '.css'
				}]
			}
		},



		watch: {
			options: {
				spawn: false,
				sourcemap: false,
				livereload: true
			},
			gruntfile: {
				files: 'Gruntfile.js',
			},
			sass: {
				files: ['./public/styles/site/**/*.scss'],
				tasks: ['clean:css', 'sass'],
				trace: true,
				options: {
					spawn: false,
					sourcemap: false
				}
			},
			uglify: {
				files: ['./public/js/*.js'],
				tasks: ['clean:js','uglify'],
				trace: true,
				options: {
					spawn: false,
					sourcemap: false
				}
			},
			jshint: {
				files: ['Gruntfile.js'],
				tasks: ['jshint']
			},
			html: {
				files: ['*.html'],
			}
		},
		connect: {
			server: {
				options: {
					port: 9000,
					base: '.',
					hostname: '0.0.0.0',
					protocol: 'http',
					livereload: true,
					open: true,
				}
			}
		},


	});


  	// load jshint
  	grunt.registerTask('lint', ['jshint']);


  	// Default task(s).
  	grunt.registerTask('default', [
  		'clean',
  		'jshint',
  		'uglify',
  		'sass',
  		'connect',
  		'watch'
  		]);



  };