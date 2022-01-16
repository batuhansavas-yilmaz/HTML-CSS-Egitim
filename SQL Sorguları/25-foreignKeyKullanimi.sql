use Udemy

--foreign key: ilişkisel veri tabanında primary key ile karşılıklı kullanılır.

create table Musteri(
	ID int primary key,
	MusteriNumara int,
	TCKN nvarchar(11),
	VKN nvarchar(10),
	Isim nvarchar(20),
	Soyisim nvarchar(20),
	OlusturmaTarih datetime
)

--foreign key oluşturma
create table MusteriIletisimBilgileri(
	ID int primary key,
	MusteriID int,
	IletisimTipi int, --1 : GSM / 2 : Açık Adres / 3 : Sabit Telefon
	Deger nvarchar(500),
	OlusturmaTarih datetime,
	foreign key (MusteriID) references Musteri(ID)
)
