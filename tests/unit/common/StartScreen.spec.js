import { shallowWithRequiredProps } from 'tests/helpers';

import StartScreen from 'components/common/GameScreens/StartScreen';
import Button from 'components/ui/Button';
import { GAME_DURATION } from 'constants/constants';

const getWrapper = shallowWithRequiredProps(
  StartScreen,
  {
    getters: {
      getIsLoading: () => false,
    },
  },
);

describe('StartScreen', () => {
  it('renders correct game duration value', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('.start-screen__rules b').text()).toBe(`${GAME_DURATION} seconds`);
  });

  it('emits on button click', () => {
    const startGame = jest.fn();
    const wrapper = getWrapper({}, { actions: { startGame } });

    wrapper.find(Button).vm.$emit('click');

    expect(startGame)
      .toHaveBeenCalled();
  });
});
