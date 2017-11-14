<template>
  <div class="e-head" :class="isTransparent ? 'transparent' : ''" :style="styles" >
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
    styles: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    getBgClr () {
      return this.styles ? this.styles : ''
    }
  },
  mounted () {
    console.log(this)
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
    .title
      flex 1
    .left-slot
      position absolute
      left 0
      top 0
      padding-left 20px
      padding-right 10px
      // width 50px
      height 100%
      flex 0 0 50px
    .right-slot
      position absolute
      right 0
      top 0
      padding-right 10px
      min-width 50px
      height 100%
      flex 0 0 50px
</style>
