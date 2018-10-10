BULK INSERT a1208733.a1208733.[Proyectos]
   FROM 'e:\wwwroot\a1208733\proyectos.csv'
   WITH 
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
