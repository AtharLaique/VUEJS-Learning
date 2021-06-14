<template>
  <div class="container">
    <label for="name" class="label">{{ label }}</label>
    <input class="input" v-model="name" type="type" placeholder="placeholder" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ['type', 'label', 'placeholder'],
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.label {
  display: block;
  font-size: 20px;
  padding: 10px 0;
  font-weight: bold;
  color: oldlace;
}
.input {
  display: block;
  width: 350px;
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
}
.container > span {
  padding: 10px 0;
}
</style>
