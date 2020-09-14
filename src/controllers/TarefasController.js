const toDoView = require('../views/template_todo_app');
const db = require('../config/customDatabase');
const TarefasDAO = require('../DAO/TarefasDAO');

class TarefasController{
   /*  constructor(){
        throw('Não precisa de instância');
    }
     */
    
    static homeTarefas(){
        return function(req, res){
          
          const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.lista((err, rows)=>{
            if (err) { throw err }
            console.log(rows)
            res.send(toDoView(rows));
        })
        }
    }

    static insereTarefas(){
      return function(req, res){
        const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.insere(req, (err, rows)=>{
            if (err) { throw err }
            res.send(toDoView(rows));
          })
      }
    }
}
module.exports = TarefasController;


