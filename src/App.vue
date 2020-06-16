<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
* {
  margin: 0;
}
#app {
  font-family: 'Roboto Mono', monospace;
  background-image: url(./assets/back.png);
  background-size: 100%;
  background-position-y: -300px;
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  padding: 10px;
  text-align: center;
}
</style>
