---
published: false
title: Ouvrir une fenêtre et fermer la précédente en C#
layout: post
tags: [C#, ]
---
Vous avez probablement ce problème, comme moi. Lorsque vous avez deux fenêtre, en C#, à afficher l'une après l'autre, la solution la plus évidente est d'appeler la méthode `Close()`  sur la première et d'afficher la seconde. Sauf que cette solution ne résout pas le problème.

{% highlight C#%}

private void OnButton1Click(object sender, EventArgs e)
{
    this.Hide(); // on cache la fenêtre courante (la première)
    var form2 = new Form(); // on instancie la deuxième fenêtre
    form2.Closed += (s, args)=>this.Close(); //On notifie à la première de se fermer au moment où la seconde se ferme
    form2.Show(); // on affiche la deuxième
}
{% endhighlight %}