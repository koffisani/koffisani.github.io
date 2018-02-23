---
published: true
title: Le livre No 1 que tout développeur doit lire
description: On ne peut jamais tout connaître, en tant que développeur, la découverte perpétuelle de bonnes manières est une compétence très appréciée
layout: post
tags: [Code]
categories: [Code]
---
Ecrire le code, c'est un art. C'est pourquoi [j'aime souvent dire](https://www.linkedin.com/pulse/coder-cest-bien-mais-mieux-koffi-sani/) que :

> Coder c'est bien. Mais bien coder, c'est mieux.

Si vous ne savez pas bien utiliser cet art, il peut se retourner contre toi. Si votre code ne respecte pas certaines normes et conventions, vous serez pris dans votre propre piège.<!--more-->

Dans un récent passé, je suis tombé sur un livre : **[The art of readable code](https://www.amazon.com/Art-Readable-Code-Practical-Techniques/dp/0596802293)**. Ce livre me semble très utile pour tout développeur, peu importe son niveau : qu'il soit débutant, intermédiaire ou avancé. Tellement le document est riche en informations qu'il m'est obligatoire de le recommander à mes amis et connexions.

Nous nommons souvent les variables, fonctions, classes, ..., selon notre goût, notre intution ou notre émotion. Dans ce livre, j'ai découvert le théorème fondamental de lisibilité du code :

> Le code doit être écrit pour minimiser le temps qu'un développeur prend pour le comprendre.

Généralement, la préoccupation première du développeur, c'est l'exécutabilité du code. Et quand il revient sur son code dans le futur, il ne s'y retrouve pas. 

De même renommer les variables demande souvent réflexion. Le livre de Dustin Boswell et Trevor Foucher recommande de renfermer des informations dans les noms de variables. Cela consiste en le choix de mots spécifiques, dont la sémantique contribue à la compréhension du code. Par exemple, les auteurs recommandent l'utilisation de noms  beaucoup plus longs afin de favoriser la compréhension de l'utilité de la variable et l'utilisation qu'on peut en faire. 

Dans un cas spécifique des variables temporaires, considérons le code suivant:

    if (right < left) {
        tmp = right;
        right = left;
        left = tmp;
    }

Le choix ici du nom `tmp` est parfait, car c'est immédiat de comprendre l'utilité de la variable. Mais lorsque nous considérons le code suivant :

    String tmp = user.name();
    tmp += " " + user.phone_number();
    tmp += " " + user.email();
    ...
    template.set("user_info", tmp);

Meme si la variable `tmp` a une courte durée de vie, la durée de vie n'est pas la plus importante information la concernant. Le nom `user_info` serait plus adapté.

Je vous invite à lire ce livre et à découvrir ces nombreuses recommandations qui vous permettrons de faire éclore votre talent d'artisan du code.

Bonne lecture à tous.