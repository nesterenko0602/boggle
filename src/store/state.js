import { deepCopy } from 'helpers/utils';

/**
 * Initial app state
 */
export const initialState = {
  error: false,
  configuration: [],
  attempts: [],
  startTime: null,
  isLoading: false,
  isFinished: false,
};

export default deepCopy(initialState);
