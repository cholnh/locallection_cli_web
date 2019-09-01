<template>
  <div id="main-ground-floor">
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col><SearchBar/></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <section class="centered" id="main-ground-floor-contents">
      <keep-alive>
        <component v-bind:is="getComponent"/>
      </keep-alive>
    </section>
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
    height: 700px;
  }
  #main-ground-floor-contents {
    width: 90%;
    min-height: 550px;
    border: 1px solid #ced4da;
  }
  .centered { position: absolute; left: 50%; transform: translateX(-50%); }
</style>
