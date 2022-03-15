//caller: fonksiyonu çaıran diğer bir fonksiyon referans olarak alınarak tüm bilgilerinin elde edilmesini sağlar.

function ilk() {
    for (var i = 0; i < ilk.caller.arguments.length; i++) {
        document.write(diger.arguments[i] + "<br>");
    }
}

function diger(isim, soyisim) {
    ilk();
}

diger("Ulaş", "Yılmaz");
