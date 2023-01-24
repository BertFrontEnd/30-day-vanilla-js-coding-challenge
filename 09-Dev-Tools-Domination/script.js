const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

console.log('- - - - - - >');

// Interpolated
console.log('Hello, I am a %s string!', '💩');

console.log('- - - - - - >');

// Styled
console.log(
  '%cI am some great text',
  'font-size: 10px; background: red; text-shadow: 10px 10 px 0 blue',
);

console.log('- - - - - - >');

// Warning!
console.warn('Oh, Nooo!!!');

console.log('- - - - - - >');

// Error :|
console.error('Shit');

console.log('- - - - - - >');

// Info
console.info('Crocodiles eat 3-4 people per year');

console.log('- - - - - - >');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'This is wrong!');

console.log('- - - - - - >');

// Clearing
// console.clear();

console.log('- - - - - - >');

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.log('- - - - - - >');

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} year old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.log('- - - - - - >');

// Counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

console.log('- - - - - - >');

// Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
