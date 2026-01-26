# Usermanagement
## Apollo - Prisma - Graphql

```bash
git clone https://github.com/bmehler/user-management-backend.git
user-management-backend
```
### Initialize Prisma
```bash
npx prisma init
```
### Using Postgres
```bash
.env -> DATABASE_URL="postgresql://<user>:<password>@<host>/userdb?schema=public"
```
### Create Database and Tables
```bash
npx prisma migrate dev --name init
```
### Installing Node Modules
```bash
npm install
```
### Starting App
```bash
npm run start
```
### Open App
```bash
Server ready at http://localhost:4000/graphql
```
### Apollo Graphql
![image info](./screenshot1.png)