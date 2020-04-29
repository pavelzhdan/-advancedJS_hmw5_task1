import orderByProps from '../../index';

test('sort', () => {
  const obj = {
    name: 'лучник', health: 5, level: 3, attack: 50, defence: 20,
  };
  const result = orderByProps(obj, ['level', 'attack']);

  expect(result).toequal([
    { key: 'name', value: 'лучник' },
    { key: 'level', value: 3 },
    { key: 'attack', value: 50 },
    { key: 'defence', value: 20 },
    { key: 'health', value: 5 },
  ]);
});

test('not a found', () => {
  const obj = {
    name: 'лучник', health: 5, level: 3, attack: 50, defence: 20,
  };

  const result = orderByProps(obj, ['lvl', 'attack']);

  expect(result).toBe('Такой характеристики нет');
});
