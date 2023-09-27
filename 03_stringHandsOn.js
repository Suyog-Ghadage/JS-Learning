

function stringHandsOn(){
    var string = "   Hey you are doing good,keep it up    ";
    console.log(`Given String Is : ${string}`);
    var lengthOfString = string.length;
    console.log(`length of string Is:${lengthOfString}`);
    var newString = string.trim();
    var aftrttrim = newString.length;
    console.log(`After trim both sides string length is:,${aftrttrim}`);
    var removedspaces = lengthOfString - aftrttrim;
    console.log(`length of Extra Spaces removed Is:,${removedspaces} `);
    console.log(`first and Last character after trim Is :${newString.charAt(0)} And ${newString.charAt(aftrttrim-1)}`);
    console.log(`total words After trim is :${newString.split(" ")}`);
    console.log(`index of good :${string.search("good")}`);
    console.log(`substring After index 22 is :${newString.substring(22)}`);
    console.log(`slice after index 22 is :${newString.slice(22)}`);
    console.log(`Checking string ends with up after trimming : ${newString.endsWith('up')}`);
    console.log(`checking string starts with hey after trimming : ${newString.startsWith('Hey')}`);
    


   
}

stringHandsOn();
