// deklarasi variabel
//menampilkan hasil output melalui console



function hitungvolumekubus(sisi) { //
    return sisi + sisi + sisi;
}

console.log('volume kubus dengan sisi ${sisikubus} adalah ${volumekubus}')(sisi,sisi,sisi);// argumen

// Mmembuat method/fungsi
function Volumekubus() {// parameter
    var angka1 = document.getElementById("sisi").value;
    var angka2 = document.getElementById("sisi").value;
    //perseInt berfungsi mengubah string kedalam bentuk int 
    // karena  var sisi,sisi berbentuk string jadi perlu diubah
    var sisiparsed = parseInt(sisi)
    var sisiparsed = parseInt(sisi)
    var sisi = sisiparsed + sisiparsed
    var hasilvolumekubus = document.getElementById("hasilvolumekubus");
    hasilvolumekubus.innerHTML = "hasil volumekubus dari:" + sisi + "+" + sisi + "=" + sisi;

}


// deklarasi variabel
//menampilkan hasil output melalui console


function hitungvolumekubus(panjang,lebar,tinggi) { //
    var Volume = panjang * lebar * tinggi
    return Volume;
}

console.log(hitungvolumebalok (panjang,lebar,tinggi)); // argumen

// Membuat method/fungsi
function penjumlahan() {// parameter
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
    //perseInt berfungsi mengubah string kedalam bentuk int 
    // karena  var panjang,lebar berbentuk string jadi perlu diubah
    var panjangparsed = parseInt(panjang)
    var lebarparsed = parseInt(lebar)
    var tinggi = panjangparsed + lebarparsed
    var hasilvolumebalok = document.getElementById("hasilvolumebalok");
    hasilvolumebalok.innerHTML = "hasil penjumlahan dari:" + panjang + "+" + lebar + "=" + tinggi;

}

// deklarasi variabel
//menampilkan hasil output melalui console

function hitungvolumeprimasegitiga(alas,tinggi,sisimiring) { //
    var Volume = alas * tinggi * sisimiring
    return Volume;
}

console.log(hitungvolumeprismasegitiga (alas,tinggi,sisimiring)); // argumen

// Membuat method fungsi
function volumeprismasegitiga() {// parameter
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    //perseInt berfungsi mengubah string kedalam bentuk int 
    // karena  var alas,tinggi berbentuk string jadi perlu diubah
    var alasparsed = parseInt(alas)
    var tinggiparsed = parseInt(tinggi)
    var sisimiring = alasparsed + tinggiparsed
    var hasilvolumeprismasegitiga = document.getElementById("hasilvolumeprismasegitiga");
    hasilvolumeprismasegitiga.innerHTML = "hasil penjumlahan dari:" + alas + "+" + tinggi + "=" + sisimiring;

}

