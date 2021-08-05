---
published: true
title: Déployer ses applications avec Envoy et Gitlab ou Github
description: Vous n'avez pas pu mettre en oeuvre un bon pipeline d'intégration et déploiement continus, mais voulez automatiser le déploiement de votre application
layout: post
tags: [Development, Deployment]
categories: [Code]
---
Attention !!! Je vous encourage fortement à [mettre en oeuvre des environnements de tests, d'intégration et de déploiement continus](https://code.koffisani.dev/code/2019/07/29/deploiement-continue.html).

Vous pourrez tomber sur un projet où le besoin nait d'automatiser certaines actions. C'est ce qui m'est arrivé tout dernièrement avec un projet déjà avancé pour lequel les configurations d'intégration continue nécessitent beaucoup de précautions pour ne pas engendrer des conséquences collatérales.<!--more-->

J'ai donc pensé à utiliser Envoy, une librairie de Laravel qui peut s'utiliser pour n'importe quel projet PHP.

## Envoy, que sa quo ?
Envoy est une librairie du framework populaire Laravel de PHP. Il fournit une syntaxe propre et minimaliste pour exécuter des tâches sur des serveurs distants. 

## Installation
Bien que Envoy soit développé par la communauté Laravel, il ne fonctionne pas que sur ce framework. Tout projet PHP, utilisant le gestionnaire de dépendances `composer` peut l'utiliser. Il suffit à cet effet d'exécuter la commande suivante en ligne de commande : 
```bash
composer require laravel/envoy --dev
```
ou plus globalement : 
```bash
composer global require laravel/envoy
```
Dans le second cas, il faut s'assurer que le dossier des exécutables de `composer` (`~/.composer/vendor/bin`) soit dans le `PATH`.

## Automatisation des tâches
Les tâches à automatiser doivent se trouver dans un fichier `Envoy.blade.php` à la racine du projet. Nous créons donc ce fichier en y ajoutant le contenu suivant:
```php
@servers(['test' => 'user@test.example.com'])

@task('test_ls', ['on' => 'test'])
    ls -la
@endtask
```

Un petit tour d'horizon :
- La directive `@servers(['test' => 'user@test.example.com'])` définit les connexions au serveur distant sur lequel doivent s'exécuter les tâches. On a tout aussi la possibilité de définir plusieurs serveurs distant dans le tableau (array) de paires (clé-valeur).
- La directive `@task` définit les tâches à exécuter après qu'on se soit connecté au serveur. Ici, on liste juste les fichiers du dossier de l'utilisateur.

## Exécution de la tâche
Pour exécuter la tâche, il faut en invite de commande lancer :
```bash
vendor/bin/envoy run test_ls
```
Ceci exécute la tâche `test_ls`. Dans l'ordre : 
- Une connexion SSH est initiée entre le client et le serveur ;
- L'utilisateur est invité à saisir son mot de passe ;
- La connexion est établie si les identifiants sont corrects ;
- Les commandes indiquées dans le bloc correspondant à la tâche sont exécutées ;
- La connexion est fermée.
