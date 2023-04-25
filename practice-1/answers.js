export function checkAnswer(a, b) {
  if ((JSON.stringify(a) === JSON.stringify(b)) || (a === b)) {
  console.log('Correct!');
  } else {
    console.log('Not quite. Try again.');
  }
}

export const answers = {
  1: 2,
  2: 984,
  3: [ 1, 7, 9 ],
  4: 'Anastrianna Xiloscienta',
  5: [  { name: 'Tana "Ku" Quillsharpener',
      age: 119 },
        { name: 'Kilvar Glanhig', age: 118 
      },
        { name: 'Myathethin Yaeldrin', age:
      238 },
        { name: 'Anastrianna Xiloscienta', 
      age: 255 }],
  6: 5,
  7: 98.4,
  8: [ 3, 8, 9 ],
  9: 'Laborer',
  10: 'Tana "Ku" Quillsharpener, Kilvar Glanhig, Haseid Pashar, Kiirith Shestendeliath, Gorstag Amblecrown',
  11: 1209,
  12: [ 'Cleric', 'Druid', 'Warlock' ],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
}