---
published: true
title: Chatter REST API avec Slim Framework de PHP
description: Ceci est une simple API (Aplication Programming Interface) créé à l'aide du micro-framework Slim Framework de PHP.
layout: post
tags: [REST, API, PHP, SLIM Framework]
categories: [API]
---

<!-- # Chatter REST API avec Slim Framework de PHP -->

Ceci est une simple API (Aplication Programming Interface) créé à l'aide du micro-framework Slim Framework de PHP. Ici on parle esseniellement de `route` (d'URL), de code de réponses HTTP (`HTTP response code`). <!--more-->

## Introduction

Il s'agit ici de permettre aux utilisateurs de notre API de :

- s'authentifier;
- Récupérer leurs messages;
- Récupérer les messages d'autres utilisateurs;
- Envoyer des messages;
- Supprimer des messages;
- Joindre des images à leur message.

Par ailleurs, l'application aura à :

- créer un journal des activités des utilisateurs;
- authentifier les utilisateurs avec un simple méchanisme de clé d'API;
- retourner les codes de réponses adéquats ;
- retouner des réponses en format JSON;
- enfin assurer la maintenabilité au fur ét à mesur e que la complexité augmente.

Le code source est disponible ici : [https://github.com/koffisani/slim-rest-api](https://github.com/koffisani/slim-rest-api)

## Installation

Pour installer notre API, il faut :

- Serveur Apache : pouvant exécuter PHP 5 ;
- PHP 5.* et plus ;
- MySQL 5;

Après avoir rempli toutes ces conditions, il faut procéder comme suit :

1. installer git (voir [ici](http://git-scm.com)) ;
2. installer composer (voir [ici](http://getcomposer.com)) ;
3. ouvrir un terminal dans le repertoire de base du serveur (`/var/www/html/` sous Ubuntu, `C:\wamp\www\` pour WAMP sous Windows) et exécuter
```
git clone https://github.com/koffisani/slim-rest-api.git
```
4. se déplacer dans le dossier `slim-rest-api/` après que la commande soit exécutée avec succès. Installer les dépendances en exécutant :
```
composer update
```
Cette commande créera un dossier `vendor/` contenant le mini-framework Slim ;
5. Créer une base de données `chatter` et un utilisateur `chatter_api` (les informations se trouvent dans le fichier `config/credentials.php`, à adapter en fonction de vos paramètres) dont on se servira dans le code pour exécuter nos requêtes SQL.

## Utilisation
Notre API permet, comme dit au début, de s'authentifier et de récupérer des messages à partir d'une base de données. Pour celà, nous avons besoin d'un logiciel qui doit nous permettre d'exécuter des commandes `curl` : `GET`, `POST`, `PUT`, etc. Il s'agit de Postman, dont il existe une extension pour Google Chrome disponible [ici sur Chrome Store](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
