const insertCard = (id_tarefas, title, description)=>{
      return `
<div class="card m-4" style="width: 18rem;">
    <div class="card-body" data-id-tarefa="${id_tarefas}">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button data-toggle="modal" data-target="#modal${id_tarefas}" type="button" class="btn btn-primary">Editar</button>
        <button onclick="RequisicaoApi.deletaCard(event)" type="button" class="btn btn-primary">Remover</button>
    </div>
    </div>
    
    <div id="modal${id_tarefas}"class="modal fade" tabindex="-1" role="dialog" style="margin-top:10%">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editar Tarefa</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="/atualiza" method="post" id="form_edit" class="flex-fill">
        <input type="hidden" name="_method" value="PUT">
        <input type="hidden" name="form_edit_id" value="${id_tarefas}">
        <div class="form-group">
            <label for="tituloTarefa"><b>Título:</b></label>
            <input type="text" name="form_edit_title"  class="form-control" id="tituloTarefa" value="${title}">
        </div>
        <div class="form-group">
            <label for="descricaoTarefa"><b>Descrição:</b></label>
            <textarea name="form_edit_description" class="form-control" id="descricaoTarefa" rows="3">${description}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
      </form>
    </div>
  </div>
</div>`
    
    };

module.exports = insertCard;
