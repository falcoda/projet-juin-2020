CREATE TABLE "DBA"."categories" (
	"id_categorie" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"nomCateg" VARCHAR(100) NULL,
	PRIMARY KEY ( "id_categorie" ASC )
) IN "system";

CREATE TABLE "DBA"."contact" (
	"id_contact" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"prenom" VARCHAR(30) NOT NULL,
	"nom" VARCHAR(30) NOT NULL,
	"mail" VARCHAR(120) NOT NULL UNIQUE,
	PRIMARY KEY ( "id_contact" ASC )
) IN "system";

CREATE TABLE "DBA"."materiels" (
	"id_materiel" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"nom" VARCHAR(100) NOT NULL UNIQUE,
	"description" LONG VARCHAR NULL,
	"id_categorie" INTEGER NULL,
	PRIMARY KEY ( "id_materiel" ASC )
) IN "system";


CREATE TABLE "DBA"."mp" (
	"id_mp" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"mp" LONG VARCHAR NULL,
	"id_contact" INTEGER NULL DEFAULT AUTOINCREMENT,
	PRIMARY KEY ( "id_mp" ASC )
) IN "system";

CREATE TABLE "DBA"."utilisateurs" (
	"id_utilisateur" INTEGER NOT NULL DEFAULT AUTOINCREMENT,
	"pseudo" VARCHAR(30) NULL,
	"psw" VARCHAR(30) NULL,
	PRIMARY KEY ( "id_utilisateur" ASC )
) IN "system";

ALTER TABLE "DBA"."materiels" ADD CONSTRAINT "categories" FOREIGN KEY ( "id_categorie" ASC ) REFERENCES "DBA"."categories" ( "id_categorie" );

ALTER TABLE "DBA"."mp" ADD CONSTRAINT "contact" FOREIGN KEY ( "id_contact" ASC ) REFERENCES "DBA"."contact" ( "id_contact" );

ALTER TABLE "DBA"."mp" ADD CONSTRAINT "fk_mp_materiel" FOREIGN KEY ( "id_materiel" ASC ) REFERENCES "DBA"."materiels" ( "id_materiel" );
