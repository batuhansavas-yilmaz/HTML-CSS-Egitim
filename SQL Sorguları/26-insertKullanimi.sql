use Udemy

--insert: tabloya yeni bir kayıt eklemek için kullanılır.

create table Ogrenci(
	ID int primary key,
	isim nvarchar(50),
	soyisim nvarchar(50),
	email nvarchar(100)
)

select * from Ogrenci

--insert into tabloAdi (kolonlar) values (değerler)
--insert into tabloAdi values (değerler)
insert into Ogrenci (ID,isim,soyisim,email) values (1,'Ulaş','Yılmaz','ulas.yilmaz@hotmail.com')
insert into Ogrenci values (2,'Yiğit','Yılmaz','yigit.yilmaz@hotmail.com') --tüm alanlar girilmeli