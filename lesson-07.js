'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const croissant = {
  name: 'Butter Croissant',
  price: 2.8,
  vegetarian: true,
  category: 'Pastry',
};
console.log(croissant.name);
console.log(croissant.price);
const key = 'category';
console.log(croissant[key]);
// Bracket notation is required because the property name is stored in a variable.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

croissant.describe = function () {
  return `${this.name} costs ${this.price} euros and belongs to the ${this.category} category.`;
};
console.log(croissant.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menu = [
  {
    name: 'Butter Croissant',
    price: 2.8,
    vegetarian: true,
    category: 'Pastry',
  },
  {
    name: 'Chocolate Muffin',
    price: 3.2,
    vegetarian: true,
    category: 'Dessert',
  },
  {
    name: 'Ham Sandwich',
    price: 4.5,
    vegetarian: false,
    category: 'Sandwich',
  },
  {
    name: 'Apple Pie',
    price: 2.5,
    vegetarian: true,
    category: 'Dessert',
  },
  {
    name: 'Coffee',
    price: 2.2,
    vegetarian: true,
    category: 'Drink',
  },
];

for (const item of menu) {
  console.log(
    `${item.name} - €${item.price} - ${item.category} - Vegetarian: ${item.vegetarian}`,
  );
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const vegetarianItems = menu
  .filter((item) => item.vegetarian)
  .map((item) => item.name);

console.log(vegetarianItems);

const cheapItem = menu.find((item) => item.price < 3);

console.log(cheapItem);

// find() returns undefined when no matching item is found.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

console.log(Object.keys(croissant));

console.log(Object.values(croissant));

for (const [property, value] of Object.entries(croissant)) {
  console.log(`${property}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const sharedReference = croissant;

sharedReference.price = 9.99;

console.log(croissant);

const spreadCopy = {
  ...croissant,
  price: 3.0,
};

console.log(croissant);

console.log(spreadCopy);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  'the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams';

const counter = {};

const words = sentence.split(' ');

for (const word of words) {
  if (counter[word]) {
    counter[word]++;
  } else {
    counter[word] = 1;
  }
}

console.log(counter);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
