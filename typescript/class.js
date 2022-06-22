var Hospital = /** @class */ (function () {
    function Hospital(hospitalRoom, hospitalCar) {
        this.hospitalRoom = hospitalRoom;
        this.hosptalCar = hospitalCar;
    }
    return Hospital;
}());
var HospitalRoom1 = new Hospital("Ruangan Pasien", "Ruangan UGD");
console.log(HospitalRoom1.hospitalRoom);
console.log(HospitalRoom1);
