---
published: true
title: Lister ses projets dans XAMPP (Linux)
layout: post
tags: [xampp, web-development, php]
categories: [web-development]
---
Si vous avez installé XAMPP sur Linux --Ubuntu 14.04 chez moi--, vous avez probablement remarqué que vous n'avez pas la liste de vos projets (récents). C'est un soucis, il faut saisir le lien (URL) de son projet avant d'y accéder. Au cas où vous voulez palier à cela, suivez ce tutoriel.

### Créer le fichier `projects.php`
Dans le dossier `/opt/lampp/htdocs/` créer le fichier nommé `projects.php` et y insérer le contenu suivant : 

```php
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
  <link href="xampp/xampp.css" rel="stylesheet" type="text/css">
  <title>
  </title>
  <base target="_blank"/>
  </head>
  <body>
   
  <?php
      $handle=opendir(".");
      $projectContents = '';
      while ($file = readdir($handle)) 
      {
          if (is_dir($file) && ($file != "..") && ($file != ".") && ($file != "xampp")) 
          {        
              $projectContents .= '<li><a href="'.$file.'">'.$file.'</a>';
              $projectContents .= '</li>';
          }
      }
      closedir($handle);
      if (!isset($projectContents))
          $projectContents = "No Projects";
  ?>
   
  <ul id="projectList">
      <?php echo $projectContents ?>
  </ul>
   
  </body>
  </html>
  ```


### Modifier le fichier `navi.php`
Dans le dossier `/opt/lampp/htdocs/xampp/`, insérer dans le fichier `navi.php` le code suivant dans l'endroit qui vous convient : 

```php
<a class=n target=content onClick="h(this);" href="/projects.php">Projects</a><br>&nbsp;<br>
```


Et puis c'est bon.
