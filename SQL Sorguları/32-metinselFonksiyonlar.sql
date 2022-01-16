use AdventureWorks2019
--metinsel fonksiyonlar
--lower fonksiyonu: tüm datayı küçük harfe çevirir
select lower(JobTitle) from HumanResources.Employee

--upper fonksiyonu: tüm datayı büyük harfe çevirir
select upper(JobTitle) from HumanResources.Employee

--len fonksiyonu:datanın karakter uzunluğunu alır
select firstName,len(FirstName) from Person.Person

--concat fonksiyonu: iki string kolonu birleştirir
select CONCAT(FirstName,space(1),LastName)as fullName from Person.Person

--substring fonksiyonu: datanın belirli bir aralığını getirir
select name, SUBSTRING(name,1,4) from Production.Product

--left fonksiyonu: datanın sol tarafından belirtilen kadar belirli bir değer gösterir
select name, left(name,4) from Production.Product

--right fonksiyonu: datanın sağ tarafından belirtilen kadar belirli bir değer gösterir
select name, right(name,4) from Production.Product