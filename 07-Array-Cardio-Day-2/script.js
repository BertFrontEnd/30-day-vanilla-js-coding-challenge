const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Array.prototype.some()
// is at least one person 19 or older? // по крайней мере один человек 19-и лет или старше?

const isAdult = people.some((person) => {
  return new Date().getFullYear() - person.year >= 19;
});

console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older? // всем 19-ть лет и старше?

const AllAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19,
);

console.log({ AllAdults });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for // Поиск похож на фильтр, но вместо этого возвращает только тот, который вы ищете
// find the comment with the ID of 823423 // найти комментарий с идентификатором 823423

const comment = comments.find((comment) => comment.id === 823423);

console.log(comment);

// Array.prototype.findIndex()
// find the comment with this ID // найдите комментарий с этим идентификатором

const index = comments.findIndex((comment) => comment.id === 823423);

console.log({ index });

// delete the comment with the ID of 823423 // удалить комментарий с идентификатором 823423

// const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
// console.table(newComments);

comments.splice(index, 1);

console.table(comments);
