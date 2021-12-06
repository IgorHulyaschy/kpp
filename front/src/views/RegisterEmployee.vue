<template>
<div class="content">
  <Header/>
  <div class="wrapper">
    <div class="main">
      <CustomInput placeholder="fname" v-model="fname" />
      <CustomInput placeholder="lname" v-model="lname" />
      <CustomInput placeholder="email" v-model="email" />
      <CustomInput placeholder="passport" v-model="passport" />
      <CustomInput placeholder="age" v-model="age" />
      <CustomInput placeholder="position" v-model="position" />
      <CustomBut value="register" @click="register"/>
      <div>{{error}}</div>
    </div>
  </div>
</div>
</template>

<script>
import CustomBut from "../components/controllers/CutomBut.vue";
import CustomInput from "../components/controllers/CustomInput.vue";
import api from '../api/api'
import router from '../router/index'
import Header from '../components/Header.vue'
export default {
  name: "RegisterEmployee",
  components: {
    CustomBut,
    CustomInput,
    Header
  },
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      passport: "",
      age: '',
      position: "",
      error: ''
    };
  },
  methods: {
    register() {
      const data = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        passport: this.passport,
        age: Number(this.age),
        position: this.position
      }
      api.post('/employee', data)
        .then(() => {
          localStorage.setItem('email', JSON.stringify(data.email))
          router.push('/VerifyEmail')
        })
        .catch((err) => {
          this.error = err.responce.data.message
          setTimeout(() => {
            this.error = ''
          }, 3000)
        })
    }
  }
};
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
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 400px;
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
</style>
