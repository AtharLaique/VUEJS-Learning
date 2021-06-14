<template>
  <input type="checkbox" id="checkbox" v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped>
input[type='checkbox'] {
  width: 22px !important;
  height: 22px;
  border-radius: 12px;
}
</style>
