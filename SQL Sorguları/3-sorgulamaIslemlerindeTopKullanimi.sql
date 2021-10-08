use AdventureWorks2019

--top: kaç adet kayıt göstereceğini belirler. top anahtar kelimesinden sonra istenilen kayıt sayısı girilir.
select top 10 BusinessEntityID,FirstName,LastName from Person.Person

--berlirli adet yerine tablo kayıtlarının yüzdelik değeri kadar adet gösterimi yapabiliriz.
select top 10 percent BusinessEntityID,FirstName,LastName from Person.Person