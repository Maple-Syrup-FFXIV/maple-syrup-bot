class Commands {
    constructor(){
        this._data = [];
    }

    get(){
        return this._data;
    }

    set(value){
        this._data = value;
    }
}

class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Commands();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}
module.exports = Singleton;