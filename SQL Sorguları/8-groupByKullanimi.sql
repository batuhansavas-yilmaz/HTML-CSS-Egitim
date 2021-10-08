use AdventureWorks2019

--sadece tek kolon üzerindeki aynı değerleri gruplama.
select color from Production.Product
where color is not null
group by color

select SafetyStockLevel from Production.Product
group by SafetyStockLevel

--üzerinde işlem yapılmış kayıtları gruplama.
--birden fazla kolonlar üzerinde gruplama yapılacaksa kolonlar üzerinde işlem yapılmış olması gerekir.
select color,sum(SafetyStockLevel) safety, avg(ListPrice) price from Production.Product
where color is not null
group by color 

select color,sum(SafetyStockLevel) safety, avg(ListPrice) price from Production.Product
--where color is not null
group by color 
having color is not null
