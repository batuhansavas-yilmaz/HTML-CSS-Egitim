//filter: fonsiyondan geriye true dönen tüm elemanları kopyalayarak yeni bir dizi oluşturur.
function islem(a, b, c) {
    return a % 2 == 0;
}

var sayi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(sayi + "<br>");


var ciftSayilar = sayi.filter(islem);
document.write(ciftSayilar + "<br>");