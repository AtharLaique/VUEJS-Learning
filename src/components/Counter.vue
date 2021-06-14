<template>
  <div class="container">
    <span>{{ countNow }}</span>
    <button class="reset" @click="reset()">0</button>
    <button class="plus" @click="add()">+</button>
    <button class="minus" @click="subtract()">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
    subtract() {
      if (this.count > 0) {
        this.count -= 1;
      }
    },
    reset() {
      this.count = 0;
    },
  },
  computed: {
    countNow() {
      return this.count;
    },
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
