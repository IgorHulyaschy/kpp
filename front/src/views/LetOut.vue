<template>
  <div class="content">
  <Header/>
  <div class="wrapper">
    <div class="main">
      <div v-if="resp">{{customer.fname}} {{customer.lname}}, Goodbye</div>
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
  name: 'LetOut',
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
      error: '',
      customer: {
        fname: '',
        lname: '',
      },
      resp: false
    };
  },
  methods: {
    register() {
      api.put('/contract', {
        fname: this.fname,
        lname: this.lname,
        passport: this.passport
      }).then((res) => {
        this.customer.lname = res.data.lname
        this.customer.fname = res.data.fname
        this.resp = true
        setTimeout(() => {
          router.push('/')
        }, 3000)
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