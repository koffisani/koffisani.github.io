---
published: true
title: Pourquoi Git ne considère que peu de caractères dans le hash du commit
description: S'il y a quelque chose qui doit vous surprendre quand on est débutant, c'est le hash des commits dans Git sont longs; et pourtant on n'a pas besoin d'autant de caractères pour identifier les commits.
layout: post
header-img: wordpress.png
tags: [Programming, Code, Git, GitHub, GitLab]
categories: [Development]
---

S'il y a quelque chose qui doit vous surprendre quand on est débutant, c'est le hash des commits dans Git sont longs; et pourtant on n'a pas besoin d'autant de caractères pour identifier les commits.<!--more--> En effet, à chacun des commits, Git affecte un code appelé hash, lequel code est unique dans tout le repertoire. Ce code est utile pour toute opération autour du commit concerné : `checkout`, `reset`, `rebase`, `diff`... C'est gênant de de devoir saisir ou copier/coller une longue chaine de caractères (40 caractères) pour effectuer une action sur un commit.

Lors de l'affichage du log (`git log`), Git affiche ce qui suit :

```
    commit 8ea4111f3b08c8149b6b0f7e6f9badd92e071dac
    Author: Koffi Sani <email@example.com>
    Date:   Thu May 18 05:16:44 2017 +0100

        Updated web address url

```
La chaine `8ea4111f3b08c8149b6b0f7e6f9badd92e071dac` constitue le hash du commit. Dans un avenir proche ou lointain, lorsque vous voudrez revenir sur ce commit, vous aurez besoin de code. Heureusement, Git facilite la vie aux développeurs; par défaut, vous n'avez besoin que des sept (7) premiers caractères du hash. Voici  la raison.


D'après le livre Pro Git, 

> Généralement, entre huit et dix caractères sont plus que suffisants pour identifier de manière unique un commit dans un projet. L'un des plus larges projets Git, le noyau Linux, a commencé par demander douze (12) caractères sur les 40 disponibles pour identifier un commit.

Le nombre de caractères significatifs dépendant de la taille du projet (du nombre de commit déjà réalisé). Plus il y en a, plus le hash contiendra de caractères significatifs. Et Git est si intelligent pour cela : lorsque vous lui indiquez d'utiliser par exemple 4 caractères pour identifier un commit, il le fera jusqu'au jour il détecte que 4 caractères n'identifient plus de manière unique un commit; il passe donc à 5. Et ainsi de suite. Cependant, lorsque vous utilisez ces hashs (courts) à un moment Git est passé à un nombre supérieur de caractères, il est impossible d'accéder au commit. Le code n'étant plus unique.

De plus, vous pouvez demander à Git combien il exige de caractères significatifs. Ceci en exécutant `git rev-parse --short=4 <hash>`. Dans mon cas, `git rev-parse --short=4 8ea4111f3b08c8149b6b0f7e6f9badd92e071dac` ce qui retourne `8ea41`, les cinq premiers caractères. Pour tester si Git ne me trompe pas, je fais `git diff 8ea4`, et la réponse est claire : 

```
error: short SHA1 8ea4 is ambiguous.
error: short SHA1 8ea4 is ambiguous.
fatal: ambiguous argument '8ea4': unknown revision or path not in the working tree.
```

#### Inspiré de Stack Overflow.