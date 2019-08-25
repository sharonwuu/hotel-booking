<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeMain v-bind:roomsData="roomsData"></HomeMain>

  </div>
</template>

<script>

import HomeHeader from '../components/HomeHeader.vue'
import HomeMain  from '../components/HomeMain.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeMain,
  },
  props:['roomsData'],

  created() {
    axios.get(
      'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
      {
        headers: {
          'Authorization': 'Bearer ' + process.env.VUE_APP_SECRET,
          'Accept': 'application/json',
        },
      }
    )
      .then(res => this.roomsData = res.data.items)
      .catch( /*function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        }*/ )
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>



</style>
