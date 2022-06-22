"use strict";
class Cilokan {
    constructor(CilokGerobak, CilokPenggorengan, CilokIsi) {
        this.CilokGerobak = CilokGerobak;
        this.CilokPenggorengan = CilokPenggorengan;
        this.CilokIsi = CilokIsi;
    }
}
class Ayam extends Cilokan {
    constructor(CilokGerobak, CilokPenggorengan, CilokIsi, AyamTepung, Ayamkuah) {
        super(CilokGerobak, CilokPenggorengan, CilokIsi);
        this.AyamTepung = AyamTepung;
        this.Ayamkuah = Ayamkuah;
    }
}
let AbangCilokan = new Ayam(`gerobak besar`, `penggorangan sedang`, 200, `terigu`, `cilok`);
console.log(AbangCilokan);
console.log(AbangCilokan.Ayamkuah);
console.log(AbangCilokan.AyamTepung);
