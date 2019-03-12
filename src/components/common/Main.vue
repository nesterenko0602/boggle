<template>
  <main class="main__wrapper">
    <Content />
  </main>
</template>

<script>
import Content from 'components/common/Content';

export default {
  name: 'Main',
  components: {
    Content,
  },
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  flex: 1 1 auto;
  margin: 0 auto;
}
</style>
