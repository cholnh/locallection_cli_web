<template>
  <div id="app">
    <main-header/>
    <div id="contents">
      <router-view/>
    </div>
    <main-footer/>
  </div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader'
import MainFooter from '@/components/common/MainFooter'

export default {
  name: 'App',
  components: {
    'main-header': MainHeader,
    'main-footer': MainFooter
  },
  created () {
    window.addEventListener('beforeunload', this.OnPageDestroyed)
  },
  methods: {
    OnPageDestroyed: function handler (event) {
      alert('def')
      localStorage.removeItem('accessToken')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  #contents {
    min-height: 700px;
  }
</style>
