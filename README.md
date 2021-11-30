# tugas-sasin-20212911

Tugas sastra dan bahasa indonesia, repositori ini berisi kode proses morfologis, yaitu bidang linguistik yang mempelajari tentang kata dan struktur kata.

Repo ini hanya sekedar latihan logika pemrograman dan catatan proses belajar. Beberapa hasil ada yang benar, ada juga yang _false positive_, jangan langsung dipercaya karena memang pada dasarnya komputer memang lemah dalam memproses kata yang manusia gunakan.

## Tugas

Tugas yang diberikan ada dua, yang pertama adalah tugas artikel (pengetahuan) yang berjudul

> "Hebat! 4 Pelajar Indonesia Juara Olimpiade Biologi Internasional"

di buku paket sastra indonesia halaman 83 yang mengarah ke sebuah artikel dari detik.
Artikel: https://news.detik.com/berita/d-2971876/hebat-4-pelajar-indonesia-juara-olimpiade-biologi-internasional

Yang kedua adalah tugas membuat biografi data diri (keterampilan), tidak akan dimasukan ke repo ini karena bersifat data pribadi.

## Cara menjalankan

Untuk menjalankan, bisa menambahkan text dan file javascript baru ke folder `tugas` yang berisi tulisan. Untuk template javascriptnya seperti berikut.

```js
const path = require("path");
const namaTugas = ""; // Nama file text tanpa ekstensi `.txt`

const getResultAndWrite = require("../lib/getResultAndWrite");

getResultAndWrite(
  path.join(__dirname, `${namaTugas}.txt`),
  path.join(__dirname, `${namaTugas}-simpulan.txt`),
  path.join(__dirname, `${namaTugas}-simpulan.json`)
);
```

Letakkan juga file javascript di folder `tugas` bersamaan dengan file text yang ada.
