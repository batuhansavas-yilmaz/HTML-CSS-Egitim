use AdventureWorks2019
--sayısal fonksiyonlar
--min foksiyonu: belirtilen kolondaki en küçük değer
select min(SafetyStockLevel) from Production.Product 

--max fonksiyonu: belirtilen kolondaki en büyük değer
select max(SafetyStockLevel) from Production.Product

--count fonksiyonu: girilen kolonun kaç değeri olduğunu belirtir.
select count(color) from Production.Product

select count(0) from HumanResources.Employee --login kontrolu
where LoginID = 'adventure-works\ken0'
and NationalIDNumber = '295847284'

select color,count(*)as toplamMiktar -- hangi renkten ne kadar ürün kalmış
from Production.Product
where color is not null
group by color

--avg fonksiyonu: ortalama alma işlemi yapar
select avg(SafetyStockLevel) from Production.Product

--sum fonksiyonu: toplama işlemi yapar
select sum(SafetyStockLevel) from Production.Product