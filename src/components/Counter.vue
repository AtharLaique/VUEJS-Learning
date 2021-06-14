<template>
  <div class="container">
    <span>{{ count }}</span>
    <button class="reset" @click="reset()">0</button>
    <button class="plus" @click="add()">+</button>
    <button class="minus" @click="subtract()">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      counting: 0,
    };
  },
  methods: {
    add() {
      this.counting += 1;
    },
    subtract() {
      if (this.count > 0) {
        this.counting -= 1;
      }
    },
    reset() {
      this.counting = 0;
    },
  },
  computed: {
    ...mapState(['count']),
  },
};
</script>

<style scoped>
.container > span {
  color: white;
  font-size: 86px;
  display: block;
  font-weight: bold;
}
.container > button {
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
</style>
