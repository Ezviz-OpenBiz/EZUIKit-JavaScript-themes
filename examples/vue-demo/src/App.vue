<template>
  <div id="app">
    <RecTheme />
  </div>
</template>

<script>
import RecTheme from './components/RecTheme.vue';

export default {
  name: 'App',
  components: {
    RecTheme
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
