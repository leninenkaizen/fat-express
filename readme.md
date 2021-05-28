#Fat Express
###Project Setup

####build
``yarn build``
####start
``yarn start``
####build and start
``yarn serve``
###Manage schema and Entity (typeorm)
####create new entity
``yarn orm entity:create -n EnityName``
####create new migration
``typeorm migration:create -n MigrationName``
#### run migration
``yarn orm migration:run``
#### revert migration
``yarn orm migration:revert``
