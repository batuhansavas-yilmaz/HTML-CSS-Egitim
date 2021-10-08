use AdventureWorks2019

--left join: İlk tablo baz alınarak iki tabloyu birleştirir. İlk tablodaki tüm değerler getirilir ikinci tabloda uymayan değer varsa null olarak getirilir. İnner joinden farkı: inner join sadece uygun kayıtları getirirken left join tüm kayıtları getirir.

select 
P.BusinessEntityID,
P.FirstName,
P.LastName,
E.*
from Person.Person P
left join HumanResources.Employee E
on P.BusinessEntityID = E.BusinessEntityID

select
PP.color,
sum(SS.UnitPrice)
from Production.Product PP
left join Sales.SalesOrderDetail SS
on PP.ProductID = SS.ProductID
group by Color