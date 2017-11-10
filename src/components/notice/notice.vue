<template>
  <transition name="notice-slide">
    <div class="notice">
      <Ehead>
        <div class="back" slot="left">
          <RouteBack></RouteBack>
        </div>
      </Ehead>
      这里是考试须知
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
export default {
  components: {
    Ehead,
    RouteBack
  }
}
</script>

<style lang="stylus">
  .notice
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 2
    background-color #fff
    // transform translate3d(100%,0,0)
  .notice-slide-enter-active, .notice-slide-leave-active
    transition all 0.3s linear
  .notice-slide-enter, .notice-slide-leave-active
    transform translate3d(100%,0,0)
</style>
