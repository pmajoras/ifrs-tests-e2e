var p = require('relative-path');
var viewUsersPage = require('../pages/viewUsersPage');
//var homePage = require(p('../pages/home_page'));

var viewUsersStepsWrapper = function () {

  this.Given(/^Como um usuário administrador, eu efetuo login na aplicacao$/, function (callback) {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000/').then(callback);
  });

  this.Then(/^Eu vejo o titulo "([^"]*)"$/, function (titleContent, callback) {
    viewUsersPage.checkTitleContent(titleContent, callback);
  });

  this.Then(/^Eu vejo a listagem com os cabecalhos "([^"]*)" "([^"]*)" "([^"]*)"$/, function (nameHeader, emailHeader, phoneHeader, callback) {
    viewUsersPage.checkHeadersContent([nameHeader, emailHeader, phoneHeader], callback);
  });

  this.Then(/^Eu vejo "([^"]*)" usuarios$/, function (expectedCount, callback) {
    viewUsersPage.checkUsersCount(expectedCount, callback);
  });

  this.Then(/^Eu deleto todos os usuários$/, function (callback) {
    viewUsersPage.removeAllUsers(callback);
  });

  this.Then(/^Eu vejo a mensagem "([^"]*)"$/, function (expectedMessage, callback) {
    viewUsersPage.checkNoUsersContent(expectedMessage, callback);
  });

  this.Then(/^Eu recrio todos os usuários$/, function (callback) {
    viewUsersPage.refreshAllUsers(callback);
  });

};

module.exports = viewUsersStepsWrapper;
