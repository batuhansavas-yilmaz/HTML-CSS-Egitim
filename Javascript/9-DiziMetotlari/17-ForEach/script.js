//forEach: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerine tek tek çalıştırır.
function islem(a, b, c) {
    sonuc = sonuc + " çalıştı " + a + "<br>";
}
var sonuc = "";

var sayi = [2, 4, 6, 1, 3, 7, 9, 22, 32];
document.write(sayi + "<br>");

sayi.forEach(islem);
document.write(sonuc);
