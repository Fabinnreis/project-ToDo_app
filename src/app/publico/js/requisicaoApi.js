class RequisicaoApi{
    constructor(){
        throw 'Não precisa de instancia'
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

}
