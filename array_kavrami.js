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
