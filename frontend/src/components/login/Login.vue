<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="OnSubmit(username, password)">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
    <p><i> {{ msg }} </i></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    OnSubmit (username, password) {
      // LOGIN 액션 실행
      this.$store.dispatch('LOGIN', {username, password})
        .then(() => this.Redirect())
        .catch((err) => {
          this.msg = err
        })
    },
    Redirect () {
      const { search } = window.location
      const tokens = search.replace(/^\?/, '').split('&')
      const { returnPath } = tokens.reduce((qs, tkn) => {
        const pair = tkn.split('=')
        qs[pair[0]] = decodeURIComponent(pair[1])
        return qs
      }, {})
      // 리다이렉트 처리
      this.$router.push(returnPath)
    }
  }
}
</script>

<style scoped>

</style>
