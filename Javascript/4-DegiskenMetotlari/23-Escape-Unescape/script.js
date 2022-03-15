//escape() : değişken içerisinde metnin özel karakterini unicode kodlamasına dönüştürerek geri döndürür.

var deger = "ğşi";
document.write(escape(deger)+"<br>")

//unescape() : değişken içerisinde metnin özel karakterini unicode kodlamasına dönüştürülmüş olan karakterleri çözerek geri döndürür.

var deger = "%u011F%u015Fi";
document.write(unescape(deger)+"<br>")