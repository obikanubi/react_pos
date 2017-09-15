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
3. [Github](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Initializing git
Git is a version control tool enabling developers to save their progress and revert back to a working development state in case of bugs.
create a local repository by typing this to your terminal window:
```sh
git init
```
add new and modified files to the staging area:
```sh
git add .
```
commit changes to local repository
```sh
git commit -m 'include details on your commit'
```
view commit logs
```sh
git log --oneline
```
reset to a working development state in case of bugs
```sh
git reset --hard 'SHA'
```
SHA is the numbered key generated during commits. use git log --oneline and copy the SHA of your last bug-free commit.

Learn more about [git](https://git-scm.com/documentation): git pull vs git fetch, creating branches, soft resets vs hard resets, unstaging files from staging area, adding remote repository, adding a forked repository, detached HEAD state, and more.

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
  (optional)
    import Items from './components/items';
    import List from './components/list';
    import Total from './components/total';
```
2. (optional) Create 'components' directory inside the 'src' directory and create the following files:

```sh
item.js
list.js
total.js
```
You can also create components inside the App.js if you wish to do so.

3. React components can be created with this syntax:
```sh
import React, { Component } from 'react';
class 'Component Name' extends Component {
  render() {
    return()
  }
}

export default 'Component Name';
```

### Creating objects inside a State
### Creating clickable items list
### Passing props
### Adding items to Cart
### Deleting items in Cart
### Updating items in Cart
### Getting total
