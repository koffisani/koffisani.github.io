---
published: true
title: Comment utiliser plusieurs dépôts distants avec Git
description: Git n'est-il pas defini comme un gestionnaire distribué de version de code ?
layout: post
header-img: GitLab-vs-GitHub-vs-bitbucket-1.jpg
tags: [Versioning, Programming, Code, Git]
categories: [Code]
---
Git est normalement décrit comme un gestionnaire distribué de version de code (Distributed Version Control System). Alors comment parvenir à mettre en oeuvre  cet aspect distribué de l'outil ?<!--more-->

## La notion de remote
<img src="/img/centr-decentr.png" alt="Distributed Version Control" class="img-fluid">

Le remote pour une branche consiste en un URL où le dépôt va chercher les modifications. Un remote est un ordinateur distant (généralement) sur lequel le projet est envoyé, et duquel le code est rapatrié. Il sert de sauvegarde pour notre projet, et peut facilement servir à une reprise d'activité suite à une catastrophe.

Un remote peut être l'ordinateur d'un collègue. Il peut être le serveur de Github ou Gitlab, un serveur Gitlab auto-hébergé, ... Et il est possible que ces différents remotes soient mis en place pour un même projet.

Par exemple, le cas usuel que nous connaissons, c'est l'utilisation d'un serveur Github comme remote. Mais depuis que plusieurs plateformes cloud sont utilisées pour l'hébergement de nos applications, des outils comme Heroku, Amazon Web Service ou encore Microsoft Azure sont très utilisés. Ils peuvent être utilisés, via leur CLI (Command Line Interface), parallèlement à Github.

Dans notre projet, en local, pour savoir les remotes configurés, il faut saisir la commande suivante :

```bash
git remote -v
```

Le résultat est le suivant :
```
origin  git@github.com:koffisani/koffisani.github.io.git (fetch)
origin  git@github.com:koffisani/koffisani.github.io.git (push)
```
Ceci liste les différents remotes.

## Configurer plusieurs remotes
Par défaut, le premier remote (default remote) est identifié par le nom `origin`. Mais ceci n'est qu'une convention. Et ce n'est en rien une norme. Vous pourrez vous-mêmes ajouter un remote en lui donnant un nom :

```
git remote add <nom_du_remote> <url_remote>
```
Supposons que j'ai en plus un répertoire Gitlab. Je l'ajoute comme ceci :
```
git remote add gitlab git@gitlab.com:koffisani/koffisani.github.io.git
```
Nous pouvons ajouter autant de remote que je veux.

## Envoyer du code vers un remote spécifique
Nous pouvons sélectionner un remote spécifique pour pousser nos changements.
```
git push <remote> <branch>
```

Dans notre cas spécifique, je veux pousser vers la branche `master` sur le remote `gitlab`:
```
git push gitlab master
```
Et bien, c'est ça.

Nous pouvons définir le remote par défaut. Ceci permet de facilement envoyer les modifications sur un remote pour une branche donnée.
```
git push --set-upstream gitlab master
```
ou encore :
```
git push -u gitlab master
```
De cette manière, la prochaine fois que l'on saisit 
```
git push 
```
le code sur la branche courante (`master`) est poussée vers le remote `gitlab`. Aussi un pull est simple :
```
git pull
```

---
Ce post est inspiré de cet [article](https://www.cloudsavvyit.com/2464/how-to-use-git-with-multiple-remote-repositories/).

Si vous avez des apports ou recommandations, merci de commenter ci-dessous.
