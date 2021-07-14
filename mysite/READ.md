# MySite on Node(Express)

## project manifest 파일(package.json) 생성
$ npm init -y

## 설치 패키지
``` bash
$ npm i express
$ npm i express-session
$ npm i ejs
$ npm i dotenv
$ npm i sequelize
$ npm i mysql2
$ npm i -D nodemon
```

## 설치된 패키지 삭제
$ npm un express
$ npm i ejs
$ npm i -D nodemon

## scripts in packge.json
```JSON
.
.
.
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
.
.
.
```

## project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- /node-modules
    |--- /config
    |--- /public
    |--- routes
    |--- /controllers
    |--- /model
    |--- / views
            |--- /main
            |--- /user
            |--- /guestbook
            |--- /gallery
            |--- /board
</pre>