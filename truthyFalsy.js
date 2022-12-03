// Numaralarda ki 0 ifade false olarak algılanır.
// String ifadelerde de boş bırakılıp değer girilmezse false olarak algılanır.
// Nan ifadesi false olarak algılanır. Anlam olarak not a number anlamına gelir.
// sayıdan sonra ki metin dönüşümleride js algoritmasında true olarak algılanır.
// String bir tanıma matematiksel operatör olarak + kullanırsak true, * kullanırsak false olarak algılanır.

let dogumYili = 1990;
dogumYili = " fasdfsa";
if (dogumYili) {
  console.log("True ifadedir" + " " + dogumYili);
} else {
  console.log("False ifadedir" + " " + dogumYili);
}

/* Özetçe bir ifade de değer tanımı belliyse true ifade döner
ama değer tanımı yoksa false ifade döner. 
NaN,undefined,null,0,"", false değer olarak algılarnır. */
