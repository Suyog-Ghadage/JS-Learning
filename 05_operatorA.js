function squareOfWordLength(word){
    var givenWordIs = word;
    console.log(`given word Is : ${givenWordIs}`);
    console.log(`length of Word is : ${word.length}`);
    var lengthOfWord = word.length ;
    var result = lengthOfWord * lengthOfWord ;
    console.log(`square of word length is :${result}`);
}
squareOfWordLength("JavaScript");

squareOfWordLength("Google Chrome");

squareOfWordLength("Developer Smart");

console.log(`============================(2)===============================`);

function givenstring(){
    var string = "I Am Angular Developer";
    console.log(`Given String Is: "I Am Angular Developer" `);
    var stringLength = string.length;
    console.log(`Length of Given String Is : ${stringLength}`);
    var stringSplite = string.split(" ");
    console.log(`words in String Is : ${stringSplite}`);
    var spliteLength = stringSplite.length;
    console.log(`Length After Splite Is : ${spliteLength}`);
    var division = stringLength/spliteLength;
    console.log(`division of length of string by words in string Is : ${division}`);
    var multiply = stringLength * spliteLength;
    console.log(`Division of length of string and Word in string Is : ${multiply}`);


}
givenstring();