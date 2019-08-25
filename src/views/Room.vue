<template>
  <div class="home">
    
     {{this.$route.params.name}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Room',
  // props:['roomsData'],
/*
  created() {
    const roomId = this.$route.params.id
    axios.get(
      `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`,
      {
        headers: {
          'Authorization': 'Bearer' + process.env.VUE_APP_SECRET,
          'Accept': 'application/json',
        },
      }
    )
      .then( res => {
          // this.roomsData = res.data.items ;
        })
      .catch(
  }
*/
}
</script>

<style lang="scss" scoped>

</style>
