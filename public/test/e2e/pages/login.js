 var loginPage = function () {
"use strict";
    this.username = element(by.model('username'));
    this.password = element(by.model('password'));
    this.loginButton = element(by.id('loginButton'));
 }
 module.exports = loginPage;
 
 