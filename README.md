# Trabalho IFRS - Testes

Projeto com a automação e especificação dos casos de testes solicitados como trabalho final da disciplina.

### Pré requisitos

Baixar o NodeJs
[NodeJs](https://nodejs.org/en/download/)

### Instalação

Rodar o comando abaixo para instalar as dependencias do projeto.

```
npm install
```

## Iniciando a aplicação

Iniciando a aplicação

```
npm start
```

* A aplicação estará disponível na porta 3000.
* A aplicação possui somente a listagem de usuários, visto que esta foi a funcionalidade que foi automatizada.
* O banco da aplicação é em memoria, ou seja, ao reiniciar a aplicação os dados estarão em seu estado inicial.

## Testes Automatizados

Na implementação dos testes foi utilizado alguns princípios dos conceitos de PageObject.

## Cenários de Testes

* Os cenários de testes encontram-se dentro da pasta features, nos arquivos com a extensão *.feature.
* O motivo da documentação dos cenários estarem nesses arquivos e no formato específico do cucumber é para que não seja necessário ter esta documentação duplicada, visto que estes mesmo cenários podem ser usados para testes manuais.

### Funcionalidades
* [F1 - Cadastrar Usuário](features/createUsers.feature)
* [F5 - Inserir/Visualizar](features/createViewMessages.feature)
* [F6 - Consultar dados de usuários](features/viewUsers.feature)
* [F9 - Sair do sistema](features/exit.feature)

### Rodando os testes para a feature "viewUsers"

Você deve abrir três terminais a partir do local onde encontra-se a pasta do projeto, e então rodar os seguintes comandos um em cada terminal.

Iniciando a aplicação
```
npm start
```

Iniciando o selenium webdriver
```
npm run webdriver
```

Rodando os testes
```
npm run e2e
```

### Tecnologias Utilizadas

* [Protractor](http://www.protractortest.org/#/)
* [Cucumber](https://cucumber.io/)

## Autor
Paulo Gabriel Souza Poffal
