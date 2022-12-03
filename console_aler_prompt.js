let trialversion = "test code of javascript";
console.log(trialversion);
console.error("Hatalı işlem");
console.warn("Tekrar deneyiniz");
//console.clear(); ile bu konsol ekranını temizleyebiliriz.
console.table({ name: "Erdem", age: 24 });

// console.time("deneme"); ile başlayıp console.timeEnd("deneme"); ile bitiriyoruz.
console.time("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");
console.log("deneme");

console.timeEnd("deneme");
// time ın işlevi kodun kaç saniyede çalıştığını gösteriyor.
/* Alert: Kullanıcıya uyarı mesajı göstermek için kullanılır.

alert("Seni seviyorum"); */

// Prompt: Kullanıcıdan bilgi almak için kullanılır.
let isimOgrenme = prompt("Adınız nedir?");
alert("Seni Seviyorum " + isimOgrenme);
