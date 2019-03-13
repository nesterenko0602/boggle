import { shallowWithRequiredProps } from 'tests/helpers';
import CollectionItem from 'components/ui/Collection/CollectionItem';

const item = 'A';
const getWrapper = shallowWithRequiredProps(CollectionItem, { props: { item } });

describe('CollectionItem', () => {
  it('renders passed item', () => {
    const wrapper = getWrapper();

    expect(wrapper.find('.collection-item__wrapper').text()).toBe(item);
  });
});
