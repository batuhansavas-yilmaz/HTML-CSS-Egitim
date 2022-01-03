use Udemy

--update: tabloya daha önce eklenmiş değereleri düzenlemeye yarar

--update tabloAdi set guncellenecekKolon=deger where ID=deger
update Ogrenci set isim='Gülhan' where ID=3 --where kriteri belirtilmesse bulunan tablodaki tüm belirtilen kolon değerleri değişir

--çoklu kolon update
update Ogrenci set isim='Gülhan', soyisim='Yılmaz' where ID=3
select * from Ogrenci