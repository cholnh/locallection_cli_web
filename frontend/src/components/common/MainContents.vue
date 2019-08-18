<template>
  <div id="main-contents">
    <div id="ground">
      <main-ground-floor/>
    </div>
    <div id="first">
      <main-first-floor/>
    </div>
    <div id="second">
      <main-second-floor/>
    </div>
  </div>
</template>

<script>
import MainGroundFloor from '@/components/main/MainGroundFloor'
import MainFirstFloor from '@/components/main/MainFirstFloor'
import MainSecondFloor from '@/components/main/MainSecondFloor'
export default {
  name: 'main-contents',
  components: {
    'main-ground-floor': MainGroundFloor,
    'main-first-floor': MainFirstFloor,
    'main-second-floor': MainSecondFloor
  }
}
</script>

<style scoped>

</style>
