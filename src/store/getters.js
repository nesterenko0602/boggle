export default {
  /**
   * Get error related to last typed word
   *
   * @param {Object} state
   * @returns {string}
   */
  getError: state => state.error,

  /**
   * Get current configuration
   *
   * @param {Object} state
   * @returns {Array<String>}
   */
  getConfiguration: state => state.items,

  /**
   * Get all user's attemtps
   *
   * @param {Object} state
   * @returns {Array<Object>}
   */
  getAttemts: state => state.attemts,
};
