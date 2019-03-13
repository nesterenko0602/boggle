import { shallowWithRequiredProps } from 'tests/helpers';
import Button from 'components/ui/Button';

const getWrapper = shallowWithRequiredProps(
  Button,
  {
    props: {
      value: 'Button text',
      isLoading: false,
    },
  },
);

describe('Button', () => {
  it('renders passed text', () => {
    const buttonText = 'text text';
    const wrapper = getWrapper({ value: buttonText });

    expect(wrapper.find('button').text()).toBe(buttonText);
  });

  it('disabled when loading', () => {
    [false, true].forEach((isLoading) => {
      const wrapper = getWrapper({ isLoading });
      const inputElement = wrapper.find('button');

      expect(inputElement.attributes('disabled')).toBe(isLoading ? 'disabled' : undefined);
    });
  });

  it('emits on submit', () => {
    const wrapper = getWrapper();
    const inputElement = wrapper.find('button');
    inputElement.trigger('click');

    expect(wrapper.emitted().click.length).toBe(1);
  });
});
