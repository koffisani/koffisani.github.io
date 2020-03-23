---
published: true
title: Isoler un fichier du suivi de Git
description: Comment les faire ignorer par Git alors qu'ils étaient suivis initialement.
layout: post
tags: [Versioning, Programming, Code, Git]
categories: [Code]
---
Git est un outil très puissant de suivi de version de code. Il offre la possibilité de décider des fichiers dont nous voulons suivre les modifications. Cependant, nous avons toujours pas besoin de suivre les modifications de tous les fichiers. Il peut s'agir de fichiers exécutables générés, de fichiers de configuration de notre environnement de développement, ou bien d'autres. <!--more-->

L'outil dispose surtout de cette fonctionnalité qui consiste à créer un fichier `.gitignore` où l'on définit les règles de suivi des fichiers du projet.

## Règles d'isolation d'un fichier
Les règles sont toutes simples. Il suffit de lister les fichiers ou dossiers, ligne par ligne, dans le fichier `.gitignore` à la racine du dossier.

```bash
fichier1.xml
fichier2.conf
conf/
```
Ceci dit, les fichiers `fichier1.xml`, `fichier2.conf` et ceux contenus dans le dossier `conf/` ne seront pas traqués.

## Ne plus suivre un fichier suivi initialement

Il arrive souvent qu'on ait ignoré de définir les fichiers à exclure au début du projet. Soit parce que certains fichiers n'ont pas été créés au début du projet, et que lors du commit, on ait pas prêté attention.

Alors, pour les ignorer après les avoir traqués, il faut redéfinir le fichier `.gitignore`. Supposons que nous avons traqué le dossier `build/` et voulons à présent l'exclure du suivi. Il nous faut donc l'ajouter au fichier `.gitignore`. Ce fichier doit alors contenir :

```bash
fichier1.xml
fichier2.conf
conf/
build/
```

Puis, supprimer tous les fichiers de l'index :
```bash
git rm -r --cached
```
L'argument `--cached` est très important car il permet de ne supprimer que ce qui est déjà traqué, en quelque sorte les réinitialiser dans le répertoire Git. On peut vérifier les fichiers impactés par le fichier `.gitignore` :

```bash
git check-ignore -v -- <nom_du_dossier>
```
Par exemple, pour avoir une idée de l'impact sur tous les fichiers, 
```bash
git check-ignore -v -- *
```
Et nous obtenons :
```bash
.gitignore:1:fichier1.xml   fichier1.xml
.gitignore:2:fichier2.conf  fichier2.conf
.gitignore:3:conf/          conf/
.gitignore:4:build/         build/
```
On voit donc la liste des fichiers ignorés par Git.

Si nos attentes sont satisfaites, on peut maintenant faire un ajout à l'index puis un commit.

```bash
git add . # pour ajouter tous les fichiers
# on peut aussi sélectionner les fichiers que l'on veut ajouter
# puis faire le commit
git commit -m "Fix .gitignore"
```

Et voilà. Notre dossier devient clean. 

Si vous avez des apports, merci de commenter ci-dessous.
