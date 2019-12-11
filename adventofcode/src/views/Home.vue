<template>
  <div class="home">
    <img alt="Advent logo" class="logo" src="../assets/logo.png">
    <DayOne />
    <DayTwo />
  </div>
</template>

<script>
// @ is an alias to /src
import DayOne from '@/components/DayOne.vue'


export default {
  name: 'home',
  components: {
    DayOne
  }
}
</script>

<style  scoped>
.logo {
  width: 500px;
  height: 250px;
}
</style>