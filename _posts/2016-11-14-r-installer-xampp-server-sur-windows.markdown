---
published: true
title: Réinstaller XAMPP Server sur Windows
layout: post
---
Avec l'évolution technologique en vogue, il est obligatoire de passer aux récentes versions afin de profiter des dernières fonctionnalités.

Si vous cherchez à mettre à jour XAMPP Server, vous verrez que la seule solution est de sauvegarder ses données (bases de données et fichiers dans du dossier `htdocs`), désinstaller l'application et installer la nouvelle version.  Parfois, la désinstallation ne supprime pas tout ce qu'on attend : applications, services et fichiers. Dans ce cas, vous aurez à installer la nouvelle version.

Lorsqu'il arrive à XAMPP d'avoir l'embarras du choix, il ne démarre pas Apache et affiche le message : 

> 13:09:21  [apache]  Apache Service Detected With Wrong Path
> 13:09:21  [apache]  Uninstall the service manually first
> 13:09:21  [apache]  Possible problem detected! 

Ainsi, la solution consiste en ce qui suit : 

- Accéder aux services `services.msc` en invite de commande ou Panneau de configuration > Outils d'administration > Services
- Vérifier les services Apachex.x et mysql. Même lorsque vous ne trouvez qu'un seul, il est possible que l'ancienne installation cause un problème à la nouvelle
- 