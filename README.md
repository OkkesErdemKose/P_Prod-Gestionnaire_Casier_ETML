# P_Prod-Gestionnaire_Casier_ETML

## Commande pour ajouter la clé dans le .env :

### node ace generate:key


## Lignes à ajouter dans le .env

### DB_PORT=6033
### DB_DATABASE=db_locker


## Ajouter les tables + données : 

### node ace migration:run
### node ace db:seed


### node ace migration:fresh --seed


## Fichier .env : 
```
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

