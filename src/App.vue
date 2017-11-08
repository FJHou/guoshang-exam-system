<template>
  <div id="app">
    <Login></Login>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Login from 'components/login/login'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style lang="stylus">
  #app
    height 100%
</style>
