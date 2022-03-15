//slice: kendisine verilecek olan parametreler ile tanımlanmış dizi aralığında bulunan değerleri kopyalayarak yeni bir diiz oluşturur.

var renk = ["Sarı", "Kırmızı", "Siyah", "Beyaz"];
document.write(renk + "<br>");

var yeniRenkDizi = renk.slice();
document.write(yeniRenkDizi + "<br>");
var yeniRenkDizi2 = renk.slice(1);
document.write(yeniRenkDizi2 + "<br>");
var yeniRenkDizi3 = renk.slice(1,3);
document.write(yeniRenkDizi3 + "<br>");