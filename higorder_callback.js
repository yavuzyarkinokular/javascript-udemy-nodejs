/* 
    Veri tipinin ne olduğunu öğrenmek için kullandığımız type of un alternatifi olan instanceof operatörü mevcuttur 
    aslında ayrı olarak anlatılan arraylerde birer objelerdir bu yüzden instanceof sorgusunda true değeri döner
    fonksiyonlarda objedir bu yüzden instanceof sorgusunda true değeri döner
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Dikkat !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    Adresler de ki değişiklikler kalıcıdır örneğin sayi diyip bir tanımlama yaptığımda o sayıyıy o an için değiştirir ama index bazlı bir değişiklik yapılırsa
    örneğin bir dizi elemanlarını ikiyle çarp gibi bir değişiklik olması durumunda o sayıları görüntülemek için indexini çağırmamız ve öyle değişiklik yapmamız
    gerekiyor. Bu durumda da o dizideki elemanların değişikilik durumu kalıcı olmuş oluyor. 
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  Dikkat !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    Eğer ki fonksiyon içine parametre olarak başka fonksiyon alırsa high order function denir. 
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    .toUpperCase() metodu : ile stringlerin tüm harflerini büyük harfe çevirir.
    callback(): aslında tetiklenecek bir fonksiyon arar.




*/

let person = {
  name: "Mehmet",
  age: 25,
};
console.log(person instanceof Object); // true

let denemeDizisi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const carpici = function (eleman) {
  for (let i = 0; i < eleman.length; i++) {
    eleman[i] = eleman[i] * 2;
  }
  return eleman;
};
console.log(carpici(denemeDizisi));
console.log(denemeDizisi);
// İç İçe Fonksiyonlar

let vizeNot = prompt("Lütfen Vize Notunuzu Giriniz");
let finalNot = prompt("Lütfen Final Notunuzu Giriniz");
const vizeHesapla = function (vize) {
  return vize * 0.4;
}; //first class function
const finalHesapla = function (final) {
  return final * 0.6;
}; //first class function
const genelNotHesapla = function (vize, final) {
  return vize + final;
}; //first class function

const notHesapla = function (not1, not2, fonk1, fonk2, fonk3) {
  console.log("Vize Notunuz: " + fonk1(not1));
  console.log("Final Notunuz: " + fonk2(not2));
  console.log("Genel Notunuz: " + fonk3(fonk1(not1), fonk2(not2)));
};
notHesapla(vizeNot, finalNot, vizeHesapla, finalHesapla, genelNotHesapla); // callback function
/* notHesapla(
  vizeHesapla(vizeNot),
  finalHesapla(finalNot),
  genelNotHesapla(vizeHesapla(vizeNot), finalHesapla(finalNot))
); */
// İç İçe Fonksiyonlar Bitiş

// Adımı Bağır Fonksiyonu

function adimibagir(ad, soyad, callback) {
  const messages =
    "MERHABA" + " " + ad.toUpperCase() + " " + soyad.toUpperCase();
  callback(messages);
}
adimibagir("yarkın", "okular", showMessage);

function showMessage(messages) {
  console.log(messages);
}
