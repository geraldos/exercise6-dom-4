const title = document.getElementById('section-one');
title.innerHTML = `<h1>Resep Capcay Goreng</h1>`;
title.style.textAlign = 'center'

const ingredients1 = ['10 udang', '1 wortel besar', '1/2 kembang kol', '1/2 kembang kol',
    'Sedikit Jamur kuping', 'Sedikit Kapri', 'Sedikit jagung muda'
];
ingredients1.forEach(myFunction);

function myFunction(item, index) {
    document.getElementById("demo").innerHTML += `<li>${item}</li>`;
}

const images = document.getElementById('section-four');
images.innerHTML = `
<img src="./resepCapcay.jpg">
`

images.style.textAlign = 'center'