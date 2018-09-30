<template>
  <div class="home main-content">
    <div class="left-content slideUp">
      <h1>CRYPTO LOGO</h1>

      <p class="subtxt">Adipisicing labore dolore proident non nostrud sint cupidatat labore.</p>
      <p class="subtxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa itaque ipsa sapiente rem delectus in. Sequi inventore, numquam aut veniam totam, ipsa cumque quisquam sit itaque magni modi vitae.</p>

      
    </div>

    <div class="right-content img2">
      
      <img src="../assets/logo.svg">
      <router-link to="/portfolio/two"><img src="../assets/back-arrow-circular-symbol.svg" class="arrow arrow-down"></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'one',
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