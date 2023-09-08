# BitChest Front

This is the front-end application for the Converter app, developped in Vue. You will need to follow the instructions here to start the project.

## Project Setup

```sh
npm install
```

## Start the project

```sh
npm run dev
```

### The Project

you'll need to first setup the back-end of the application if you didn't done it already. If not, you won't have any data to convert, or retrieve (You'll can't even log in!). So no point of running this app.

When entering the project, you'll be directed to the login page. You can log in with the credentials. You can't access the app without being logged in.
To access the ADMIN part, you'll need to access http://localhost:5173/admin, if you have the admin status, you'll be granted access, else you'll be force-redirect to the dashboard page. Care about the fact that only one user this particular state : Jérome, the soleowner of this app. His credentials are "admin@admin.com" and "admin" for login and password. 
Every other user are considered as "normal" users, and can't access the admin panel.