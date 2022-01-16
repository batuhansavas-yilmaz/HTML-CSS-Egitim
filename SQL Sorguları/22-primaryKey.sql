use Udemy

--primary key: ilişkisel veritabanı tasarımı için önemli bir anahtar kelimedir. Primary key aynı zamandan unique bir değerdir ve boş geçilemez bu yüzden unique anahtar kelimesi ve not null kullanmaya gerek yoktur.
create table OrnekTablo(
	ID int primary key, --not null ve unique
	isim nvarchar(50),
	soyisim nvarchar(50)
)