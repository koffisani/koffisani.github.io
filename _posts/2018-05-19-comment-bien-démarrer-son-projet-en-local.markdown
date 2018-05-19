---
published: true
title: Comment bie démarrer son projet en local
description: Lorsqu'il s'agit de démarrer un projet en local en partant d'un code source issu de Github, beaucoup de développeurs éprouvent de grandes difficultés.
layout: post
header-img: classroom.png
tags: [Programming, Code, Best Pratices]
categories: [Git]
---

Vous avez trouvé un projet intéressant sur Github et vous avez envie de vous l'approprier ou de collaborer dessus. Souvent, des gens se demandent comment s'y prendre, comment démarrer, d'où partir pour arriver où ?<!--more-->


<img width="300" align="right" src="/img/img-github-clone.png"/>

## Trouver l'URL du projet
Tout projet sur Github est doté de deux adresses : l'une utilisant le protocole SSH et l'autre utilisant le HTTP(S)<sup>[1](https://code.koffisani.ga/git/2017/07/27/quel-protocole-choisir-entre-ssh-et-https-pour-git.html)</sup>. Vous avez la possibilité de basculer d'une option à une autre en cliquant sur le lien à l'extrémité droite (*Use HTTPS* ou *Use SSH*).



## Clonez ce projet

<img align="right" width="300" src="/img/clone.png" alt="clonez ce répertoire" />

Maintenant, cliquez sur l'icône *copier dans le presse-papier*.

Ouvrez un invite de commande et exécutez les commandes Git suivantes :

```
git clone "l'url que vous venz de copier"
```
où "l'url que vous venez de copier" (sans les guillemets) est l'url du répertoire. Voir la section précédante afin d'obtenir l'url.

<img align="right" width="300" src="/img/copy-to-clipboard.png" alt="copier l'URL dans le presse-papier" />

Par exemple:
```
git clone git@github.com:Classroom-Koffi-Sani/site-location-vehicule.git
```
Ici vous êtes en train de copier le contenu du répertoire `site-location-vehicule` depuis GitHub sur votre ordinateur.

## Créez une branche

Déplacez-vous dans le répertoire du projet nouvellement cloné (si vous n'y êtes pas encore) :

```
cd site-location-vehicule
```
Maintenant créez une branche avec le commande `git checkout` :
```
git checkout -b <votre-nom>
```

Par exemple:
```
git checkout -b koffi-sani
```

## Effectuez les modifications nécessaires et validez-les

Maintenant, vous pouvez aisément avancer sur votre projet. Au fur et à mesure que vous avancez, prenez la peine de valider les modifications (que vous avez testées avec succès).

 Si vous ouvrez l'invite de commande et vous exécutez la commande  `git status`, vous verrez qu'il y a des modifications. Ajoutez ces modifications à la branche que vous venez de créer avec la commande  `git add` :
```
git add <nom-du-fichier>
```
A la place de `<nom-du-fichier>`, vous pouvez lister tous les fichiers que vous voulez considérer lors de la prochaine validation.

Maintenant validez ces modifications avec la commande `git commit`:
```
git commit -m "Description des modifications"
```
en prenant soin de bien renseigner la description des modifications effectuées.

## Poussez les modifications vers GitHub

Envoyez vos modifications sur Github avec la commande `git push`:
```
git push origin <votre-nom>
```
en remplaçant `<votre-nom>` avec le nom de la branche précédemment créée.

<img align="right" width="500" src="/img/img-github-branches.png" alt="Les branches" />
Et c'est fait, il suffit de visiter Github et réaliser que vos modifications sont en ligne. Pour ce faire, cliquez sur la branche nouvellement créée comme indiqué par la figure ci-contre.
