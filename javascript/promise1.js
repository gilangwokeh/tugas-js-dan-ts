let Promise = 100;
let myPromise = new Promise(function(myResolve, myReject) => {
  if (Promise == 100){
    console.log(`anda berhasil masuk`)
  }else {
    myReject()
  }
  });
