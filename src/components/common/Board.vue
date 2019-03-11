<template>
  <div class="board__wrapper">
    <TextHeader message="Boggle game" />
    <Input
      placeholder="Enter the word"
      @submit="sendWord"
    />
    <Collection
      :items="items"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Collection from 'components/ui/Collection/Collection';
import Input from 'components/ui/Input';
import TextHeader from 'components/ui/TextHeader';

export default {
  name: 'Board',
  components: {
    Collection,
    Input,
    TextHeader,
  },
  computed: {
    ...mapGetters({
      items: 'getLayout',
    }),
  },
  methods: {
    ...mapActions([
      'sendWord',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .board__wrapper {
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 32px 8px rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 20px;
    min-height: 300px;
    padding: 12px 56px 32px;
    width: 500px;
  }
</style>
