//map: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde çalıştırır. Fonksiyonun her eleman içşn geriye döndürdüğü değerlerden yeni bir dizi oluşur.

var sayi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write(sayi + "<br>");

var yeni = sayi.map(islem);
document.write(yeni + "<br>");

function islem(a, b, c) {
    return a * 100;
}