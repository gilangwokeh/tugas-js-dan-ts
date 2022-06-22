"use strict";
class Skip {
    constructor(name, meja, ruanganKosong) {
        this.name = name;
        this.meja = meja;
        this.ruanganKosong = ruanganKosong;
    }
}
const gilang = new Skip(`gilang`, `kayu`, false);
console.log(gilang);
