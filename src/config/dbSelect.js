module.exports = (retorno)=>{
    const sqlite = require('sqlite3').verbose();
    const db = new sqlite.Database('toDoDb.db');

    db.all("SELECT * FROM 'TASKS'", [], (err, rows) => {
    var retorno = [];
    if (err) {
      throw err;
    }
    
    rows.forEach((row) => {
      retorno.push(row);
    });
  });

  console.log(retorno)

    

     db.close((err)=> {
    if (err) {
        throw err;
        }
    })

}