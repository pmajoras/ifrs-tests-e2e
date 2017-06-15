Feature: Cadastrar novo usuário

  @smoke
  Scenario: Visualizar campos no formulário de cadastro
    Given Como um usuário convidado não logado, o sistema apresenta o formulário de cadastro
    Then Eu vejo o campo "Login"
    Then Eu vejo o campo "Senha"
    Then Eu vejo o campo "Nome"
    Then Eu vejo o campo "Email"
    Then Eu vejo o campo "Telefone"
    Then Eu vejo o botão "Registrar"

  @regression
  Scenario: Cadastrar novo usuário convidado
    Given Como um usuário convidado não logado, o sistema apresenta o formulário de cadastro
    Then Eu insiro os campos necessários para o cadastro
    Then Eu clico em registrar
    Then Eu vejo a mensagem "Cadastro realizado com sucesso"

  @regression
  Scenario: Cadastrar novo usuário convidado - Login em branco
    Given Como um usuário convidado não logado, o sistema apresenta o formulário de cadastro
    Then Eu insiro os campos necessários para o cadastro
    Then Eu limpo o campo "Login"
    Then Eu vejo a mensagem "Campo login está com caractéres vázios ou inválidos."

  @regression
  Scenario: Cadastrar novo usuário convidado - Login já existente
    Given Como um usuário convidado não logado, o sistema apresenta o formulário de cadastro
    Then Eu insiro os campos necessários para o cadastro
    Then Eu preencho o campo "Login" com "jaexiste"
    Then Eu clico em registrar
    Then Eu vejo a mensagem "Login informado já pertence a outro usuário."
