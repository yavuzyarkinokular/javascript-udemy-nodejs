/* 
    Texas da olan texas da kalır!
    Global Scope
    İlgili tanımlamaların blok dışında yapıldığı durumlarda global scope olarak adlandırılır. Örneğin: isim diye bir değişkeni if bloğu içerisinde tanımlarsak local scope, if bloğu dışında tanımlarsak global scope olarak adlandırılır.
    Local Scope
    Tanımlamaların özerk bir alan ilan edilmesi durumudur. Örneğin: if bloğu içerisinde tanımlanan bir değişken, if bloğu dışında kullanılamaz. Bu durumda değişkenin tanımlandığı if bloğu içerisinde kullanılabilir. 

    Blok içerisinde ki tanımlamalar blok içerisinde yaşar ve ölür. Aynı aşağıdaki gibi ....

    Dışardakini içeri alırsında içerdekini dışarı alamazsın....

*/
function sevgi() {
  let isim = "Selin";
  console.log(isim + "'e olan sevgim ghep ona ait olacaktır");
}
console.log(isim + "'e olan sevgim ghep ona ait olacaktır");
