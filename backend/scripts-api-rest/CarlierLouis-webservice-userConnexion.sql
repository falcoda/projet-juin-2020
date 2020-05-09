CREATE PROCEDURE "DBA"."utilisateurConnexion"()
RESULT (pseudo VARCHAR (30), psw VARCHAR (30))
BEGIN 
    SELECT pseudo, psw from utilisateurs
END;

CREATE SERVICE "userConnexion" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call utilisateurConnexion();
