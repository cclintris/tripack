<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    layout: () => import('@/layout/layout.vue')
  },
  mounted() {
    this.$router.push('/home');
  }
}
</script>

<style>
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>