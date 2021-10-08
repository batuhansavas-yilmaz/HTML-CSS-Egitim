use AdventureWorks2019

select * from Production.Product
where
ProductNumber in( --içeriyor ise
'AR-5381',
'BA-8327',
'BE-2349',
'BE-2908',
'BL-2036',
'CA-5965',
'CA-6738'
)

select * from Production.Product
where
ProductNumber not in( --içermiyor ise
'AR-5381',
'BA-8327',
'BE-2349',
'BE-2908',
'BL-2036',
'CA-5965',
'CA-6738'
)