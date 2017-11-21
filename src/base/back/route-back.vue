<template>
  <Icon type="chevron-left" size="26" style="line-height: 50px" @click.native="back"></Icon>
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
.route-back
  height 100%
</style>
