# 📝 Aplicação de Tarefas (To-Do List Pro)

Uma aplicação React completa para gerenciamento de tarefas, desenvolvida para praticar conceitos avançados como navegação entre páginas, gerenciamento de estado global e persistência de dados no navegador.

## 📋 Resumo do Projeto
Este projeto permite ao usuário ter um controle total sobre suas atividades diárias. É possível adicionar novas tarefas, visualizar a lista atual, editar o texto de tarefas existentes, marcar como concluídas e excluir itens. 

## 🛠️ Tecnologias e Conceitos Utilizados
*   **React** (Biblioteca principal)
*   **React Router Dom (v6):** Gerenciamento de rotas para navegação entre a Home e o formulário de criação.
*   **Context API:** Centralização do estado global das tarefas, permitindo que os dados sejam acessados por qualquer componente.
*   **Hooks Avançados:** 
    *   `useState`: Controle de estados locais.
    *   `useEffect`: Sincronização com o `localStorage`.
    *   `useRef`: Controle de ciclo de vida para evitar sobrescrita de dados na montagem.
    *   `useContext`: Consumo de dados globais de forma simplificada.
*   **LocalStorage:** Persistência de dados para que as tarefas não sumam ao atualizar a página.
*   **CSS Moderno:** Interface em *Dark Mode* com design responsivo e intuitivo.

## ✨ Funcionalidades
- [x] **Adicionar Tarefas:** Página dedicada para criação com foco automático.
- [x] **Listagem Reativa:** Visualização imediata de novos itens.
- [x] **Marcar como Concluída:** Feedback visual (riscado) e checkbox.
- [x] **Edição Dinâmica:** Alteração de títulos via interface.
- [x] **Exclusão:** Remoção de itens da lista e do armazenamento.
- [x] **Persistência:** Dados mantidos mesmo após fechar o navegador.

## 🚀 Como executar o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/victorlaranjeira/aplicacao-de-tarefas.git](https://github.com/seu-usuario/aplicacao-de-tarefas.git)