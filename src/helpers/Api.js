/**
 * Mock API
 */

import DICTIONARY from 'helpers/dictionary';

/**
 * Mocked data
 */
const mockData = {
  configuration: ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'],
};

/**
 * Hash table for mocked configuration
 */
const configurationHashTable = mockData.configuration.reduce((table, letter) => {
  /* eslint-disable no-param-reassign */
  if (!table[letter]) {
    table[letter] = 0;
  }

  table[letter] += 1;

  return table;
}, { '*': 0 });

/**
 * Get copy of configuration hash table
 */
const getConfigurationTable = () => ({ ...configurationHashTable });

/**
 * Returns a random response delay for requests
 */
function getRandomDelay() {
  const max = 1500;
  const min = 300;

  return Math.random() * (max - min) + min;
}

/**
 * Validator function
 *
 * @param {string} word Word to validate
 */
function validateWord(wordToCheck) {
  const configurationTable = getConfigurationTable();
  const wordArray = Array.from(wordToCheck.toUpperCase());

  const subsctractionOfConfigurationAndWord = wordArray
    .reduce((table, letter) => {
      const appropriateSymbol = configurationTable[letter] ? letter : '*';
      table[appropriateSymbol] -= 1;

      return table;
    }, configurationTable);

  if (Math.min(...Object.values(subsctractionOfConfigurationAndWord)) < 0) {
    return false;
  }

  if (!DICTIONARY.includes(wordToCheck.toLowerCase())) {
    return false;
  }

  return true;
}

/**
 * Response composing helper
 *
 * @param {Function} fn Function to invoke (resolver or rejector)
 * @param {any} body Reponse body
 */
function response(fn, body) {
  setTimeout(() => {
    fn(body);
  }, getRandomDelay());
}

export default {
  get(url, params) {
    let resolve = null;

    const responsePromise = new Promise((innerResolve) => {
      resolve = innerResolve;
    });

    switch (url) {
      case '/getConfiguration':
        response(resolve, mockData.configuration);
        break;
      case '/wordValidation':
        response(resolve, { isValid: validateWord(params.word) });
        break;
      default:
        break;
    }

    return responsePromise;
  },
};
