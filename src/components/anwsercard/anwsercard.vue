<template>
  <transition name="card-slide">
    <div class="anwser-card">
<!--       <Ehead>
        <div slot="left" class="left-slot">
          <Icon type="ios-arrow-left" class="icon-left"></Icon>
        </div>
      </Ehead> -->
      <div class="anwser-status">
        <ul>
          <li v-for="item in data" class="type-group">
            <h3>{{item.type}}</h3>
            <div class="anwser-section">
              <span class="question"
                    v-for="item in data"
                    :class="item.isSelect ? 'fill' : ''">{{item.num}}</span>
            </div>
          </li>
        </ul>
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
      type: Array,
      default: []
    }
  },
  mounted () {
    this.quiteSaveTime()
  },
  methods: {
    // sendPaper () {
    //   this.$emit('send')
    // }
    quiteSaveTime () {
      window.onbeforeunload = function () {
        localStorage.setItem('time', new Date().getTime())
      }
    }
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
    bottom 0
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
      ul
        padding 15px 15px 0
        .type-group
          .anwser-section
            display flex
            flex-wrap wrap
            .question
              margin-right 15px
              margin-bottom 15px
              width 30px
              height 30px
              text-align center
              line-height 30px
              border-radius 50%
              box-shadow 1px 0 1px 0 #e1e1e1, 0 -1px 1px 0 #e1e1e1, -1px 0 1px 0 #e1e1e1, 0 1px 1px 0 #e1e1e1
              &.fill
                color #fff
                background-color $color-theme
                box-shadow none
      h3
        padding-bottom 15px
        font-size 16px
        text-align center
        color #434343
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
