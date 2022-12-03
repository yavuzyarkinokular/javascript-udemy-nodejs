// += solundaki değişkeni sağdaki değer ile toplayıp solundaki değişkene atar.

let dogumTarihi = 1990;
let tckimlikNo = 12345678910;
console.log(dogumTarihi); // 12345680900
dogumTarihi += tckimlikNo;
console.log(dogumTarihi);

// -= solundaki değişkeni sağdaki değerden çıkarıp solundaki değişkene atar.
let tarihDogum = 1999;
let NoTc = 41836529716;
console.log(tarihDogum); // 12345680900
tarihDogum -= NoTc;
console.log(tarihDogum);

//Mantıksal Operatörler: && ve , || veya , !

let sayi1 = 10;
let sayi2 = 20;
console.log(sayi1 == 10 && sayi2 == 20); // true
// veya da ikisinden biri true olursa true döner.
// === hem değer hem de veri tipi kontrol edilir.
// !== hem değer hem de veri tipi kontrol edilir.
