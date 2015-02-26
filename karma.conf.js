'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine', 'traceur', 'browserify'],

    //browsers : ['Chrome'],
	browsers : ['Firefox'],

    preprocessors: {
      //'src/app/**/*.js' : ['traceur', 'browserify']
	  'src/app/**/*.js' : ['browserify']
    },

	traceurPreprocessor: {
	  options: {
	    sourceMaps: false,
	    modules: 'commonjs',
	    typeAssertions: false,
	    types: true,
	    annotations: true,
	    typeAssertionModule: 'assert',
	    experimental: true
	  }
    },

	browserify: {
      debug: false,
	  transform: ['es6ify'],
    },
	
    plugins : [
      'karma-chrome-launcher',
	  'karma-firefox-launcher',
      'karma-traceur-preprocessor',
      'karma-browserify',
      'karma-jasmine'
    ]
  });
};
