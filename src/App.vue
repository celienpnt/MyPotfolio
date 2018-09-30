<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo"><img src="./assets/cosy.png">Cosy Design</router-link>
<router-link to="/" id="logo1"><img src="./assets/cosy.png"></router-link>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
  

          </ul>
        </nav>

      <transition name="fade" mode="out-in">         
         <router-view />
      </transition>
     

      </div>
    </div>

  </div>
</template>
<script>
export default {
  
}
</script>


<style lang="scss" src="./global.scss">


</style>
