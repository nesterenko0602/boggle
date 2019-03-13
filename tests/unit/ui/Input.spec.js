import { shallowWithRequiredProps } from 'tests/helpers';

import Icon from 'components/ui/Icon';
import Input from 'components/ui/Input';

const getWrapper = shallowWithRequiredProps(
  Input,
  {
    props: { name: 'toDoInput' },
  },
);

describe('Input', () => {
  it('renders passed placeholder', () => {
    const placeholder = 'testPlaceholder';
    const wrapper = getWrapper({ placeholder });

    expect(wrapper.find('input[type="text"]').element.placeholder).toBe(placeholder);
  });

  it('triggers key handler on keydown', () => {
    const wrapper = getWrapper();
    const keyDownHandler = jest.fn();
    const inputElement = wrapper.find('input[type="text"]');

    wrapper.setMethods({ keyDownHandler });
    inputElement.trigger('keydown.a');
    inputElement.trigger('keydown.b');
    inputElement.trigger('keydown.c');

    expect(keyDownHandler).toHaveBeenCalledTimes(3);
  });

  it('emits on submit', () => {
    const wrapper = getWrapper();
    const inputElement = wrapper.find('input[type="text"]');
    const message = 'test text';
    inputElement.setValue(message);

    wrapper.find(Icon).trigger('click');

    expect(wrapper.emitted().submit[0])
      .toEqual([message]);
  });
});
