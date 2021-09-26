<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form  @submit.prevent="onSubmit">
            <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" type="text" v-model="user.image" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"  v-model="user.username" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea class="form-control form-control-lg"  v-model="user.bio" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"  v-model="user.email" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg"  v-model="user.password" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { updateUser, getProfile,  getUser } from '@/api/user'
  import { mapMutations } from 'vuex'
  // 仅在客户端加载 js-cookie 包
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    middleware: 'authenticated',
    name: 'settingIndex',
    async asyncData() {
      const { data } = await getUser()
      console.log('res===>', data);
      const {user} = data
      return {
        user
      }
    },
    methods: {
      ...mapMutations(['setUser']),
      async onSubmit() {
        console.log('===>', this.user);
        const { data } = await updateUser({
          user: this.user
        })
        if(data.user) {
          // 保存在store中
          this.setUser(data.user)

          // 存储在cookie中
          Cookie.set('user', JSON.stringify(data.user))

          this.$router.push('/');
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>