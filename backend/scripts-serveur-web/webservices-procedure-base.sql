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

CREATE PROCEDURE "DBA"."http_getCSS"(in url char(255) )
result(css long varchar)
BEGIN
-- 
  call sa_set_http_header( 'Content-Type', 'text/css' ); // header http
	select xp_read_file(dba.getPath() || 'CSS\' || url);    // renvoyer fichier css
--
END;

CREATE PROCEDURE "DBA"."http_getIMG"(in url char(255) )
result(img long binary)
BEGIN
--
  call sa_set_http_header('Content-Type', 'image/png'); // header http
	select xp_read_file(dba.getPath() || 'IMG\' || url);  // renvoyer image
--
END;
COMMENT ON PROCEDURE "DBA"."http_getIMG" IS 'fournisseur de fichier graphique (sous-répertoire IMG du site)';

CREATE PROCEDURE "DBA"."http_getJS"(in url char(255) )
result(css long varchar)
BEGIN
-- 
  call sa_set_http_header( 'Content-Type', 'application/javascript' ); // header http
	select xp_read_file(dba.getPath() || 'JS\' || url);    // renvoyer fichier javascript
--
END;

CREATE PROCEDURE "DBA"."http_getPage"(in url char(255) )
result(html long varchar)
BEGIN
-- 
  call sa_set_http_header( 'Content-Type', 'text/html' ); // header http
	select xp_read_file(dba.getPath() || url || '.html');   // renvoyer page
-- 
END;

CREATE SERVICE "css" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getCSS(:url);
COMMENT ON SERVICE "css" IS 'service fournisseur de css';

CREATE SERVICE "img" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getIMG(:url);

CREATE SERVICE "js" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getJS(:url);

CREATE SERVICE "page" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call dba.http_getPage(:url);


