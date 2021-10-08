-- tablo oluşturma
create table Kullanici(
	ID int,
	Isim varchar(20),
	Soyisim varchar(20),
	Telefon varchar(10),
	Eposta varchar(50)
)

-- tablo düzenleme
alter table Kullanici
add OlusturmaTarih datetime --add komutu kolon ekleme işlemi yapar

alter table Kullanici
drop column OlusturmaTarih --drop column komutu kolon çıkarma işlemi yapar

alter table Kullanici
alter column Isim varchar(15) --alter column kolon düzenleme işlemi yapar

-- tablo silme
drop table Kullanici

select * from Kullanici