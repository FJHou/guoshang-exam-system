<template>
  <div class="exam">
    <div class="e-head">
      <span class="left-slot" @click="pannelControl">
        <Icon type="navicon-round" size="24"></Icon>
      </span>
      <h3 class="title">国商控股考试系统</h3>
      <span class="right-slot" @click="signInControl">签到</span>
    </div>
    <transition name="slide">
      <div class="user-pannel" v-show="togglePannel">
        <div class="pannel-left">
          <div class="avatar-wrapper">
            <div class="avatar"></div>
          </div>
          <ul class="route-wrapper">
            <router-link tag="li" class="route-button" to="/exam">
              <span class="route-text">我的考场</span>
              <i class="arrow-left">&gt</i>
            </router-link>
            <router-link tag="li" class="route-button" to="/question">
              <span class="route-text">我的问卷</span>
              <i class="arrow-left">&gt</i>
            </router-link>
            <router-link tag="li" class="route-button" to="/user">
              <span class="route-text">会员中心</span>
              <i class="arrow-left">&gt</i>
            </router-link>
          </ul>
        </div>
        <div class="pannel-right" @click="pannelControl"></div>
      </div>
    </transition>
    <transition name="r-slide">
      <div class="signIn-pannel" v-show="toggleSignin">
        <header class="e-head">
          <span class="back" @click="signInControl">&lt</span>
          <span class="text">国商控股考试系统</span>
        </header>
        <div class="signIn-content">

          <p class="button-wrapper">
            <Button type="primary" shape="circle" size="large" style="width:60%;">点击签到</Button>
          </p>
        </div>
      </div>
    </transition>
    <div class="exam-wrapper">
      <ul class="exam-list">
        <li v-for="item in questionList" class="question"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      togglePannel: false,
      toggleSignin: false,
      questionList: 0
    }
  },
  methods: {
    pannelControl () {
      this.togglePannel = !this.togglePannel
    },
    signInControl () {
      this.toggleSignin = !this.toggleSignin
    },
    signIn () {

    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
.exam
  height 100%
  .e-head
    display flex
    padding 0 10px
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
  .user-pannel
    display flex
    position fixed
    left 0
    top 0
    z-index 2
    width 100%
    height 100%
    .pannel-left
      flex 1
      background-color #ccc
      .avatar-wrapper
        position relative
        left 0
        top 0
        width 100%
        padding-top 100%
        .avatar
          position absolute
          left 0
          top 0
          right 0
          bottom 0
          margin auto
          width 60px
          height 60px
          background-color pink
      .route-wrapper
        .route-button
          display flex
          height 30px
          line-height 30px
          color $color-text
          .arrow-left
            text-align center
            flex 0 0 50px
          .route-text
            flex 1
            padding-left 20px
            text-align left
    .pannel-right
      width 20%
      background-color transparent
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s linear
  .slide-enter, .slide-leave-active
    transform: translate3d(-100%,0,0)
  .signIn-pannel
    position fixed
    left 0
    top 0
    z-index 2
    width 100%
    height 100%
    // transform translate3d(100%, 0, 0)
    .signIn-content
      background-color #fff
      height 100%
      .button-wrapper
        text-align center
  .r-slide-enter-active, .r-slide-leave-active
    transition all 0.3s linear
  .r-slide-enter, .r-slide-leave-active
    transform translate3d(100%,0,0)
  .exam-wrapper
    position absolute
    top 50px
    bottom 0
    width 100%
    background-color #ddd
</style>
