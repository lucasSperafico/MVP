# React - MVP Tracker de Atividades Físicas

🌐 [English](README.md) | **Português (BR)**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## 🌐 Informações
Projeto desenvolvido durante os estudos de React.
O **MVP** é um tracker de atividades físicas focado em três modalidades: **Jiu-Jitsu**, **Academia** e **Corrida**. A aplicação permite registrar novos treinos com campos específicos para cada modalidade, organizada em componentes reutilizáveis, hooks customizados e páginas separadas.

A proposta é evoluir para uma aplicação completa, com contas de usuário, dados pessoais armazenados na nuvem e dashboards para acompanhar a evolução nos treinos.

> 🚧 Projeto em desenvolvimento.

> [!IMPORTANT]
> **Antes de rodar a aplicação:**
>
> 1. Clone o repositório:
>    ```bash
>    git clone https://github.com/lucasSperafico/MVP.git
>    ```
> 2. Entre na pasta do projeto:
>    ```bash
>    cd MVP
>    ```
> 3. Instale as dependências executando no terminal:
>    ```bash
>    npm install
>    ```
> 4. Inicialize o projeto em modo de desenvolvimento:
>    ```bash
>    npm run dev
>    ```
> 5. Acesse no seu navegador:
>    ```bash
>    localhost:5173/
>    ```

---

## 📚 Funcionalidades

### 1. Novo Treino:
Página dedicada para registrar uma nova atividade física.

### 2. Conteúdo por Modalidade:
Cada modalidade (Jiu-Jitsu, Academia e Corrida) possui seu próprio componente com os campos relevantes para aquele tipo de treino.

### 3. Tema Claro/Escuro:
Alternância de tema através do hook customizado `useTheme`.

---

## 🗺️ Roadmap

Funcionalidades planejadas para as próximas versões:

- [ ] **Autenticação** de usuários com Firebase Authentication
- [ ] **Banco de dados** na nuvem com Firebase
- [ ] **Dados pessoais** por usuário (perfil, medidas, metas), protegidos por regras de acesso
- [ ] **Histórico de treinos** por modalidade
- [ ] **Dashboards** com gráficos e estatísticas de evolução
- [ ] E outras melhorias ao longo do desenvolvimento

---

## 🛠️ Tecnologias e Ferramentas

### Em uso
- **React 19**
    - **Hooks** (incluindo hooks customizados)
    - **Componentização**
- **Vite**
    - **@vitejs/plugin-react**
- **NPM**
    - **Oxlint**
- **JavaScript (ES Modules)**
- **HTML5 & CSS3**

### Planejadas
- **Firebase**
    - **Authentication**
    - **Banco de dados**

---

## 📜 Scripts Disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - gera a build de produção
- `npm run preview` - gera a build e abre uma prévia local
- `npm run lint` - executa o linter
