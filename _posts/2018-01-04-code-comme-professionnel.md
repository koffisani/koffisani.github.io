---
published: true
title: Votre code ne vous montre pas professionnel ou comment s'y prendre  ?
description: Ce qu'il faut savoir lorsqu'on utilise des dépendances.
layout: post
header-img: git-hub-lab.png
tags: [Code, Composer, Git, npm]
categories: [Code]
---
Que vous utilisez PHP, NodeJS, Ruby ou Python, presque tous les langages de programmation d’aujourd’hui disposent d’un outil de gestion de dépendances. Qu’il s’appelle Composer pour PHP, npm pour NodeJS, pip pour Python, …, leur objectif est le même : faciliter la gestion des dépendances. 

Dans PHP, l’utilisation de ce gestionnaire se remarque par deux fichiers `composer.json` et `composer.lock` et un dossier `vendor/`. Avec l’utilisation d’un gestionnaire de version tel que Git, vous n’avez plus besoin de vous déplacer avec le dossier `vendor/`, il suffit qu’il y ait les deux fichiers `composer`. Une commande composer update dans le dossier permet de télécharger les dépendances (à jour). C’est très utile lors de l’intégration continue et du déploiement continu.
Lors d’une récente expérience de prise en main du code écrit par un collègue, j’ai découvert cet aspect inconnu de beaucoup que je partage ici. 

## Le dossier `vendor/` des dépendances ne doit pas être touché
Non, dès que vous touchez ce dossier, soit en ajoutant ou en supprimant une portion de code, vous perdez en professionnalisme, et vous vous discréditez auprès de vos collaborateurs. Chaque développeur professionnel (ou qui veut l’être) sait qu’on ne touche en aucun cas à ce dossier. Et c’est un réflexe naturel pour le développeur de mettre à jour régulièrement son projet par rapport aux dépendances : certaines corrections pourraient être faites entre temps.

## Les fichiers `composer.json` et `composer.lock` ne vous appartiennent pas
La meilleure des choses est de ne pas modifier manuellement ces fichiers, surtout le `composer.lock`. Lorsque vous téléchargez un module avec la commande `composer require <le_nom_du_module>`, `composer` modifie les fichiers `composer.json` et `composer.lock` et y insère les informations adéquates.

--

Ceci est un exemple pour `PHP`. C'est pareil par exemple pour `NodeJS` avec le fichier `package.json` et le répertoire `node_modules/`. 

Un aspect du professionnalisme dans le monde du dévoloppement logiciel est la collaboration. Si vos collaborateurs ne peuvent pas travailler facilement sur le même code que vous, vous n'êtes pas prêts pour aller avec les autres.
