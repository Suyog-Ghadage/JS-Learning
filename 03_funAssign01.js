console.log("-------Function with no argument and no return type------------");
function education() {
  console.log("collage Name : D.Y.Patil collage of engineering,Akurdi");
  console.log("department : Production Engineering(sandwich)");
  console.log("Passout year : 2022");
}

function Skills() {
  console.log(
    "Courses completed : C,C++,data structure,Networking,HTML,CSS,GIT & GITHUb"
  );
  console.log("courses in live : javaScript,bootstrap,typeScript,Angular");
}

function PersonalDetail(fristName, lastName) {
  console.log("first Name :", fristName);
  console.log("last Name :", lastName);
  console.log("collage name :DYPCOE");
}

function swapValue(val1, val2) {
  var num1 = val1;
  var num2 = val2;
  console.log("before Swapping :", num1, num2);
  var temp = num1;
  num1 = num2;
  num2 = temp;
  console.log("after swapping :", num1, num2);
}

function addThreeValues(value1, value2, value3) {
  var w1 = value1;
  var w2 = value2;
  var w3 = value3;
  var add = w1 + w2 + w3;
  console.log("addition of Three is:", add);
}

console.log(
  "*************************************************************************************"
);

education();
console.log(
  "*************************************************************************************"
);

Skills();

console.log(
  "*************************************************************************************"
);

PersonalDetail("Suyog", "Ghadage");

console.log(
  "*************************************************************************************"
);

swapValue("virat", "Anushka");
console.log(
  "*************************************************************************************"
);

swapValue("1000", "2000");

console.log(
  "*************************************************************************************"
);

addThreeValues("10.23", "600", "40");
console.log(
  "*************************************************************************************"
);

console.log(
  "*************************************************************************************"
);
addThreeValues("Hello", "Good", "Morning");
console.log(
  "*************************************************************************************"
);
