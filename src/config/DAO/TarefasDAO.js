class TarefasDAO {
    constructor(db){
        this._db = db;
        this._busca = "SELECT * FROM 'TASKS'";
        this._insercao = "INSERT INTO TASKS(TITLE,DESCRIPTION) VALUES (?, ?)";
        this._delecao = "DELETE FROM TASKS WHERE ID_TAREFAS=?";
        this._atualizacao = "UPDATE TASKS SET TITLE=?, DESCRIPTION=? WHERE ID_TAREFAS=?";
    }

    lista(){
        return new Promise((resolve, reject)=>{
            this._db.all(this._busca, (err, rows) =>{
                if(err){
                    reject(`Erro na requisição: ${err}`)
                } else{
                    resolve(JSON.stringify({'results': rows}))
                }
            })
        })
    }
    insere(req){
        return new Promise((resolve, reject)=>{
            this._db.run(this._insercao, [req.body.form_title, req.body.form_description], (err)=>{
                if(err){
                    reject(`Erro ao inserir:${err}`)
                } else {
                    resolve('Inserido com sucesso!')
                }
            })
        })
    }

    deleta(req){
        return new Promise((resolve, reject)=>{
            this._db.run(this._delecao, [req.body.id], (err)=>{
                if (err){
                    reject(`Erro ao deletar: ${err}`)
                } else {
                    resolve('Deletado com sucesso!')
                }
            })
        })
    }

    atualiza(req){

        return new Promise((resolve, reject)=>{
            this._db.run(this._atualizacao, [req.body.form_edit_title, req.body.form_edit_description, req.body.form_edit_id], (err)=>{
                if (err){
                    reject(`Erro ao atualizar: ${err}`)
                } else {
                    resolve('Atualizado com sucesso!')
                }
            })
        })
    }

} //fechamento da classe

module.exports = TarefasDAO;