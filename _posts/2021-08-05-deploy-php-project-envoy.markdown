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

## Tâche de déploiement
### Généralités
Autrefois, le déploiement se faisait via des connexions FTP. Puis, du SFTP, rsync ou scp. Mais lorsqu'on veut une fluidité et délicatesse dans le déploiement, il s'avère nécessaire de revoir le scénario.

L'utilisation des outils de versionnement est d'une grande utilité pour le développeur. Ceci lui permet beaucoup de choses qu'il n'aurait pu faire sans eux. Lorsqu'on a son code en ligne sur un serveur Gitlab ou Github, on peut utiliser des clés de déploiement pour déploier ses projets. 

Les clés de déploiement sont des clés SSH que l'on génère sur le serveur de destination et dont la partie publique est fournie à Gitlab ou Github. Cette clé renseignée dispose d'un accès en lecture (par défaut) au projet et l'on peut initier un clone ou un pull en se connectant avec la clé, donc depuis le serveur.

### Clé de déploiement
Pour générer une clé SSH, il faut se connecter au serveur et exécuter la commande suivante :
```bash
ssh-keygen -t ed25519 -C "votre adresse email"
```
Une série de questions vous seront posées auxquelles vous répondez. Vous pouvez avoir [des détails ici](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Il faut alors ajouter cette clé à votre serveur de gestion de version. 
- Pour [Github](https://docs.github.com/en/developers/overview/managing-deploy-keys)
- Pour [Gitlab](https://docs.gitlab.com/ee/user/project/deploy_keys/)

### Adaptation de la tâche
Nous adaptons notre tâche ici afin de bien atteindre nos objectifs. Nous convenons d'effectuer un premier déploiement manuel avant d'automatiser le reste. Ceci consiste à clone le projet pour une première fois sur le serveur à l'aide de Git. Et le reste des tâches consiste à faire un pull de la branche adéquate ou du tag adéquat.

Ainsi, nous obtenons le script suivant :
```php
@servers(['test' => 'user@test.example.com'])

@task('test_ls', ['on' => 'test'])
    git pull origin master
    composer update
    # Exécution d'éventuelles migrations
@endtask
```

Voilà. Dans un prochain article, j'aborderai comment utiliser une clé SSH en local au lieu de l'authentification à l'aide du mot de passe.
