/**
 * Mock API
 */

/**
 * Mocked data
 */
const mockData = {
  configuration: ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'],
};

/**
 * Returns a random response delay for requests
 */
function getRandomDelay() {
  const max = 1000;
  const min = 200;

  return Math.random() * (max - min) + min;
}

/**
 * Validator function
 *
 * @param {string} word Word to validate
 */
function validateWord(word) {
  return Math.random() > 0.25;
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
