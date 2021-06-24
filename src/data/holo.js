class Holo {
    constructor() {
        this._data = [
            'http://shortify.yamisuresshu.com/newRoiv9r.gif',
            'http://shortify.yamisuresshu.com/SLWarV6qn.gif',
            'http://shortify.yamisuresshu.com/fkWUA6Nqk.gif',
            'http://shortify.yamisuresshu.com/Oh6VPREt3.gif',
            'http://shortify.yamisuresshu.com/4UR--Vtjn.gif',
            'http://shortify.yamisuresshu.com/DM-kN3A2p.gif',
            'http://shortify.yamisuresshu.com/olFHfFGSD.gif',
            'http://shortify.yamisuresshu.com/MXkZGiMPp.gif',
            'http://shortify.yamisuresshu.com/zumBwU1ZU.gif',
            'http://shortify.yamisuresshu.com/313b9Ts6R.gif',
            'http://shortify.yamisuresshu.com/IYjevMaIu.gif',
            'http://shortify.yamisuresshu.com/2xWpmHCat.gif',
            'http://shortify.yamisuresshu.com/5AQV1WKYi.gif',
            'http://shortify.yamisuresshu.com/pxnqsQvVn.gif'
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

module.exports = Holo;