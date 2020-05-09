CREATE FUNCTION "DBA"."getPath"()
returns long varchar
deterministic
BEGIN
 declare dbPath long varchar; // chemin de la db
 declare dbName long varchar; // nom de la db
 --
 set dbPath = (select db_property ('file'));        -- path + nom de la db
 set dbName = (select db_property('name')) + '.db'; -- nom de la db
 set dbPath = left(dbPath, length(dbPath)-length(dbName)-length('backend\')); -- path seul
 set dbPath = dbPath +'frontend\';
 --
 return dbPath; // renvoyer path
END;

CREATE FUNCTION "DBA"."verification"( in maill char(50))
RETURNS INTEGER
DETERMINISTIC
BEGIN
	DECLARE "resultat" INTEGER;
	
    set resultat = (SELECT id_contact from contact
    where mail = maill);

	RETURN "resultat";
END;
