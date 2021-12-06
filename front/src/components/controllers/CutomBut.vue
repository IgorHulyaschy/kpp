<template>
  <input type="button" :value="value" class="ButforAction" />
</template>

<script>
export default {
  name: "CustomBut",
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
input[type="text"], input[type="password"],input[type="button"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
}
.ButforAction {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 22px;
  border-radius: 5px;
  border-color: rgb(0, 86, 34);
  background-color: rgb(0, 86, 34);
  color: white;
  cursor: pointer;
}
.ButforAction:hover {
  font-weight: bold;
  background-color: white;
  color: rgb(0, 86, 34);
}
.ButforAction:active {
  border-color: rgb(0, 86, 34);
  background-color: rgb(0, 86, 34);
  color: white;
}
</style>
