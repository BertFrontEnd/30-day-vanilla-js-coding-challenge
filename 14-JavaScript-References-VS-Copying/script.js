// Строки, числа и логические значений
let age1 = 100;
let age2 = age1;

console.log(age1, age2);

age1 = 200;

console.log(age1, age2);

let name1 = 'Wes';
let name2 = 'name';

console.log(name1, name2);

name1 = 'Wesley';
console.log(name1, name2);

console.log('-//-');

// Допустим, у нас есть массив
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// И мы хотим сделать его копию.
const team1 = players;

console.log(players);
console.log(team1);

// Вы можете подумать, что мы можем просто сделать что-то вроде этого:
team1[3] = 'Lux';

// Однако что происходит, когда мы обновляем этот массив?
console.log(players);
console.log(team1);

// Вот в чем проблема!
// Исходный массив мы тоже редактировали!
// Почему? Это потому, что это ссылка на массив, а не копия массива. Они оба указывают на один и тот же массив!

// Итак, как нам это исправить? Вместо этого мы берем копию!
// Это первый способ
const team2 = players.slice();

// Или создаем новый массив и объединяем со старым
const team3 = [].concat(players);

console.log(team3);

// Или используем новый ES6 Spread-оператор
const team4 = [...players];
team4[3] = 'new item';

console.log(team4);

// Или метод Array.from()
const team5 = Array.from(players);
team5[2] = 'new item';

console.log(team5);

// Теперь исходный массив не меняется

console.log('-//-');

// То же самое и с объектами, допустим, у нас есть объект

const person = {
  name: 'Wes Bos',
  age: 80,
};

// И думаем, что делаем копию:
const captain1 = person;
captain1.number = 99;

console.log(person);
console.log(captain1);

// Как вместо этого сделать копию?
const captain2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(captain2);

// ES6 Spread-оператор
const captain3 = { ...person };
captain3.gender = 'man';
console.log(captain3);

// На что обратить внимание - это только 1 уровень глубины - как для массивов, так и для объектов. У lodash есть метод cloneDeep, но вы должны дважды подумать, прежде чем использовать его.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};

console.log(wes);

const dev1 = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));

wes.social.twitter = '@coolman';

console.table(wes);
console.table(dev1);
console.table(dev2);
