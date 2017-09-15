# React.js POS system

A simple touchscreen POS system with only 6 items for sale. When a user clicks on an item, a list will be generated below the the 'item selection list' indicating the item name, quantity, and price. Clicking on the same item will result to increasing quantity and price. Deleting items can be done by clicking the red button. The grand total will be shown once the 'Place order' button is clicked.

## Install and Run
1. Make sure you have Node.js installed
2. cd into a directory of your choice the run:
```sh
git clone https://github.com/obikanubi/react_pos.git
```
3. Install dependencies by running:
```sh
npm install
```
4. Run the app:
```sh
npm start
```
5. Open localhost:3000 in your browser

## Building the app
### Install necessary tech
1. [Node.js](https://nodejs.org/en/download/)
2. [create-react-app](https://facebook.github.io/react/docs/installation.html)

### Bootstrap
1. Include Bootstrap 4 cdn inside index.html head tag. (./public/index.html)
```sh
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
```
2. Open App.css (./src/App.css) and paste this over the existing css
```sh
body {
  box-sizing: border-box;
}

.App {
  text-align: center;
}

.box {
  height: 200px;
  text-align: center;
  padding-top: 50px;
  border: 1px solid green;
  border-radius: 10px;
  font-size: 30px;
}

.box:hover {
  background-color: #C4C4C4;
}

.box:active {
  background-color: green;
}
.app-items {
  margin-top: 20px;
}

.app-order {
  background-color: #C4C4C4;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  padding-top: 10px;
  text-align: center;
}
.app-order strong {
  padding-left: 50px;
}
#total {
  margin-left: 30px;
}
@media (max-width: 770px){
  .app-order strong {
    padding-left: 50px;
  }
}

@media (max-width: 440px) {
  .app-order strong {
    padding-left: 20px;
  }
}
@media (max-width: 390px){
  .box {
    font-size: 15px;
    height: 100px;
    padding-top: 20px;
  }
  .app-order {
    text-align: center;
    font-size: 15px;
  }
  .app-order strong {
    padding-left: 5px;
  }
}
```
### Creating and importing components

1. Open App.js (./src/App.js) and import the following:
```sh
  import React, { Component } from 'react';
  import './App.css';
  import Items from './components/items';
  import List from './components/list';
  import Total from './components/total';
```
2. Create components folder inside the src folder and create the following files:

```sh
cart.js

```
