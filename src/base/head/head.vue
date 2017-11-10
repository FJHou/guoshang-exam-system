<template>
  <div class="e-head" :class="isTransparent ? 'transparent' : ''">
    <slot name="left"></slot>
    <h1 class="title">{{title}}</h1>
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    titleColor () {

    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

  .e-head
    position relative
    display flex
    z-index 2
    font-size 16px
    height 50px
    line-height 50px
    text-align center
    color $color-text
    background-color $color-theme
    &.transparent
      background-color transparent
    .back
      width 50px
    .title
      flex 1
    .left-slot
      flex 0 0 50px
    .right-slot
      flex 0 0 50px
</style>
