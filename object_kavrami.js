/*  
    Objectin arrayden farkı object ile iki ayrı veri de tutabiliyoruz hatta bu daha da artabilir. Örneğin bir veri setimiz var ve bunda kullanıcı bilgilerini tutmak istiyorsak tercihimiz object olacaktır. Çünkü objectlerde birden fazla veri tutabiliriz.
    Bu veri seti içerisinde fonksiyon bile tutulabilir.
    Temel mantıkta hepsi key-value ilişkisinde dayanıyor. : 'nın sol tarafı key sağ tarafı value anlamına gelir.
    Aynı şekilde oluşturulan objeleri bir dizide saklayabiliriz.
    Object içerisinde ki value güncellemesi dizilerle aynı şekilde ilerleme kaydeder.

*/
let yarkoBilgiler = {
  ad: "Yavuz Yarkın",
  soyad: "Okular",
  yas: 23,
  meslek: "Satış Danışmanı",
  iliskiVarMi: false,
};
let erdemBilgiler = {
  ad: "Erdem",
  soyad: "Çankaya",
  yas: 23,
  meslek: "Yazılım Uzmanı",
  iliskiVarMi: true,
};
let mustafaBilgiler = {
  ad: "Mustafa",
  soyad: "Akyüz",
  yas: 23,
  meslek: "Elektrik Mühendisi",
  iliskiVarMi: false,
};
/* 
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Bu bilgileri çekmenin 2 methodu mevcut  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     !!!!!!!!!!!! 1. Method !!!!!!!!!!!!
            console.log("Method 1: " + yarkoBilgiler.ad);
      !!!!!!!!!!!! 2. Method !!!!!!!!!!!!
            console.log("Method 2: " + yarkoBilgiler["ad"]);
*/
// ------------------------------------------------------------------------------
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Object içerisinde fonksiyon tutmak !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let yasFarkiFonksiyon = {
  ad: "Yavuz Yarkın",
  soyad: "Okular",
  yas: 23,
  meslek: "Satış Danışmanı",
  yasFarkiHesapla: (yas) => {
    return 2020 - yas;
  },
};
console.log(yasFarkiFonksiyon.yasFarkiHesapla(1999));
// ------------------------------------------------------------------------------

/* 
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Object içinde ki değerden fonksiyon oluşturmak !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    - Object içerisinde ki herhangi bir değeri kullanmak için this ile çağırmak zorundayız aksi takdirde o değeri direkt olarak değer ismiyle çekemeyiz. 
*/
let yasFarkiObject = {
  ad: "Yavuz Yarkın",
  soyad: "Okular",
  dogumYili: 1999,
  meslek: "Satış Danışmanı",
  yasFarkiHesapla: function () {
    return 2020 - this.dogumYili;
  },
};
console.log(yasFarkiObject.yasFarkiHesapla());
// ------------------------------------------------------------------------------
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Objelerin diziler içerisinde tutulması !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let kullaniciBilgileri = [yarkoBilgiler, erdemBilgiler, mustafaBilgiler];
console.log(
  kullaniciBilgileri[2].ad +
    " adlı kullanıcının ilişki durumu " +
    " " +
    kullaniciBilgileri[2].iliskiVarMi
);
// ------------------------------------------------------------------------------
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Eski Usül Object Atama  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let egeBilgileri = new Object();
egeBilgileri.ad = "Ege";
egeBilgiler.soyad = "Bağçıvan";
egeBilgileri.yas = 23;
egeBilgiler.iliskiVarMi = true;
// ------------------------------------------------------------------------------
