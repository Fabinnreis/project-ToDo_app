const insertCard = (title, description)=>{
    return `<div class="card m-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button type="button" class="btn btn-primary">Editar</button>
        <button type="button" class="btn btn-primary">Remover</button>
    </div>
    </div>`
    };

module.exports = insertCard;