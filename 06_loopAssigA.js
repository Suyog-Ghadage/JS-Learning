var str = "I Am very Good IT Developer";
var count = 0;
var vowelCap = "AEIOUaeiou";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if (vowelCap.includes(char)) {
        count = count + 1;
     
    }
    
}
console.log(`total number of vowels are ${count}`);
console.log(`vowels are ${char}`);

var result = 0;
for (let index = 1; index <= 5  ; index++) {
    result = result + index * index * index ;
    
}
console.log(`sum of cube of numbers from 1 to 5 = ${result}`);

var str1 = "Hard work always pay back";
var str2 = "Soon I will be UI IT Champ";

function oddPositionChars(String){
    var str = String;

    for (let index = 0; index <= str.length-1; index++) {
        if (index%2 !=0 && str.charAt(index)!= " ")
        {
            
        console.log(str.charAt(index));
        }
        
        
    }
    
}
// oddPositionChars(str1);

// oddPositionChars(str2);
