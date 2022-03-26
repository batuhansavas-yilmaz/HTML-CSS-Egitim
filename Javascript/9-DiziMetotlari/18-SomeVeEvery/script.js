//some: kendisine parametre olarak verilen fonksiyonu true(doğru) değeri döndürene kadar dizi elemanları üzerinde sıra ile gezinir.
function islem(a, b, c) {
    sonuc = a;
    return a % 2 == 0;
}
var sonuc;

var sayi = [158, 2, 7, 3, 4, 1, 9, 8];
document.write(sayi + "<br>");

sayi.some(islem);
document.write(sonuc + "<br>");


//every: kendisine parametre olarak verilen fonksiyonu false(yanlış) değeri döndürene kadar dizi elemanları üzerinde sıra ile gezinir.

function islem2(a, b, c) {
    sonuc2 = a;
    return a % 2 == 0;
}
var sonuc2;

var sayi2 = [2, 7, 3, 4, 1, 9];
document.write(sayi2 + "<br>");

sayi2.every(islem2);
document.write(sonuc2 + "<br>");