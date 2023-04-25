import { characterData} from "./data.js";
import { answers, checkAnswer } from "./answers.js";

const characters = characterData;
const correctAnswers = answers;

// 1. How many characters have a name that starts with the letter "K"?

const namesStatingWithK = (characters) => {
  let answer = [];
  characters.forEach(character => {
    if (character.name.charAt(0) === 'K') {
      answer.push(character.name);
    }
  });
  return answer.length;
}
checkAnswer(namesStatingWithK(characters), correctAnswers[1]);

// 2. What is the sum of the ages of all the characters?

const agesSum = (characters) => {
  return characters.reduce((acc, cur) => acc + cur.physicalCharacteristics.age, 0);
}

checkAnswer(agesSum(characters), correctAnswers[2]);

// 3. Return an array containing the ID numbers of characters that are Elves.

const elves = (characters) => {
  let answer = [];
  characters.forEach(character => {
    if (character.race.includes('Elf')) {
      answer.push(character.id);
    }
  })
  return answer;
}

checkAnswer(elves(characters), correctAnswers[3]);

// 4. Which character's name include the most vowels?

const nameWithMostVowels = (characters) => {
  const regex = /[aeiou]/gi;
  const vowelCounts = characters.map((character) => {
    let vowelCount = 0;
    for (let i = 0; i < character.name.length; i++) {
      if (regex.test(character.name[i])) {
        vowelCount += 1;
      }
    }
    return { name: character.name, vowels: vowelCount };
  });
  let answer = vowelCounts.sort((a, b) => b.vowels - a.vowels)[0];
  return answer.name;
};

checkAnswer(nameWithMostVowels(characters), correctAnswers[4]);

// 5. Return an array with the names and ages of the characters that have an age greater than 100?

const charactersOver100YearsOld = (characters) => {
  return characters.filter(character => character.physicalCharacteristics.age > 100).map(character => ({ name: character.name, age: character.physicalCharacteristics.age }));
};

checkAnswer(charactersOver100YearsOld(characters), correctAnswers[5]);

// 6. How many characters originated from "Modest" family lifestyles?

const modestCharacters = (characters) => {
  return characters.filter(character => character.origin.familyLifestyle === 'Modest').reduce((acc, cur) => acc + 1, 0);
};

checkAnswer(modestCharacters(characters), correctAnswers[6]);

// 7. What is the average age of the characters?

const avgAge = (characters) => {
  return characters.reduce((acc, cur) => acc + cur.physicalCharacteristics.age, 0) / characters.length;
};

checkAnswer(avgAge(characters), correctAnswers[7]);

// 8. Return an array with the ID numbers of characters with a name that includes consecutive letters.

const namesWithConsecutiveLetters = (characters) => {
  let regex = /([a-zA-Z])\1/;
  return characters.filter(character => regex.test(character.name)).map(character => character.id);

};

checkAnswer(namesWithConsecutiveLetters(characters), correctAnswers[8]);

// 9. What is the most common occupation among all the characters?

const mostCommonOccupation = (characters) => {
  const occupationCount = characters.map(character => { return {occupation: character.occupation, count: 1} })
  .reduce((acc, curr) => {
    if (acc[curr.occupation]) {
      acc[curr.occupation]++;
    } else {
      acc[curr.occupation] = 1;
    }
    return acc;
  }, {});

  const occupationCountArray = Object.entries(occupationCount).map(([occupation, count]) => ({ occupation, count }));

  const maxOccupation = occupationCountArray.reduce((acc, cur) => acc.count > cur.count ? acc : cur);

  return maxOccupation.occupation;
};

checkAnswer(mostCommonOccupation(characters), correctAnswers[9]);

// 10. Return a string with the names of characters who do not have any siblings?

const childrenWithoutSiblings = (characters) => {
  return characters.filter(character => {
    return !character.origin.hasSiblings
  }).map(character => character.name).join(', ');
};

checkAnswer(childrenWithoutSiblings(characters), correctAnswers[10]);

// 11. What is the total weight of all the characters minus the all Orcs' weight?

const totalWeightLessOrcs = (characters) => {
  let totalWeight = characters.reduce((sum, character) => sum + character.physicalCharacteristics.weightPounds, 0);
  let orcsWeight = characters.filter(character => character.race.includes('Orc')).reduce((sum, character) => sum + character.physicalCharacteristics.weightPounds, 0);
  return totalWeight - orcsWeight;
}

checkAnswer(totalWeightLessOrcs(characters), correctAnswers[11]);

// 12. Return an array, sorted an alphabetical order, with the classes of characters that have a first or last name that ends with the letter "n".

const namesThatEndInN = (characters) => {
  let regex = /\b\w*n\b/i;
  return characters.filter(character => regex.test(character.name)).map(character => character.class).sort();
}

checkAnswer(namesThatEndInN(characters), correctAnswers[12]);

// 13. What is the background of the tallest  characters?



// Which characters have an age less than or equal to 50?



// What is the average weight of the characters?



// Which characters have a name that is longer than 10 characters?



// What is the heaviest weight among all the characters?



// Which class is most common among the characters?



// Which characters have blond hair?



// How many characters are female?


