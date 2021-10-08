use AdventureWorks2019

--Right join: ikinci tablo baz alınarak iki tabloyu birleştirir. ikinci tablodaki tüm değerler getirilir ilk tabloda uymayan değer varsa null olarak getirilir. İnner joinden farkı: inner join sadece uygun kayıtları getirirken right join tüm kayıtları getirir.

select
SSP.BusinessEntityID,
SSP.Bonus,
PP.FirstName,
PP.LastName,
PP.BusinessEntityID
from
Sales.SalesPerson SSP
right join Person.Person PP
on SSP.BusinessEntityID = PP.BusinessEntityID