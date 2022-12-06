// Standart while loop
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3
// ----------------------------
// Do while loop
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
// ----------------------------
/* 
************************* What is the difference between while and do while loop? *************************    
Do While loop is similar to while loop, but the difference is that the condition is checked after the execution of the loop.
Örneğin kullanıcıya bir menü gösterilmesi gerekiyor öncelikle do ile menüyü gösterip ardından while ile işlemleri yaparsınız.

*/
