//localCompare() : üzerinde çalışılan değişkene parametrik olarak verilen diğer bir değişken içeriğini tarayıcı diline göre karşılatırarak sonucu geri döner. (unicode karşılaştırması yapar)

//sonuc değerleri
//-1 : karşılaştırmada ilk içerik ikinci içerikten önce gelirse döner
//0 : karşılaştırmada ilk içerik ikinci içerikile eşitse gelirse döner
//1 : karşılaştırmada ilk içerik ikinci içerikten sonra gelirse döner

var bir = "abc";
var iki = "abd";

document.write(bir.localeCompare(iki));