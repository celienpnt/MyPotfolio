<template>
  <div class="about main-content">
    <div class="left-content">
      <h1>About me</h1>
      <p class="subtxt">I design, code, and teach a bunch of other people to do the same.</p>

      <button><router-link to="/portfolio/one">Look at my work</router-link></button>
    </div>
    <div class="right-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima voluptates quo fugit beatae nihil vitae, natus alias debitis placeat. Veniam consequatur autem ullam error adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima voluptates quo fugit beatae nihil vitae, natus alias debitis placeat. Veniam consequatur autem ullam error adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio amet id recusandae, minima</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .left-content {
    background-color: #fff;
  }

  .right-content {
background: #4e54c8;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #8f94fb, #4e54c8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    p{
      color: #fff;
       padding: 50px;
    display: block;
    }
  }


  button {
    font-size: 1.5em;
    margin-top: 100px;
      border: 1px solid #7366E5;   
	-webkit-animation: jello-horizontal 0.9s both;
	        animation: jello-horizontal 0.9s both;

  }
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}

  .subtxt {
    font-size: 1.5em;
    margin-top: 30px;
  }

</style>