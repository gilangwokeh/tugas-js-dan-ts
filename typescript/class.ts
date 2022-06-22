class Hospital {
  hospitalRoom:string
  hosptalCar:string

  constructor(hospitalRoom:string,hospitalCar:string){
    this.hospitalRoom = hospitalRoom
    this.hosptalCar = hospitalCar
  }
}

let HospitalRoom1 = new Hospital(`Ruangan Pasien`,`Ruangan UGD`);
console.log(HospitalRoom1.hospitalRoom);
console.log(HospitalRoom1)