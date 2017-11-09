<template>
  <div class="user">
    <Ehead>
      <div class="back" @click="back">
        <Icon type="chevron-left" size="26" style="line-height: 50px"></Icon>
      </div>
    </Ehead>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
export default {
  methods: {
    back () {
      history.back()
    }
  },
  components: {
    Ehead
  }
}
</script>

<style lang="stylus">
  .back
    width 50px
</style>
