



function factorial (num){
    let factnum = 1;
    for (let index = num; index >= 1; index--) {
        factnum = factnum * index ;
        
    }
    console.log(`factorial of ${num} is ${factnum}`);

}
factorial(5);

console.log(`==============prime Number================`);


function isPrime(num){
    for (let index = 1; index < num; index++) {
        if (num % index == 0) {
            console.log(`${num} is not prime`);
            
        } else {
            console.log(`${num} is prime number`);
            
        }

        
    }
}
isPrime(4);