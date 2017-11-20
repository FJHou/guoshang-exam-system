<template>
  <Icon type="chevron-left" size="26" style="line-height: 50px" @click.native="back"></Icon>
</template>

<script type="text/ecmascript-6">
import {Icon} from 'iview'

export default {
  methods: {
    back () {
      this.$router.back()
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="stylus">
.route-back
  height 100%
</style>
