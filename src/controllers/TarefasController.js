const toDoView = require('../views/template_todo_app');
const db = require('../config/customDatabase');
const TarefasDAO = require('../DAO/TarefasDAO');
const { urlencoded } = require('body-parser');

class TarefasController{
   /*  constructor(){
        throw('Não precisa de instância');
    }
     */
    
    static homeTarefas(){
        return function(req, resp){
          const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.lista()
            .then(response => {
              resp.send(toDoView(response))
            })
            .catch(err=>{
              throw err
            })
        }
    }

    static insereTarefas(){
      return function(req, resp){
        console.log(req)
        const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.insere(req)
            .then(response => {
              console.log(response)
              resp.redirect('/');
              
            })
            .catch(err => {
              throw err;
            })
      }
    }

    static deletaTarefas(){
      return function(req, resp){
        const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.deleta(req)
            .then(response => {
              console.log(response)
            })
      }
    }

    static atualizaTarefas(){
      return function(req, resp){
        const tarefasDAO = new TarefasDAO(db);
          tarefasDAO.atualiza(req)
            .then(response => {
              console.log(response)
              resp.redirect('/')
            })
      }
    }

}
module.exports = TarefasController;


