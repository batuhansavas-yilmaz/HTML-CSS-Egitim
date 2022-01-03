use Udemy

--unique: tabloda bulunan kolon verirsinin benzersiz olmasını sağlar. Girilen değer tek olmak zorundadır.
create table OrnekTablo(
	ID int not null unique,
	isim nvarchar(50),
	soyisim nvarchar(50)
)