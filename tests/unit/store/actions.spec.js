import Vue from 'vue';

import { MIN_WORD_LENGTH } from 'constants/constants';
import Actions from 'store/actions';
import { MUTATIONS } from 'store/mutations';
import { doesNotReject } from 'assert';

jest.mock('helpers/Api', () => ({
  get(url, params) {
    if (url === '/getConfiguration') {
      return Promise.resolve(['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D']);
    }

    if (url === '/wordValidation') {
      return Promise.resolve({ isValid: params.word === 'validWord' });
    }
  },
}));

describe('Actions', () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it('starts game', (done) => {
    Actions
      .startGame({ commit })
      .finally(() => {
        expect(commit).toHaveBeenCalledTimes(2);
        expect(commit).toHaveBeenCalledWith(MUTATIONS.START_GAME);
        expect(commit).toHaveBeenLastCalledWith(
          MUTATIONS.LOAD_SUCCESS,
          {
            configuration: ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'],
            startTime: expect.any(Number),
          },
        );

        done();
      });
  });

  it('finishes game', () => {
    Actions
      .finishGame({ commit });

    expect(commit).toHaveBeenCalledWith(MUTATIONS.FINISH_GAME);
  });

  it('sends word', (done) => {
    const word = 'validWord';

    Actions
      .sendWord({ commit, getters: { getAttempts: [] } }, word)
      .finally(() => {
        expect(commit).toHaveBeenCalledTimes(3);
        expect(commit).toHaveBeenCalledWith(MUTATIONS.DROP_ERROR);
        expect(commit).toHaveBeenCalledWith(
          MUTATIONS.REGISTER_ATTEMPT,
          {
            word,
            time: expect.any(Number),
          }
        );
        expect(commit).toHaveBeenLastCalledWith(
          MUTATIONS.WORD_VALIDATION_FINISHED,
          {
            word,
            isValid: true,
          }
        );

        done();
      });
  });

  describe('Validation', () => {
    let commit;

    beforeEach(() => {
      commit = jest.fn();
    });

    it('doesn\'t send short word', () => {
      const word = 'wo';
  
      Actions.sendWord({ commit, getters: { getAttempts: [] } }, word);

      expect(commit).toHaveBeenLastCalledWith(
        MUTATIONS.REGISTER_ERROR,
        `You should suggest at least ${MIN_WORD_LENGTH} letter word`,
      );
    });

    it('doesn\'t send words with prohibited symbols', () => {
      const word = 'w1o';
  
      Actions.sendWord({ commit, getters: { getAttempts: [] } }, word);

      expect(commit).toHaveBeenLastCalledWith(
        MUTATIONS.REGISTER_ERROR,
        'Only English letters allowed',
      );
    });

    it('doesn\'t send repeated word', () => {
      const word = 'repeatedWord';
  
      Actions.sendWord(
        {
          commit,
          getters: {
            getAttempts: [
              { word },
            ],
          },
        },
        word
      );

      expect(commit).toHaveBeenLastCalledWith(
        MUTATIONS.REGISTER_ERROR,
        `You've already tried the word "${word}"`,
      );
    });
  });
});
