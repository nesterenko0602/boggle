import { shallowWithRequiredProps } from 'tests/helpers';

import Attempts from 'components/common/Attempts';
import GameScreen from 'components/common/GameScreens/GameScreen';
import Collection from 'components/ui/Collection/Collection';
import ErrorMessage from 'components/ui/ErrorMessage';
import Input from 'components/ui/Input';

const DEFAULT_CONFIGURATION = ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'];
const getWrapper = shallowWithRequiredProps(
  GameScreen,
  {
    getters: {
      getCountOfFoundWords: () => 3,
      getConfiguration: () => DEFAULT_CONFIGURATION,
      getError: () => null,
    },
    actions: {
      sendWord: jest.fn(),
    },
  },
);

describe('GameScreen', () => {
  describe('Input', () => {
    it('exists', () => {
      const wrapper = getWrapper();

      expect(wrapper.find(Input).exists()).toBe(true);
    });

    it('emits sendWord on submit', () => {
      const word = 'testWord';
      const sendWord = jest.fn();
      const wrapper = getWrapper({}, { actions: { sendWord } });

      wrapper.find(Input).vm.$emit('submit', word);

      expect(sendWord)
        .toHaveBeenCalledWith(expect.any(Object), word, undefined);
    });
  });

  it('has ErrorMessage component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(ErrorMessage).exists()).toBe(true);
  });

  it('has Attempts component', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Attempts).exists()).toBe(true);
  });

  it('renders collection with passed configuration', () => {
    const wrapper = getWrapper();

    expect(wrapper.find(Collection).attributes('items')).toBe(DEFAULT_CONFIGURATION.join());
  });

  it('renders correct amount of found words', () => {
    const FOUND_WORDS_COUNT = 66;

    const wrapper = getWrapper({}, {
      getters: {
        getCountOfFoundWords: () => FOUND_WORDS_COUNT,
      },
    });

    expect(wrapper.find('.game-screen__statistics-value').text())
      .toBe(FOUND_WORDS_COUNT.toString());
  });
});
