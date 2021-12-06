<template>
  <div class="header">
    <div class="logo">
      <div>KPP</div>
    </div>
    <div class="menu">
      <router-link to="/Presense">Presence</router-link>
      <router-link to="/">Check Passport</router-link>
      <router-link to="/RegisterEmployee">Register Employee</router-link>
      <router-link to="/RegisterCustomer">Register Customer</router-link>
      <router-link to="/LetOut">Let out Customer</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: rgb(0, 86, 34);
    .logo{
      margin-left: 20px;
      color: white;
      font-size: 20px;
    }
    .menu {
      display: flex;
      justify-content: space-between;
    }
    a{
      text-decoration: none;
      width: 200px;
      color: white;
      font-size: 20px;
    }
    a:hover {
      font-weight: bold;
    }
  }
</style>