<template>
  <div class="stars main-content">

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'stars',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

  $page_color: #9AA2D8;

  h1 {
    color: $page_color !important;
  }

  .img2 {
   background: #B993D6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8CA6DB, #B993D6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8CA6DB, #B993D6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    img {
      width: 50%;
     margin-top: 20%;

    }

  .arrow {
    width: 43px;
    position: absolute;
  
}
  }





</style>