# Medical Scheduling Applicaton  

## Tech stack
- Javascript + Typescript  
- Nodejs  
- Nestjs
- PostgreSQL under Docker
- GraphQL
- Prisma

## Install and run  
1. clone repo and checkout the "dev" branch   
2. ```$ npm install```  
3. create a "docker-compose.yml" file and add the postgress details, for example:  
```
services:  
  db:  
    image: postgres:latest  
    ports:  
      - "5432:5432"  
    environment:  
      - POSTGRES_USER=root  
      - POSTGRES_PASSWORD=123  
      - POSTGRES_DB=meddb  
```
4. create a ".env" file with all the postgres credential to help prisma connect to the DB
like so: ```DATABASE_URL="postgresql://root:123@localhost:5432/meddb?schema=public"```  
4. start the database server with ```# docker-compose up```  
5. generate database tables with ```$ npx prisma generate```  
5. run the nest server with either ```$ npm start``` or ```$ npm run dev```  
6. server listens to port 3000 and can accept GET requests on "/medic" or "/medic/<id>"  
7. Prisma Studio can be started with ```$ npx prisma studio``` and opens on localhost:5555  
8. GraphQL Playground opens on localhost:3000/graphql  
