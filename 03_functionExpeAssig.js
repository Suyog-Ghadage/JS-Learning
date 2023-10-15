var square = function (value){
    return value * value;

}
var result = square(5);
console.log(`suqare of 5 is = ${result}`);
console.log(typeof square);
var result = square(6);
console.log(`suqare of 6 is = ${result}`);
console.log(typeof square);
var result = square(25);
console.log(`suqare of 25 is = ${result}`);
console.log(typeof square);
var result = square(100);
console.log(`suqare of 100 is = ${result}`);
console.log(typeof square);
var result = square(67);
console.log(`suqare of 67 is = ${result}`);
console.log(typeof square);
var result = square(89);
console.log(`suqare of 89 is = ${result}`);
console.log(typeof square);
var result = square(59);
console.log(`suqare of 59 is = ${result}`);
console.log(typeof square);


var areaOfRectangular = function (val1,val2){
    return val1 * val2;
}
var result = areaOfRectangular(499,917)
console.log(`Area of rectangular is : ${result}`);


var swaping = function(a,b){
    var val1 = a;
    var val2 = b ;
    console.log(`value before swap = ${val1} & ${val2} `);
    var temp = val1 ;
    var val1 = val2 ;
    var val2 = temp ;
    console.log(`value After swap = ${val1} & ${val2}`);
    
}
var result = swaping ("Mahi","Raina")
var result = swaping ("55","77")


var string = function(){
    var str = "JS the Most Popular Language of Internet";
    var totalChar =str.length;
    console.log(`total character in string  = ${totalChar}`);

    console.log(`character at index 6 is = ${str.charAt(6)}`);
    console.log(`character at index 11 is = ${str.charAt(11)}`);
    console.log(`character at last is = ${str.charAt(totalChar-1)}`);
    console.log(`first character in string = ${str.charAt(0)}`);
    console.log(`third last character from string = ${str.charAt(totalChar-3)}`);
    var wordSplit = str.split(" ");
    console.log(`total number  of words in string = ${wordSplit}`);
    console.log(`length of words in string = ${wordSplit.length}`);
    var number = wordSplit.length;
    console.log(`square of total words in string = ${number * number}`);
}
var result = string()



