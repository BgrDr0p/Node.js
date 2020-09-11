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