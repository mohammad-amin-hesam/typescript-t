import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

const soter = new Sorter(numbersCollection);
soter.sort();
console.log(numbersCollection.data);
