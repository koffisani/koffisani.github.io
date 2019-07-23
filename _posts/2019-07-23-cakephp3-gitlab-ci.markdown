---
published: true
title: Configurer l'intégration continue sur Gitlab avec Cake PHP 3 
description: Comment faire fonctionner l'intégration continue sur Gitlab lorsqu'on développe avec Cake PHP 3 ?
layout: post
tags: [Programming, Code, PHP, CakePHP]
categories: [Code]
---
Depuis que j'ai découvert Gitlab CI, j'en suis tellement amoureux que j'apprécie beaucoup l'utiliser pour mes projets, qu'ils soient personnels ou professionnels. <!--more-->

Ca fait déjà un moment que je cherche à configurer l'intégration continue avec mon projet Cake PHP 3. Mais j'ai eu à buter sur cette configuration, tant j'avais peu de ressources sur le web qui en parlent, mais aussi certains concepts étaient flous pour moi. Dans ce post, je donne quelques éléments pour aider les uns et les autres aussi à réussir cette configuration.

## Intégration continue
First things first. L'intégration continue est un ensemble de pratiques utilisées en génie logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de regression dans l'application développée [[Wikipedia](https://fr.wikipedia.org/wiki/Int%C3%A9gration_continue)]. L'objectif est de parvenir à effectuer les tests d'intégration de manière automatisée afin de s'assurer de l'intégrité du code après la modification qui vient d'être apportée.

## Création d'un projet sur Gitlab et configuration
Pour réaliser une intégration continue avec Gitlab, il faut créer un projet sur le plate-forme. Gitlab fournit plusieurs options et il revient au développeur de choisir ce qui lui convient. 

Après la création du projet, l'élément essentiel dont Gitlab a besoin pour lancer les tests, c'est le fichier `.gitlab_ci.yml` (bien sûr avec votre configuration de tests unitaires, par exemple avec phpunit). Voici donc un exemple de configuration fonctionnelle :

```yml
image: php:7.0

# Cache the vendor folder
cache:
  paths:
  - vendor/


before_script:
# Install git to clone your repository
- apt-get update -yqq
- apt-get install git mysql-client libcurl4-gnutls-dev libicu-dev libmcrypt-dev libvpx-dev libjpeg-dev libpng-dev libxpm-dev zlib1g-dev libfreetype6-dev libxml2-dev libexpat1-dev libbz2-dev libgmp3-dev libldap2-dev unixodbc-dev libpq-dev libsqlite3-dev libaspell-dev libsnmp-dev libpcre3-dev libtidy-dev -yqq
- docker-php-ext-install mbstring mcrypt pdo_mysql curl json intl gd xml zip bz2 opcache 

# Install composer
- curl -sS https://getcomposer.org/installer | php

# Install all project dependencies
- php composer.phar install
- pecl install xdebug
- docker-php-ext-enable xdebug


services:
- mysql:5.7

variables:
  # Configure mysql service (https://hub.docker.com/_/mysql/)
  # We will need to use these in the app.php test datasource
  MYSQL_DATABASE: test_myapp
  MYSQL_ROOT_PASSWORD: secret
  DB_HOST: mysql

# Run the phpunit tests
test:
  script:
  - cp config/app.default.php config/app.php
  - mkdir logs/ && chmod 777 logs/
  - vendor/bin/phpunit

```

Notons la partie `variables` de notre configuration. Elle contient les paramètres dont Gitlab a besoin pour créer la base de données que notre application utilisera pour les tests.

## Informer notre application de l'existence des variables de tests
Maintenant que les variables sont définies dans le fichier `.gitlab_ci.yml`, notre projet a besoin d'en être informé afin de les utiliser. 

Dans le fichier `config/app.default.php`, dans la rubrique `test` de `Datasources`, définir les informations suivantes :
```php
 /**
    * The test connection is used during the test suite.
    */
'test' => [
    'className' => Connection::class,
    'driver' => Mysql::class,
    'persistent' => false,
    'host' => 'mysql',
    //'port' => 'non_standard_port_number',
    'username' => 'root',
    'password' => 'secret',
    'database' => 'test_myapp',
    //'encoding' => 'utf8mb4',
    'timezone' => 'UTC',
    'cacheMetadata' => true,
    'quoteIdentifiers' => false,
    'log' => false,
    //'init' => ['SET GLOBAL innodb_stats_on_metadata = 0'],
    'url' => env('DATABASE_TEST_URL', null),
],

```
Et voilà, nos tests pourront passer tranquillement. 

