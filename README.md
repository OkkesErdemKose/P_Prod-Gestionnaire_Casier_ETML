
# 🚀 P\_Prod-Gestionnaire\_Casier\_ETML

Ce projet est un gestionnaire de casiers développé avec AdonisJS. Ce guide vous expliquera comment installer, configurer et lancer l'application en environnement de développement.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

  * [Node.js](https://nodejs.org/) (v18+ recommandé)
  * npm (généralement inclus avec Node.js)
  * Un serveur de base de données (ex: MySQL/MariaDB)

## ⚙️ Guide d'installation étape par étape

Suivez ces étapes dans l'ordre pour que le projet soit fonctionnel.

### 1\. Cloner le projet

Clonez ce dépôt sur votre machine locale et naviguez dans le dossier :

```bash
git clone https://github.com/OkkesErdemKose/P_Prod-Gestionnaire_Casier_ETML.git
cd P_Prod-Gestionnaire_Casier_ETML
```

### 2\. Installer les dépendances

Installez tous les packages Node.js requis par le projet :

```bash
npm install
```

### 3\. Configurer l'environnement (.env)

Le fichier `.env` contient toutes les variables secrètes et de configuration.

1.  **Copiez le fichier d'exemple :**

    ```bash
    cp .env.example .env
    ```

2.  **Modifiez le fichier `.env`** pour qu'il corresponde à votre configuration locale. Voici un exemple de base (adaptez `DB_USER` et `DB_PASSWORD` si nécessaire) :

    ```ini
    TZ=UTC
    PORT=3333
    HOST=localhost
    LOG_LEVEL=info
    APP_KEY=
    NODE_ENV=development
    SESSION_DRIVER=cookie
    DB_HOST=127.0.0.1
    DB_PORT=6033
    DB_USER=root
    DB_PASSWORD=root
    DB_DATABASE=db_casier_gest
    ```

    **Note importante :** Laissez `APP_KEY` vide pour l'instant. Il sera généré à l'étape suivante. Assurez-vous que votre serveur de base de données fonctionne bien sur le port `6033` et que la base `db_casier_gest` existe (ou sera créée).

### 4\. Générer la clé de l'application

Exécutez la commande suivante pour générer une clé de sécurité unique (`APP_KEY`) et l'ajouter automatiquement à votre fichier `.env` :

```bash
node ace generate:key
```

### 5\. Préparer la base de données

Ces commandes vont créer la structure des tables et les remplir avec des données initiales.

1. **Créer la base de données** :
   Rendez-vous sur votre interface phpmyadmin, et crééz la base :
   ```bash
   db_casier_gest
   ```

3.  **Exécuter les migrations** (crée les tables) :

    ```bash
    node ace migration:run
    ```

4.  **Exécuter les seeds** (ajoute les données de test/départ) :

    ```bash
    node ace db:seed
    ```

### 6\. Lancer le serveur

Votre projet est maintenant entièrement configuré. Lancez le serveur de développement :

```bash
node ace serve --watch
```

Ou bien utilisez cette commande pour le tester à chaud :

```bash
npm run dev
```

L'application est maintenant accessible à l'adresse [http://localhost:3333](https://www.google.com/search?q=http://localhost:3333).

-----

## 💡 Commandes utiles

En cours de développement, ces commandes peuvent être très utiles.

### Réinitialiser la base de données

Pour **supprimer toutes les tables** et relancer les migrations et les seeds (parfait pour repartir de zéro sans supprimer la base de données manuellement) :

```bash
node ace migration:fresh --seed
```
