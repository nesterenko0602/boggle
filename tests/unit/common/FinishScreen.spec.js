import { shallowWithRequiredProps } from 'tests/helpers';

import FinishScreen from 'components/common/GameScreens/FinishScreen';
import Button from 'components/ui/Button';
import { GAME_DURATION } from 'constants/constants';

const getWrapper = shallowWithRequiredProps(
  FinishScreen,
  {
    getters: {
      getCountOfFoundWords: () => 3,
    },
  },
);

describe('FinishScreen', () => {
  it('renders correct number of words', () => {
    const countOfFoundWords = 5;
    const wrapper = getWrapper({}, {
      getters: {
        getCountOfFoundWords: () => countOfFoundWords,
      },
    });

    expect(wrapper.find('.finish-screen__numbers').text()).toBe(`${countOfFoundWords} words`);
  });

  it('renders correct game duration value', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('.finish-screen__text b').text()).toBe(`${GAME_DURATION} seconds`);
  });

  it('emits on button click', () => {
    const startGame = jest.fn();
    const wrapper = getWrapper({}, { actions: { startGame } });

    wrapper.find(Button).vm.$emit('click');

    expect(startGame)
      .toHaveBeenCalled();
  });
});
