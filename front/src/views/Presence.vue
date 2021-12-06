<template>
  <div class="content">
  <Header/>
  <div class="wrapper">
    <div class="main">
      <div v-for="employee in employees" :key="employee.id" class="wrappe">
        <div class="field">{{employee.fname}}</div> 
        <div class="field">{{employee.lname}}</div>  
        <div class="data">{{employee.date}}</div>
      </div>
      <div>{{error}}</div>
    </div>
  </div>
</div>
</template>

<script>
import api from '../api/api'
// import router from '../router/index'
import Header from '../components/Header.vue'
export default {
  name: 'Presence',
  components: {
    Header
  },
  data() {
    return {
      employees: [],
    };
  },
  beforeCreate() {
    api.get('/employee/presence').then((res) => {
      console.log(res.data.employees)
      this.employees = res.data.employees
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
.wrappe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .field{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .data{
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 700px;
  border-radius: 5px;
  .inputForSmthing {
    width: 200px;
    margin-top: 30px;
  }
  .ButforAction {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.wrapper{
  width: 650px;
}
</style>