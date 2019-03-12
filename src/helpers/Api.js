/**
 * Mock API
 */

const mockData = {
  configuration: ['A', 'C', 'E', 'D', 'L', 'U', 'G', '*', 'E', '*', 'H', 'T', 'G', 'A', 'F', 'K'],
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
  get(url) {
    let resolve = null;
    let reject = null;

    const responsePromise = new Promise((innerResolve, innerReject) => {
      resolve = innerResolve;
      reject = innerReject;
    });

    switch (url) {
      case '/getConfiguration':
        response(resolve, mockData.configuration);
        break;
      case '/wordValidation':
        response(resolve, { isValid: Math.random() > 0.25 });
        break;
      default:
        break;
    }

    return responsePromise;
  },
};
