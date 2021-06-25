class Megumin {
    constructor() {
        this._data = [
            'http://shortify.yamisuresshu.com/6JnQP6BaJ.gif',
            'http://shortify.yamisuresshu.com/HCkhLoDL8.gif',
            'http://shortify.yamisuresshu.com/4TCUFRpB6.gif',
            'http://shortify.yamisuresshu.com/Jz0bOcrzT.gif',
            'http://shortify.yamisuresshu.com/oLUfO7cKk.gif',
            'http://shortify.yamisuresshu.com/T4qEiSn3O.gif',
            'http://shortify.yamisuresshu.com/KqkX7udEe.gif',
            'http://shortify.yamisuresshu.com/9KcC0hqHE.gif',
            'http://shortify.yamisuresshu.com/glYYkOg7Q.gif',
            'http://shortify.yamisuresshu.com/cIb61Ax4-.gif',
            'http://shortify.yamisuresshu.com/EiYI4tGrx.gif',
            'http://shortify.yamisuresshu.com/OsOFjK8Ir.gif',
            'http://shortify.yamisuresshu.com/2P-LsLrsJ.gif',
            'http://shortify.yamisuresshu.com/YWoaXKg_D.gif',
            'http://shortify.yamisuresshu.com/0I3LjI6Mz.gif',
            'http://shortify.yamisuresshu.com/yZq7kIx49.gif',
            'http://shortify.yamisuresshu.com/PmbGQl29k.gif',
            'http://shortify.yamisuresshu.com/LOHfGmbbg.gif',
            'http://shortify.yamisuresshu.com/oOu92xzqA.gif',
            'http://shortify.yamisuresshu.com/FXNhfocDh.gif',
            'http://shortify.yamisuresshu.com/PSYteIHFj.gif',
            'http://shortify.yamisuresshu.com/r7Rc22eqd.gif',
            'http://shortify.yamisuresshu.com/Onvinw9aK.gif',
            'http://shortify.yamisuresshu.com/yyBgHbYHp.gif'            
        ]
    }
    get() {
        return this._data;
    }

    getRandom() {
        const random = Math.floor(Math.random() * this._data.length);

        return this._data[random];
    }
}

module.exports = Megumin;