import { shallowWithRequiredProps } from 'tests/helpers';

import Collection from 'components/ui/Collection/Collection';
import CollectionItem from 'components/ui/Collection/CollectionItem';

const items = ['T', 'A', 'P', '*', 'E', 'A', 'K', 'S', 'O', 'B', 'R', 'S', 'S', '*', 'X', 'D'];

const getWrapper = shallowWithRequiredProps(
  Collection,
  {
    props: { items },
  },
);

describe('Collection', () => {
  it('renders passed items', () => {
    const wrapper = getWrapper({ items });

    expect(wrapper.findAll(CollectionItem).length).toBe(items.length);
  });
});
