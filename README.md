
# Formation Bad Pattern Ecoconception - Accessibilité


Cette exercice de formation a pour but de mettre en pratique des notions de numérique responsable au travers d'exercices pratiques autour de l'écoconception et l'accessibilité.

Bienvenue dans notre espace dédié à la formation en écoconception et accessibilité numérique ! Au cœur de ce "bac à sable" HTML/CSS, nous vous invitons à plonger dans l'univers captivant de la conception responsable et inclusive.

Au fil des exercices, notre objectif est de vous guider à travers des problématiques concrètes, mettant en lumière les principes fondamentaux du numérique responsable. L'écoconception, axée sur la réduction de l'empreinte environnementale, et l'accessibilité, visant à rendre l'information accessible à tous.

À travers des défis pratiques et des résolutions de problèmes, vous aurez l'opportunité de façonner des solutions qui intègrent ces deux concepts. Que vous soyez débutant ou expert, ce parcours a été conçu pour enrichir vos compétences.

Plongeons ensemble dans le monde fascinant de la conception numérique responsable ! 

<details>
    <summary>Guide pour débuter et comprendre l'environnement</summary>

## Découvrir l'environnement

Pour commencer, si cela n'est pas déjà fait, vous devez vous rendre sur [cette url](https://github.com/Specinov).

Vous devriez être sur la page publique GitHub du la société [Spécinov](https://www.specinov.fr/). Dès lors vous pouvez choisir un repository "Bac à sable" parmis ceux proposés : 

- [Formation-SandBox-1](https://github.com/Specinov/Formation-SandBox-1) 
- [Formation-SandBox-2](https://github.com/Specinov/Formation-SandBox-2)
- [Formation-SandBox-3](https://github.com/Specinov/Formation-SandBox-3)
- [Formation-SandBox-4](https://github.com/Specinov/Formation-SandBox-1)
- [Formation-SandBox-5](https://github.com/Specinov/Formation-SandBox-1)
- [Formation-SandBox-6](https://github.com/Specinov/Formation-SandBox-1)
- [Formation-SandBox-7](https://github.com/Specinov/Formation-SandBox-1)
- [Formation-SandBox-8](https://github.com/Specinov/Formation-SandBox-1)

Attention, si vous êtes plusieurs, veillez à ne pas choisir le même dépôt GitHub, au risque de ne pouvoir réaliser les exercices correctement.
Il est également nécéssaire de posséder un compte GitHub pour poursuivre. 
Dans chaque dépôt vous retrouverez le README indiquant les consignes et procédures à suivre.

Pour effectuer les exercices, plusieurs possibilités s'offrent à vous : 
   
### Option 1 - Vous avez été ajouté à l'espace formation par votre formateur.
Pour cette option, tout est déjà prêt pour vous ! 

Le site est accessible sous l'adresse : https://specinov.github.io/Formation-SandBox-1/, suivant le nom de votre repository bac à sable il faudra simplement changer le numéro à la fin de l'url. Cette dernière est également indiquée sur la page d'accueil du dépôt.


### Option 2 - Vous effectuez les exercices de manière autodidacte.
Pour cette option, vous devrez réaliser un "fork" ou bien cloner le repository de votre côté, sur votre espace GitHub.

Une fois ceci réalisé, il faudra se rendre dans l'onglet *settings* du dépôt. Puis dans le sous-onglet *Pages* (situé dans le volet de gauche)

![Onglet Pages dans paramètres repository GitHub](/Ressources_README/GitHub_Pages.png)

Il faudra alors aller dans la partie nommée *Branch*, sélectionner la branche de travail de votre dépôt puis sauvegarder. 
GitHub a besoin de quelques minutes pour compiler et déployer le site. (il est possible d'observer la progression dans l'onglet *Actions* du menu principal)

Une fois le déploiement effectué, lorsque vous retournez dans le sous-onglet *Pages*, GitHub vous a généré votre site et a affiché le lien correspondant. 

Exemple : **Your site is live at** https://specinov.github.io/Formation-SandBox-1/

### Réaliser des modifications

A partir du moment où vous connaissez votre url publique de bac à sable, chaque modification que vous effectuerez sur la branche configurée, et que vous pousserez, sera alors déployée et accessible sur cette url. Cela sera nottamment très utile pour réaliser des audits d'écoconception.

Pour effectuer des modifications, il y a plusieurs possibilités, soit travailler avec votre éditeur de code préféré, soit directement en ligne depuis l'éditeur GitHub.
Ce dernier est accessible pour chaque fichier de l'onglet *Code* en cliquant sur le fichier puis le crayon pour modifier le fichier. (Il est possible d'ouvrir le fichier directement ou bien sur GitHub.dev ou GitHub Desktop)

![Modification de fichier au sein de GitHub](/Ressources_README/GitHub_modification.png)

</details>


## Écoconception

<details>
<summary><strong>Exercice 1 : Optimisation des images</strong></summary>
<br>
Comment pourriez-vous améliorer la performance du site et réduire l'impact environnemental en optimisant les images affichées sur l'écran d'accueil ?
<br><br>
<details>
<summary>Indice</summary>
<br>
Regardez la taille et la dimension des images.

Renseignez-vous sur la [recommandation RGESN sur le dimensionnement des images](https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.5/).

<br>
<details>
<summary><u>Réponse</u></summary>
<br>
Lorsque l'on analyse les images du site, par exemple les images du carrousel, l'image "Des cakes apétissants" ou encore l'image de la section "Faites votre choix", qu'on les ouvre dans un nouvel onglet, on s'aperçoit qu'elles sont bien plus grandes que la taille rendue à l'écran sur le site web.

Pour observer ce phénomène, il est aussi possible de se rendre dans la console de développement en effectuant un clic droit sur l'image puis "inspecter" dans le menu qui s'affiche. Cette action nous ouvre une fenêtre avec la ressource de l'image en code HTML. Exemple pour l'image de la section "Faites votre choix" : 

```
<div class="key_img col-md-6">
    <img src="images/back22.jpg">
</div>
```

Lorsque l'on survole l'url de l'image "images/back22.jpg" on obtient une fenêtre de la sorte : 

![Propriétés d'une image dans la console](/Ressources_README/proprietes_image.png)

Sur l'image on distingue que la taille rendue "Rendered size" est bien inférieur à la taille originale de l'image "Intrinsic size". On peut également cliquer sur le lien qui s'affiche afin d'observer directement la différence de taille.

Vous pouvez dès alors redimensionner les différentes images, disponibles dans le dossier "image" si cela n'est pas déjà fait.

Les images trop grosses en taille peuvent avoir un impact négatif sur les performances d'une application web, en particulier sur les appareils mobiles. Elles peuvent entraîner une augmentation du poids d'une page web et donc ralentir le temps de chargement de cette dernière.

</details>
</details>
</details>


<br>
<details>
<summary><strong>Exercice 2 : Attributs html des images</strong></summary>
<br>
Quelle modification pouvez-vous apporter aux balises <img> pour réduire les décalages de mise en page et améliorer le CLS du site ?

Pour information, le Cumulative Layout Shift (CLS) est une mesure qui indique à quel point les choses bougent sur une page web pendant qu'elle se charge. Imaginez que vous lisez un article et soudainement, une image apparaît et déplace tout le texte ; c'est frustrant, n'est-ce pas ? Le CLS mesure ces mouvements. Un CLS élevé signifie qu'il y a beaucoup de ces mouvements agaçants, et un faible CLS signifie que la page est stable et agréable à utiliser. Donc, pour une bonne expérience utilisateur, nous voulons un CLS le plus bas possible.
<br>
<details>
<summary><u>Indice</u></summary>
<br>
Considérez l'importance de réserver de l'espace pour les éléments de contenu avant leur chargement complet. Il existe des attributs spécifiques dans les balises <img> qui peuvent aider le navigateur à allouer l'espace nécessaire pour chaque image dès le début du chargement de la page.     
<br><br>
<details>
<summary><u>Réponse</u></summary>
<br>
Lorsque les attributs `width` et `height` ne sont pas spécifiés pour une image dans le code HTML, le navigateur ne sait pas à l'avance quelle place l'image occupera sur la page. Cela peut entraîner un phénomène appelé "reflow" ou "layout shift", où les éléments de la page se déplacent pendant le chargement lorsque les images sont finalement téléchargées et rendues. Ce phénomène peut non seulement dégrader l'expérience utilisateur, mais aussi augmenter le temps de chargement de la page, car le navigateur doit recalculer la disposition de la page plusieurs fois.

En spécifiant les attributs `width` et `height` des images, le navigateur peut allouer l'espace nécessaire pour chaque image dès le début du chargement de la page, même si l'image elle-même n'est pas encore chargée. Cela permet de réduire les changements de mise en page inattendus et d'améliorer la stabilité visuelle de la page. En outre, cela contribue à une utilisation plus efficace des ressources, car le navigateur peut optimiser le processus de rendu, ce qui est bénéfique tant pour les performances que pour l'éco-conception du site.

Dans notre cas, nous pouvons prendre des images comme celles présentes dans l'encart "Les meilleures ventes" : 

```
<div class="item_img">
    <img src="images/char.jpg">
</div>
<div class="item_img">
    <img src="images/bacon.jpg">
</div>
```

On constate qu'aucun attribut `width` ou `height` n'est présente. Il est important d'en insérer afin de définir un ratio et un espace réservé lors de la création de la page. Par défaut il est intéressant non seulement de dimensionner efficacement les images et ensuite d'attribuer les attributs `width` ou `height` suivant la taille voulu de l'image. Il est aussi possible d'ajouter du code CSS au dessus de ces attributs pour davantage de flexibilité pour le responsive.
</details>
</details>
</details>

<br>
<details>
<summary><strong>Exercice 3 : Utilisation de bibliothèque d'icones</strong></summary>
<br>
Le site Web utilise la bibliothèque Font Awesome intégrale pour afficher des icônes, mais il n'y a que  5 icônes sur le site. Importer toute la bibliothèque Font Awesome juste pour ces quelques icônes peut être inefficace et augmenter le temps de chargement de la page. Comment pourriez-vous optimiser l'utilisation des icônes pour améliorer les performances de votre site ?
<br><br>
<details>
<summary>Indice</summary>
<br>
Réfléchissez à une méthode qui permet d'utiliser uniquement les icônes dont vous avez besoin, sans importer toute une bibliothèque. Il existe des outils en ligne qui peuvent vous aider à créer votre propre bibliothèque d'icônes personnalisée. Il est possible d'utiliser des outils tels qu'Icomoon.      
<br><br>
<details>
<summary>Réponse</summary>
<br>
Une solution efficace serait d'utiliser un outil comme IcoMoon pour créer une bibliothèque d'icônes personnalisée. Avec IcoMoon, vous pouvez sélectionner uniquement les icônes que vous utilisez réellement sur votre site, ce qui réduit considérablement la taille de la bibliothèque d'icônes à charger. Cela améliore les performances de votre site en réduisant le poids des fichiers à télécharger, accélérant ainsi le temps de chargement de la page.

Voici les étapes à suivre :

<strong>1- Choisissez Vos Icônes : </strong>Sélectionnez les icônes spécifiques que vous souhaitez utiliser à partir de votre bibliothèque actuelle (comme Font Awesome) ou de la vaste collection d'IcoMoon.

<strong>2- Créez une Bibliothèque Personnalisée : </strong>Utilisez IcoMoon pour créer une bibliothèque contenant uniquement ces icônes.

<strong>3- Intégrez la Nouvelle Bibliothèque : </strong>Remplacez l'importation de Font Awesome par votre nouvelle bibliothèque personnalisée d'IcoMoon dans votre site Web.

<strong>4- Mise à Jour du Code : </strong>Mettez à jour les références aux icônes dans votre code HTML ou CSS pour utiliser les icônes de votre bibliothèque personnalisée.

En suivant ces étapes, vous pouvez réduire significativement la quantité de données à charger pour les icônes, optimisant ainsi les performances et l'éco-conception de votre site.
</details>
</details>
</details>

## Accessibilité

## Auteur

- [@poupardjean](https://github.com/poupardjean)
- [@juliettespecinov](https://github.com/JulietteSpecinov)

