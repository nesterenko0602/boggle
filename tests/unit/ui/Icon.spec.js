import { shallowWithRequiredProps } from 'tests/helpers';
import Icon from 'components/ui/Icon';

Icon.mounted = jest.fn();

const getWrapper = shallowWithRequiredProps(
  Icon,
  {
    props: { name: 'send' },
    options: { stubs: { svgicon: true } },
  },
);

describe('Icon', () => {
  it('renders appropriate icon', () => {
    const name = 'delete';
    const wrapper = getWrapper({ name });

    expect(wrapper.find('svgicon-stub').attributes('icon')).toBe(name);
  });

  it('has appropriate class name', () => {
    const name = 'delete';
    const wrapper = getWrapper({ name });

    expect(wrapper.find('svgicon-stub').attributes('class')).toBe(`icon-${name}`);
  });

  it('takes passed size', () => {
    const size = '12';
    const wrapper = getWrapper({ size });

    expect(wrapper.find('svgicon-stub').attributes('width')).toBe(size);
  });

  it('takes default size if prop "size" didnt passed', () => {
    const defaultSize = '24';
    const wrapper = getWrapper();

    expect(wrapper.find('svgicon-stub').attributes('width')).toBe(defaultSize);
  });
});
