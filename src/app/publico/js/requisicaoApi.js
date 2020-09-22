class RequisicaoApi{
    constructor(){
        throw 'Não precisa de instancia'
    }

    static adicionaTarefa(id_form, event){
        event.preventDefault();
        const myHeaders = new Headers({'Content-type': 'application/json'});
        const _form = document.getElementById(id_form);
        
        const _titulo = _form.form_title.value;
        const _descricao = _form.form_description.value;
        
        const valores = {
                            titulo: _titulo,
                            descricao: _descricao,
                        }

        const estruturaReq = (req)=>{
            return { method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(req) }
        }
        
        fetch('http://127.0.0.1:3000/adiciona', estruturaReq(valores))
        .then(window.location.href = "/")
        .catch(err=>err)

        
    }

    static deletaCard(event){
        const myHeaders = new Headers({'Content-type': 'application/json'});
        const id_tarefa = event.target.parentNode.dataset.idTarefa;
        const card = event.target.parentNode.parentNode;
        const estruturaReq = (req)=>{
            return { method: 'DELETE',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({id: req}) }
        }

        fetch('http://127.0.0.1:3000/remove', estruturaReq(id_tarefa))
        .then(card.remove())
        .catch(err=>err)

    }

    static atualizaTarefa(id_form, id_tarefa){
        const myHeaders = new Headers({'Content-type': 'application/json'});
        const _form = document.getElementById(id_form);
        
        const _titulo = _form.form_edit_title.value;
        const _descricao = _form.form_edit_description.value;
        const _id = id_tarefa;

        console.log(_descricao)
        
        const valores = {
                            titulo: _titulo,
                            descricao: _descricao,
                            id: _id
                        }

        const estruturaReq = (req)=>{
            return { method: 'PUT',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(req) }
        }
        
        fetch('http://127.0.0.1:3000/atualiza', estruturaReq(valores))
        .then(window.location.href = "/")
        .catch(err=>err)

        
    }
}
