# 🍦 Tasty React Aggregator

## Getting Started

Clone the repository into your project folder

```shell
https://github.com/mattcroat/tasty-aggregator.git .
```

Installation

```shell
cd client
npm i
```

```shell
cd server
npm i
```

Spin up the client and server

```shell
cd client
npm run client
```

In a separate terminal or tab (you can use concurrently to run these at the same time)

```shell
cd server
npm run server
```

## VS Code + ESLint + Prettier

For create-react-app (ESLint is already installed with other dependencies)

```shell
npm i -D prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier
```

For Parcel (what I'm using)

```shell
npm i -D eslint prettier
```

```shell
npx eslint --init
```

✅ To check syntax, find problems and enforce code style  
✅ JavaScript modules (import/export)  
✅ React  
✅ Browser  
✅ Use a popular style guide  
✅ Airbnb  
✅ JSON  
✅ Yes to installing packages

```shell
npm i -D eslint-plugin-prettier eslint-config-prettier babel-eslint
```

For standard JavaSript the process is similar, use common sense when answering questions 😄  
Now you only have to change your VS Code settings.

![VS Code Settings](https://i.imgur.com/aTimRFq.jpg)

settings.json

```json
// Prettier and ESLint setup
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"prettier.disableLanguages": ["js"],

// ESLint
"eslint.run": "onSave",
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true
```
