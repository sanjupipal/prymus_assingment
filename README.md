you will need mysql installed in your system

create data base (create database employee;)
got to config -> config.json and change username and password
"development": {
"username": "",
"password": "",
"database": "employee",
"host": "127.0.0.1",
"dialect": "mysql"
},

1. npm install
2. sequelize db:migrate
3. sequelize db:seed:all
4. npm run start (will run on port 5000)

   APIs

5. /users will get all users
6. /users/:department will get users of department
7. /department will get users count of all department
