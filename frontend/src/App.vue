<template>
  <div id="app">
    <div id="header">
      <main-header/>
    </div>
    <div id="contents">
      <main-contents/>
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <div id="footer">
      <main-footer/>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader'
import MainFooter from '@/components/common/MainFooter'
import MainContents from '@/components/common/MainContents'

export default {
  name: 'App',
  components: {
    'main-header': MainHeader,
    'main-footer': MainFooter,
    'main-contents': MainContents
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
  margin-top: 60px;
}
</style>
