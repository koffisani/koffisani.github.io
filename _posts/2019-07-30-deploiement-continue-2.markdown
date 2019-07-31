---
published: true
title: Le déploiement continu sous Gitlab ou comment mettre à jour ses applications de manière élégante -- Partie 2 
description: L'utilisation des outils tels que les clients FTP sont  à prohiber lorsqu'on veut déployer son application ?
layout: post
tags: [Programming, Code]
categories: [Code]
---
Dans la [première partie](https://code.koffisani.dev/code/2019/07/29/deploiement-continue.html), nous avons configuré notre projet en éditant le fichier `.gitlab-ci.yml` spécifiant l'intégration continue, et bien évidemment les variables d'environnement utilisées. Abordons ici le script de déploiement de notre projet sur notre serveur. <!--more-->

Nous partons toujours sur la base d'une [application PHP](https://gitlab.com/koffisani/test-ci) (les autres outils peuvent adaptés sans difficultés), avec le framework CakePHP.

## Clé SSH pour la connexion au serveur

Le moyen adéquat de déployer notre code est l'utilisation d'une connexion SSH. Et pour ce faire, nous allons créer une paire de clé publique/privée à ajouter à notre compte d'hébergement et aussi comme variable d'environnement sur le projet Gitlab. 

Exécutons la commande suivante dans un terminal Linux/Mac (ou un terminal Git sur Windows) en remplaçant `your_email@example.com` votre propre adresse e-mail :

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Cette commande crée une clé avec pour étiquette votre addresse e-mail. Pour plus d'infos, visiter [l'aide de Github](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Script de déploiement 

Les scipts peuvent directement être écrits dans la section `script` de notre job `deploy_test`, mais pour une raison de simplicité et de clarté, nous les mettons dans un dossier `scripts` et les exécutons dans le job.
 
```yml
rsync -hrvz --exclude "config/app.php" --exlude "vendor/" -d -R -e "ssh -p ${NAMECHEAP_SSH_PORT} -i ${HOME}/.ssh/id_rsa" * ${NAMECHEAP_USER}@${NAMECHEAP_SERVER_URL}:${NAMECHEAP_DEV_FOLDER}/
ssh -p ${NAMECHEAP_SSH_PORT} -i ${HOME}/.ssh/id_rsa ${NAMECHEAP_USER}@${NAMECHEAP_SERVER_URL} "cd ${NAMECHEAP_DEV_FOLDER} && composer update && exit"
```
Une petite explication. 

Nous utilisons l'utilitaire `rsync` permettant de synchroniser des fichiers avec plus d'efficacité que les outils `cp` et `mv` fournis par Linux. Il permet entre autres de copier un fichier par SSH (ce que nous faisons ici). Vous pourrez consulter son manuel pour plus d'informations.

La deuxième commande permet de se connecter sur le serveur via SSH et de mettre à jour les dépendances de notre projet. En effet, nous ne versionnons pas les dépendances de notre projet, et donc à chaque mise à jour de notre code, nous mettons à jour les dépendances telles que contenues dans le fichier `composer.json`.

## L'exécution du job

Le job s'exécute lorsqu'un événement de push s'est déroulé. A cet effet, le job s'exécute en fonction des règles définies dans le fichier `.gitlab-ci.yml`. Par exemple, le job `deploy_test` ne s'exécutera que si l'événement consiste en un push sur la branche `dev`; dans le cas échéant, il ne s'exécutera pas. De même, le job `deploy_prod` concerne la branche `master`. C'est ce qu'on peut remarquer à travers la section suivante dans le fichier `.gitlab-ci.yml` :

```yml
only:
    - dev
# identique
only:
    - master
```
Suite au push, le démarrage de l'exécution du job peut être illustré comme suit : 
<img class="img-fluid" src="/img/job-running-on-push.png" alt="Environnements sur Gitlab"/>

## Déploiement sur un environnement

Sous Gitlab, on a la possibilité de créer des environnements (à ne pas confondre avec les variables d'environnement) pour le déploiement. Les environnements sont essentiellement consititué d'une adresse du serveur de déploiement : soit le serveur de test ou de production.

Et dans notre fichier `.gitlab-ci.yml`, on peut remarquer une section `environment` dans le job `deploy_test` :

```yml
environment:
    name: TEST_CI
    url: http://test-ci.koffisani.dev
```
Cette section défini l'environnement vers lequel ce job déploiera l'application en cas de succès. Suite à l'exécution de ce job, l'environnement est automatiquement créé sur Gitlab (Operations > Environments)

<img class="img-fluid" src="/img/environment-gitlab.png" alt="Environnements sur Gitlab"/>

En cliquant sur l'environnement on peut accéder  ses détails :
<img class="img-fluid" src="/img/environment-detail.png" alt="Détails environnement Gitlab"/>

Le bouton `View deployment` permet d'accéder à l'application déployée. Et nous pouvons remarquer nos modifications effectives sur le serveur.