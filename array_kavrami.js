/*  Verileri bir arada tutan dizi kavramına denir
Genelde araba model marka tutulması en büyük örnektir. 
Apilerde bir nevi arraylerdir.
*/

let arabaAriza = ["Buji", "Yakıt pompası ", "Buji kablolari"];

for (let i = 0; i < arabaAriza.length; i++) {
  let arizas = arabaAriza[i];
  console.log(arizas);
}

/*  

    -Herhangi bir indeksteki dizi değerini değiştirmek istiyorsam direkt olarak o diziyi çağırıyorum ve değiştiriyorum 
        arabaAriza[0] = "Yakıt pompası";
    - Olmayan bir indeks sayısına değer ataması yapılırsa ilgili diziye yine ekleme yapar. Fakat o indeks rakamına kadar boş bırakır. 
        arabaAriza[20] = "Yakıt pompası";
    - Dizinin sayısını öğrenmek için .length kullanılır.
        arabaAriza.length

*/
// ---------------- Önemli array fonksiyonları -----------------
/* 
    - .toString() : Diziyi stringe çevirir.
    -.join() : Diziyi stringe çevirir. İçine parametre olarak bir değer alır. Bu değer dizinin elemanları arasına konulur.
    -push() : Dizinin sonuna eleman ekler.
    -pop() : Dizinin sonundaki elemanı siler. Ve silinen elemanı döndürür.
    -shift() : Dizinin başındaki elemanı siler. Ve silinen elemanı döndürür. Mantığı, elemanları sola doğru kaydırır.
    -unshift() : Dizinin başına eleman ekler.Dizi elemanlarını sağa doğru kaydırır ekler.
    ** Eğer ki bizim dizide elemanları ekleyişimizin sağa yada sola olmasının bir önemi yoksa pop ve push tercihini yapmak performans açısından daha iyi olacaktır.
    -splice() : Dizinin istediğimiz bir yerine eleman eklememizi sağlar. İlk parametre olarak dizinin hangi indexinden itibaren ekleme yapılacağını belirtir. İkinci parametre ise kaç eleman silineceğini belirtir. Üçüncü parametre ise eklenecek elemanı belirtir.
        sayilar.splice(2, 0, 5); // 2. indexden itibaren 0 eleman sil ve 5 değerini ekle
    -slice() : Dizinin istediğimiz bir kısmını almak için kullanılır. İlk parametre olarak dizinin hangi indexinden itibaren alınacağını belirtir. İkinci parametre ise kaç eleman alınacağını belirtir.
        sayilar.slice(2, 5); // 2. indexden itibaren 5 eleman al 
    ---- Dipnotlar: ----
    *** Sağa sola kaydırmalar index silinince ki boşluğu göstermemek için yapılır bu yüzden performans açısından daha kötüdür. Çünkü o boşluk veritabanı gibi sistemlerde her zaman durur sadece veri barındırmaz.

    ---- Index bazlı işlemler ----
    delete diziIsmi[silinecek_index_numarasi] : Dizinin içindeki elemanı siler. Fakat silinen elemanı döndürmez.
    ---- Dizileri birleştirme ----
    let yeni_degisken_tanimlamasi = diziIsmi1.concat(diziIsmi2); : İki diziyi birleştirir. 
*/
