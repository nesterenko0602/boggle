import { shallowWithRequiredProps } from 'tests/helpers';
import ErrorMessage from 'components/ui/ErrorMessage';

const errorText = 'ErrorText';
const getterWithError = {
  getters: {
    getError: () => errorText,
  },
};

const getterWithoutError = {
  getters: {
    getError: () => null,
  },
};

const getWrapper = shallowWithRequiredProps(ErrorMessage);

describe('ErrorMessage', () => {
  it('renders error text', () => {
    const wrapper = getWrapper({}, getterWithError);

    expect(wrapper.text()).toBe(errorText);
  });

  it('applies visibility class when error', () => {
    [false, true].forEach((hasError) => {
      const wrapper = getWrapper({}, hasError ? getterWithError : getterWithoutError);

      expect(
        wrapper.find('.error-message__wrapper').classes('error-message__wrapper--visible'),
      )
        .toBe(hasError);
    });
  });
});
