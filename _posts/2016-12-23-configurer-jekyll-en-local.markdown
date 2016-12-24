---
published: true
title: Configurer jekyll en local sur Ubuntu
layout: post
tags: [Ruby, Jekyll, blog]
categories: [Developpement]
---
Lorsque vous utilisez les Github Pages, il est intéressant d'avoir son site en local. Ainsi faire les changement en local avant de les mettre en ligne. <!--more-->

Cependant, suivre les instructions de la documentation de [Github](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) ne permet pas de couvrir le processus dans sont entièreté. Au cas où, comme moi, vous butez sur `bundle install`, il faut installer la package de développement de Ruby:

```
sudo apt-get install ruby2.3-dev
```

En s'assurant que vous utilisez la version 2.3 de Ruby.

Le second obstacle apparaît  lorsque vous tentez de démarrer le serveur local de Ruby. En exécutant :

```
bundle exec jekyll serve
```

Vous obtenez une erreur :


> jekyll 3.3.1 | Error:  Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.

La solution à cette erreur est d'installer `NodeJS` sur votre machine :

```
sudo apt-get install nodejs
```

Et, retournez redémarrer le serveur, et puis, tout marche bien.
