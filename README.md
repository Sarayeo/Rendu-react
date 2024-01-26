
# Comment Naviguer sur le site


Ce mini site vous permet de voir les produits consommable par melody récupérée depuis une API qui sont ensuite exposé sur la page d'acceuil .




## Header
Vous verez dans le Header le nom du magazin qui sert aussi de lien pour retourner sur la page d'acceuil.
```
Cliquer sur le bouton "voir mon panier" pour consulter les articles dans votre panier
  ```
  ```
Vous verez aussi à coté du bouton "Cart" qui vous indique le nombre d'articles dans votre panier .
  ```
## Home

Sur la home page vous pourrez observer les produits présents sur l'API

```bash
  Passez le curseur sur les produits pour voir plus
```

```bash
  Cl'iquez sur see more pour avoir plus d'option et de détails sur le produit
```
    
## Produit
   Après votre redirection sur la pade du produit individuelle vous aurez plus d'informations produit mais aussi
   deux boutons

   #### Ajouter au panier

```
Bouton qui vous permets d'ajouter l'article en question au panier
```
 #### Voir les commentaires

```
Bouton qui vous permets de consulter tout les commentaires liées au produit
```



## Votre panier
   Dans votre panier vous verez les produits que vous aurez ajouter à ce dernier

   #### Supprimer les produits

```
Bouton qui vous permets de supprimer la liste de produits dans votre panier
```
## Voir les commentaire
   page sur laquelle vous verrez tous les commentaires en rapport avec ce produits

   #### formulaire ajout de commentaire

```
plus bas sur la page se trouve un mini formulaire pour que vous ajoutiez un nouveau commentaire 
" PS : n'oubliez pas de recharger la page après l'avoir soumi"
```

## API Reference

#### Récupération toutes les données

```http
  https://iim.etherial.fr
```

| Type  | Description                        |
| :-------- |:-------------------------------- | 
| `url`      |  **Required**. le lien permet de récupérer la grande majoritée des données disponible |




#### Récupération comments

```http
 https://iim.etherial.fr/products/{id}/comments
```

| Type  | Description                        |
| :-------- |:-------------------------------- | 
| `string`      |  **Required**. le lien permet de récupérer les commentaire par produit grace à leur ID |



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Auteur

- [@SaraYEO](https://github.com/Sarayeo)

