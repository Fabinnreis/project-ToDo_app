const TarefasController = require('../controllers/TarefasController');
const bodyParser = require('body-parser');
const cors = require('cors')
module.exports = (app, express)=>{
    
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/estatico', express.static('src/public'));

    app.get('/', TarefasController.homeTarefas())


    app.get('/scripts', (req, resp)=>{
        resp.send(scripts)
    })
    
    app.post('/adiciona', TarefasController.insereTarefas())

    app.delete('/remove', TarefasController.deletaTarefas())
    
    app.put('/atualiza', TarefasController.atualizaTarefas())
};
