# Nunes Sports - Sistema de Catálogo de Produtos

O **Nunes Sports** é um sistema de catálogo desenvolvido para a gestão completa dos produtos da loja. Este sistema permite aos usuários registrar novos itens, incluindo informações detalhadas como nome, descrição, código de identificação e preço de cada produto.

## Funcionalidades Principais

- **Cadastro de Produtos:** Adicione novos produtos ao catálogo, fornecendo informações essenciais como nome, descrição, código único e preço.
- **Edição e Atualização:** Capacidade de editar informações dos produtos já registrados para manter os dados precisos e atualizados.
- **Remoção de Produtos:** Exclua produtos do catálogo quando necessário.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js:** Utilizado para o desenvolvimento do backend e lógica de servidor.
- **React.js:** Framework JavaScript utilizado para a construção do frontend do sistema.
- **MySQL:** Banco de dados utilizado para armazenar e gerenciar os dados dos produtos.


# Configuração e Execução do Sistema Nunes Sport :

## Configuração do Banco de Dados CRUD

Este é um guia passo a passo para configurar o banco de dados MySQL usando o MySQL Workbench 8.0 para o projeto Nunes Sportes.

## Pré-requisitos

- MySQL Workbench 8.0 instalado.
- Conhecimento básico sobre SQL.

## Passos

### 1. Abra o MySQL Workbench

Inicie o MySQL Workbench no seu computador.

### 2. Conexão ao Servidor

- Crie uma nova conexão ao seu servidor MySQL.
- Insira as credenciais necessárias (usuário, senha e host) para se conectar.

### 3. Criando o Banco de Dados

Abra uma nova janela de consulta SQL e execute o seguinte comando para criar o banco de dados:

```sql
CREATE DATABASE IF NOT EXISTS crud;

```
### 4. Selecionando o Banco de Dados

Após criar o banco de dados, selecione-o para realizar operações nele:

```sql
USE crud;
```

### 5. Criando a Tabela 'produtos'
Agora, vamos criar a tabela 'produtos' com os campos especificados:
```sql
CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    productDescription VARCHAR(100),
    productCode VARCHAR(10),
    priceProduct VARCHAR(100)
);
```

### 6. Verificando a Criação da Tabela
Você pode verificar se a tabela foi criada com sucesso usando:

```sql
DESCRIBE produtos;
```
### 7. Inserindo Dados na Tabela (Opcional)
Se desejar, insira alguns dados de exemplo na tabela:

```sql
INSERT INTO produtos (nome, productDescription, productCode, priceProduct)
VALUES
    ('Nome do Produto 1', 'Descrição do Produto 1', 'CODE001', 19.99),
    ('Nome do Produto 2', 'Descrição do Produto 2', 'CODE002', 29.99);
```
## 8. Configurando a Autenticação para o MySQL Workbench (Opcional)

Se você estiver enfrentando problemas de autenticação ao conectar-se ao MySQL Workbench, especialmente após atualizações ou em cenários específicos, pode ser necessário ajustar as configurações de autenticação do usuário 'root'.

### Passos:

1. **Abra o MySQL Workbench**

Inicie o MySQL Workbench no seu computador.

2. **Conexão ao Servidor**

- Conecte-se ao servidor MySQL usando o MySQL Workbench.
- Caso ocorram erros de autenticação ou falhas ao utilizar a senha para o usuário 'root', talvez seja necessário configurar a autenticação para esse usuário.

3. **Abrindo uma Janela de Consulta SQL**

Crie uma nova consulta SQL na interface do MySQL Workbench.

4. **Alterando a Autenticação do Usuário 'root'**

Cole e execute o seguinte comando SQL na consulta:

   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nunes123';
   ```
Substitua 'nunes123' pela nova senha desejada para o usuário 'root'.

### 9. Finalizando
Você configurou o banco de dados CRUD com a tabela 'produtos'.

---

## Rodando a API - Backend do Projeto Nunes Sportes

Este guia ajudará você a executar a API (backend) do projeto Nunes Sportes localmente.

### Passos

10 . **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nunes-sportes-backend.git
   ```
Apos clonar o repositorio entre no arqui api

  ```bash
  cd api
  ```
11 . Instale as dependências:

```bash
npm install # ou yarn install
```

12 . Execute a API:

```bash
npm start # ou yarn start
```
13 . Testando a API:

Após iniciar com sucesso, a API estará disponível em http://localhost:8800 (ou na porta configurada). Use ferramentas como Postman, cURL ou seu navegador para acessar e testar os endpoints.

### Observações

- Certifique-se de que o banco de dados está configurado conforme as instruções anteriores para que a API funcione corretamente.
- Este guia assume que não são necessárias variáveis de ambiente adicionais para a configuração da API.

---

# Iniciando com Create React App (Frontend)

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

## Instalação

Para começar, certifique-se de ter o Node.js instalado em seu ambiente. Em seguida, no diretório do projeto, execute:

### `npm install`

Isso instalará as dependências necessárias para o projeto. Certifique-se de ter uma conexão de internet estável para concluir este processo.

ou

### `yarn`

Se você preferir usar o Yarn, pode executar este comando para instalar as dependências.

## Executando o Projeto

Após a instalação das dependências, você pode executar o projeto com os seguintes comandos:

### `npm start`

Este comando inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.

A página será recarregada automaticamente sempre que você fizer alterações no código.\
Você também poderá ver quaisquer erros de lint no console.

ou

### `yarn start`

Se você optou por usar o Yarn, este comando iniciará o aplicativo da mesma maneira.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa o React corretamente no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é minificada e os nomes de arquivo incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

