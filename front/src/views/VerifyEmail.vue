<template>
  <div>
    <div class="content">
      <!-- <div class="timer">Time left: {{ time }}</div> -->
      <CustomInput placeholder="Tupe your code here" v-model="code"/>
      <CustomBut value="Send" @click="verify"/>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/controllers/CustomInput.vue";
import CustomBut from "../components/controllers/CutomBut.vue";
import api from '../api/api'
import router from '../router/index'
export default {
  name: "VerifyEmail",
  components: {
    CustomInput,
    CustomBut,
  },
  data() {
    return {
      code: ''
    };
  },
  methods: {
    verify() {
      const email = JSON.parse(localStorage.getItem('email'))
      api.put('/employee/email-confirmation', { 
        email, 
        code: this.code
        }).then(() => {
          router.push('/YouAreWelcome')
        }).catch((err) => {
          console.log(err.responce.data.message)
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.inputForSmthing {
  width: 200px;
}
</style>
