<template>
  <div class="collection__wrapper">
    <template v-if="items.length">
      <CollectionItem
        v-for="(item, index) in items"
        :key="index + item"
        :item="item"
      />
    </template>
    <template v-if="!items.length">
      <Icon
        name="loader"
        size="32"
      />
    </template>
  </div>
</template>

<script>
import CollectionItem from 'components/ui/Collection/CollectionItem';
import Icon from 'components/ui/Icon';

export default {
  name: 'Collection',
  components: {
    CollectionItem,
    Icon,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.collection__wrapper {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
  min-height: 100px;
  width: 220px;

  .icon-loader {
    color: $grey;
  }
}
</style>
