###Front-End-Test Application 

This project demonstrates a search application with custom message feedback!

###Features
* Clear folder structures inside public folder.
* Basic & user-friendly UI with Bootstrap templates used.
* AngularJS framework used to build this single page application.
* User Authentication in loginController with custom "invalid username or password" message.
* E2E tests written with latest Protractor 4.0.9.
* Page Object design pattern implementation
* DirectConnect capability for Chrome & Firefox browsers(Currently Chrome is default).
* Extensive hooks implemented using beforeAll,afterAll to practice DRY principle in testcases.
* HTML test reports & screenshots in e2e/target folder.

###To Get Started

####Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome browser installed.

####Install dependencies

> npm install

####Run Server

> npm start

####Run TestScripts

 > npm test

####Snapshot of login page

![loginscreen](https://raw.githubusercontent.com/igniteram/frontend-test/master/public/app/images/login.png)

####What could have been done better?
* More fields could have been added in States page with abbreviations, sorting etc.
* The UI design could be improved more.
* E2E tests could be integrated with BDD frameworks like Cucumber.
* Test reports features and UI could be improved.
* [Protractor-Cucumber-Allure](https://github.com/igniteram/protractor-cucumber-allure) framework implemented by me could have been used.
* Tests could be written in TypeScript, since protractor now supports it from v4.0.0.[Protractor-TypeScript-Cucumber](https://github.com/igniteram/protractor-cucumber-typescript)