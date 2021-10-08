use AdventureWorks2019

--inner join iki veya daha fzla tabloyu birleştirir

select 
PP.BusinessEntityID,
PP.FirstName,
PP.LastName,
PP.PersonType,
HRE.BirthDate,
HRE.JobTitle,
HRE.MaritalStatus
from Person.Person PP
inner join HumanResources.Employee HRE
on PP.BusinessEntityID = HRE.BusinessEntityID