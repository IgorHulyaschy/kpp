<template>
  <div class="content">
  <Header/>
  <div class="wrapper">
    <div class="main">
      <CustomInput placeholder="fname" v-model="fname" />
      <CustomInput placeholder="lname" v-model="lname" />
      <CustomInput placeholder="passport of employee" v-model="passport" />
      <CustomBut value="create contract" @click="register"/>
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
  name: 'RegiterCustom',
  components: {
    CustomBut,
    CustomInput,
    Header
  },
  data() {
    return {
      fname: "",
      lname: "",
      passport: "",
      error: ''
    };
  },
  methods: {
    register() {
      api.post('/contract', {
        fname: this.fname,
        lname: this.lname,
        passport: this.passport
      }).then(() => {
        router.push('/Message')
      }).catch((err) => {
        this.err = err.responce.data.message
        setTimeout(() => {
          this.err = ''
        }, 3000)
      })
    }
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