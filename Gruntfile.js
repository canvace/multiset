module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! MultiSet - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * Author: Alberto La Rocca <alberto.larocca@canvace.com> (https://github.com/71104)\n' +
				' * Released under the MIT license\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %> Canvace Srl */\n'
		},

		jshint: {
			options: {
				camelcase: true,
				curly: true,
				forin: true,
				immed: true,
				indent: 4,
				latedef: true,
				newcap: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				boss: true,
				expr: true,
				loopfunc: true,
				smarttabs: true,
				supernew: true,
				exported: ['MultiSet']
			},
			dist: ['src/MultiSet.js']
		},

		clean: {
			dist: ['bin', 'doc']
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>',
				report: 'min'
			},
			dist: {
				files: {
					'bin/MultiSet-<%= pkg.version %>.js': ['src/MultiSet.js'],
					'bin/node-multiset.js': [
						'src/MultiSet.js',
						'src/Module.js'
					]
				}
			}
		},

		yuidoc: {
			compile: {
				name: 'MultiSet',
				description: 'An utility class that implements a multiset, a set with possibly repeated elements.',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'src/',
					outdir: 'doc/',
					linkNatives: 'true'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');

	grunt.registerTask('default', ['jshint', 'uglify', 'yuidoc']);
};
