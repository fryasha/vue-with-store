<template>
  <div class='parent'>
    <h1>{{ msg }}</h1>
    <h2>VueX store counter</h2>

    <div> this counter data stored in store data, have shared methods
      (commits) and ractivate on each commit </div>
    <div class="wrap"> first component STORE counter is {{count}}</div>

    <br />
    <br />
    <br />

    <h2>Private counter</h2>

    <div> this private counter DATA exists in parent component (ChildrenComponent.vue)
      and modified by PASSING METHODS TO his children component</div>
    <br />

    <div class="wrap"> second component PRIVATE counter is {{privateCounter}}</div>
    <PrivateCounterPass
      :counter='privateCounter'
      :incrementPrivatePass='incrementPrivatePass'
      :decrementPrivatePass='decrementPrivatePass'
    />

  </div>
</template>

<script>
import PrivateCounterPass from './PrivateCounterPass.vue';


export default {
  name: 'ChildrenComponent',
  props: ['msg'],
  components: {
    PrivateCounterPass,
  },
  data() {
    return {
      privateCounter: 0,
    };
  },
  methods: {
    incrementPrivatePass() {
      this.privateCounter += 1;
    },
    decrementPrivatePass() {
      this.privateCounter -= 1;
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCounter;
    },
  },

};
</script>


<style scoped lang="scss">
.parent {
  padding: 2vw;
  display: flex;
  flex-direction: column;
  width: 20%;
  border: 1px solid black;
}
</style>
