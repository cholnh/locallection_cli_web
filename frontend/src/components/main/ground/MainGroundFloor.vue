<template>
  <div id="main-ground-floor">
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col><SearchBar/></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <keep-alive>
      <component v-bind:is="getComponent"/>
    </keep-alive>
  </div>
</template>

<script>
import SearchBar from '@/components/main/ground/SearchBar'
import MainAdContents from '@/components/main/ground/MainAdContents'
import SearchLocal from '@/components/main/ground/searchLocal/SearchLocal'
import { mapGetters } from 'vuex'

export default {
  name: 'MainGroundFloor',
  computed: {
    ...mapGetters([
      'getComponent'
    ])
  },
  components: {
    SearchLocal, SearchBar, MainAdContents
  }
}
</script>

<style scoped>
  #main-ground-floor {

  }
</style>
