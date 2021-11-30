const kataDasar = require("./kataDasar");
const afiksasi = require("./Afiksasi");
const redupe = require("./Reduplikasi");

const returner = (kata, jenis) => ({ kata, jenis });
const returnerAfiksasi = (kata, jenis) => returner(kata, `Afiksasi ${jenis}`);

const pemrosesKata = (kata) => {
  // Cek Reduplikasi
  if (redupe.RkataDasar(kata.toLowerCase()))
    return returner(kata, "Reduplikasi Kata Dasar");

  // Kata dasar
  if (kataDasar.includes(kata.toLowerCase()))
    return returner(kata, "Kata dasar");

  // Cek Afiksasi
  // Sengaja pertama kali yang di cek terlebih dahulu
  // itu afiksasi konfiks karena prefiks dan sufiks
  // terdapat dalam infiks
  const konfiksasi = afiksasi.konfiks.some((k) => k.test(kata));

  if (konfiksasi) return returnerAfiksasi(kata, "konfiksasi");
  else if (afiksasi.prefiks.test(kata))
    return returnerAfiksasi(kata, "Prefiks");
  else if (afiksasi.sufiks.test(kata)) return returnerAfiksasi(kata, "Sufiks");
  else if (afiksasi.infiks.test(kata)) return returnerAfiksasi(kata, "Infiks");

  return returner(kata, "N/A (Tidak diketahui)");
};

module.exports = pemrosesKata;
