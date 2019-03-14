import Vue from 'vue';

Vue.filter(
  'pluralize',
  (amount, word) => {
    if (amount === 1) {
      return word;
    }

    return `${word}s`;
  },
);
