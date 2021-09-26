<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin ? 'Sign in': 'Sign up'}}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template
              v-for="(messages, field) in errors"
            >
              <li
                v-for="(message, index) in messages"
                :key="index"
              >{{ field }} {{ message }}</li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{isLogin ? 'Sign in': 'Sign up'}}
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { login, register } from '@/api/user'
  import { mapMutations } from 'vuex'

  // 仅在客户端加载 js-cookie 包
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    middleware: 'notAuthenticated',
    name: 'LoginIndex',
    computed: {
      isLogin() {
        return this.$route.name === 'login'
      }
    },
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: ''
        },
        errors: {}
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      async onSubmit() {
        try {
          const {data} = this.isLogin
            ? await login({
                user: this.user
              })
            : await register({
              user: this.user
            })
          console.log('data===>', data);
          
          // 保存在store中
          this.setUser(data.user)

          // 存储在cookie中
          Cookie.set('user', JSON.stringify(data.user))

          this.$router.push('/')
        } catch(err) {
          console.log('e===>', err);
          this.errors = err.response.data.errors
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>