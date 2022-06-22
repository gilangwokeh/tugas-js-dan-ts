interface House {
    name:string
    meja :string
    ruanganKosong: boolean

}

class Skip implements House {
    name:string
    meja :string
    ruanganKosong:boolean

    constructor(name:string,meja:string,ruanganKosong:boolean){
        this.name = name
        this.meja = meja
        this.ruanganKosong = ruanganKosong


    }
}


const gilang = new Skip(`gilang`,`kayu`,false)
console.log(gilang)