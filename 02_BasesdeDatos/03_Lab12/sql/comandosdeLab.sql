ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC);
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero);
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha);

  ALTER TABLE entregan add constraint cfentreganclave 
  foreign key (clave) references materiales(clave); 
  
  ALTER TABLE proveedores add constraint cfentreganrfc 
  foreign key (rfc) references proveedores(rfc); 
  
  ALTER TABLE Proyectos add constraint cfentregannumero
  foreign key (numero) references proyectos(numero); 

    ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ; 

 INSERT INTO Materiales values(1000, 'xxx', 1000) 
 
 sp_helpconstraint Proveedores
 
 SELECT *FROM materiales;
 SELECT *FROM proveedores;
 SELECT *FROM proyectos;
  SELECT *FROM entregan;
 
   INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ; 

  Delete from Entregan where Clave = 0 
  
  
  INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0); 
  
  Delete from Entregan where cantidad  = 0

