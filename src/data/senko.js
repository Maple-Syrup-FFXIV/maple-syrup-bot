class Senko {
    constructor() {
        this._data = 
        [
            'http://shortify.yamisuresshu.com/xH2NUXcRm.gif',
            'http://shortify.yamisuresshu.com/EoJyVeLTD.gif',
            'http://shortify.yamisuresshu.com/z-kklnKln.gif',
            'http://shortify.yamisuresshu.com/tAeZRoOzE.gif',
            'http://shortify.yamisuresshu.com/7c8YJvfZM.gif',
            'http://shortify.yamisuresshu.com/4Z2-guDCq.gif',
            'http://shortify.yamisuresshu.com/EHwf7hSxy.gif',
            'http://shortify.yamisuresshu.com/Vi8IcIJ3M.gif',
            'http://shortify.yamisuresshu.com/ZKrqkYyQh.gif',
            'http://shortify.yamisuresshu.com/TnGGJL4RY.gif',
            'http://shortify.yamisuresshu.com/eToK4E4kc.gif',
            'http://shortify.yamisuresshu.com/UzroD3aGK.gif',
            'http://shortify.yamisuresshu.com/wvAyOCLUv.gif',
            'http://shortify.yamisuresshu.com/N7UQQQpqf.gif',
            'http://shortify.yamisuresshu.com/Vqc1U3vMh.gif',
            'http://shortify.yamisuresshu.com/qwwP-khRc.gif',
            'http://shortify.yamisuresshu.com/C1hmw3U5r.gif',
            'http://shortify.yamisuresshu.com/zsFr_LeKT.gif',
            'http://shortify.yamisuresshu.com/jqDraU7yO.gif',
            'http://shortify.yamisuresshu.com/aNfaGV0vH.gif',
            'http://shortify.yamisuresshu.com/RtPG5JEkl.gif',
            'http://shortify.yamisuresshu.com/ICoWYmiQZ.gif',
            'http://shortify.yamisuresshu.com/kjNuu7jYv.gif',
            'http://shortify.yamisuresshu.com/byjRvOG33.gif',
            'http://shortify.yamisuresshu.com/h1pacLZbO.gif'
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

module.exports = Senko;