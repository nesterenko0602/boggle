<template>
  <div class="collection-item__wrapper">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'CollectionItem',
  props: {
    /**
     * Configuration's letter
     */
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables';

.collection-item__wrapper {
  align-items: center;
  background: $grey-lighter;
  border-radius: 3px;
  cursor: default;
  display: flex;
  font-size: 36px;
  height: 50px;
  justify-content: center;
  margin: 2px;
  pointer-events: none;
  width: 50px;
}
</style>
