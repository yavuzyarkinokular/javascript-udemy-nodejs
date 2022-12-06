// For Döngüleri

/* Burada for döngüsü 0dan başlayarak 4 e kadar 4 dahil sayıları ekleyerek gider 5 ten küçük olduğu
için de döngü sonlanır. Ve alert ile toplam değişkenini ekrana basar. 

Tekrar sayısı belli olaylar için for döngüsü kullanılır. Ama kullanıcı döngüyü kırmak istediği durumlarda while döngüsü tercih edilir.
*/
let toplam = 0;

for (let i = 0; i < 5; i++) {
  toplam += i;
  console.log("Döngü:" + i + " " + "Sayılar Toplamı:" + toplam);
}
/* alert(toplam); */
