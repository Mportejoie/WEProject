# Projet de Gestion de Clients, d'Inventaire et de Factures
## Description
### Cette application, construite avec Angular, permet la gestion des clients, de l'inventaire et des factures. Les utilisateurs peuvent s'inscrire et se connecter en utilisant des identifiants hashés. La base de données PostgreSQL stocke les informations des clients et des utilisateurs, tandis que le serveur Node.jsgère les interactions avec la base de données.

## Fonctionnalités 
Inscription et connexion d'utilisateurs avec mots de passe hashés

Gestion des clients

Gestion de l'inventaire

Gestion des factures

Utilisation de composants PrimeNG pour l'interface utilisateur

Utilisation de DOCKER

## Utilisateurs de test :

Admin : id: admin, mdp: admin

Test : id: test, mdp: test

Autre : id :paul, mdp: paul

## Technologies Utilisées
Angular (Version 18.2.13)

Node.js (Version 18.19.0)

PostgreSQL 

PrimeNG pour les composants de l'interface utilisateur

Docker 

GitLab

## Apprentissage et Compétences Acquises
Utilisation de Postman pour tester les API

Création de serveurs Node.jspour interagir avec PostgreSQL

Utilisation des composants primeNG

Gestion de la base de données et relations réalistes entre données

Mise en place de Docker pour faciliter les builds et déploiements

# Installation et Lancement du Projet
## Prérequis
### Docker et Docker Compose installés sur votre machine ou VM

## Commandes Utiles
### Cloner le Projet

git clone https://gitlab2.istic.univ-rennes1.fr/mportejoie/mafad_we-project


### Construire et Lancer les Conteneurs avec Docker Compose
docker-compose up --build

### Arrêter les Conteneurs
docker-compose down

### Supprimer les Conteneurs Arrêtés
docker container prune

### Supprimer les Images Non Utilisées
docker image prune

### Supprimer les Volumes Non Utilisés
docker volume prune

### Nettoyage Complet de Docker
docker system prune -a

## Configuration de la Base de Données
### Le fichier docker-compose.yml configure un conteneur PostgreSQL avec les détails suivants :

Utilisateur : postgres

Mot de passe : root

Base de données : MAFAD

### Les informations de connexion à la base de données sont configurées dans le fichier docker-compose.yml :

environment:
DB_NAME: MAFAD
DB_USER: postgres
DB_PASSWORD: root
DB_HOST: postgres
DB_PORT: 5432

## Accès à l'Application
### Après avoir lancé les conteneurs, l'application Angular est accessible à l'adresse suivante :

http://localhost:4200


## Test à noter
### Test client 1
### Si un comportement n'est pas normal se référé à la partie du ReadMe : "Erreur X" en dessous.
L'authentification est effective avec un token qui a une durée de vie d'une heure.
Pour acceder a des données spécifiques à un utilisateurs il faut se connecter avec.

Pour cela : cliquer sur le bouton "Connexion" en haut à droite et entrer "admin" et "admin" respectivement dans login et mot de passe.

Dans l'onglet des Clients ont retrouvera les clients enregistrées dans la base de donnée qui sont liée à l'utilisateur admin seulement.

Si l'on se déconnecte et se connecte avec le compte de test ou de paul avec respectivement "test" "test et "paul" "paul" comme identifiants et mot de passe de connection
De retour sur la page client, on devrait être capable de voir ajouté modifié et supprimé des clients. Ces clients seront liée à l'utilisateur actuellement connecté.
###/!\Cependant si la connection se fait sur la page client il faudra "switch" de page dans l'application et revenir à la page client pour avoir une mise à jour des données affiché.

### Test client 2
Une fois authentifié, la création d'un client nécessite de remplir tout les champs sauf optionnellement le champ "Sexe"
ET il est nécessaire d'avoir le champ Email ou le champ Téléphone de rempli.
Puis actualiser la page pour voir que la donnée est persistante.

Le client est ajouté dans la BDD.

### Test client 3
Modifier / Supprimer un client.

### Même tests avec l'onglet de gestion de stocks / Ajouter/modifier/supprimer une catégorie / un élément 
Données non persistante et pas encore mis en relation avec la BDD.


## NB : Remarque sur l'application
Les options prévus dans la page de settings ne sont pas encore effective.
L'affichage de la page principale n'utilise pas encore de données et affiche des composants simplement à un but visuel.
La page de création de facture n'est pas terminé mais elle offre pour le moment un commencement de création de facture avec une visualisation en format PDF en Direct.


## Et si docker ne fonctionne pas ?
### Erreur 1 :
Attaching to mafad_we-project-angular-app-1, mafad_we-project-backend-1, mafad_we-project-postgres-1
Error response from daemon: driver failed programming external connectivity on endpoint mafad_we-project-postgres-1 (b466299994d1d7044472dfba5783240a3553744b57ec46dcb3749c1ecad68638): failed to bind port 0.0.0.0:5432/tcp: Error
starting userland proxy: listen tcp4 0.0.0.0:5432: bind: address already in use

Il suffit de kill le processus d'un potentiel postgreSQL déjà en fonctionnement sur le port avec les commandes :
sudo lsof -i :5432
et 
sudo systemctl stop postgresql

### Erreur 2 : 
Si la connexion à un utilisateur ne fait rien alors "CTRL C" puis relancer la commande "docker-compose up"
Cette erreur est déjà apparue justement après l'erreur 1.


Je n'ai pas eu d'autres cas et en ayant installé une VM debian avec docker dessus cela fonctionne parfaitement chez moi.
Ne pas hésiter à me contacter.










