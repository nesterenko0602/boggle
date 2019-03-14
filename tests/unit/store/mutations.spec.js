import { getVariousStates } from 'tests/helpers';

import { CHECK_STATUSES } from 'constants/constants';
import Mutations, { MUTATIONS as MUTATIONS_NAMES } from 'store/mutations';

describe('Mutations', () => {
  it(MUTATIONS_NAMES.START_GAME, () => {
    const initState = getVariousStates().start;
    expect(initState.isLoading).toBe(false);

    Mutations[MUTATIONS_NAMES.START_GAME](initState);
    expect(initState.isLoading).toBe(true);
  });

  it(MUTATIONS_NAMES.FINISH_GAME, () => {
    const initState = getVariousStates().game;
    expect(initState.isFinished).toBe(false);

    Mutations[MUTATIONS_NAMES.FINISH_GAME](initState);
    expect(initState.isFinished).toBe(true);
  });

  it(MUTATIONS_NAMES.LOAD_SUCCESS, () => {
    const initState = getVariousStates().start;
    const configuration = [];
    const startTime = new Date().getTime();

    Mutations[MUTATIONS_NAMES.LOAD_SUCCESS](
      initState,
      { configuration, startTime },
    );

    expect(initState).toEqual({
      ...initState,
      configuration,
      startTime,
    });
  });

  it(MUTATIONS_NAMES.REGISTER_ATTEMPT, () => {
    const initState = getVariousStates().game;
    const time = new Date().getTime();
    const word = 'testword1';
    const currentAttemptsAmount = initState.attempts.length;

    Mutations[MUTATIONS_NAMES.REGISTER_ATTEMPT](
      initState,
      { word, time },
    );

    expect(initState.attempts.length).toBe(currentAttemptsAmount + 1);
    expect(
      initState.attempts.find(item => item.time === time),
    )
      .toEqual({ word, time, status: CHECK_STATUSES.PENDING });
  });

  it(MUTATIONS_NAMES.WORD_VALIDATION_FINISHED, () => {
    const initState = getVariousStates().game;
    const time = new Date().getTime();
    const word = 'testword2';

    Mutations[MUTATIONS_NAMES.REGISTER_ATTEMPT](
      initState,
      { word, time },
    );

    Mutations[MUTATIONS_NAMES.WORD_VALIDATION_FINISHED](
      initState,
      { word, isValid: true },
    );

    expect(initState.attempts.find(item => item.time === time).status).toBe(CHECK_STATUSES.SUCCESS);
  });

  it(MUTATIONS_NAMES.REGISTER_ERROR, () => {
    const initState = getVariousStates().game;
    expect(initState.error).toBe(null);

    const error = 'some error';
    Mutations[MUTATIONS_NAMES.REGISTER_ERROR](initState, error);

    expect(initState.error).toBe(error);
  });

  it(MUTATIONS_NAMES.DROP_ERROR, () => {
    const initState = getVariousStates().error;
    expect(initState.error).not.toBe(null);

    Mutations[MUTATIONS_NAMES.DROP_ERROR](initState);
    expect(initState.error).toBe(null);
  });
});
