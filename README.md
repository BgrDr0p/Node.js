# Node.js
Learn Node.js
Execution JS côté serveur avec moteur JS V8 de Chrome
Execution en single Thread uniquement
Archi asynchrone + approche par event

Module REPL : tester a peu près tout + trouver ensemble des objets et RegExp

Module : encapsule du code dans une unité, exporter certains éléments.


Exporter un module : module.export.name = "BgrDr0p"

Limites des fonctions callbacks : Logique importante & peu lisible

1 ou 2 go pour JS donc utilisation des streams pour séquencer les opérations
Streams permet scinder I/O en séquences asynchrones => optimize temps/ressources

stream readable : Lire gros volumes de données
stream writable : assembler ptits sources pour les ecrire
---------------------------------------------------------------------------------------------------------------------
Construire API REST avec Express, MongoDB :

Utilisation de Babel pour passer de ES6 vers ancien JS.
Mongoose pour faciliter l'accès a une BDD.

Base API REST avec Postman: 
 - exécuter des transations avec un serveur avec le protocole HTTP
 - Get : lire les données
 - Post : ajouter des données
 - Put : mettre à jour les données
 - Delete : supprimer les données

middleware : dans le contexte de serveur Node et Express, fonctions qui ont accès à l'objet de requête et de réponse, donc request et response, dans notre Application Express, peuvent modifier les requêtes, les arrêter, appeler une autre fonction with NEXT


