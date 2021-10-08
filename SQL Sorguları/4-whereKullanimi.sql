use AdventureWorks2019

--where: belli kriterelere uygun kayıtları getirmek için kullanılır.
--örn. person tablosunda personType değeri EM olan kayıtları getir
select * from person.Person where PersonType='EM'

--2. Örnek: adı ken olan kayıtları getir
select * from person.Person where FirstName='Ken'

--color değeri black olan kayıtlar
select * from Production.Product where Color='Black'

--birden fazla şart kullanımı
--iki tarafın true olması durumu(&&) and operatörü
--iki taraftan birinin true olması durumu (||) or operatörü
select * from Production.Product where color='black' and SafetyStockLevel=500
select * from Production.Product where color='black' or SafetyStockLevel=500

--şartlı kriter arama
-- > büyüktür
-- < küçüktür
-- = eşittir
-- >= büyük eşittir
-- <= küçük eşittir
-- != eşit değildir

-- > büyüktür
select * from Production.Product where SafetyStockLevel > 500

-- < küçüktür
select * from Production.Product where SafetyStockLevel < 500

-- = eşittir
select * from Production.Product where SafetyStockLevel = 500

-- >= büyük eşittir
select * from Production.Product where SafetyStockLevel >= 500

-- <= küçük eşittir
select * from Production.Product where SafetyStockLevel <= 500

-- != eşit değildir
select * from Production.Product where SafetyStockLevel != 500

--ödev
--renk değeri black veya yellow olan kayıtların ilk 10 tanesini göster
select top 10 * from Production.Product where color='black' or color='yellow'

--renk değeri multi olan kayıtların standartCost değeri 6 dan büyük olan kayıtların productID, color, name ve productNumber değerlerini göster
select productID, color, name, productNumber from Production.Product where Color='multi' and StandardCost >6

--list price değeri 0 dan büyük olan kayıtların toplam adedinin %10 oranına denk gelen kayıtları göster