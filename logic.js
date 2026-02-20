function teklifHesapla() { 
    const oyunAdedi = parseInt(document.getElementById("oyunSayisi").value);
    const bolumAdedi = parseInt(document.getElementById("bolumSayisi").value);
    const kaliteSecimi = document.getElementById("kalite").value;
    const destekVarMi = document.getElementById("destek").checked;

    let toplam = 0;
    let birimFiyat = 80000; // Baz başlangıç fiyatı

    if (kaliteSecimi === "realistic") {
        birimFiyat += 30000;
    } else if (kaliteSecimi === "lowpoly") {
        birimFiyat += 20000;
    }

    // Bölüm sayısına göre ekle (Her bölüm 10.000 TL)
    toplam = (birimFiyat * oyunAdedi) + (bolumAdedi * 10000);

    // Teknik destek seçiliyse sabit ücret ekle
    if (destekVarMi) {
        toplam += 40000;
    }

    const boyut = document.getElementById("boyut").value;
    if (boyut === "3D") {
        toplam += 90000; // 3D seçilirse fiyata ekle
    }

    const sonucEkrani = document.getElementById("fiyatGosterge");
    sonucEkrani.innerText = "Tahmini Tutar: " + toplam.toLocaleString() + " TL";
}