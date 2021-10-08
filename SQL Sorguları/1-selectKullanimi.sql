use AdventureWorks2019 --Kullanmak istenilen database

--select: tablo içerisindeki datalara ulaşmamızı sağlar
--select den sonra kolon isimleri veya  hepsini seçmek için * kullanılır
select * from Person.Person -- tablo içerisindeki tüm kolonları bize getirir

--önerilen kullanım gerekli kolonların çağırılmasıdır
--SQL Komutu - Tablodaki Kolonlar - from(hangi tabloya bakılacak) - Tablo ismi
select BusinessEntityID,PersonType,FirstName,LastName from Person.Person

--Ödev:
select name,ProductNumber,color,ProductID from Production.Product