let string = `------------------------------------------------------------`
console.log(`perulangan ganjil`)
const ganjil = () => {
    for(let i = 0;i < 15;i++){
        if(i % 2 == 1) {
            console.log(`angka :`,i)
        }
    }    
}
ganjil()
console.log(string)
console.log(`perulangan genap`)
const genap = () => {
    for(let i = 0;i < 15;i++){
        if(i % 2 == 0) {
            console.log(`angka :`,i)
        }
    }    
}
genap()
console.log(string)
console.log(`di bawah ini adalah bilangan fibonacci`)
const fibonacciSequence = (numbersToReturn: number = 20): number[] => {
            const numbers: number[] = [];
    
            for (let i = 1; i <= numbersToReturn; i++) {
                if (i === 1 || i === 2) {
                    numbers.push(i);
                    continue;
                }
    
                let lastNumber: number             = numbers[numbers.length - 1];
                let theNumberBeforeTheLast: number = numbers[numbers.length - 2];
                numbers.push(lastNumber + theNumberBeforeTheLast);
            }
    
            return numbers;
        }
console.log(fibonacciSequence());
console.log(string)
console.log(`ini adalah bilangan prima`)
const BilanganPrima = (angka:number) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
        if (angka%i == 0){
            pembagi++
        }
    }   
    if(pembagi == 2){
        console.log(pembagi)
    }else{
        console.log(angka)
    }
}   
BilanganPrima(2); //bilangan prima
BilanganPrima(3); //bilangan prima
BilanganPrima(4);  //bilangan bukan prima
BilanganPrima(9);  //bilangan bukan prima
console.log(string)
console.log(`perkodisian`);
const perkodisian = () => {
    let role = `client` || `admin`

    if(role == string){
        console.log(`CLIENT`);
    }else{
        console.log(`ADMIN`);
    }
}
perkodisian()
