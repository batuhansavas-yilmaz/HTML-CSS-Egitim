//reduce: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde soldan sağa tek tek olmak üzere çalıştırır ve tek bir deper oluşturarak oluşturduğu değeri geriye döndürür.

function deneme(deger, eleman, sira, degisken) {
    return eleman="Ulaş";
}

var isimler = ["Ulaş", "Gülhan", "Yiğit"];
document.write(isimler + "<br>");

var islem = isimler.reduce(deneme);
document.write(islem + "<br>");


//reduceRight: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde sağdan sola tek tek olmak üzere çalıştırır ve tek bir deper oluşturarak oluşturduğu değeri geriye döndürür.

function deneme(deger, eleman, sira, degisken) {
    return eleman="Ulaş";
}

var isimler = ["Ulaş", "Gülhan", "Yiğit"];
document.write(isimler + "<br>");

var islem = isimler.reduceRight(deneme);
document.write(islem + "<br>");
