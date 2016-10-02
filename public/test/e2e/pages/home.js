var homePage = function () {
    "use strict";
    this.contentTitle = $('body > div.container.ng-scope > div > div:nth-child(2) > h3');
    this.instructions = element.all(by.css('ul.home li'));
} 
module.exports = homePage;