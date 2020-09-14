const TarefasController = require('../controllers/TarefasController');

module.exports = (app)=>{
    var bodyParser = require('body-parser');
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.get('/', TarefasController.homeTarefas())
    
    app.post('/', urlencodedParser, TarefasController.insereTarefas())
};
