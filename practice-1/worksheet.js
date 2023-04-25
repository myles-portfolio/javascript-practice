import { characterData} from "./data.js";
import { answers, checkAnswer } from "./answers.js";

const characters = characterData;
const correctAnswers = answers;

/// *** DO NOT EDIT ABOVE CODE ***

// 1. How many characters have a name that starts with the letter "K"?

const namesStatingWithK = (characters) => {
//write your code here
};

checkAnswer(namesStatingWithK(characters), correctAnswers[1]);

// 2. What is the sum of the ages of all the characters?

const agesSum = (characters) => {
//write your code here
};

checkAnswer(agesSum(characters), correctAnswers[2]);

// 3. Return an array containing the ID numbers of characters that are Elves.

const elves = (characters) => {
//write your code here
};

checkAnswer(elves(characters), correctAnswers[3]);

// 4. Which character's name include the most vowels?

const nameWithMostVowels = (characters) => {
//write your code here
};

checkAnswer(nameWithMostVowels(characters), correctAnswers[4]);

// 5. Return an array with the names and ages of the characters that have an age greater than 100.

const charactersOver100YearsOld = (characters) => {
//write your code here
};

checkAnswer(charactersOver100YearsOld(characters), correctAnswers[5]);

// 6. How many characters originated from "Modest" family lifestyles?

const modestCharacters = (characters) => {
//write your code here
};

checkAnswer(modestCharacters(characters), correctAnswers[6]);

// 7. What is the average age of the characters?

const avgAge = (characters) => {
//write your code here
};

checkAnswer(avgAge(characters), correctAnswers[7]);

// 8. Return an array with the ID numbers of characters with a name that includes consecutive letters.

const namesWithConsecutiveLetters = (characters) => {
//write your code here

};

checkAnswer(namesWithConsecutiveLetters(characters), correctAnswers[8]);

// 9. What is the most common occupation among all the characters?

const mostCommonOccupation = (characters) => {
//write your code here
};

checkAnswer(mostCommonOccupation(characters), correctAnswers[9]);

// 10. Return a string with the names of characters who do not have any siblings.

const childrenWithoutSiblings = (characters) => {
//write your code here
};

checkAnswer(childrenWithoutSiblings(characters), correctAnswers[10]);

// 11. What is the total weight of all the characters minus the all Orcs' weight?

const totalWeightLessOrcs = (characters) => {
//write your code here
}

checkAnswer(totalWeightLessOrcs(characters), correctAnswers[11]);

// 12. Return an array, sorted an alphabetical order, with the classes of characters that have a first or last name that ends with the letter "n".

const namesThatEndInN = (characters) => {
//write your code here
}

checkAnswer(namesThatEndInN(characters), correctAnswers[12]);


