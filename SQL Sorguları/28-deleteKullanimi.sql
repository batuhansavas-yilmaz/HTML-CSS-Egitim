use Udemy

--delete: Tabloda daha önce oluştutulmuş olan kayıtları siler
insert into Ogrenci values (4,'deneme','denemeee','Yok')

select * from Ogrenci

--delete tabloAdi where ID=deger
delete Ogrenci where ID=4

--birden fazlakoşullu
delete Ogrenci where ID=4 and isim='deneme'