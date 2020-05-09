CREATE PROCEDURE "DBA"."ajoutPersonne"(in pnom varchar(100), in pprenom varchar(100) , in email varchar(100) , in pmessage long VARCHAR)
BEGIN
    DECLARE verif INTEGER ;
	Call sa_set_http_header('Acces-Control-Allow-Origin', '*');
    verif = call verification(email);
    if verif >0 THEN 
         INSERT INTO mp(id_contact,mp) VALUES (verif,pmessage);        
    else 
  
        INSERT INTO contact(prenom,nom,mail) VALUES (pprenom,pnom,email);
        INSERT INTO mp(id_contact,mp) VALUES ((select max(id_contact) from contact),pmessage);
END if ;
END;

CREATE SERVICE "ajoutPersonne" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutPersonne(:nom,:prenom,:mail,:mp);
