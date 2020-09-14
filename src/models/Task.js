class Task {
    constructor(title, description){
        this._title = title,
        this._description = description
    }

    getTask(){
        return {
            title: this._title,
            description: this._description
        }
    }
}