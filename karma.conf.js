// Karma configuration
// Generated on Wed Sep 21 2016 15:27:42 GMT+0530 (IST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'lib/angular/angular.js',
            'lib/angular-mocks/angular-mocks.js',
            'src/*.js',
            'src/angular-app/myApp.js',
            'spec/*.js',
            'spec/angular-app/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //'**/*.js': ['coverage']   //Todo: Uncomment For coverage
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        //reporters: ['progress', 'coverage'],  //Todo: Uncomment For coverage


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false

        //Todo: Uncomment For coverage
        //coverageReporter: {
        //  dir : 'karma-coverage/',
        //  reporters: [
        //    { type: 'html', subdir: 'report-html' },
        //    { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
        //  ]
        //}
    })
};

// Add following line to package.json for coverage
//     "karma-coverage": "0.4.2"    //Todo: Add to Package.json For coverage