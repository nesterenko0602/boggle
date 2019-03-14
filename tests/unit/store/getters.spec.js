import { getVariousStates } from 'tests/helpers';

import { CHECK_STATUSES } from 'constants/constants';
import Getters from 'store/getters';

describe('Getters', () => {
  it('getError', () => {
    const initState = getVariousStates().error;
    expect(Getters.getError(initState)).toBe(initState.error);

    initState.error = 'new error';
    expect(Getters.getError(initState)).toBe(initState.error);
  });

  it('getConfiguration', () => {
    const initState = getVariousStates().game;
    expect(Getters.getConfiguration(initState)).toBe(initState.configuration);

    initState.configuration = ['A', 'B', 'C'];
    expect(Getters.getConfiguration(initState)).toBe(initState.configuration);
  });

  it('getAttempts', () => {
    const initState = getVariousStates().game;
    expect(Getters.getAttempts(initState)).toBe(initState.attempts);

    initState.attempts = [{}];
    expect(Getters.getAttempts(initState)).toBe(initState.attempts);
  });

  it('getAttemptsSortedByTime', () => {
    const initState = getVariousStates().game;
    const sortedAttempts = Getters.getAttemptsSortedByTime(initState, { getAttempts: initState.attempts });

    expect(sortedAttempts)
      .not
      .toEqual(initState.attempts);

    expect(sortedAttempts)
      .toEqual(initState.attempts.sort((a, b) => b.time - a.time));
  });

  it('getStartTime', () => {
    const initState = getVariousStates().game;
    expect(Getters.getStartTime(initState)).toBe(initState.startTime);

    initState.startTime = new Date().getTime();
    expect(Getters.getStartTime(initState)).toBe(initState.startTime);
  });

  it('getIsFinished', () => {
    const initState = getVariousStates().finish;
    expect(Getters.getIsFinished(initState)).toBe(initState.isFinished);

    initState.isFinished = false;
    expect(Getters.getIsFinished(initState)).toBe(initState.isFinished);
  });

  it('getIsLoading', () => {
    const initState = getVariousStates().start;
    expect(Getters.getIsLoading(initState)).toBe(initState.isLoading);

    initState.isLoading = false;
    expect(Getters.getIsLoading(initState)).toBe(initState.isLoading);
  });

  it('getCountOfFoundWords', () => {
    const initState = getVariousStates().game;

    expect(Getters.getCountOfFoundWords(initState, { getAttempts: initState.attempts }))
      .toBe(
        initState
          .attempts
          .filter(item => item.status === CHECK_STATUSES.SUCCESS)
          .length
      );
  });
});
