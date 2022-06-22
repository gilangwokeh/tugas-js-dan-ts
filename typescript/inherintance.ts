class Cilokan {
  CilokGerobak:string
  CilokPenggorengan:string
  CilokIsi:number

  constructor(CilokGerobak:string,CilokPenggorengan:string,CilokIsi:number){
      this.CilokGerobak = CilokGerobak
      this.CilokPenggorengan = CilokPenggorengan
      this.CilokIsi = CilokIsi 
  }
}

class Ayam extends Cilokan {
  AyamTepung:string
  Ayamkuah:string

  constructor(CilokGerobak:string,CilokPenggorengan:string,CilokIsi:number,AyamTepung:string,Ayamkuah:string){
      super(CilokGerobak,CilokPenggorengan,CilokIsi)
      this.AyamTepung = AyamTepung
      this.Ayamkuah = Ayamkuah
  }
}

let AbangCilokan = new Ayam(`gerobak besar`,`penggorangan sedang`,200,`terigu`,`cilok`)
console.log(AbangCilokan);
console.log(AbangCilokan.Ayamkuah);
console.log(AbangCilokan.AyamTepung);