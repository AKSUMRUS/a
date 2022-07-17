<template>
<!-- <div> -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <AdminConsole/> -->
  <GameGraph/>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AdminConsole from './components/AdminConsole.vue'
import GameGraph from './components/GameGraph.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // AdminConsole
    GameGraph
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
