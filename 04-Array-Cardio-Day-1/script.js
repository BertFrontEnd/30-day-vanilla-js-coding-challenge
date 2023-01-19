const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 1. Отфильтровать список изобретателей по тем, кто родился в 1500-х годах

const fifteen = inventors.filter(
  (inventor) => inventor.year > 1500 && inventor.year <= 1599,
);

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// 2. Дайть нам массив имен и фамилий изобретателей

const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`,
);

console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 3. Отсортировать изобретателей по дате рождения, от старшего к младшему

const ordered1 = inventors.sort((inventor1, inventor2) =>
  inventor1.year > inventor2.year ? 1 : -1,
);

const ordered2 = inventors.sort(
  (inventor1, inventor2) => inventor1.year - inventor2.year,
);

console.table(ordered1);
console.table(ordered2);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// 4. Сколько лет прожили все изобретатели вместе?

const totalYears = inventors.reduce(
  (acc, inventor) => acc + inventor.passed - inventor.year,
  0,
);

console.table(totalYears);

// 5. Sort the inventors by years lived
// 5. Отсортировать изобретателей по годам жизни

const oldest = inventors.sort((inventor1, inventors2) =>
  inventor1.passed - inventor1.year > inventors2.passed - inventors2.year
    ? 1
    : -1,
);

console.table(oldest.map((el) => el.passed - el.year));

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// 6. Создать список бульваров в Париже, которые содержат 'de' в любом месте названия
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes('de')); */

// 7. sort Exercise
// Sort the people alphabetically by last name
// Отсортировать людей в алфавитном порядке по фамилии

const alpha = people.sort((lastOne, nextONe) => {
  const [last1, first1] = lastOne.split(', ');
  const [last2, first2] = nextONe.split(', ');

  return last1 > last2 ? 1 : -1;
});

console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
// Суммировать экземпляры каждого из них

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const transportation = data.reduce((obj, item) => {
  console.log(obj);
  /* obj[item] = (obj[item] || 0) + 1; */
  obj[item] = obj[item] + 1 || 1;
  return obj;
}, {});

console.table(transportation);
