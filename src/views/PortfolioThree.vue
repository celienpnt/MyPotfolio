<template>
  <div class="three main-content">
    <div class="left-content slideUp">

     

      <h1>PRINT</h1>

      <p class="subtxt">Adipisicing labore dolore proident non nostrud sint cupidatat labore.</p>
      <p class="subtxt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur culpa itaque ipsa sapiente rem delectus in. Sequi inventore, numquam aut veniam totam, ipsa cumque quisquam sit itaque magni modi vitae.</p>

    </div>

    <div class="right-content img2">
 <router-link to="/portfolio/two"><img src="../assets/next-arrow-circular-symbol.svg" class="arrow arrow-up"></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'three'
}
</script>

<style lang="scss" scoped>

  $page_color: #4BB8DE;

  h1 {
    color: $page_color !important;
  }

  .img2 {
background: #36D1DC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    img {
      width: 50%;
     
    }
      .arrow {
    width: 43px;
    position: absolute;
    
}

  }





</style>