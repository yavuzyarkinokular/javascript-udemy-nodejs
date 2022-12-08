/* 

   ES6 ile beraber fat arrow functionlar gelmiştir.
   function kelimesi yerine => işaretini kullanırız. Bu işareti de parantez ile küme parantezi arasına yerleştiriyoruz.
*/

// Without Fat Arrow Function
const selamDur = function () {
  console.log("Selam Dur");
};
selamDur(); // Selam Dur
// Fat Arrow Function
const fatArrow = () => {
  console.log("Selam Dur");
};
fatArrow(); // Selam Dur
