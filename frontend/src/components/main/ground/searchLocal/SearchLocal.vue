<template>
  <div id="search-local">
    <div style="text-align: right">
      <unicon id="btn-close" @click="setComponent('MainAdContents')"
              name="times" fill="black"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SearchLocal',
  methods: {
    ...mapMutations([
      'setComponent'
    ])
  }
}
</script>

<style scoped>
  #search-local {
    height: 550px;
    background: floralwhite;
  }
  #btn-close {
    margin: 15px;
  }
</style>
