use Udemy

--Store Procedure Ödev:

create table Personeller(
	ID int primary key,
	isim nvarchar(50) not null,
	soyisim nvarchar(50) not null,
	email nvarchar(200) not null unique,
	cinsiyet nchar(1),
	olusturmaTarih datetime not null,
	durum bit default 'true'
)


--select sorgusu ile başka veritabanından veri çekme
insert into Personeller (ID,isim,soyisim,email,cinsiyet,olusturmaTarih)
select 
PP.BusinessEntityID,
PP.FirstName,
PP.LastName,
(lower(PP.FirstName)+'.'+lower(PP.LastNAme)+'@abc.com')as emailAdres,
HRE.Gender,
GETDATE() as olusturmaTarihi
from AdventureWorks2019.Person.Person PP
inner join AdventureWorks2019.HumanResources.Employee HRE
on PP.BusinessEntityID = HRE.BusinessEntityID

select * from Personeller


------------------------------------------------------------------------

--personel ekle
create proc PersonelEkle(
	@ID int,
	@isim nvarchar(50),
	@soyisim nvarchar(50),
	@email nvarchar(200),
	@cinsiyet nchar(1),
	@olusturmaTarih datetime,
	@durum bit
)as
begin
insert into Personeller (ID,isim,soyisim,email,cinsiyet,olusturmaTarih,durum) values
(@ID,@isim,@soyisim,@email,@cinsiyet,@olusturmaTarih,@durum)
end

--personel düzenle
create proc PersonelDuzenle(
	@ID int,
	@isim nvarchar(50),
	@soyisim nvarchar(50),
	@email nvarchar(200),
	@cinsiyet nchar(1),
	@olusturmaTarih datetime,
	@durum bit
)as
begin
update Personeller set isim=@isim, soyisim=@soyisim, email=@email,cinsiyet=@cinsiyet, olusturmaTarih=GETDATE(),durum=@durum where ID=@ID
end

--personel sil
create proc PersonelSil(
	@ID int
)as
begin
delete Personeller where ID=@ID
end

--personel listele
create proc PersonelListele
as
begin
select * from Personeller
end

--personel getir
create proc PersonelGetir(
	@ID int = 0
)as
begin
select * from Personeller where ID=@ID
end

--personel ara
create proc PersonelAra(
	@email nvarchar(200) not null
)as
begin
select * from Personeller where email=@email
end


exec PersonelEkle @ID=305,@isim='Ulaş',@soyisim='Yılmazz',@email='ulas.yilmaz@abc.com', @cinsiyet='E',@olusturmaTarih='2021-10-13' ,@durum=1

exec PersonelGetir @ID=305