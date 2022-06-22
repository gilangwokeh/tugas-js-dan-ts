"use strict";
class Zoom {
    constructor(animal, bluebird) {
        this.animal = animal;
        this.bluebird = bluebird;
    }
    printZoom() {
        return this.animal, this.bluebird;
    }
}
class Reward extends Zoom {
    constructor(animal, bluebird, sound) {
        super(animal, bluebird);
        this.sound = sound;
    }
    printZoom() {
        return `${this.animal},${this.bluebird} have ${this.sound}`;
    }
}
let maroon = new Zoom(`Zebra`, `scorpion`);
let boy = new Reward(`elepant`, `crocodile`, `tiger`);
console.log(maroon);
console.log(maroon.bluebird);
console.log(boy.sound);
console.log(maroon.animal);
