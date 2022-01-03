use Udemy

--not null: oluşturulan tablodaki verilen kolonu boş girilemez yapar

create table OrnekTablo(
	ID int not null,
	Isim nvarchar(50),
	Soyisim nvarchar(50) not null
)