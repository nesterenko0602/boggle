import { shallowWithRequiredProps } from 'tests/helpers';

import Attempts from 'components/common/Attempts';
import { CHECK_STATUSES } from 'constants/constants';

const ATTEMPTS = [
  { word: 'word1', time: 1552509631343, status: CHECK_STATUSES.PENDING },
  { word: 'word2', time: 1552509631344, status: CHECK_STATUSES.PENDING },
  { word: 'word3', time: 1552509631345, status: CHECK_STATUSES.PENDING },
  { word: 'word4', time: 1552509631346, status: CHECK_STATUSES.SUCCESS },
  { word: 'word5', time: 1552509631347, status: CHECK_STATUSES.SUCCESS },
  { word: 'word6', time: 1552509631348, status: CHECK_STATUSES.ERORR },
];

const getWrapper = shallowWithRequiredProps(
  Attempts,
  {
    getters: {
      getAttemptsSortedByTime: () => ATTEMPTS,
    },
  },
);

describe('Attempts', () => {
  const wrapper = getWrapper();

  it('renders passed items with correct attributes', () => {
    const rows = wrapper.findAll('li');

    expect(rows.length).toBe(ATTEMPTS.length);
    ATTEMPTS.forEach((attempt, index) => {
      const row = rows.at(index);
      const innerSpan = row.find('span');

      expect(row.attributes('id')).toBe(attempt.word);
      expect(innerSpan.classes(`attempts__item--${attempt.status}`)).toBe(true);
      expect(innerSpan.text()).toBe(attempt.word);
    });
  });
});
