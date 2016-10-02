var commonPage = function () {
    "use strict";
    this.homeLink= element(by.id('home'));
    this.statesLink= element(by.id('states'));
    this.guestBookLink = element(by.id('guestbook'));
    this.logout = element(by.linkText('Logout'));
}
module.exports = commonPage;