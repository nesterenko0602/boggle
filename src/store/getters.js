export default {
  /**
   * Is offered word checking now?
   *
   * @param {Object} state
   * @returns {boolean}
   */
  getIsLoading: state => state.isLoading,

  /**
   * Get current letters layout
   *
   * @param {Object} state
   * @returns {Array<String>}
   */
  getLayout: state => state.items,
};
