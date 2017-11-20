<template>
  <div class="exam">
    <Ehead :title="'国商控股考试系统'">
      <div slot="left" class="left-slot" @click="pannelControl">
        <Icon type="navicon-round" size="28" style="line-height: 50px"></Icon>
      </div>
      <div slot="right" class="right-slot" @click="signInControl">签到</div>
    </Ehead>
    <transition name="slide">
      <div class="user-pannel" v-show="togglePannel">
        <div class="pannel-left">
          <div class="avatar-wrapper">
            <div class="avatar">
              <Icon type="person" size="60" style="line-height:80px"></Icon>
              <p class="name">name</p>
            </div>
          </div>
          <ul class="route-wrapper">
            <router-link tag="li" class="route-button" to="/exam">
              <span class="route-text">我的考场</span>
              <Icon type="chevron-right" size="22" class="icon-right"></Icon>
            </router-link>
<!--             <li class="route-button">
              <span class="route-text">我的问卷</span>
              <Icon type="chevron-right" size="22" class="icon-right"></Icon>
            </li> -->
            <router-link tag="li" class="route-button" to="/question">
              <span class="route-text">我的问卷</span>
              <Icon type="chevron-right" size="22" class="icon-right"></Icon>
            </router-link>
            <router-link tag="li" class="route-button" to="/user">
              <span class="route-text">会员中心</span>
              <Icon type="chevron-right" size="22" class="icon-right"></Icon>
            </router-link>
<!--             <router-link tag="li" class="route-button" to="/setting">
              <span class="route-text">设置</span>
              <Icon type="chevron-right" size="22" class="icon-right"></Icon>
            </router-link> -->
          </ul>
          <div class="logout-wrapper">
            <Button
              type="primary"
              shape="circle"
              size="large"
              class="logout"
              @click="logout">
            退出登录</Button>
          </div>
        </div>
        <div class="pannel-right" @click="pannelControl"></div>
      </div>
    </transition>
    <transition name="r-slide">
      <div class="signIn-pannel" v-show="toggleSignin">
        <Ehead :title="'国商控股考试系统'">
          <div slot="left" class="left-slot">
            <span class="back" @click="signInControl">
              <Icon type="chevron-left" size="26" style="line-height: 50px"></Icon>
            </span>
          </div>
          <div slot="right" class="right-slot"></div>
        </Ehead>
        <div class="signIn-content">
          <div class="clock-group">
            <p class="clock-time">

            </p>
            <p class="clock-hint">请在规定的时间内签到</p>
            <div class="clock-img">
              <Icon type="clock" size="200"></Icon>
            </div>
          </div>
          <p class="button-wrapper">
            <Button type="primary" shape="circle" size="large" style="width:60%;font-size: 16px" @click="signIn" :loading="signLoading">点击签到</Button>
          </p>
        </div>
      </div>
    </transition>
    <div class="exam-wrapper">
      <Examlist :data="questionData" @select="select"></Examlist>
    </div>
    <transition name="notice-slide">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import Examlist from 'components/examlist/examlist'
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
import {deleteCookie} from 'common/js/cookie'
import {Button, Icon} from 'iview'

export default {
  data () {
    return {
      togglePannel: false,
      toggleSignin: false,
      questionData: [2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      isSignIn: false,
      signLoading: false
    }
  },
  created () {

  },
  methods: {
    select (e) {
      this.$router.push({
        path: '/exam/notice'
      })
      // this.$router.push({
      //   path: '/exam/examgrade'
      // })
    },
    // 退出登陆
    logout () {
      this._instance('confirm', '确定退出吗')
    },
    // 左侧栏控制
    pannelControl () {
      this.togglePannel = !this.togglePannel
    },
    // 右侧签到栏控制
    signInControl () {
      this.toggleSignin = !this.toggleSignin
    },
    // 签到
    signIn () {
      this.signLoading = true
      this._instance('success', '签到成功')
    },
    _instance (type, content) {
      switch (type) {
        case 'confirm':
          this.$Modal.confirm({
            content: content,
            onOk: () => {
              this.$Message.info('已退出')
              deleteCookie('isLogin')
              window.location.reload()
            }
          })
          break
        case 'success':
          this.$Modal.success({
            content: content,
            onOk: () => {
              this.toggleSignin = false
            }
          })
          this.signLoading = false
          break
        case 'warning':
          this.$Modal.warning({
            content: content
          })
          break
        case 'error':
          this.$Modal.error({
            content: content
          })
          break
      }
    }
  },
  components: {
    Examlist,
    RouteBack,
    Ehead,
    // iview components
    Button,
    Icon
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
.exam
  height 100%
  .user-pannel
    display flex
    position fixed
    left 0
    top 0
    z-index 2
    width 100%
    height 100%
    .pannel-left
      position relative
      flex 1
      background url('./userset_bg.png') center
      .avatar-wrapper
        position relative
        left 0
        top 0
        width 100%
        padding-top 90%
        .avatar
          position absolute
          left 0
          top -40px
          right 0
          bottom 0
          margin auto
          text-align center
          width 80px
          height 80px
          border-radius 50%
          background-color: #282828
          // background url('./default_userImg.png') center/100%
        .name
          margin-top 20px
          text-align center
          font-size 24px
          color $color-text
      .route-wrapper
        .route-button
          display flex
          padding 0 20px
          height 50px
          line-height 50px
          color $color-text
          &.router-link-active
            background-color $color-theme
          .route-text
            font-size 18px
            flex 1
            text-align left
          .icon-right
            line-height 50px
      .logout-wrapper
        position absolute
        left 0
        bottom 36px
        width 100%
        width 100%
        text-align center
        .logout
          width 80%
          height 40px
          font-size 16px
          background transparent
          color $color-theme
    .pannel-right
      width 20%
      background-color transparent
  .slide-enter-active, .slide-leave-active
    transition: all .3s linear
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
    .signIn-head
      display flex
      justify-content justify-content
    .text
      flex 1
    .signIn-content
      background-color #fff
      height 100%
      .clock-group
        padding-top 45px
        text-align center
        .clock-time
          font-size 60px
        .clock-hint
          margin-top 12px
          font-size 18px
        .clock-img
          margin-top 40px
      .button-wrapper
        margin-top 50px
        text-align center
  .r-slide-enter-active, .r-slide-leave-active
    transition all .3s linear
  .r-slide-enter, .r-slide-leave-active
    transform translate3d(100%,0,0)
  .exam-wrapper
    position absolute
    top 50px
    bottom 0
    width 100%
    .question
      display flex
  .notice-slide-enter-active, .notice-slide-leave-active
    transition all 0.3s linear
  .notice-slide-enter, .notice-slide-leave-active
    transform translate3d(100%,0,0)
</style>
