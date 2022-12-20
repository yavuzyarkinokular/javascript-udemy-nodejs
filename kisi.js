const ekle = function (isim, soyisim, mail) {
  console.log("isim:" + isim + "soyisim:" + soyisim + "mail:" + mail);
};
const sil = function (isim) {
  console.log("isim:" + isim);
};
const goster = function (isim) {
  console.log("isim:" + isim);
};
const listele = function (isim) {
  console.log("isim:" + isim);
};

module.exports = {
  kisiEkle: ekle,
  kisiSil: sil,
  kisiGoster: goster,
  kisiListele: listele,
};
