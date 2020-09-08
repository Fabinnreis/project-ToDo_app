const toDoView = require('../views/template_todo_app');

const tarefas = [{
        "title": "Higienização",
        "description": "Tomar banho e escovar os dentes" 
    },
    {
        "title": "Estudos",
        "description": "Estudar Node.js"
    },
    {
        "name": "Fabio",
        "title": "Trabalho",
        "description": "Daily meet com a equipe"
    }]

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.send(toDoView(tarefas))
    })

    /* app.get('/:busca', (req, res)=>{
        tarefas.forEach(element => {
            if(req.params.busca == element.name){
                res.send(toDoView(element))
            }
        });       
    }) */
}