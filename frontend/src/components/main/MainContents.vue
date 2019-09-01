<template>
  <div id="main-contents">
    <hr>
    This is Main start
    <MainGroundFloor/>
    <MainFirstFloor/>
    <MainSecondFloor/>
    This is Main end
    <hr>
  </div>
</template>

<script>
import MainGroundFloor from '@/components/main/ground/MainGroundFloor'
import MainFirstFloor from '@/components/main/first/MainFirstFloor'
import MainSecondFloor from '@/components/main/second/MainSecondFloor'
export default {
  name: 'main-contents',
  components: {
    MainGroundFloor, MainFirstFloor, MainSecondFloor
  }
}
</script>

<style scoped>

</style>
