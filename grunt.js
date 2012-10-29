module.exports = function (grunt) {

	grunt.initConfig({
		min: {
			dist: {
				src: ['src/MultiSet.js'],
				dest: 'bin/multiset.js',
			},
		},
	});

	grunt.registerTask('default', 'min');

};
