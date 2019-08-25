<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/home"></router-link>
    <router-link to="/room"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import axios from 'axios';

export default {
  name: 'app',
}
</script>

<style lang="scss">

#app {
  font-family: 'Noto Sans TC', 'Roboto', sans-serif;
  font-weight: 300;
}

</style>
