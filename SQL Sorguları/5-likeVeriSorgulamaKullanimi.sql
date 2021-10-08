use AdventureWorks2019

-- geniş arama yapmamızı sağlar
--like '%a': sonunda a olan kayıtları getirir
--like 'a%': başında a olan kayıtları getirir
--like '%a%': içerisinde a olan kayıtları getirir

--like '_a': ikinci karakteri a olan kayıtları getirir

--%a
select ProductNumber,name,ProductID from Production.Product
where ProductNumber like '%1'

--a%
select ProductNumber,name,ProductID from Production.Product
where ProductNumber like 'bk%'

--%a%
select ProductNumber,name,ProductID from Production.Product
where ProductNumber like '%r9%'

--_a
select ProductNumber,name,ProductID from Production.Product
where ProductNumber like '_k-_64y-40'

--ödev:

select * from HumanResources.Employee
where NationalIDNumber like '%96%'and
JobTitle like 'research%'and
Gender='m'

select * from Sales.SalesOrderDetail
where ProductID > 100 and ProductID < 1000 and
carrierTrackingNumber like '%AE'