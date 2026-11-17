# ALCHEMIST TRADING ACADEMY
**Become a Master Trader** — game edukasi forex bergaya Dark Fantasy RPG.

## Menjalankan project
1. Ekstrak ZIP ke folder pilihan.
2. Buka folder `alchemist-trading-academy`.
3. Klik dua kali `index.html` atau klik kanan → Open with → Chrome/Edge/Firefox.
4. Isi username dan password apa pun, lalu tekan **Masuk ke Akademi**. Login hanya simulasi.
5. Progres tersimpan otomatis di LocalStorage browser yang sama.

Tidak perlu instalasi, backend, database online, atau build tools. Internet hanya diperlukan untuk memuat font Google; jika offline, website memakai font cadangan.

## Fitur
- Login simulasi, dashboard RPG, XP, level, rank, dan progress level.
- Enam kategori materi dan 100 pertanyaan quiz (10 soal per sesi).
- Pertanyaan dan pilihan jawaban diacak; tidak ada pengulangan dalam satu sesi.
- Feedback langsung beserta penjelasan, hasil quiz, riwayat, leaderboard simulasi.
- Daily Challenge, achievement, efek suara sintetis, musik latar sintetis ON/OFF.
- Partikel canvas, ilustrasi mage berbasis CSS, layout responsif, fullscreen.
- Penyimpanan lokal melalui `localStorage`.

## Cara mengubah konten
### Username / akun
Login menerima username dan password apa pun. Jika username sama dengan data lokal sebelumnya, progres lama akan dimuat. Username baru membuat profil baru pada penyimpanan browser yang sama (satu profil aktif per instalasi browser).

### Pertanyaan quiz
Buka `js/database.js`. Data pertanyaan berada pada `window.QUESTION_BANK`. Setiap pertanyaan memiliki:
- `category`: salah satu dari enam kategori.
- `question`: teks pertanyaan.
- `options`: empat pilihan jawaban.
- `answer`: indeks jawaban benar (dimulai dari 0).
- `explanation`: penjelasan singkat.

Jika mengubah pertanyaan, pastikan `answer` menunjuk pilihan yang benar. Bank soal saat ini berisi 100 soal.

### Warna dan tampilan
Buka `css/style.css`, lalu ubah variabel pada bagian `:root`:
- `--bg`: warna dasar.
- `--gold`: aksen emas.
- `--blue`: aksen biru.
- `--text`: warna teks.
- `--muted`: teks sekunder.

### Karakter dan background
Ilustrasi karakter mage dibuat dengan CSS di `css/style.css` pada kelas `.mage`, `.mage-hood`, `.mage-face`, `.mage-body`, `.mage-cloak`, dan `.mage-staff`. Ubah bentuk/warna kelas tersebut untuk mengganti karakter. Background utama berada di aturan `body`, `.ambient`, dan elemen canvas `#particleCanvas`. Folder `assets/images`, `assets/backgrounds`, dan `assets/characters` disediakan untuk gambar buatan sendiri. Untuk menggunakan gambar karakter, tambahkan elemen `<img>` di area `.login-art` pada `index.html` dan atur ukurannya di CSS.

### Audio
Efek suara dan musik dibuat secara sintetis menggunakan Web Audio API di `js/app.js`, sehingga tidak memerlukan file audio eksternal. Musik baru dimulai setelah pemain menekan tombol musik (interaksi pengguna).

## Penyimpanan dan reset
Data tersimpan pada LocalStorage perangkat dan browser yang digunakan. Data tidak tersinkronisasi antarperangkat dan dapat hilang jika data situs/browser dihapus. Untuk reset manual, buka Developer Tools → Console, jalankan:
```js
localStorage.removeItem("alchemistAcademy_v1");
location.reload();
```

## Catatan edukasi dan risiko
Website ini adalah media pembelajaran, bukan layanan broker, sinyal transaksi, atau nasihat investasi. Trading forex memiliki risiko tinggi dan dapat menyebabkan kerugian. Leverage memperbesar eksposur maupun kerugian. Gunakan akun demo untuk latihan, pahami aturan broker, dan jangan gunakan dana yang tidak siap ditanggung risikonya.

## Struktur
```
alchemist-trading-academy/
├── index.html
├── css/style.css
├── js/app.js
├── js/quiz.js
├── js/database.js
├── js/animation.js
├── assets/images/
├── assets/backgrounds/
├── assets/characters/
└── assets/sounds/
```
