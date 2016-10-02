var conf = require('../config/protractor.conf.js').config;
var Common = require('../pages/commons.js');
var Login = require('../pages/login.js');
var testdata = require('../testdata.json');
var Home = require('../pages/home.js');

describe('To test the home page details', function () {
    var comm = new Common();
    var login = new Login();
    var homepage = new Home();
    beforeAll(function () {
         browser.get(conf.baseUrl);
        login.username.clear();
        login.username.sendKeys(testdata.users[0].username);
        login.password.clear();
        login.password.sendKeys(testdata.users[0].password);
        login.loginButton.click();
    });
    afterAll(function () {
        comm.logout.click();
    });
    it('Should test the title of page ', function () {
       expect(browser.getTitle()).toEqual('United States Search Application');
    });
    it('should test home page content title', function () {
        expect(homepage.contentTitle.getText()).toEqual('A brief History of United States of America!');
    });
    it('should count the no. of app instructions', function () {
        expect(homepage.instructions.count()).toBe(2);
    });
    
});
