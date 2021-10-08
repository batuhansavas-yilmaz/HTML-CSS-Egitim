use AdventureWorks2019

--bu işlemi kısaca between ile yapabiliriz
select * from Production.Product
where ProductID >= 1 and ProductID <= 500

select * from Production.Product
where ProductID between 1 and 500