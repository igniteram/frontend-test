var conf = require('../config/protractor.conf.js').config;
var Common = require('../pages/commons.js');
var Login = require('../pages/login.js');
var testdata = require('../testdata.json');

describe('To test the valid login credentials', function () {
    var comm = new Common();
    var login = new Login();
    beforeAll(function () {
        browser.get(conf.baseUrl);
    })
    it('Should Authenticate All 4 Users ', function () {
       
    for(var i=0;i<testdata.users.length;i++) {
        login.username.clear();
        login.username.sendKeys(testdata.users[i].username);
        login.password.clear();
        login.password.sendKeys(testdata.users[i].password);
        login.loginButton.click();
        comm.logout.click();
        }
        
    });
});