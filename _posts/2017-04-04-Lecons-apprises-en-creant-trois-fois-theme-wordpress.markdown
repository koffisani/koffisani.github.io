---
published: true
title: Leçons apprises en créant trois thèmes WordPress
description: In computer programming, unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use.
layout: post
header-img: wordpress.png
tags: [Programming, Code, Best Pratices, WordPress]
categories: [Development]
---

Ce 4 avril au soir, j'ai terminé (! un logiciel a-t-il une fois été définitivement terminé ?) -- j'ai livré-- la première version de mon thème WordPress. En effet, fatigué de chercher un thème qui me convienne, je me suis dit :

> Pourquoi ne pas en créer moi-même ?

<!--more-->

Cette  avanture est la troisième, je veux dire que c'est la troisième fois que je me mets à créer un thème pour WordPress. Les deux premières concernaient le blog de notre entreprise. Et au bout du chemin, j'ai retenu ces quelques leçons.

## S'en quérir sur l'architecture d'un thème
Lorsque pour la première fois je m'étais lancé, je ne savais pas comment un thème WordPress était structuré; comment les fichiers dépendaient les uns les autres; comment, comment, et comment. J'était beaucoup plus focalisé sur le rendu que le rendement. J'étais beaucoup plus concerné par le visuel que le fonctionnement. Non pas parce que je suis devenu un infographiste; mais parce que je voulais quelque chose.

Et je crois ainsi que si l'on veut créer un thème WordPress, il faut donc s'attarder sur son architecture. Et pour ceci, il y a [un plugin développeur officiel](https://wordpress.org/plugins/developer/), qui permet au développeur de savoir sur chacune des pages qu'il affiche, toutes les autres fichiers qui ont été inclus.

## Partir avec le template _s (underscores)
[Underscores](http://underscores.me/) est un template standard de thème WordPress. Il fournit les fonctionnalités et fichiers de base d'un thème. Il vous permet de démarrer à zéro avec un minimum vital.

## Utiliser les bonnes manières selon WordPress
Lorsque vous créez un thème wordpress, il ne suffit pas d'obtenir un résultat. C'est souvent ce que nous croyons, étant donné que _tout chemin mène à Rome_. WordPress a cette particularité d'être modifiable et permet à tout utilisateur de l'adapter à ses besoins. Ainsi, des nombreux plugins créés par des développeurs tiers aident à rendre ce produit parfait pour un utilisateur final. Pour qu'un plugin ou thème fonctionne avec un autre, sans conflit, il faut que l'un et l'autre respectent les règles de bonnes pratiques définies à cet effet. Ainsi plusieurs sites sont consacrés à cet effet. On peut citer essentiellement [codex.wordpress.org](https://codex.wordpress.org) et [developer.wordpress.org](https://developer.wordpress.org). En respectant ces pratiques, votre thème pourra facilement supporter d'autres plugins.

Par exemple, lorsque vous voulez inclure des fichiers JavaScript ou CSS, il faut le faire dans la fonction `<nom_du_theme>_scripts()` du fichier `fonctions.php`.

```
/**
* Enqueue scripts and styles
*/
function koffisani_scripts() {
  // Enqueue CSS
  wp_enqueue_style( 'font-awesome', get_template_directory_uri() .  '/css/font-awesome.min.css' );
  //Enqueue JavaScript
  wp_enqueue_script( 'jquery', get_template_directory_uri() .  '/js/jquery-1.10.2.min.js' );
}
```
Et enfin demander à WordPress de considérer cette méthode au chargement des scripts et styles :

```
add_action( 'wp_enqueue_scripts', 'koffisani_scripts' );
```
C'est donc la meilleure manière d'ajouter ces fichiers à WordPress. Non pas dans le bloc `<head></head>` des fichiers de vue.

## Conclusion
Avant de vous lancer dans la création d'un outil qui dépendant d'un autre, renseignez-vous sur les bonnes pratiques, comment l'existant fonctionne et comment interagir avec ce dernier.
