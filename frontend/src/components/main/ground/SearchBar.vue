<template>
  <div id="search-bar">
    This is search bar
    <button @click="setComponent('SearchLocal')">검색</button>
    <button @click="setComponent('MainAdContents')">취소</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SearchBar',
  methods: {
    ...mapMutations([
      'setComponent'
    ])
  }
}
</script>

<style scoped>

</style>
