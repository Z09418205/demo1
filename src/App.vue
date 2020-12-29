<template>
  <div id="app">
    <router-view />
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import HomePage from './components/HomePage'
export default {
  name: 'App',
  components: {
    Search,
    Header,
    HomePage
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
