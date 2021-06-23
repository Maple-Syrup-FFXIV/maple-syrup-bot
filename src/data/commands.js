class Commands {
    constructor(){
        this._data = [];
    }

    add(item){
        this._data.push(item);
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