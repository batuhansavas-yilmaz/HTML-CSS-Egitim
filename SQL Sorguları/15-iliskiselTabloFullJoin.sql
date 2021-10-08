use AdventureWorks2019

--full join: inner join ve left join birleşimidir.

select
PP.BusinessEntityID,
PP.FirstName,
PP.LastName,
SSP.*
from Person.Person PP
full join Sales.SalesPerson SSP
on PP.BusinessEntityID = SSP.BusinessEntityID