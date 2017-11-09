<template>
  <div class="e-head">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">

export default {

}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

  .e-head
    display flex
    font-size 16px
    height 50px
    line-height 50px
    text-align center
    color $color-text
    background-color $color-theme
    .back
      width 50px
    .title
      flex 1
    .left-slot
      flex 0 0 50px
    .right-slot
      flex 0 0 50px
</style>
