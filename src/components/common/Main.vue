<template>
  <main class="main__wrapper">
    <Board />
  </main>
</template>

<script>
import Board from 'components/common/Board';

export default {
  name: 'Main',
  components: {
    Board,
  },
};
</script>

<style lang="scss" scoped>
  .main__wrapper {
    flex: 1 1 auto;
    margin: 0 auto;
  }
</style>
