var states = function () {
   "use strict"
   this.selectState = function (state) {
       return element(by.cssContainingText('option',state));
   }
   this.stateHeaders = element.all(by.css('body > div.container.ng-scope > div > table > thead > tr th'));
   this.stateDetails = element.all(by.css('body > div.container.ng-scope > div > table > tbody > tr td'));
}
module.exports= states;