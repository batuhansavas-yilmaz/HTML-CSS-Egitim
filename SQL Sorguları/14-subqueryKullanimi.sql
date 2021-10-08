use AdventureWorks2019

--kullanılması tavsiye edilmeyen fakat gerekli durumlarda kullanılmak zorunda kalınan yapıdır
--perfomansı etkiler

select 
BusinessEntityID,
FirstName,
LastName,
(select BirthDate from HumanResources.Employee where BusinessEntityID=Person.BusinessEntityID),
(select MaritalStatus from HumanResources.Employee where BusinessEntityID=Person.BusinessEntityID)
from Person.Person