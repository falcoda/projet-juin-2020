CREATE PROCEDURE "DBA"."ajoutMatos"(in anom varchar(100),adescription varchar(1000),aid_categorie INTEGER )                 
BEGIN
  Call sa_set_http_header('Access-Control-Allow-Origin', '*');
  INSERT INTO materiels(nom,description,id_categorie) VALUES (anom,adescription,aid_categorie);
END;

CREATE SERVICE "ajout" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutMatos(:nom,:description,:id_categorie);
