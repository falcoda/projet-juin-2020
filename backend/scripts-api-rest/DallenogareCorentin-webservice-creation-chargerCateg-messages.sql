CREATE PROCEDURE "DBA"."chargerCateg"()
result(categorie char(50),id_categorie INTEGER )
BEGIN 

    SELECT nomCateg,id_categorie from categories

end;

CREATE PROCEDURE "DBA"."creation"()
result(id char(4), nom char(50), description char(300),nomCateg char(4))
BEGIN   
    select id_materiel, nom, description,t2.nomCateg from materiels as t1
    natural join categories as t2 on t1.id_categorie=t2.id_categorie ;
end;

CREATE PROCEDURE "DBA"."messages" ()
result (contact long VARCHAR , liste long varchar)
BEGIN 
    call sa_set_http_header( 'Content-Type', 'text/html' );
    select  '<b>'||t2.nom ||' ' ||t2.prenom||'</b>', list('<p>' ||mp|| '</p>','') from mp as t1
    join contact as t2 on t1.id_contact = t2.id_contact
    GROUP BY t1.id_contact, t2.prenom, t2.nom 
end;

CREATE SERVICE "categorie" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call chargerCateg();

CREATE SERVICE "creation" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call creation();

CREATE SERVICE "messages" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call messages();
