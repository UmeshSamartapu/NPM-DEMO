// npm --v
// npm i <packageName>
//  npm install -g <packageName>

// package.json () --- manifest file (stores the info about project/package)
// package.json () --- can be created maniually in root
// package.json () --- by cmd> npm init
// package.json () --- by cmd> npm init -y (everything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
