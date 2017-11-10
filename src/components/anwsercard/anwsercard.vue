<template>
  <transition name="card-slide">
    <div class="anwser-card">
<!--       <Ehead>
        <div slot="left" class="left-slot">
          <Icon type="ios-arrow-left" class="icon-left"></Icon>
        </div>
      </Ehead> -->
      <div class="anwser-status">
        <h3>单选题</h3>
        <div class="anwser-section">
          <span class="question">1</span>
          <span class="question">2</span>
          <span class="question">3</span>
          <span class="question">4</span>
        </div>
<!--         <div class="send-paper-wrapper">
          <Button type="ghost" @click.native="sendPaper" class="send-btn">交卷</Button>
        </div> -->
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'

export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    // sendPaper () {
    //   this.$emit('send')
    // }
  },
  components: {
    Ehead
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

  .anwser-card
    display flex
    flex-direction clumns
    // align-items flex-end
    position fixed
    top 0
    left 0
    right 0
    bottom 50px
    z-index 2
    // padding-top 50px
    background-color: rgba(55,55,55,.6)
    // height 100%
    .anwser-status
      margin-top 50px
      // margin-bottom 50px
      position relative
      top 0
      bottom 50px
      left 0
      right 0
      width 100%
      background-color #fff
      h3
        font-size 16px
        text-align center
      .send-paper-wrapper
        position absolute
        bottom 14px
        width 100%
        text-align center
        .send-btn
          width 80%
          background-color transparent
          border-color $color-theme
          color $color-theme
  .card-slide-enter-active, .card-slide-leave-active
    transition all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275)
  .card-slide-enter, .card-slide-leave-active
    transform translate3d(0,100%,0)
  // .fold-enter-active {
  //   animation-name: fold-in;
  //   animation-duration: .5s;
  // }
  // .fold-leave-active {
  //   animation-name: fold-out;
  //   animation-duration: .5s;
  // }
  // @keyframes fold-in {
  //   0% {
  //     transform: translate3d(0, 100%, 0);
  //   }
  //   50% {
  //     transform: translate3d(0, 50%, 0);
  //   }
  //   100% {
  //     transform: translate3d(0, 0, 0);
  //   }
  // }
  // @keyframes fold-out {
  //   0% {
  //     transform: translate3d(0, 0, 0);
  //   }
  //   50% {
  //     transform: translate3d(0, 50%, 0);
  //   }
  //   100% {
  //     transform: translate3d(0, 100%, 0);
  //   }
  // }
</style>
