<template>
  <div class="collection__wrapper">
    <CollectionItem
      v-for="(item, index) in items"
      :key="index + item"
      :item="item"
    />
  </div>
</template>

<script>
import CollectionItem from 'components/ui/Collection/CollectionItem';

export default {
  name: 'Collection',
  components: {
    CollectionItem,
  },
  props: {
    /**
     * List of collection items (letters of configuration)
     */
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

.collection__wrapper {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
  width: 220px;
}
</style>
