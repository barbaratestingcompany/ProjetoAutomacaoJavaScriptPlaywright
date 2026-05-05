## Projeto de Automação de Testes

Este projeto consiste na automação do fluxo de cadastro e login de usuário, utilizando Playwright com JavaScript, com foco em boas práticas, organização e reutilização de código.

---

### Arquitetura e Padrões Utilizados

Foi aplicado o padrão **Page Object Model (POM)** para separar responsabilidades e facilitar a manutenção do código:

- **Pages**  
  Responsáveis por representar as páginas da aplicação, centralizando:
  - mapeamento de elementos (locators);
  - ações do usuário;
  - validações da interface.

- **Tests (specs)**  
  Responsáveis por descrever os cenários de teste, mantendo a lógica de negócio separada da implementação técnica.

- **Utils**  
  Contém factories, helpers e funções reutilizáveis, incluindo:
  - geração de massa de dados;
  - regras de consistência de campos;
  - utilitários compartilhados entre testes.

---

### Massa de Testes

A massa de testes é gerada dinamicamente utilizando a biblioteca **@faker-js/faker**, permitindo execuções repetidas sem conflito de dados.

- Dados como nome, e-mail, endereço e telefone são gerados dinamicamente.
- Campos que exigem consistência (ex.: nome e país) são controlados por factories localizadas em `utils`.

---

### Validações

As validações são realizadas utilizando o próprio `expect` do Playwright, cobrindo:

- preenchimento correto dos campos;
- seleção de dropdowns e checkboxes;
- criação da conta com sucesso.

A criação da conta é confirmada por:
- exibição da mensagem **“ACCOUNT CREATED!”**;
- exibição do botão **Continue**.

---

### Tecnologias Utilizadas

- Node.js
- JavaScript
- Playwright
- @faker-js/faker
- NPM

---

### Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js (versão 18 ou superior)
- NPM

Verifique as versões com:

```bash
node -v
npm -v
```
---

### Instalação do Projeto

1. Clone o repositório:

```text
git clone https://github.com/barbaratestingcompany/ProjetoAutomacaoJavaScriptPlaywright.git

```

2. Acesse a pasta do projeto:

```text
cd ProjetoAutomacaoJavaScriptPlaywright
```

3. Instale as dependências:

```text
npm install
```

4. Instale os navegadores do Playwright:

```text
npx playwright install
```

---

### Como Executar os Testes

- Executar todos os testes (headless):

```text
npx playwright test
```

- Executar com navegador visível:

```text
npx playwright test --headed
```

- Executar em modo UI:

```text
npx playwright test --ui
```

- Executar um teste específico:

```text
npx playwright test nome-do-teste.spec.js
```

- Relatórios

Após a execução dos testes, é possível visualizar o relatório HTML com o comando:

```text
npx playwright show-report
```

---

### Estrutura do Projeto

```text 
ProjetoAutomacaoJavaScriptPlaywright 
┣ 📂 tests          # Casos de teste (specs) 
┣ 📂 pages          # Page Objects (ações e validações das telas) 
┣ 📂 utils          # Factories, helpers e massa de dados 
┣ 📜 playwright.config.js
┣ 📜 package.json 
┗ 📜 README.md
```