<template>
  <div class="route-back" @click="back">
    <Icon type="chevron-left" size="26" style="line-height: 50px"></Icon>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus">

</style>
