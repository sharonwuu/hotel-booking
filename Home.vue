<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeMain v-bind:roomsData="roomsData"></HomeMain>

  </div>
</template>

<script>

import HomeHeader from '../components/HomeHeader.vue'
import HomeMain  from '../components/HomeMain.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
  },
  props:['roomsData'],
  /*data() {
    return {
      rooms:[
        {
          id:1,
          msg:'oneR'
        },
        {
          id:2,
          msg:'twoR'
        },
        {
          id:3,
          msg:'threeR'
        },
        {
          id:4,
          msg:'4444R'
        },
        {
          id:5,
          msg:'55555'
        },
        {
          id:6,
          msg:'6666'
        },
      ]
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>



</style>
