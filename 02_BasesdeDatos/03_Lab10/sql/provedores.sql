BULK INSERT a1208733.a1208733.[Proveedores]
   FROM 'e:\wwwroot\a1208733\proveedores.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
