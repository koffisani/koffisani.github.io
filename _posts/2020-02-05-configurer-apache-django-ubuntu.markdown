---
published: true
title: Comment configurer un serveur Apache pour un projet Django 
description: Vous pouvez déployer votre projet Django sur un serveur Apache.
layout: post
tags: [Python, Programming, Code, Django]
categories: [Code]
---

Django est un framework très apprécié de beaucoup de développeurs. Pendant qu'il permet très facilement de développer des applications de manière agile, déployer ses applications peut devenir spécial. Beaucoup d'hébergeurs ne le permettent pas par défaut. 

Quand on décide, éventuellement pour des besoins professionnels de déployer une application en local, on peut être à court d'idée. Voici un guide pour y arriver.<!--more-->

## Apache et les utilitaires
Les serveurs web utilisent une technologie appelée CGI (Common Gateway Interface) pour faire exécuter des scripts de langages spécifiques. Pour Django, il s'agit du WSGI, Web Server Gateway Interface. Il fournit une interface pour Apache par exemple afin d'envoyer n'importe quel URL qui nécessite un traitement de Python. 

Pour déployer Django sur Apache, il faut s'assurer que ce serveur est installé et s'exécute correctement. Ainsi que le serveur de base de données, si nécessaire (ce qui est souvent le cas).

```
sudo apt install apache2 apache2-utils libexpat1 python3 python3-dev libapache3-mod-wsgi-py3
```

## Configuration du serveur Apache
Vous vous souvenez de la notion d'hébergement mutualisé ? C'est une technologie que les hébergeurs utilisent pour avoir un même serveur pour des milliers de sites à travers le monde. C'est cette notion d'hôtes virtuels (virtual hosts) qui leur permet d'y parvenir.

Cette technologie permet de configurer un seul serveur pour héberger plusieurs sites simultanément. Nous allons donc créer un virtal host et dire à Apache de l'utiliser comme racine de notre serveur. 

Apache dispose, sur Linux, de deux dossiers essentiels : 
- `/etc/apache2/sites-available/` : contenant les hôtes virtuels disponibles;
- `/etc/apache2/sites-enabled/` : contenant les hôtes virtuels activés. 

Sur un terminal, saisissons les commandes suivantes :

```
cd /etc/apache2/sites-available/
```

```
sudo nano django-app.conf
```
Cette dernière commande ouvrira l'éditeur `nano`. Ajoutons-y le contenu suivant :

```bash
<VirtualHost *:80>
        ServerName 127.0.0.1
        ServerAlias localhost

        DocumentRoot /var/www/django-app

        WSGIScriptAlias / /var/www/django-app/app/wsgi.py # bien spécifier l'emplacement du fichier wsgi.py du projet
        # pour la ligne suivante, python-home pointe sur le dossier de l'environnement virtuel
        WSGIDaemonProcess django-app python-home=/var/www/django-app/venv python-path=/var/www/django-app
        WSGIProcessGroup django-app

        

        <Directory /var/www/django-app/>
                Order deny,allow
                Allow from all
        </Directory>

        Alias /static /var/www/django-app/static/
        <Directory "/var/www/django-app/static/">
            Require all granted
        </Directory>

        # Les droits sur le fichier wsgi.py
        <Directory "/var/www/django-app/app">
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>

        ErrorLog /var/www/logs/error.log
        CustomLog /var/www/logs/custom.log combined
</VirtualHost>
```
En saisissant la commande `CTRL+X`, nous pouvons quitter l'éditeur après avoir accepté l'enregistrement du fichier.

## Activation de l'hôte virtuel

Maintenant que nous avons configuré notre hôte virtuel, nous pouvons l'activer. Pour cela, il nous faut la commande suivante:

```
sudo a2ensite django-app
```

Puis nous redémarrons le serveur Apache :

```
sudo /etc/init.d/apache2 restart
```

Et dans le navigateur, nous pourrons observer notre nouveau site à l'adresse http://127.0.0.1/.

Vous avez des difficultés à vous en sortir, ou vous avez des suggestions pour mieux faire ? Merci de commenter ci-dessous.