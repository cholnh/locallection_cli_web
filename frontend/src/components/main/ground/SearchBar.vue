<template>
  <div id="search-bar">
    <b-form inline @click="setComponent('SearchLocal')">
      <b-input-group size="lg" class="mb-3" id="input-group">
        <b-form-input list="input-list" id="input-with-list" placeholder="로컬 검색"></b-form-input>
        <b-form-datalist id="input-list" :options="options"></b-form-datalist>
        <b-input-group-append>
          <b-button variant="outline-secondary">
            <unicon name="search" fill="black"/>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
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
  },
  data () {
    return {
      options: ['서울대학교', '서강대학교', '서울시립대학교', '연세대학교', '경기대학교']
    }
  }
}
</script>

<style scoped>
  #input-group {
    width: 500px;
  }
</style>
