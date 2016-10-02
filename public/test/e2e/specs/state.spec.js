var conf = require('../config/protractor.conf.js').config;
var Common = require('../pages/commons.js');
var Login = require('../pages/login.js');
var testdata = require('../testdata.json');
var State = require('../pages/states.js');

describe('To test specific state details', function () {
    var comm = new Common();
    var login = new Login();
    var state = new State();
    var obj = testdata.states[0];
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
        comm.statesLink.click();
        state.selectState(obj.name).click();
    var headers = state.stateHeaders.map(function(elm) {
    return elm.getText();
    });

    expect(headers).toEqual([
    "State",
    "Abbreviation",
    "Capital",
    "Most-Populous-City",
    "Population",
    "Square-Miles",
    "Time-Zone-1",
    "Time-Zone-2",
    "Dst"
  ]);
    });
    it('should test the state selection and details', function () {
        var population = obj.population.toString();
        var sm = obj['square-miles'];
        var squareMiles = sm.toString();
        var content = state.stateDetails.map(function (elm) {
            return elm.getText();
        })
    expect(content).toEqual([
    obj.name,
    obj.abbreviation,
    obj.capital,
    obj['most-populous-city'],
    population,
    squareMiles,
    obj['time-zone-1'],
    obj['time-zone-2'],
    obj.dst
  ]);
    });
});
