var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
exports.config = {

    baseUrl: 'http://localhost:8888',
    directConnect : true,
    capabilities : {
        browserName:'chrome'
    },
    specs:['../specs/*.spec.js'],
    framework:'jasmine2',
    allScriptsTimeout: 15000,
    onPrepare : function () {
        browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
         savePath: './target/screenshots',
         filename: 'report.html'
     })
    );
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000, 
        onComplete: null, 
        showColors: true, 
        includeStackTrace: true
    }
}