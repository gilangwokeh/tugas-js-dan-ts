class Zoom {
    animal:string
    bluebird:string

    constructor(animal:string,bluebird:string){
        this.animal = animal
        this.bluebird = bluebird

    }

    printZoom (): string {
        return this.animal ,this.bluebird
    }

}

class Reward extends Zoom {
     sound:string

    constructor(animal:string,bluebird:string, sound:string){
        super(animal,bluebird)
        this.sound = sound
    }
    printZoom ():string {
        return `${this.animal},${this.bluebird} have ${this.sound}`
    }

}

let maroon = new Zoom(`Zebra`,`scorpion`)
let boy = new Reward(`elepant`,`crocodile`,`tiger`)
console.log(maroon)
console.log(maroon.bluebird)
console.log(boy.sound)
console.log(maroon.animal)