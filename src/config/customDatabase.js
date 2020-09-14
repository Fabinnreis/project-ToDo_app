
    const sqlite = require('sqlite3').verbose();
    const db = new sqlite.Database('toDoDb.db');
    
    const TASKS_SCHEMA = 'CREATE TABLE IF NOT EXISTS tasks(ID_TAREFAS INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, TITLE VARCHAR(255), DESCRIPTION VARCHAR(255))';

    db.serialize(function(){
        db.run(TASKS_SCHEMA);
      });
   
    module.exports = db;