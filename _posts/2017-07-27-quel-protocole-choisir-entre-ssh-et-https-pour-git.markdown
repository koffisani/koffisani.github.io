---
published: true
title: Quel protocole choisir entre SSH et HTTP(S) avec GIT
description: Lorsqu'il s'agit d'interagir avec un serveur Git, on a le choix entre le SSH et le HTTPS. Mais le Lequel choisir ?
layout: post
header-img: copy-to-clipboard.png
tags: [Code, Git, Github, Gitlab, Versioning]
categories: [Git]
---

Ce n'est pas une surprise de s'inquiéter lorsqu'il s'agit de choisir entre le SSH et le HTTP(S) pour échanger avec un serveur Git.<!--more--> En réalité, Gitlab et Github (par exemple) offrent deux protocoles de communication entre le client et le serveur Git.
<img width="500" src="/img/ssh-https.png" alt="clonez ce répertoire" class="float-right"/> 
Il est très justifié de pousser sa curiosité sur la différence entre les deux et lequel choisir.

## Le SSH

Le protocole SSH permet de communiquer à l'aide de clés publique et privée. 
Il s'agit d'un protocole permettant à un client (un utilisateur ou bien même une machine) d'ouvrir une session interactive sur une machine distante (serveur) afin d'envoyer des commandes ou des fichiers de manière sécurisée. Le client et le serveurs s'authentifient mutuellement afin d'assurer que les deux machines sont bien celles qu'elles prétendent être. Ce protocole utilise le port 22 par défaut.

L'utilisation avec Git permet donc de s'assurer qu'on communique réellement avec notre serveur distant et que c'est vraiment nous qui communiquons. C'est ce à quoi servent les clés publique et privées. On peut cloner un répertoire comme suit :

```
git clone git@git-server-address:username/repository
```

Lorsqu'on utilise le SSH, et lorsqu'on a défini un mot de passe lors de la création des clés publique et privées, on est amené à le saisir.

## Le HTTP(S)

Le HTTP(S) est un protocole de transfert des données entre un client et un serveur sur le web. Un serveur HTTP utilise par défaut le port 80 et un serveur HTTPS le port 443. Pour communiquer avec un serveur Git avec le protocole HTTPS, il faut soit cloner le répertoire avec ce protocole :

```
git clone http(s)://git-server-address/username/repository
```
ou soit définir l'adresse HTTPS du serveur distant (remote) :

```
git remote set-url origin https://git-server-address/username/repository
```

Il faut noter que lors d'une requête HTTP(S), on est souvent amené, là où c'est nécessaire(`git clone`, `git fetch`, `git pull`, ou `git push`), à saisir son identifiant et mot de passe pour terminer l'opération. Les serveurs qui utilisent l'authentification à double facteurs requièrent un jeton d'accès à la place du couple username-password.

## Conclusion

Les deux protocoles servent à communiquer avec le serveur Git. Toutefois, le HTTP(S) requiert de saisir les identifiants pour certaines requêtes, tandis que le SSH utilise des clés publique et privé. Tandis que le SSH utilise le port 22 par défaut, le HTTP(S) utilise les port 80 et 443, des ports qui sont rarement bloqués sur un réseau contrairement au port 22. Le choix de votre protocole doit donc dépendre de ces contraintes du réseau sur lequel vous êtes connectés. 

Au cas où vous devez changer de protocole, il suffit de changer l'adresse du  serveur distant dans vos paramètres Git :

- Pour le HTTP(S):

```
git remote set-url <origin> http(s)://git-server-adddress/username/repository
```
- Pour le SSH:

```
git remote set-url <origin> git@git-server-adddress:username/repository
```