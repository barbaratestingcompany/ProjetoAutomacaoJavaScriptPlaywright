## Projeto de Automação


Este projeto consiste na automação do fluxo de cadastro e login de usuário utilizando **Playwright** com **JavaScript**.

Foi aplicado o padrão Page Object Model (POM) para separar responsabilidades:

- Selectors: responsáveis apenas por mapear os elementos da página.
- Pages: responsáveis pelas ações do usuário e validações da interface.
- Tests (specs): responsáveis por descrever os cenários de teste.

A massa de testes foi criada utilizando a biblioteca **@faker‑js/faker**, permitindo a geração de dados dinâmicos (nome, e‑mail, endereço, telefone), garantindo execuções repetidas sem conflito de dados. Campos que precisam de consistência (como nome e país) foram controlados na factory.
As validações foram feitas com o próprio expect do Playwright, confirmando:

- preenchimento correto dos campos,
- seleção de dropdowns e checkboxes,
- e principalmente a criação da conta, validada pela mensagem “ACCOUNT CREATED!” e pela exibição do botão Continue.