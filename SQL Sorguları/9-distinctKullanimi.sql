use AdventureWorks2019

-- kendini tekrar eden kayıtları tekil olarak görmemizi sağlar
select distinct Color from Production.Product

select ProductID,ProductNumber,name,color from Production.Product
where ProductID in(
select distinct ProductID from Sales.SalesOrderDetail
)