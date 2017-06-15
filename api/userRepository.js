var initialUsers = [
  {
    name: 'Lucas Teste',
    email: 'lucaseteste@teste.com',
    phone: '51998877556'
  },
  {
    name: 'Gabriela Teste',
    email: 'gabriela@teste.com',
    phone: '4199554466'
  },
  {
    name: 'Geraldo Teste',
    email: 'geraldo@abc.com',
    phone: '51887755664'
  }
];
var users = [];
refreshDatabase();


function getUsers() {
  return users;
}

function refreshDatabase() {
  users = [].concat(initialUsers);
  return users;
}

function removeAll() {
  users = [];
  return users;
}

module.exports = {
  get: getUsers,
  refreshDatabase: refreshDatabase,
  removeAll: removeAll
};
