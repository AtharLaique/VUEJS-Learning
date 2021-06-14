<template>
  <div class="container">
    <select v-model="selected" class="select">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    };
  },
};
</script>

<style scoped>
.container {
  width: 390px;
}
.select {
  width: 390px;
  padding: 20px;
  border: none;
  border-radius: 12px;
  background-color: white;
  color: grey;
  font-size: 18px;
}
</style>
