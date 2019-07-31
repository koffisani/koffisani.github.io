---
published: true
title: Le déploiement continu sous Gitlab ou comment mettre à jour ses applications de manière élégante -- Partie 1 
description: L'utilisation des outils tels que les clients FTP sont  à prohiber lorsqu'on veut déployer son application ?
layout: post
tags: [Programming, Code]
categories: [Code]
---
Le déploiement est un processus par lequel un développeur met son application en service, que ce soit sur le serveur de production ou de test. Qu'il s'agisse d'une application web ou de bureau, sur Android ou iPhone, ce processus est si délocat. Des outils ont vu le jour avec le temps. Dans cet article, explorons comment utiliser Gitlab pour notre fin. <!--more-->

Gitlab est une plateforme de gestion de version de code. C'est la définition la plus facile à donner concernant ce service. Mais il est beaucoup plus une suite complète intégrée que les développeurs peuvent utiliser depuis l'idée jusqu'à la mise en place de la solution finale. Celui qui nous intéresse aujourd'hui, c'est le service de déploiement continu, qui suit l'intégration continue [[voir ici](https://code.koffisani.dev/code/2019/07/23/cakephp3-gitlab-ci.html)].

Nous partons sur la base d'une [application PHP](https://gitlab.com/koffisani/test-ci) (les autres outils peuvent adaptés sans difficultés), avec le framework CakePHP.

Lorsque nous envisageons de mettre en oeuvre le déploiement continu, on sous-entend que nous avons mis en place des tests unitaires qui lorsque Gitlab les réalise avec succès, procèdera au déploiement automatique du code sur le serveur de test ou de production.


## Configuration du projet

Notre projet doit être configuré à cet effet. Nous apportons une amélioration au fichier [`.gitlab-ci.yml`](https://gitlab.com/koffisani/test-ci/blob/b1d787fba7c3977ec549158b864a7ded81521ea6/.gitlab-ci.yml) : 
```yml
# Le début reste identique

variables:
  # Configure mysql service (https://hub.docker.com/_/mysql/)
  # We will need to use these in the app.php test datasource
  MYSQL_DATABASE: test_ci
  MYSQL_ROOT_PASSWORD: secret
  DB_HOST: mysql

stages:
  - test
  - deploy

# Run the phpunit tests
test:
  stage: test
  script:
  - cp config/app.default.php config/app.php
  - mkdir logs/ && chmod 777 logs/
  - vendor/bin/phpunit

deploy_test:
  stage: deploy
  environment:
    name: TEST_CI
    url: http://test-ci.koffisani.dev
  only:
    - dev
  script:
  - echo "Deploying to test server"
  - apt-get install rsync -yqq
  - mkdir "${HOME}/.ssh"
  - echo "${NAMECHEAP_SSH_PRIVATE_KEY}" > ${HOME}/.ssh/id_rsa
  - echo "${NAMECHEAP_SSH_PUBLIC_KEY}" > ${HOME}/.ssh/id_rsa.pub
  - chmod 700 ${HOME}/.ssh/id_rsa*
  - ssh-keyscan -p ${NAMECHEAP_SSH_PORT} ${NAMECHEAP_SERVER_URL} > "${HOME}/.ssh/known_hosts"
  - chmod +x ./scripts/deploy-test.sh
  - echo "Uploading files to dev server"
  - ./scripts/deploy-test.sh
  - echo "Deployment complete"
```

Nous venons configurer des variables d'environnement pour notre application. Ce sont des informations sensibles que nous ne devons pas mettre en clair dans notre code, de peur de les rendre accessibles à des individus mal intentionnés. 

Et sur la plate-forme Gitlab du projet, il faut aller dans les paramètres **Settings** > **CI/CD** > **Variables** où on définira une paire de clé/valeur :

<img class="img-fluid" src="/img/CI-CD-variables.png" alt="Variables d'environnement CI/CD sur Gitlab"/>

Par exemple, on pourra avoir la clé `NAMECHEAP_SERVER_URL` avec sa valeur `namecheap.com`.

Dans la partie 2, nous verrons comment déployer effectivement le code sur le serveur que nous venons de configurer.

A bientôt.