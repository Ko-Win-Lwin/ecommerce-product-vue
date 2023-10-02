<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>


<script>
import NavBar from './components/NabBar.vue'

export default {
  components: {
    NavBar: NavBar
  }
}
</script>

<style scoped>
</style>
