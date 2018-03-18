var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/*spec.js',
            'test/*spec.jsx'
        ],
        preprocessors: {
            'test/*spec.js': ['webpack'],
            'test/*spec.jsx': ['webpack']
        },
        webpack: webpackConfig,
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    })
}