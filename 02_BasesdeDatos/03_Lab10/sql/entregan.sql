BULK INSERT a1208733.a1208733.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
