<template>
  <div class="container">
    <div class="signal" :style="{ backgroundColor: isEven }"></div>
    <span>{{ count }}</span>
    <div class="buttons">
      <button class="reset" @click="reset()">0</button>
      <button class="plus" @click="add()">+</button>
      <button class="minus" @click="subtract()">-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {
      counting: 0,
    };
  },
  methods: {
    add() {
      this.$store.commit('add');
    },
    subtract() {
      this.$store.commit('subtract');
    },
    reset() {
      this.$store.commit('reset');
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
  margin: 0px 10px;
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
