use AdventureWorks2019

--+ operatörü iki kolunu birleştirir fakat birleşilen kolonların ismi olmayacak
--' ' işaretleri ile kolondaki değerlerin aralarında bir boşluk bırakıldı
select Title,FirstName+' '+LastName from person.person

--kolonlara isim vermek için as anahtar kelimesinden sonra kolona verilecek isim girilir.
-- birden fazla kelimleli olan tabloları isimlendirmek için [] içinde isim verilir.
select Title as Ünvan,FirstName+' '+LastName as [İsim Soyisim] from person.person

--as anahatar kelimesi kullanımı şart değildir. fakat okuma açısından kullanımı daha kolaydır.
select Title Ünvan,FirstName+' '+LastName [İsim Soyisim] from person.person