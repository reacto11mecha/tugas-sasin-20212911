/*
 * Prefiks
 * jenis afiksasi yang imbuhannya
 * terletak di awal kata dasar
 *
 * List kata-katanya sebagai berikut:
 *
 * me,di,pe,per,ter,se
 *
 * Huruf awalan bisa saja huruf kapital oleh karenanya
 * regular expression dibuat support huruf kapital dan Huruf
 * biasa dari list kata afiksasi prefiks.
 */

// new RegExp('^([mM]e|[dD]i|[pP]e(r?)|[tT]er|[sS]e).')
const prefiks = /^([mM]e|[dD]i|[pP]e(r?)|[tT]er|[sS]e)./;

/*
 * Infiks
 * jenis afiksasi yang imbuhannya
 * terletak di tengah kata dasar
 *
 * List kata-katanya sebagai berikut:
 *
 * el,em,er
 *
 * Infiks ini jarang ditemukan karena jarang penggunaannya
 * di bahasa indonesia itu sendiri
 */

// new RegExp('.(el|em|er).')
const infiks = /.(el|em|er)./;

/*
 * Sufiks
 * jenis afiksasi yang imbuhannya
 * terletak di akhir kata dasar
 *
 * List kata-katanya sebagai berikut:
 *
 * kan,an,i,wan,man,wati
 *
 */

// new RegExp('.((k|w|m)?an|(wat?)i)$')
const sufiks = /.((k|w|m)?an|(wat?)i)$/;

/*
 *
 * jenis afiksasi yang imbuhannya
 * terletak di awak dan akhir kata dasar
 *
 * List kata-katanya sebagai berikut:
 *
 * ke-an,per-an,pe-an,ber-an,se-an,se-nya
 *
 */

const konfiks = [
  // Kumpulan konfiks dengan (n)-an,
  // new RegExp('([kK]e|[pP]e(r?)|ber|se)(.*)\w*an\b')
  /^([kK]e|[pP]e(r?)|ber|se)(.*)\w*an\b/,

  // Kumpulan konfiks dengan se-nya,
  // new RegExp('^[se](.*)\w*nya\b')
  /^[se](.*)\w*nya\b/,
];
