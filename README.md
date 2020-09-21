# project-ToDo_app

## Diretórios
**src/app** →diretório para os modelos, views, controladores, rotas, arquivos estáticos (publico) e arquivo do servidor express.
- 	*app/controllers* → arquivos da camada de controle da aplicação
- 	*app/models* →arquivos da camada de modelo da aplicação
- 	*app/publico* → arquivos estaticos da aplicação
- 		*app/public/js* → arquivos javascript 
- 	*app/routes* → arquivo de rotas da aplicação
- 	*app/views* → arquivos da camada de apresentação da aplicação
- 	*app/servidor.js* → arquivo de configuração do servidor node.js

**src/config** → contém módulo DAO, banco de dados e módulo personalizado do express.
- 	*config/custom* → arquivo de configuração personalizada do express
- 	*config/DAO* → arquivos da camada de manipulação do banco de dados
- 	*config/database* → arquivo de banco de dados

## Arquivos

- **app/controllers/TarefasController.js** → classe controladora das tarefas da aplicação
- **app/models/Task.js** → classe de modelo das tarefas da aplicação
- **app/publico/js/requisicaoApi.js** → classe de configuração da restful api
- **app/routes/todo-routes.js** → scripts de configuração das rotas da aplicação
- **app/views/insertCard.js** → scripts de configuração e apresentação dos cards de tarefas
- **app/views/modal_tarefas** →  scripts de configuração e apresentação do modal de edição de tarefas
- **app/views/template_todo_app** →  scripts de configuração e apresentação da página inicial
- **app/servidor.js** →  scripts de configuração e do servidor node.js

- **config/custom/custom-express.js** →  scripts de configuração personalizada do pacote express
- **config/DAO/TarefasDAO.js** → classe responsável pelas operações no banco de dados
- **config/database/customDatabase.js** → classe responsável pela configuração do banco de dados
- **config/database/toDoDb.db** → arquivo de banco de dados utilizado ma aplicação
