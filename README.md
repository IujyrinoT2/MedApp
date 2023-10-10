# Medical Scheduling Applicaton  

## Tech stack
- Javascript + Typescript  
- Nodejs  
- Nestjs
- PostgreSQL under Docker
- GraphQL
- Prisma

## Install and run  
1. clone repo  
2. ```$ npm build```  
3. create a "docker-compose.yml" file and add the postgress
details, for example:  
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
4. start the database server with ```docker-compose up```
5. run the nest server with either ```$ npm run start``` or ```$ npm run dev```  
6. server listens to port 3000  
7. Prisma Studio can be started with ```npx prisma studio``` and opens on localhost:5555  
8. GraphQL Playground opens on localhost:3000/graphql  
