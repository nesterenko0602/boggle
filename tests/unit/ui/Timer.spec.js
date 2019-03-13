import Vue from 'vue';

import { shallowWithRequiredProps } from 'tests/helpers';
import Timer from 'components/ui/Timer';
import { GAME_DURATION } from 'constants/constants';

const getWrapper = shallowWithRequiredProps(
  Timer,
  {
    getters: {
      getStartTime: () => null,
    },
  },
);

describe('Timer', () => {
  it('renders appropriate time', (done) => {
    const wrapper = getWrapper();
    const time = 56;
    wrapper.setData({ timer: time });

    Vue.nextTick(() => {
      expect(wrapper.find('.timer__wrapper').text()).toBe(time.toString());

      done();
    });
  });

  it('applies class when less than 10 seconds left', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('.timer__wrapper').classes('timer__wrapper--alert')).toBe(false);
    wrapper.setData({ last10Seconds: true });
    expect(wrapper.find('.timer__wrapper').classes('timer__wrapper--alert')).toBe(true);
  });

  it('emits finished event when timer has finished', () => {
    [GAME_DURATION, GAME_DURATION + 1].forEach((timeDifference) => {
      const startTime = new Date().getTime() - (1000 * timeDifference);
      const wrapper = getWrapper({}, { getters: { getStartTime: () => startTime } });

      const gameShouldBeFinished = timeDifference === GAME_DURATION + 1;

      if (gameShouldBeFinished) {
        expect(wrapper.emitted().finished.length).toBe(1);
        return;
      }

      expect(wrapper.emitted().finished).toBe(undefined);
    });
  });
});
