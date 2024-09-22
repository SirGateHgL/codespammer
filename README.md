# CodeSpammer

Script ini digunakan untuk menyepam kode pairing WhatsApp ke nomor tertentu secara otomatis. Dibangun menggunakan Node.js dan berjalan di lingkungan Termux.

## Fitur
- Mengirim kode pairing WhatsApp secara otomatis.
- Dapat digunakan dengan Termux untuk kemudahan akses di perangkat Android.

## Cara Install dan Menjalankan di Termux

1. Install **Termux** dari Google Play Store atau F-Droid.
2. Buka Termux dan jalankan perintah berikut untuk menginstal Node.js:
    ```bash
    pkg update && pkg upgrade
    pkg install nodejs
    ```
3. Clone repository ini ke Termux:
    ```bash
    git clone https://github.com/SirGateHgL/codespammer/
    ```
4. Pindah ke direktori repository:
    ```bash
    cd codespammer
    ```
5. Install semua dependencies yang diperlukan:
    ```bash
    npm i
    ```
6. Jalankan script:
    ```bash
    npm start
    ```

## Catatan

- Script ini hanya digunakan untuk tujuan edukasi. Penyalahgunaan dapat melanggar hukum di wilayah Anda.
- Pastikan untuk memahami dan mematuhi kebijakan WhatsApp sebelum menggunakan script ini.

## Kontribusi
Kontribusi dalam bentuk pull request sangat diterima. Untuk perubahan besar, harap buka dulu issue untuk mendiskusikan apa yang ingin Anda ubah.

## Lisensi
Script ini berlisensi di bawah [MIT License](LICENSE).
