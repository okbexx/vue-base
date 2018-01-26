<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 50px 0;
    background-color: #ffffff;
    font-size: 14px;
    color: #555;
    -webkit-font-smoothing: antialiased;
    /*字体抗锯齿*/
  }
</style>
