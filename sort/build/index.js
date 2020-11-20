"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var soter = new Sorter_1.Sorter(numbersCollection);
soter.sort();
console.log(numbersCollection.data);
