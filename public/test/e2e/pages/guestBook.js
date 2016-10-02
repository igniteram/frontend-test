var guestBook = function () {
    "use strict";
    this.message = element(by.model('message'));
    this.phone = element(by.model('phone'));
    this.submit = element(by.id('submitMessage'));
    this.messageHeaders = element.all(by.css('#messageTable > thead > tr th'));
    this.messageDetails = element.all(by.css('#messageTable > tbody > tr td'));
}
module.exports = guestBook;