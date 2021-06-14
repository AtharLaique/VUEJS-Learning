<template>
  <div class="container">
    <Loading />
    <div class="signal" :style="{ backgroundColor: isEven }"></div>
    <span>{{ count.count }}</span>
    <div class="buttons">
      <button class="reset" @click="clickHandler('RESET')">0</button>
      <button class="plus" @click="clickHandler('ADD')">+</button>
      <button class="minus" @click="clickHandler('SUBTRACT')">-</button>
    </div>
    <div class="buttons">
      <button class="reset" @click="asyncHandler('clear')">async</button>
      <button class="plus" @click="asyncHandler('increment')">async</button>
      <button class="minus" @click="asyncHandler('decrement')">async</button>
    </div>
  </div>
</template>

<script>
import Loading from './Loading.vue';
import { mapState, mapGetters } from 'vuex';
export default {
  components: {
    Loading,
  },
  data() {
    return {
      counting: 0,
    };
  },
  methods: {
    clickHandler(type) {
      this.$store.commit(type);
    },
    asyncHandler(type) {
      this.$store.dispatch(type);
    },
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['isEven']),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container > span {
  color: white;
  font-size: 86px;
  display: block;
  font-weight: bold;
}
.buttons > button {
  padding: 10px;
  width: 100px;
  margin: 10px;
  font-size: 22px;
  border: none;
  border-radius: 8px;
  background-color: lightgray;
  cursor: pointer;
}
.reset {
  color: goldenrod;
}
.plus {
  color: chartreuse;
}
.minus {
  color: crimson;
}
.signal {
  width: 70px;
  height: 70px;
  background-color: crimson;
  border-radius: 100%;
}
</style>
