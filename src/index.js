/* eslint-disable guard-for-in */
// TODO: write your code in app.js

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(array, options) {
  const copyArray = array;
  const newArray = [];
  const error = new Error('Такой характеристики нет');
  for (const option in options) {
    const find = options[option];
    if (array[find] === undefined) {
      return error;
    }
    newArray.push({ key: find, value: array[find] });
    delete copyArray[find];
  }
  const restKeys = Object.keys(copyArray);
  for (const prop in restKeys.sort()) {
    const find = restKeys[prop];
    newArray.push({ key: find, value: array[find] });
  }
  return newArray;
}


orderByProps(obj, ['name', 'level']);
