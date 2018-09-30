<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Vue transition</h1>

      <p class="subtxt">Cosy is a front-end developer for 2 decades and an instructor recently</p>
      <p class="subtxt">I've worked with LinkedIn, Instagram, Github and more.</p>
       <button class="media"><router-link to="/portfolio/one">Browse Work</router-link></button>
       <Slide right/>
    </div>

    <div class="right-content img1">
       <img src="../assets/Calque 2.png">
    
       
     
      
  
  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld
  },
 
}
</script>

<style scoped>

  .img1 {

  }
  img{
    position: absolute;
   width: 100%;
  }

a{
  color: #fff

}
  .media a{
    color: black;
    
  }
.main-content .left-content h1 {
    color: #AC8DE0;
    font-size: 3.2em;
    line-height: 1em;
}
</style>