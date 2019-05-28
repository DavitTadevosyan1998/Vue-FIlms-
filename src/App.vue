<template>
  <div id="app">
    <nav-films></nav-films>
    <router-view/>
  </div>
</template>

<script>
import NavFilms from './components/NavFilms'

export default {
  name:'App',
  components:{
    NavFilms
  }
}
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100%;
    display: block;
    background-image: url('./assets/bg.jpg');
    background-size: 100% 100%;
    background-position: top center;
    background-repeat: no-repeat;
  }
</style>
