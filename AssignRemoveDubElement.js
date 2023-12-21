const arrayNum = [11, 3, 4, 11, 4, 7, 3];

// Convert the array to a Set to remove duplicates
const uniqueSet = new Set(arrayNum);

// Convert the Set back to an array
const uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray);
