//indexOf() : değişken içerisinde parametrik olarak verilen değeri arar ve ilk eşleşmeyi sağlayan değişken içeriğinin indexini döndürür

var metin = "lorem ipsum dolor sit amet.";
var index = metin.indexOf("o");

document.write(index + "<br>");

//indexOf() : değişken içerisinde parametrik olarak verilen değeri arar ve son eşleşmeyi sağlayan değişken içeriğinin indexini döndürür

var metin2 = "lorem ipsum dolor sit amet.";
var index2 = metin2.lastIndexOf("o");

document.write(index2);