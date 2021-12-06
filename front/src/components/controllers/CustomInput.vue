<template>
  <input
    type="text"
    class="inputForSmthing"
    :placeholder="placeholder"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    :id="id"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    placeholder: String,
    id: String,
    modelValue: String,
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
.inputForSmthing {
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-left: 4px solid transparent;
  box-sizing: border-box;
  width: 100%;
}
.inputForSmthing:focus {
  border-left-color: rgb(17, 69, 2);
  border-width: 4px;
}
</style>
