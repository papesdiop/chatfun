chatfun
=======

Mise en oeuvre d'application "Web" à "TEMPS REEL" avec Node.js et socket.io / How to make a Real Time Web Application on Node.js and socket.io

C'est produire un programme informatique qui s'exécute à partir du navigateur web (Application web) et donnant des informations à jour (Temps réel) à l'aide d'un autre environnement de programmation (Node.js).
In some words: Provide a computer program that runs on web browser (web application) and returns un-outdated informations (Real time) for mercy of an other programming environment (Node.js).

Les application web à temps réel sont traditionnellement un challenge pour tout développeur. De par la complexité de sa mise en oeuvre, beaucoup de personnes evitent d'aller vers "Temps réel".
Dans ce petit blog introductif, vous allez comprendre le derrière du "Temps réel" et connaitre les secrets de sa "fausse complexité" de sa mise en oeuvre.

Langages utilisés: Javascript, Html, CSS

C'est quoi Node.js: 
C'est tout simplement le javascript coté serveur. Oui, c'est pas un erreur! 
Ne le saviez vous pas, le langage Javascript peut se connecter à une base de donnée mysql, ouvrir et lire nos fichiers top secrets, en somme faire tout ce que 
PHP,C/C++, etc. savent faire. 
Techniquement, Node.js est une plateforme opensource comprenant un ensemble de librairies et api ecrites au dessus du moteur javascript de Google Chrome (V8). 
Parmi les api, on peut citer: fs pour accéder aux fichiers systèmes, net, http pour les traitements tcp et http, etc.

Pourquoi Node.js et pas machin.js : 
Parce que machin.js est nul :(, oui! trop nul meme pour faire ce qu'on va faire ici sans peine ;).

En plus Node.js est sexy :), - hein, n'importe quoi! - Oui Node.js est fun, on a pas à se stresser en programmant, "tout se fait tout seul!" ;) Assez de blah, blah, soyons sérieux:
Node.js est rapide, plus rapide que PHP, Python, Ruby, etc. Avec Node.js, c'est le JS Everywhere: on développe avec seulement JavaScript tant du côté client que du coté serveur.
C'est l'environnement de programmation paralléle, le non-blocking I/O ou simplement le NON-BLOCKING: c'est à dire le traitement lourd ou long, ne bloque pas l'utilisateur ou le programme.
	C'est quoi réellement le non-blocking (dans notre quotidien)? Prenons l'exemple du Restaurant ALI BABA ET LES 40 VOLEURS, si on traite la commande du 1er client en faisant attendre les suivants, ça c'est du BLOCKING.
	Alors si on procéde de la façon que si tout client qui arrive, on lui remet un jeton (numéroté svp), et on traite les commandes derrière, le client s'il veut peut faire d'autres trucs (draguer la belle blonde qui est à coté, ou whatever).
	Toute commande terminée, on affiche le numéro du jeton, et le client peut maintenant passer prendre sa commande. ça c'est le NON-BLOCKING. Si vous n'avez pas toujours compris, alors relisez à l'envers :(.
	Le Non-Blocking en Javascript: ouvrez votre console de votre navigateur Chrome par exemple, et tapez le code suivant:
	
	setTimeout(function(){
		console.log("Node! ");
		}, 2000); //attends 2 secondes et ecris Node!
	console.log("Hello,");
	Ce petit programme va écrire "Hello," puis "Node!: setTimeout(..) ne bloque pas ici le programme, ça c'est du NON-BLOCKING
