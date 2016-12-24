---
published: true
title: Afficher un excerpt des derniers posts avec Twigg dans gh-pages jekyll
description: En utlisant les gh-pages pour blogger, vous aurez sûrement besoin d'afficher un bref descriptif du contenu de votre article sur la page d'accueil.
layout: post
tags: [Twigg, jekyll, blog]
categories: [Twigg]
---
Il arrive souvent à un bloggeur de buter sur l'apparence de son blog. Que ce soit le design ou le contenu. Et lorsqu'il s'agit de donner à l'utilisateur un aperçu de contenu de l'article qu'il va lire, il n'y rien de frustrant que de ne pouvoir le faire. <!--more-->

J'avais essayé par plusieurs moyens d'y arriver, en utilisant cette portion de code :

{% gist koffisani/ccd5350b94c56c273321fbe81bb7b7b2 %}

Mais ceci ne me permettait pas d'obtenir réellement ce que je voulais. En effet, ce code me listait peu texte (environ les 50 premiers caractères de l'article).

OK. Maintenant, j'ai trouvé la solution. Celle que je cherchais. Il me fallait faire comme ceci en ayant ajouter le texte `<!--more-->` à l'endroit l'on veut couper le description de l'article :


{% gist koffisani/61af13ef48b1742fc7d73e89c719b9a4 %}


Et puis c'est fait.
