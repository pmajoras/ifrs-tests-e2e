Feature: Consultar dados de usuários

  @smoke
  Scenario: Consultar dados de usuários quando houver um ou mais usuários
    Given Como um usuário administrador, eu efetuo login na aplicacao
    Then Eu vejo o titulo "Listagem de usuários."
    Then Eu vejo a listagem com os cabecalhos "Nome" "E-mail" "Telefone"
    Then Eu vejo "3" usuarios

  @smoke
  Scenario: Consultar dados de usuários quando não houver usuários
    Given Como um usuário administrador, eu efetuo login na aplicacao
    Then Eu vejo o titulo "Listagem de usuários."
    Then Eu deleto todos os usuários
    Then Eu vejo a mensagem "Não existe nenhum usuário cadastrado."
    Then Eu recrio todos os usuários
