/* 
            Fonksiyon Kavramı
        Fonksiyonların bir kere kullanılıp gitmez. Çağırıldığı müddetçe tekrar tekrar kullanılabilir.
        return kullanılmadığında değeri global scope da yaklamak gerekir.


*/

let sayi1 = 10;
let sayi2 = 20;

function topla(sayi1, sayi2) {
  let toplam = sayi1 + sayi2;
  return toplam;
}
console.log(topla(sayi1, sayi2));
