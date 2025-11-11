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
