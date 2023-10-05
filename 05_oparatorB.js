function greaterNumber(num1,num2){
    var number1 = num1;
    var number2 = num2;

    var greaternum = number1 > number2 ? number1 : number2 ; 

    console.log(`greater number Is : ${greaternum}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`*****************************************************************************`);

function isOddOrEven (num){
    var num;
    var result = num % 2 == 0 ? " number is Even" : "number is Odd";
    console.log(`Given ${num} is ${result} `);
}
isOddOrEven(29);
isOddOrEven(44);
isOddOrEven(0);
isOddOrEven(101);

console.log(`*****************************************************************************`);

function WordLength(a){
    var word = a;
    var wLength = word.length;
    var result = wLength % 2 == 0 ? "Length of word is Even" : "Length of word is ODD" ;
    console.log(`word is : ${word} length of word is : ${wLength} Given ${result}`);
}

WordLength("javaScript");
WordLength("developer");
WordLength("Google");



