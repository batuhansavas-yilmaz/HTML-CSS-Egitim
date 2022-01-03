use AdventureWorks2019

--store procedure: Programlamadaki method mantığına benzetilebilir. SQL sorgularımızın daha az kod ile yazmamızı sağlar

--create proc procAdi(
----parametre veya parametrelerimiz
--@ID int,
--@isim nvarchar(50)
--)
--as
--begin
----procedure body
--end




create proc KayitEkle(
	@ID int,
	@isim nvarchar(50),
	@soyisim nvarchar(50),
	@email nvarchar(50)
)
as
begin

	insert into Personeller (ID,isim,soyisim,email,olusturmatarih) values
	(@ID,@isim,@soyisim,@email,GETDATE())

end

--prosedür çalıştırma
exec KayitEkle @ID=1, @isim='Ulaş', @soyisim='Yılmaz', @email='ulasylmz53@hotmail.com'

select * from Personeller




--proc güncelleme
alter proc KayitEkle(
	@ID int,
	@isim nvarchar(50),
	@soyisim nvarchar(50),
	@email nvarchar(50),
	@OlusturmaTarih datetime
)
as
begin

	insert into Personeller (ID,isim,soyisim,email,olusturmatarih) values
	(@ID,@isim,@soyisim,@email,@OlusturmaTarih)

end




--proc silme
drop proc KayitEkle




--Proc içerik kilitleme
create proc KayitEkle(
	@ID int,
	@isim nvarchar(50),
	@soyisim nvarchar(50),
	@email nvarchar(50)
)
with encryption
as
begin

	insert into Personeller (ID,isim,soyisim,email,olusturmatarih) values
	(@ID,@isim,@soyisim,@email,GETDATE())

end




--parametresiz proc
create proc personelListele
as
begin
select * from Personeller
end

exec personelListele




--varsayın parametreli proc
create proc getHumonResourceEmployee(
	@Gender char(1) = 'F'
)as
begin
	select * from HumanResources.Employee
	where Gender = @Gender
end

exec getHumonResourceEmployee