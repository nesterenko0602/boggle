export default {
  /**
   * Dict of filters
   */
  filters: {
    /**
     * Pluralize word in combination with number
     *
     * @param {number} number Number before word
     * @param {string} word Word to pluralize
     */
    pluralize(number, word) {
      if (number === 1) {
        return word;
      }

      return `${word}s`;
    },
  },

  /**
   * Helper to apply all filters to passed Vue object.
   */
  apply(Vue) {
    Object.keys(this.filters)
      .forEach(filterName => Vue.filter(filterName, this.filters[filterName]));
  },
};
