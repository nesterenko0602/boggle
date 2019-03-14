import Vue from 'vue';

import { shallowWithRequiredProps } from 'tests/helpers';

import Timer from 'components/ui/Timer';
import { GAME_DURATION } from 'constants/constants';

const getWrapper = shallowWithRequiredProps(
  Timer,
  {
    props: {
      startTime: new Date().getTime(),
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

    wrapper.setProps({ startTime: new Date().getTime() - (1000 * (GAME_DURATION - 9)) });
    wrapper.vm.timerLoop();

    expect(wrapper.find('.timer__wrapper').classes('timer__wrapper--alert')).toBe(true);
  });

  it('emits finished event when timer has finished', () => {
    const wrapper = getWrapper();

    [1, 0].forEach((timeDifference) => {
      const startTime = new Date().getTime() - (1000 * (GAME_DURATION - timeDifference));
      wrapper.setProps({ startTime });
      wrapper.vm.timerLoop();

      if (!timeDifference) {
        expect(wrapper.emitted().finished.length).toBe(1);
        return;
      }

      expect(wrapper.emitted().updated[1]).toEqual([timeDifference]);
      expect(wrapper.emitted().finished).toBe(undefined);
    });
  });
});
