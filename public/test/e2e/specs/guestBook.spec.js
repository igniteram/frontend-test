var conf = require('../config/protractor.conf.js').config;
var Common = require('../pages/commons.js');
var Login = require('../pages/login.js');
var testdata = require('../testdata.json');
var GuestBook = require('../pages/guestBook.js');

describe('To test GuestBook details', function () {
    var comm = new Common();
    var login = new Login();
    var guestBook = new GuestBook();
    var msg = testdata.message;
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
    it('Should test the table headers',function () {
        comm.guestBookLink.click();
    var headers = guestBook.messageHeaders.map(function(elm) {
    return elm.getText();
    });

    expect(headers).toEqual([
    "User",
    "Phone",
    "Message"
  ]);
    });
    it('should test details of default message', function () {
     var content = guestBook.messageDetails.map(function (elm) {
            return elm.getText();
        })
    expect(content).toEqual([
    msg.user,
    msg.phone,
    msg.message
  ]);
    });
  it('should test details of new message', function () {
      guestBook.message.sendKeys(testdata.users[0].username+' was here! This app is awesome');
      guestBook.phone.sendKeys('123 789 256');
      guestBook.submit.click();
     var content = guestBook.messageDetails.map(function (elm) {
            return elm.getText();
        })
    expect(content).toEqual([
    msg.user,
    msg.phone,
    msg.message,
    'alice',
    '123 789 256',
    'alice was here! This app is awesome'
  ]);
    });
});
