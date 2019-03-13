import { shallowWithRequiredProps } from 'tests/helpers';

import Content from 'components/common/Content';
import FinishScreen from 'components/common/GameScreens/FinishScreen';
import GameScreen from 'components/common/GameScreens/GameScreen';
import StartScreen from 'components/common/GameScreens/StartScreen';
import TextHeader from 'components/ui/TextHeader';
import Timer from 'components/ui/Timer';

const getWrapper = shallowWithRequiredProps(Content);

describe('Content', () => {
  describe('Start stage', () => {
    const wrapper = getWrapper(
      {},
      {
        getters: {
          getStartTime: () => null,
          getIsFinished: () => false,
        },
      },
    );

    it('has TextHeader component', () => {
      expect(wrapper.find(TextHeader).text()).toBe('Boggle game');
    });

    it('has StartScreen component', () => {
      expect(wrapper.find(StartScreen).exists()).toBe(true);
    });
  });

  describe('Game stage', () => {
    const finishGame = jest.fn();
    const wrapper = getWrapper(
      {},
      {
        getters: {
          getStartTime: () => new Date().getTime(),
          getIsFinished: () => false,
        },
        actions: { finishGame },
      },
    );

    it('has TextHeader component', () => {
      expect(wrapper.find(TextHeader).exists()).toBe(true);
    });

    it('has GameScreen component', () => {
      expect(wrapper.find(GameScreen).exists()).toBe(true);
    });

    it('has Timer component', () => {
      expect(wrapper.find(Timer).exists()).toBe(true);
    });

    it('emits finish game event when timer time is up', () => {
      wrapper.find(Timer).vm.$emit('finished');

      expect(finishGame)
        .toHaveBeenCalled();
    });
  });

  describe('Finish stage', () => {
    const wrapper = getWrapper(
      {},
      {
        getters: {
          getStartTime: () => new Date().getTime(),
          getIsFinished: () => true,          
        },
      },
    );

    it('has TextHeader component', () => {
      expect(wrapper.find(TextHeader).text()).toBe('Congrats!');
    });

    it('has FinishScreen component', () => {
      expect(wrapper.find(FinishScreen).exists()).toBe(true);
    });
  });
});
