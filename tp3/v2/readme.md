## Binôme:
L3 Info jsfs3
TAHIR NARIMANE 

Introduction au projet
Ce projet pong a pour but de creer une interface de jeu composée de 2 raquettes et une balle,chaque raquette est manipulée par un joueur, le but est d'empecher la balle de franchir la frontiere gauche ou droite du terrain (canvas) selon le joueur.

# HOW TO:


recuperer le dépôt:


sur le terminal de commande saisissez :
>>> git clone "https://gitlab-etu.fil.univ-lille1.fr/tahir/jsfs_l3_tahir/-/tree/main/tp3"


génerer et instaler les dépots necissaires :



npm  init -y





installer nodemon  :
>>> npm  install --save nodemon


installer socket.io :
>>> npm  install --save socket.io


ajouter : "start": "nodemon server.js "  dans "script" dans le fichier package.json

## Classes et objects :

  *Mobile : Qui represente le coeur de tout type d'object mobile.
  *Ball : Qui represente la balle
  *Paddle : Qui represente la raquette
  *Game : representant le terrain de jeu qui dessine anime tous les mobiles
  *movestate : Qui represente les états des déplacemens .

## Points importants de ce projet :
  * Implimentation de classes.
  * Utilisation de window.requestAnimationFrame pour un affichage armonieux .
  * Implimentation d'un serveur Node js.
  * Implimentation de socket.io
  * Implimentation de controlleurs
  * Implimentation d'un systeme d'envoi de message client->serveur->client.
## Avancement :
- j'ai malheureusement  pas pu  finir la dernière partie , et j'ai des soucis avec certaines fonctions qui fonctionnent  pas correctement .
- la balle est trop rapide , les paddles sont coincées.
- et au niveau de l'inspecteur du  navigateur je ne  vois pas d'erreurs s'afficher
- avant le mis en palce de second paddle tout fonctionner correctement mais lorsque  j'ai mis le deuxieme paddle et que j'ai entamé la partie réseau j'étais tout le temps  confronté à des problèmes.