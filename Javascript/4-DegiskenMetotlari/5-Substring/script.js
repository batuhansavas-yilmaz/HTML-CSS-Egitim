//substring() ve substr() : kendisine parametreler ile tanımlanmış değişken içeriği aralığında bulunan değerleri kopyalayarak yeni bir içerik oluşturur ve değeri geriye döndürür.

var metin = "lorem ipsum dolor sit amet.";
var metin2 = metin.substring(4,20);

document.write(metin2 + "<br>");

var icerik = "lorem ipsum dolor sit amet.";
var icerik2 = icerik.substr(4,20);
document.write(icerik2 + "<br>");