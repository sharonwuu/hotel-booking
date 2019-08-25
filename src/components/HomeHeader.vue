<template>
  <div class="homeHeader">

    <div class="container" :style="{'background-image': 'url(' + imgUrl + ')'}" >

      <div class="logo"><LogoSquare></LogoSquare></div>
      
      <div class="info">

        <div class="socialMedia">
          <div class="svg" ><IconInstagram></IconInstagram></div>
          <div class="svg" ><IconFacebook></IconFacebook></div>
        </div>

        <div class="contactInfo">          
          <div>
            <div class="svg">
              <IconPhone></IconPhone>
            </div>
            02-17264937
          </div>
          <div>
            <div class="svg">
              <IconEnvelope></IconEnvelope>
            </div>
            whitespace@whitespace.com.tw
          </div>
          <div>
            <div class="svg">
              <IconHome></IconHome>
            </div>
            台北市羅斯福路十段30號
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import LogoSquare from '../assets/logo/square.svg';

  import IconInstagram from '../assets/icon/instagram-brands.svg';
  import IconFacebook from '../assets/icon/facebook-square-brands.svg';

  import IconPhone from '../assets/icon/phone-alt-solid.svg';
  import IconEnvelope from '../assets/icon/envelope-solid.svg';
  import IconHome from '../assets/icon/home-solid.svg';

  export default {
    name: 'HomeHeader',
    components:{
      LogoSquare,
      IconInstagram, IconFacebook,
      IconPhone, IconEnvelope, IconHome, 
    },
    data() {
      return {
        imgUrl:"https://images.unsplash.com/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      }
    },

  }
</script>

<style lang="scss" scoped>

  .homeHeader{
    height: 660px;
    color: $white;
    font-size: 14px;

    .container {
      height: inherit;
      padding-top: 155px;

      //background-image: url( ...);   
      background-position: center;
      

      .logo {
        width: 163px;
        margin: 0 auto 62px auto;
      }

      .info {
        display: flex;
        
        justify-content: center;
        align-items: center;

        .socialMedia {
          padding-right: 35px;
          box-sizing: border-box;

          div:first-child{
            margin-right: 11px;
          }
          .svg {
            display: inline-block;
            svg {
              width: 25px;
              height: 25px;            
            }
          }
        }

        .contactInfo {
          box-sizing: border-box;
          border-left: 1px solid #FFF;
          padding-left: 35px;
          > div:not(:last-child) {
            margin-bottom: 16px;
          }
          .svg {
            display: inline-block;
            padding-right: 11px;
            svg {
              vertical-align: middle;
              width: 20px;
              height: 20px;            
            } 
          }
        }
      }
    }  
  }

</style>
