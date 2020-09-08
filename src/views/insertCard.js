const insertCard = function(titulo, texto){
    return `<div>
                <h1>${titulo}</h1>
                <p>${texto}</p>
            </div>`
    };
insertCard;
module.exports = insertCard;