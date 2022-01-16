use Udemy

--check: belli kıriterler doğrultusunda veriyi ekler
create table OrnekTablo(
	ID int primary key,
	isim nvarchar(50),
	soyisim nvarchar(50) not null,
	yas int not null check(yas>=15)
)