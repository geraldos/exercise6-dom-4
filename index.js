const title = document.getElementById('section-one');
title.innerHTML = `<h1>Resep Capcay Goreng</h1>`;
title.style.textAlign = 'center'

const ingredients = document.getElementById('section-two');
ingredients.innerHTML = `
<p>
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

const images = document.getElementById('section-three');
images.innerHTML = `
<img src="./resepCapcay.jpg">
`

images.style.textAlign = 'center'