const TarefasController = require('../controllers/TarefasController');
const bodyParser = require('body-parser');
const cors = require('cors')
var methodOverride = require('method-override')
module.exports = (app, express)=>{
    
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          // look in urlencoded POST bodies and delete it
          var method = req.body._method
          delete req.body._method
          return method
        }
      }))
    app.use('/estatico', express.static('src/app/publico'));

    app.get('/', TarefasController.homeTarefas())


    app.get('/scripts', (req, resp)=>{
        resp.send(scripts)
    })
    
    app.post('/adiciona', TarefasController.insereTarefas())

    app.delete('/remove', TarefasController.deletaTarefas())
    
    app.put('/atualiza', TarefasController.atualizaTarefas())
};
