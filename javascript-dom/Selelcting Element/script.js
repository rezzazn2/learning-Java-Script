// querySelector()
{
    // Sebagai contoh, Anda dapat menggunakan JavaScript untuk memilih tag h1 dengan menggunakan metode querySelector():
    const h1 = document.querySelector('h1');
    console.log("h1: ", h1);

    // Dan Anda bisa mendapatkan konten teks dari elemen h1:
    console.log(h1.textContent);

    // Anda dapat mengubah tag h1 secara dinamis dengan mengatur textContent ke teks baru:
    h1.textContent = 'Hi JS';
    }

// getElementById()
{
    const h1 = document.getElementById('h1')
    console.log("h1: ", h1);
}

