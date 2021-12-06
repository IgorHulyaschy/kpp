<template>
  <div class="content">
    <Header/>
    <div class="main">
      <CustomInput placeholder="passport" v-model="passport"/>
      <CustomBut value="Check" @click="checkpassport"/>
      <div>{{ error }}</div>
    </div>
  </div>
</template>

<script>
import CustomInput from '../components/controllers/CustomInput.vue'
import CustomBut from '../components/controllers/CutomBut.vue'
import api from '../api/api'
import router from '../router/index'
import Header from '../components/Header.vue'
export default {
  name: "CheckPassport",
  components: {
    CustomInput,
    CustomBut,
    Header
  },
  data() {
    return {
      passport: '',
      error: ''
    }
  },
  methods: {
    async checkpassport() {
      api.get(`/employee/${this.passport}`)
        .then(() => router.push('/Message'))
        .catch((err) => {
          this.error = err.response.data.message
          setTimeout(() => {
            this.error = ''
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
}
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  .inputForSmthing {
    width: 200px;
  }
  .ButforAction {
    margin-top: 30px;
  }
}
</style>