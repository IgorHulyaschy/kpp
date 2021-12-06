<template>
  <div>You are welcome</div>
</template>

<script>
import router from '../router/index'
export default {
  name: "YouAreReady",
  created() {
    setTimeout(() => {
      router.push('/')
    }, 1000)
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-self: center;
  font-size: 70px;
}
</style>
