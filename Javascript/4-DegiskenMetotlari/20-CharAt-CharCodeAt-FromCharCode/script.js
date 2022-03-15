//charAt() : Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak geriye döndürür.

var metin = "Yiğido";
document.write(metin.charAt(0) + "<br>");

//charCodeAt() : Kendisine parametre olarak verilen değer doğrultusunda değişken içeriğindeki karşılığı olan karakteri bularak unicode değerini geriye döndürür.

var metin = "Yiğido";
document.write(metin.charCodeAt(2) + ' : indexi 2 olan yani "ğ" harfini seçtil ' + "<br>");

//fromCharCode() : Kendisine parametre olarak verilen unicode değerini karkater olarak geriye döner

var metin = String.fromCharCode(105, 101);
document.write(metin + "<br>");