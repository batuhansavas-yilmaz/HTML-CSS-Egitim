function paraBirimi(birim, tutar) {
    if (birim == "Türk Lirası") {
        var kur = 1;
    } else if (birim == "Amerikan Doları") {
        var kur = 3;
    }
    return hesapla(kur,tutar);
}

function hesapla(gelenKur, gelenTutar) {
    var hesap = gelenKur * gelenTutar;
    document.write(hesap);
}

paraBirimi("Amerikan Doları",100);