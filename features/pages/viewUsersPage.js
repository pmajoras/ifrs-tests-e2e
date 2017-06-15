var userObjects = require('./viewUsersObjects');
var expect = require('chai').expect;

function checkText(object, expectedText, callback) {
  object.getText().then(function (text) {
    expect(expectedText).to.be.equal(text);
    callback();
  });
}

function checkNoUsersContent(expectedText, callback) {
  checkText(userObjects.noneUsersMessage, expectedText, callback);
}

function checkTitleContent(expectedText, callback) {
  checkText(userObjects.title, expectedText, callback);
}

function checkHeadersContent(headers, callback) {
  userObjects.headers.getText().then(function (texts) {
    expect(headers[0]).to.be.equal(texts[0]);
    expect(headers[1]).to.be.equal(texts[1]);
    expect(headers[2]).to.be.equal(texts[2]);

    callback();
  });
}

function checkUsersCount(expectedCount, callback) {
  expectedCount = parseInt(expectedCount);

  userObjects.users.count().then(function (count) {
    expect(expectedCount).to.be.equal(count);

    callback();
  });
}

function removeAllUsers(callback) {
  userObjects.removeAllBtn.click().then(callback);
}

function refreshAllUsers(callback) {
  userObjects.refreshBtn.click().then(callback);
}

module.exports = {
  checkNoUsersContent: checkNoUsersContent,
  checkTitleContent: checkTitleContent,
  checkHeadersContent: checkHeadersContent,
  checkUsersCount: checkUsersCount,
  refreshAllUsers: refreshAllUsers,
  removeAllUsers: removeAllUsers
};
