let global = 100;
function outer(){
    let outerVariable = 200;
    let inner = function(){
        let innerVariable = 300;
        console.log(innerVariable, outerVariable, global);
    }
    return inner;
}
// outer()();
let result = outer();
result();



function jennyHomework(callback){
    console.log(`Jenny started assignments`);
    console.log('Her assignments solving is in progress');
    console.log(`Jenny's assignment is completed`);
    callback();
}
let elonCopyHomework = function(){
    console.log(`Thank you Jenny for calling me back`);
    console.log('Elon started copying assignments');
    console.log('Elon copied all assignments');
}
jennyHomework(elonCopyHomework);
 
console.log(`================================`);
// 1 sec = 1000 ms
setTimeout( function(){
    console.log('Inside callback function');
}, 5000);