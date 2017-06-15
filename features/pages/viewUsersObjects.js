

module.exports = {
  title: element(by.id('list-title')),
  headers: element.all(by.css('#table-users-header th')),
  users: element.all(by.css('.user-item')),
  refreshBtn: element(by.id('refresh-btn')),
  removeAllBtn: element(by.id('remove-all-btn')),
  noneUsersMessage: element(by.id('none-users-message'))
};
