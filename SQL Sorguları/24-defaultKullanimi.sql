use Udemy

--default: belirlenen kolonda default değer atar
create table OrnekTablo(
	ID int primary key,
	isim nvarchar(50) default 'isim değeri girilmedi',
	soyisim nvarchar(50) not null,
	olusturulanTarih datetime default getdate() --null girilirse şimdiki tarihi atar
)