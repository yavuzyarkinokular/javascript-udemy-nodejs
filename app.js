const { argv } = require("process");
const yargs = require("yargs");
const kisi = require("./kisi");

console.log(yargs.argv);

//Kişi Ekle
yargs.command({
  command: "ekle",
  describe: "Yeni kişi eklemeye yarar ",
  builder: {
    isim: {
      describe: "Kişinin ismi",
      demandOption: true,
      type: "string",
    },
    soyisim: {
      describe: "Kişinin Soyisimi",
      demandOption: true,
      type: "string",
    },
    mail: {
      describe: "Kişinin maili",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    kisi.kisiEkle(argv.isim, argv.soyisim, argv.mail);
  },
});
yargs.command({
  command: "sil",
  describe: "Kişiyi silmeye yarar ",
  builder: {
    isim: {
      describe: "Kişinin ismi",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    kisi.kisiSil(argv.isim);
  },
});
yargs.command({
  command: "goster",
  describe: "Kişiyi göstermeye yarar ",
  builder: {
    isim: {
      describe: "Kişinin ismi",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    kisi.kisiGoster(argv.isim);
  },
});
yargs.command({
  command: "listele",
  describe: "Kişileri göstermeye yarar",

  handler(argv) {
    kisi.kisiGoster(argv.isim);
  },
});
yargs.parse();
