import { shallowWithRequiredProps } from 'tests/helpers';
import ErrorMessage from 'components/ui/ErrorMessage';

const getWrapper = shallowWithRequiredProps(ErrorMessage);

describe('ErrorMessage', () => {
  it('renders error text', () => {
    const errorText = 'ErrorText';
    const wrapper = getWrapper({ error: errorText });

    expect(wrapper.text()).toBe(errorText);
  });

  it('applies visibility class when error', () => {
    [false, true].forEach((hasError) => {
      const wrapper = getWrapper({ error: hasError ? 'error' : null });

      expect(
        wrapper.find('.error-message__wrapper').classes('error-message__wrapper--visible'),
      )
        .toBe(hasError);
    });
  });
});
