"use strict";
class Hospital {
    constructor(hospitalRoom, hospitalCar) {
        this.hospitalRoom = hospitalRoom;
        this.hosptalCar = hospitalCar;
    }
}
let HospitalRoom1 = new Hospital(`Ruangan Pasien`, `Ruangan UGD`);
console.log(HospitalRoom1.hospitalRoom);
console.log(HospitalRoom1);
