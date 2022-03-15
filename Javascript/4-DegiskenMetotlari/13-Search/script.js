//search() : kendisine parametre olarak verilen değer doğrultusunda içeriğini arayarak ilk eşleşmeyi sağlayan değişken içeriğinini index değerini döndürür.

var metin = "Javascript dünyA üzerinde en yaygın olarak kullanılan bir script dilidir.";
document.write(metin + "<br>");

var islem = metin.search("dünya");
var islem = metin.search(/dünyA/i); //harf duyarlılığı kalkar
document.write(islem);