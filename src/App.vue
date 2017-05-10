<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello></hello> -->
    <test></test>
    <!-- <timer></timer> -->
  </div>
</template>

<script>
import Hello from './components/Hello'
import Test from './components/Test'
import Timer from './components/Timer'

export default {
  name: 'app',
  components: {
    Hello,
    Test,
    Timer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
