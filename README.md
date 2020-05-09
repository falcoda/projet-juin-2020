# projet-juin-2020
Site pour une ASBL de location de matériel son/lumière.

# Présentation de l'équipe 
-Diego Marting Lenoir
-Derwa Alexandre (créateur de l'ASBL)
-Louis Carlier
-Dallenogare Corentin (créateur de l'ASBL)

# Description du projet
Le projet est un site d'une ASBL proposant des services de location de matériel son et lumière.
Le site est une vitrine du matériel proposé à la location et permet de rentrer en contact avec l'ASBL
pour une éventuelle location

# Aspects implémentés
-Création de l'HTML en fonction des articles présents dans la base de donnée. 
  =>Cela comprend la liste des catégories, les différentes photos et noms du matériel ainsi que les fenêtres de descriptions.
-Récuperation des noms, prénoms, mails et messages des utilisateurs du site.
  =>Les utilisateurs peuvent laisser un message avec leurs coordonnées.
-Interface de connexion admin.
  =>Les administrateurs peuvent se connecter pour accèder à d'autres fonctionnalitées.
-Possibilité d'ajouter des articles.
  =>Les administrateurs peuvent rajouter des articles dans la base de donnée.
-Possibilité d'affiché les messages reçus.
  =>Les administrateurs peuvent regarder les messages et utilisateurs présents dans la base de donnée.
  
# Détail api rest 
-ajout : Permet d'ajouter du matériel dans la BDD-
-
    Il prend un nom d'article, une description et une id de catégorie en paramètre.
    Il insère ensuite les données dans la BDD (type = RAW)
-ajoutPersonne : Permet d'ajouter des personnes/messages dans la BDD.
-
    Il prend un nom, un prénom, un email et un message en paramètre.
    Il insère ensuite les données dans la BDD (type = RAW)
      => Si la personne est déja présente dans la BDD il n'insère que le message.
-categorie : Permet de créer une liste de catégories.
-
