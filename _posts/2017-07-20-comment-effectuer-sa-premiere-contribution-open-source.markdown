---
published: true
title: Comment effectuer sa première contribution Open Source
description: Plus que jamais, contribuer à l'open source devient une obligation. Voici comment le faire sur Github.
layout: post
tags: [Code, Git, Github, Gitlab, Open Source]
categories: [Git]
---

Il n’y a aucun logiciel que nous ayons utilisé qui ne soit fait d’éléments Open Source. Plus que jamais, contribuer à l'open source devient une obligation. Voici comment le faire sur Github.<!--more--> 
[![L'amour du logiciel libre](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Premières Contributions

C'est dur. C'est toujours dur la première fois que l'on fait quelque chose. Spécialement quand vous collaborez, faire des fautes n'est pas du tout confortable. Mais le logiciel libre est fait de collaboration et de travail de groupe. Nous voulons simplifier la manière dont les nouveaux contributeurs au logiciel libre apprennent et contribuent pour la première fois.  

Lire des articles et suivre des tutoriels peut aider, mais qu'y a-t-il de meilleur que de faire un truc sans le moindre désordre ? Ce projet a pour ambition de fournir des conseils et simplifier la manière dont les bleus font leur première contribution. Rappel : plus vous êtes relax, mieux vous apprenez. Si vous aspirez à faire votre première contribution, suivez tout simplement les étapes suivantes. Promis, ce sera amusant.



Si vous n'avez pas git sur votre ordinateur, [ installez-le ]( https://help.github.com/articles/set-up-git/ ).

<img align="right" width="300" src="/img/fork.png" alt="embrancher ce repertoire" />

## Embranchez ce répertoire

Embranchez ce répertoire en cliquant sur le bouton de fork en haut de la page. 

Ceci créera une copie du répertoire sous votre compte.

## Clonez ce répertoire

<img align="right" width="300" src="/img/clone.png" alt="clonez ce répertoire" />

Maintenant, clonez ce répertoire sur votre ordinateur. Cliquez sur le bouton clone puis cliquez sur l'icon *copier dans le presse-papier*.

Ouvrez un invite de commande et exécutez les commandes git suivantes :

```
git clone "l'url que vous venz de copier"
```
où "l'url que vous venez de copier" (sans les guillemets) est l'url du répertoire. VVoir la section précédante afin d'obtenir l'url. 

<img align="right" width="300" src="/img/copy-to-clipboard.png" alt="copier l'URL dans le presse-papier" />

Par exemple:
```
git clone https://github.com/votre-nom-d-utilisateur/first-contributions.git
```
où `votre-nom-d-utilisateur` est votre nom d'utilisateur GitHub. Ici vous êtes en train de copier le contenu du répertoire `first-contributions` depuis GitHub sur votre ordinateur.

## Créez une branche

Déplacez-vous dans le répertoire du projet nouvellement cloné (si vous n'y êtes pas encore) :

```
cd first-contributions
```
Maintenant créez une branche avec le commande `git checkout` :
```
git checkout -b <add-votre-nom>
```

Par exemple:
```
git checkout -b add-koffi-sani
```
(Le nom de la branch n'a pas besoin de contenir le terme *add*, mais c'est raisonnable de l'inclure parce l'objectif de cette branche est d'ajouter votre nom à une liste.)

## Effectuez les modifications nécessaires et engagez-les

Maintenant, ouvrez le fichier `Contributors.md` dans un éditeur de texte, ajoutez-y votre nom, et enrégistrez-le. Si vous ouvrez l'invite de commande et vous exécutez la commande  `git status`, vous verrez qu'il y a des modifications. Ajoutez ces modifications à la branche que vous venez de créer avec la commande  `git add` :
```
git add Contributors.md
```

Maintenant engagez ces modifications avec la commande `git commit`:
```
git commit -m "Add <your-name> to Contributors list"
```
en remplaçant `<your-name>` par votre nom.

## Poussez les modifications vers GitHub

Poussez vos modifications avec la commande `git push`:
```
git push origin <add-your-name>
```
en remplaçant `<add-your-name>` avec le nom de la branche précédemment créée.

## Soumettez vos changements pour révision

Si vous visitez votre répertoire sur Github, vous verrez un bouton  `Compare & pull request`.  Cliquez sur ce bouton.

<img style="float: right;" width="700" src="/img/compare-and-pull.png" alt="create a pull request" />

Maintenant soumettez la demande de tirage. 

<img style="float: right;" width="700" src="/img/submit-pull.png" alt="submit pull request" />

Sous peu j'aurai fusionné toutes vos modifications avec la branche master de ce projet. Vous recevrez un mail de notification dès que la fusion est effectuée. 

La branche master de votre embranchement ne subira pas de modification à cet instant. Pour que votre embranchement soit synchronisé avec le mien, suivez les étapes suivantes. 

## Gardez votre embranchement synchronisé avec ce répertoire 

 D'abord, basculez sur la branche master 
 ```
 git checkout master
 ```

 Et ajouter l'url de mon répertoire comme  `upstream remote url`:
```
git remote add upstream https://github.com/Roshanjossey/first-contributions
```
Ceci est une manière de dire à git qu'une autre version de ce répertoire existe à l'adresse spécifiée et que nous l'appelons  `upstream`. Une fois les modifications fusionnées, cherchez la nouvelleversion de mon répertoire :
```
git fetch upstream
```

Ici nous cherchons toutes les modification dans mon embranchement  (upstream remote). Maintenant, vous devez fusionner la nouvelle révision de mon répertoire avec votre branche master :
```
git rebase upstream/master
```
Ici nous appliquons toutes les modifications que vous avez cherché à la branche master. Si vous poussez la branche master maintenant, votre embranchement aussi aura les modifications :
```
git push origin master
```
Avertissement: Cette fois, vous poussez au répertoire distant appelé origin.

A ce niveau j'ai fusionné votre branche  `<add-your-name>` avec ma branche master, et vous avez fusionné ma branche master avec votre branche master. Votre branche `<add-your-name>` n'est plus utile, donc vous pouvez la supprimer: 
```
git branch -d <add-your-name>
```
et vous pouvez supprimer sa version dans le répertoire distant aussi : 
```
git push origin --delete <add-your-name>
```
Ceci n'est pas nécessaire, mais le nom de la branche montre son but plutôt particulier. Sa durée de vie peut être rendue courte. 

## Tutoriels en utilisant d'autres outils 


|<a href="github-desktop-tutorial.md"><img alt="GitHub Desktop" src="https://desktop.github.com/images/desktop-icon.svg" width="100"></a>|<a href="github-windows-vs2017-tutorial.md"><img alt="Visual Studio 2017" src="https://www.microsoft.com/net/images/vslogo.png" width="100"></a>|<a href="gitkraken-tutorial.md"><img alt="GitKraken" src="/img/gk-icon.png" width="100"></a>|
|---|---|---|
|[GitHub Desktop](github-desktop-tutorial.md)|[Visual Studio 2017](github-windows-vs2017-tutorial.md)|[GitKraken](gitkraken-tutorial.md)|

## Où aller depuis ici ?

Voici pour un débutant quelques problèmes que vous pourrez résoudre dans des répertoires populaires. Allez, visitez ces répertoires afin d'apprendre davantage.

|[![exercism](https://avatars2.githubusercontent.com/u/5624255?v=3&s=100)](https://github.com/exercism/exercism.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+patch%22)|[![fun-retro](https://avatars3.githubusercontent.com/u/15913975?v=3&s=100)](https://github.com/funretro/distributed/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner-friendly)|[<img width="100" src="https://cdn.worldvectorlogo.com/logos/react.svg">](https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+bug%22)|[![habitat](https://avatars1.githubusercontent.com/u/18171698?v=3&s=100)](https://github.com/habitat-sh/habitat/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[![scikit-learn](https://avatars0.githubusercontent.com/u/365630?v=3&s=100)](https://github.com/scikit-learn/scikit-learn/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[<img width="100" src="https://camo.githubusercontent.com/0f302c808c8457f6460913e33aed3478124612c2/687474703a2f2f6c65696e696e67656e2e6f72672f696d672f6c65696e696e67656e2e6a7067">](https://github.com/technomancy/leiningen/issues?q=is%3Aopen+is%3Aissue+label%3ANewbie)|[<img width="100" src="https://images.plot.ly/plotly-documentation/thumbnail/numpy-logo.jpg">](https://github.com/numpy/numpy/issues?q=is%3Aopen+is%3Aissue+label%3A%22Easy+Fix%22)|[![elasticsearch](https://avatars2.githubusercontent.com/u/6764390?v=3&s=100)](https://github.com/elastic/elasticsearch/issues?q=is%3Aopen+is%3Aissue+label%3A%22low+hanging+fruit%22)|
|---|---|---|---|---|---|---|---|
|[exercism](https://github.com/exercism/exercism.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+patch%22)|[Fun Retros](https://github.com/funretro/distributed/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner-friendly)|[react](https://github.com/facebook/react/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+bug%22)|[habitat](https://github.com/habitat-sh/habitat/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[scikit-learn](https://github.com/scikit-learn/scikit-learn/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[Leiningen](https://github.com/technomancy/leiningen/issues?q=is%3Aopen+is%3Aissue+label%3ANewbie)|[numpy](https://github.com/numpy/numpy/issues?q=is%3Aopen+is%3Aissue+label%3A%22Easy+Fix%22)|[elasticsearch](https://github.com/elastic/elasticsearch/issues?q=is%3Aopen+is%3Aissue+label%3A%22low+hanging+fruit%22)|
|[![homebrew](https://avatars2.githubusercontent.com/u/1503512?v=3&s=100)](https://github.com/Homebrew/brew/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)|[![rust](https://avatars1.githubusercontent.com/u/5430905?v=3&s=100)](https://github.com/rust-lang/rust/issues?q=is%3Aopen+is%3Aissue+label%3AE-easy)|[![vuejs](https://avatars1.githubusercontent.com/u/6128107?v=3&s=100)](https://github.com/vuejs/vue/issues?q=is%3Aopen+is%3Aissue+label%3A%22contribution+welcome%22)|[![Suave](https://avatars2.githubusercontent.com/u/5822862?v=3&s=100)](https://github.com/SuaveIO/suave/issues?q=is%3Aopen+is%3Aissue+label%3Ahardness-easy)|[![OpenRA](https://avatars3.githubusercontent.com/u/409046?v=3&s=100)](https://github.com/OpenRA/OpenRA/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[![PowerShell](https://avatars0.githubusercontent.com/u/11524380?v=3&s=100)](https://github.com/powershell/powershell/issues?q=is%3Aopen+is%3Aissue+label%3AUp-for-Grabs)|[![coala](https://avatars2.githubusercontent.com/u/10620750?v=3&s=100)](https://github.com/coala/coala/issues?q=is%3Aopen+is%3Aissue+label%3Adifficulty%2Flow+label%3Adifficulty%2Fnewcomer)|[![moment](https://avatars2.githubusercontent.com/u/4129662?v=3&s=100)](https://github.com/moment/moment/issues?q=is%3Aopen+is%3Aissue+label%3AUp-For-Grabs)|
|[homebrew](https://github.com/Homebrew/brew/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)|[Rust](https://github.com/rust-lang/rust/issues?q=is%3Aopen+is%3Aissue+label%3AE-easy)|[vuejs](https://github.com/vuejs/vue/issues?q=is%3Aopen+is%3Aissue+label%3A%22contribution+welcome%22)|[Suave](https://github.com/SuaveIO/suave/issues?q=is%3Aopen+is%3Aissue+label%3Ahardness-easy)|[OpenRA](https://github.com/OpenRA/OpenRA/issues?q=is%3Aopen+is%3Aissue+label%3AEasy)|[PowerShell](https://github.com/powershell/powershell/issues?q=is%3Aopen+is%3Aissue+label%3AUp-for-Grabs)|[coala](https://github.com/coala/coala/issues?q=is%3Aopen+is%3Aissue+label%3Adifficulty%2Flow+label%3Adifficulty%2Fnewcomer)|[moment](https://github.com/moment/moment/issues?q=is%3Aopen+is%3Aissue+label%3AUp-For-Grabs)|
|[![ava](https://avatars0.githubusercontent.com/u/8527916?v=3&s=100)](https://github.com/avajs/ava/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+for+beginner%22)|[![freeCodeCamp](https://avatars0.githubusercontent.com/u/9892522?v=3&s=100)](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)|[![webpack](https://avatars3.githubusercontent.com/u/2105791?v=3&s=100)](https://github.com/webpack/webpack/issues?q=is%3Aopen+is%3Aissue+label%3A%22D1%3A+Easy+%28Contrib.+Difficulty%29%22)|[![hoodie](https://avatars1.githubusercontent.com/u/1888826?v=3&s=100)](https://github.com/hoodiehq/hoodie/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)|[![pouchdb](https://avatars3.githubusercontent.com/u/3406112?v=3&s=100)](https://github.com/pouchdb/pouchdb/issues?q=is%3Aopen+is%3Aissue+label%3A%22first+timers+only%22)|[![neovim](https://avatars0.githubusercontent.com/u/6471485?v=3&s=100)](https://github.com/neovim/neovim/issues?q=is%3Aopen+is%3Aissue+label%3Aentry-level)|[![babel](https://avatars2.githubusercontent.com/u/9637642?v=3&s=100)](https://github.com/babel/babel/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner-friendly) |[<img width="100" src="https://github.com/adobe/brackets/blob/gh-pages/images/brackets_128.png?raw=true">](https://github.com/adobe/brackets/labels/Starter%20bug)|
|[ava](https://github.com/avajs/ava/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+for+beginner%22)|[freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)|[webpack](https://github.com/webpack/webpack/issues?q=is%3Aopen+is%3Aissue+label%3A%22D1%3A+Easy+%28Contrib.+Difficulty%29%22)|[hoodie](https://github.com/hoodiehq/hoodie/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)|[pouchdb](https://github.com/pouchdb/pouchdb/issues?q=is%3Aopen+is%3Aissue+label%3A%22first+timers+only%22)|[neovim](https://github.com/neovim/neovim/issues?q=is%3Aopen+is%3Aissue+label%3Aentry-level)|[babel](https://github.com/babel/babel/issues?q=is%3Aopen+is%3Aissue+label%3Abeginner-friendly) |[brackets](https://github.com/adobe/brackets/labels/Starter%20bug)|
| [![Node.js](https://avatars1.githubusercontent.com/u/9950313?v=3&s=100)](https://github.com/nodejs/node/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+contribution%22)|[<img width="100" src="https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/app/logo.png">](https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+contribution%22)|
| [Node.js](https://github.com/nodejs/node/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+contribution%22) |[Semantic-UI-React](https://github.com/Semantic-Org/Semantic-UI-React/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+contribution%22) |

Ce article est extrait de ma contribution à [ce dépôt Github](https://github.com/koffisani/first-contributions) et est un complément de [cet article](https://www.koffisani.ga/2017/07/20/pouquoi-vous-devez-contribuer-a-open-source/).