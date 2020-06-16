const title = document.getElementById('section-one');
title.innerHTML = `<h1>Resep Capcay Goreng</h1>`;
title.style.textAlign = 'center'

const ingredients = document.getElementById('section-two');
ingredients.innerHTML = `
<p>
    <h1>Bahan - Bahan</h1>
    <ul>
        <li>10 udang</li>
        <li>1 wortel besar</li>
        <li>1 brokoli kecil</li>
        <li>1/2 kembang kol</li>
        <li>Sedikit Jamur kuping</li>
        <li>Sedikit Kapri</li>
        <li>Sedikit jagung muda</li>
    </ul>
</p>
`

const makes = document.getElementById('section-three');
makes.innerHTML = `
<p>
    <h1>Cara Membuat</h1>
    <ul>
        <li>Cuci sayur dan potong-potong</li>
        <li>Tumis bawang putih sampai wangi, masukkan jahe cincang dan udang sampai berubah warna</li>
        <li>Masukkan wortel dan air secukupnya, lalu semua bumbu lainnya, cek rasa</li>
        <li>Masukkan semua sayuran lainnya kecuali brokoli. Jangan masak terlalu lama, kira-kira sayur sudah setengah matang.</li>
        <li>Terakhir masukkan brokoli aduk sebentar lalu larutan maizena. Aduk sampai air berubah agak kental, matikan api.</li>
    </ul>
</p>
`

const images = document.getElementById('section-four');
images.innerHTML = `
<img src="./resepCapcay.jpg">
`

images.style.textAlign = 'center'