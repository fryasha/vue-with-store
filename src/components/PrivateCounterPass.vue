<template>
  <div class="private-counter">
    add to PRIVATE counter
    <button @click='increment()'>+</button>
    <br />

    <br />
    remove from PRIVATE counter
    <button @click='decrement()'>-</button>
  </div>
</template>

<script>
export default {
  name: 'PrivateCounterEmit',
  props: ['decrementPrivatePass', 'incrementPrivatePass'],
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$props.incrementPrivatePass();
    },

    decrement() {
      this.$props.decrementPrivatePass();
    },
  },
};
</script>


<style scoped lang="scss">
.private-counter {
  display: flex;
  flex-direction: column;
  button {
    width: 30%;
  }
}
</style>
