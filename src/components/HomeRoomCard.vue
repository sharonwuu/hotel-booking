<template>
  <div class="card">
    <div class="container" v-on:click="goRoomPage"
      :style="{'background-image': 'url(' + room.imageUrl + ')'}"
    >
      <div class="info">
        <div class="title">{{room.name}}</div>
        <div class="price">
          <span>
            NT.{{room.normalDayPrice}}
            <span>平日</span>            
          </span>
          <span>
            NT.{{room.holidayPrice}} 假日
          </span>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeRoomCard',
  props: ['room'],
  methods: {
    goRoomPage: function() {
      this.$router.push({
        name: '/room',
        params: {
          name: this.room.name,
          id: this.room.id, 
        }        
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  width: 300px;
  height: 350px;

  .container {
    height: inherit;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    position:relative;
    overflow: hidden;
    @include shadow(2px, 2px, 9px, 0px, 0.18);

    .info {
      width: 100%;
      height: 132px; //70+62
      position:absolute;
      bottom: -62px;
      padding: 23px 30px;
      box-sizing: border-box;
      background-color: $gray-light;
      transition: all 0.5s ease;

      .title {
        height: 70px;
        font-size: 14px;
        letter-spacing: 1.46px;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        > span:first-child {
          font-size: 21px;
          letter-spacing: 2.19px;
          span {
            font-size: 12px;
            letter-spacing: 1.25px;
          }          
        }
        > span:last-child{
          font-size: 12px;
          color: #6D7278;
          letter-spacing: 1.25px;
        }
      }
    }
  }
  .container:hover .info {
    bottom: 0px;
  }
}

</style>
