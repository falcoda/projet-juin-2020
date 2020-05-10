insert into "DBA".categories (id_categorie,nomCateg) VALUES(1,'caisson');
insert into "DBA".categories (id_categorie,nomCateg) VALUES(2,'top 2 voies');
insert into "DBA".categories (id_categorie,nomCateg) VALUES(3,'ampli');
insert into "DBA".categories (id_categorie,nomCateg) VALUES(4,'processeur');

insert into "DBA".contact (id_contact,prenom,nom,mail) VALUES(8,'da','corentin','corentindallenogare@mail.y');
insert into "DBA".contact (id_contact,prenom,nom,mail) VALUES(9,'lapierre','mich','michel@mail.y');
insert into "DBA".contact (id_contact,prenom,nom,mail) VALUES(10,'Louis','carleir','louiscarlier123@gmail.com');

insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(1,'mth4654','caisson 21',1);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(2,'mth30','caisson 12"',1);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(3,'nexo','systyme 3 voies',2);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(4,'turbotop','tete 2 voies',2);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(11,'qscRmx2450','amplificateur 2 voies 2x350w',3);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(12,'cvrD3002','amplificateur 2 voies 2x3000W',3);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(13,'tdController','processseur nexo si2000',4);
insert into "DBA".materiels (id_materiel,nom,description,id_categorie) VALUES(14,'dsp206','processeur 6 voies   limiteur',4);

insert into "DBA".mp(id_mp,mp,id_contact) VALUES(9,'je suis',8);
insert into "DBA".mp (id_mp,mp,id_contact) VALUES(10,'aujourdhui',8);
insert into "DBA".mp (id_mp,mp,id_contact) VALUES(11,'tomber',8);
insert into "DBA".mp (id_mp,mp,id_contact) VALUES(12,'sur une pierre',8);
insert into "DBA".mp (id_mp,mp,id_contact) VALUES(13,'un matin',9);
insert into "DBA".mp(id_mp,mp,id_contact) VALUES(14,'il est venu',9);
insert into "DBA".mp (id_mp,mp,id_contact) VALUES(15,'test',10);

insert into "DBA".utilisateurs (id_utilisateur,pseudo,psw) VALUES(1,'louis','ephec');















