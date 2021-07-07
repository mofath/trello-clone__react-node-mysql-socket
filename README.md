<h1 align="center">
Trello Clone
</h1>
<p align="center">
Nodejs/Express.js, React/Redux, Mysql, Socket.io
</p>

---

## Features

- Client socket is provided through context to be able to use one socket connection through the whole application.
- There's stil an issue with the socket, the client establish connection, but server still can't listen to events emited by the client.

---

# Installing the app

## Clone repo

```terminal
$ git clone git@github.com:mofath/quiz-app__mern_redux.git
```

---

## Start server

```terminal
$ cd server
$ npm install
$ npm run db-migrate:dev
$ npm run db-seed:dev
```

**NOTE**

Make sure you set the correct database connection information before running the migrations

---

## Start client

```terminal
$ cd client
$ npm install
$ npm start
```

---

## Prerequirements

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)
