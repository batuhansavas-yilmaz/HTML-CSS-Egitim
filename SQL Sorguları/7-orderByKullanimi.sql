use AdventureWorks2019

--sıralama işlemleri
select * from Production.Product
where
ProductNumber like '%20%'
order by ProductID -- productID ye göre büyükten küçüğe sıralama

select * from Production.Product
where
ProductNumber like '%20%'
order by ProductID desc -- productID ye göre küçükten büyüğe sıralama