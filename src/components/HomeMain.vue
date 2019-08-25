<template>
  <div class="homeMain">
    <div class="roomCard" v-bind:key="room.id" v-for="room in roomsData">
      <HomeRoomCard  v-bind:room="room"/>
    </div>
  </div>
</template>

<script>

import HomeRoomCard from './HomeRoomCard.vue'

export default {
  name: 'HomeMain',
  props: ['roomsData'],
  components: {
    HomeRoomCard,
  }
}
</script>


<style lang="scss" scoped>

.homeMain {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 23px;
}

.roomCard {
  display: inline-block;
  max-width: 1038px;
  margin: 0 23px 58px 23px;
}

</style>
