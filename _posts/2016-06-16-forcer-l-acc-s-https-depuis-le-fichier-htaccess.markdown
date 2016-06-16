---
published: true
title: Forcer l'accès https depuis le fichier htaccess
layout: post
tags: [https, sécurité, SSL]
categories: [Sécurité, https]
---
La sécurité sur internet est désormais un défi pour tous. Et, échanger des informations sensibles avec ses utilisateurs requiert l'utilisation du protocole https au lieu du http par défaut. Ce protocole est même recommandé, et sera probablement bientôt exigé par Google pour son indexation. WordPress annonçait tout dernièrement son ambition de faire passer tous les sites qui l'utilisent au https.

Ceci dénote la nécessité de l'admettre et s'y apprêter déjà. L'utilisation de ce protocole requiert plusieurs pré-requis, parmi lesquels : l'obtention d'un certificat SSL, sa configuration sur son serveur d'hébergement, ... Et après tout, il serait recommandé de ne accepter que des requêtes qui utilisent ce protocole sécurisé. Pour ce faire, on peut par exemple le fichier .htaccess afin de convertir toutes les http en https. Il suffit d'ajouter ce bout de code dans son fichier .htaccess à la racine.
```
###############################################
#Pour forcer l'utilisation d'une connexion SSL sur votre site web, veuillez placer le contenu suivant dans un fichier .htaccess
###############################################

RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{SERVER_NAME}/$1 [R=301,L]
```
Ceci permet donc de rediriger toutes les requêtes et donc de sécuriser la communication entre votre site et l’utilisateur (internaute).