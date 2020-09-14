class TarefasDAO {
    constructor(db){
        this._db = db;
    }

    lista(callback){
        this._db.all("SELECT * FROM 'TASKS'", (err, rows) => 
            callback(err, rows))
    }
    insere(req, callback){
        this._db.run("INSERT INTO TASKS(TITLE,DESCRIPTION) VALUES (?, ?)", [req.body.form_title, req.body.form_description]);
        this._db.all("SELECT * FROM 'TASKS'", (err, rows)=>
            callback(err, rows))
    }

}
module.exports = TarefasDAO;