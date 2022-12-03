//Primitive Variable Types: String, Number, Boolean, Null, Undefined
//Reference Variable Types: Object, Array, Function
// Ters taksim işareti Tek tırnaklar içinde kullanılırsa string olarak algılanır ve yapıyı bozmadan kodu okumaya devam eder.
console.log("Yarkoze 35 'in hayatı hep boktandır");

//typeof: Değişkenin tipini gösterir.
console.log(typeof "Yarkoze 35 'in hayatı hep boktandır");

// Değişkenlerin eklenmesi + komutuyla yapılır
let isim = prompt("İsminizi giriniz");
let soyisim = prompt("Soyisminizi giriniz");
console.log("Hoşgeldiniz," + "" + isim + " " + soyisim);

//Template literals: String ifadeleri yazarken + işareti yerine `` kullanılır.
let text = `${isim} ${soyisim}`;
console.log(text);

//Boolean: True ve False değerlerini alır.
let benSeviliyorum = true;
console.log(
  "Acaba ben seviliyor muyum?" +
    " " +
    benSeviliyorum +
    "Veri Tipi:" +
    typeof benSeviliyorum
);

//undefined: Değişken tanımlanmış ama değeri atanmamışsa undefined değerini alır.
let benSeviliyorum2;
console.log(benSeviliyorum2);
x;
