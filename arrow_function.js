/* 

   ES6 ile beraber fat arrow functionlar gelmiştir.
   function kelimesi yerine => işaretini kullanırız. Bu işareti de parantez ile küme parantezi arasına yerleştiriyoruz.
   Parametre almıyorsa fonksiyon parantez işareti yerine _ ile geçebiliriz.
   Parametreli fonksiyonlarda da eğer tek bir parametre yolluyorsak parantez kullanmamıza gerek yoktur.
   return gibi aksiyon veren durumlarda fat arrow kullanırken mutlaka süslü parantez kullanmalıyız.
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

// Like Fat Arrow Function
const likeFatArrow = (_) => {
  console.log("Selam Dur");
};
fatArrow(); // Selam Dur

// Parameters with Fat Arrow Function
const sayiKaresiAl = (sayi) => {
  return sayi * sayi;
};
console.log(sayiKaresiAl(5)); // 25

// Parameters with Fat Arrow Function Short Version
const satiAlKaresi = (sayi) => {
  return sayi * sayi;
};
console.log(sayiKaresiAl(5)); // 25

// Best Shortcut With Fat Arrow Function
const multiplyNumbers = (s1, s2) => s1 * s2;
