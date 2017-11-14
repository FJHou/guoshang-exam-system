<template>
  <transition name="fade">
    <div class="login" v-if="loginSuccess">
      <div class="logo-wrapper">
        <div class="logo-content">
          <img src="./logo2.png" class="logo">
          <p class="app-name">国商控股商学院</p>
        </div>
      </div>
      <div class="input-wrapper">
        <p class="input-group userid-group">
          <Icon type="person" class="input-icon userid-icon"></Icon>
          <input
            type="text"
            name="userid-input"
            class="input userid-input"
            placeholder="请输入用户名"
            autofocus="true"
            v-model="userId">
          <Icon
            type="ios-close"
            class="input-delete userid-delete"
            v-show="!!userId"
            @click.native="clear"></Icon>
        </p>
        <p class="input-group password-group">
          <Icon type="locked" class="input-icon password-icon"></Icon>
          <input
            type="password"
            name="password-input"
            class="input password-input"
            placeholder="请输入密码"
            v-model="passWord">
          <Icon
            type="ios-close"
            class="input-delete password-delete"
            v-show="!!passWord"
            @click.native="clear"></Icon>
        </p>
      </div>
      <div class="login-btn-wrapper">
        <Button type="primary" shape="circle" class="login-btn" @click.native="login" :loading="loginLoading">确定</Button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import {loginApi} from 'api/login/api-login'
import {loginMock} from 'mock/mock'

import {SUC_NUM} from 'common/js/util'

export default {
  data () {
    return {
      userId: '',
      passWord: '',
      loginLoading: false,
      loginSuccess: true
    }
  },
  created () {
    this.apiMock()
  },
  methods: {
    apiMock () {
      loginMock()
    },
    clear (e) {
      let name = e.target.className
      if (name.indexOf('password-delete') < 0) {
        this.userId = ''
      } else {
        this.passWord = ''
      }
    },
    login () {
      if (!this.userId) {
        this.$Message.error({
          content: '请输入用户名'
        })
        return
      }
      if (!this.passWord) {
        this.$Message.error({
          content: '请输入密码'
        })
        return
      }
      loginApi(this.userId, this.passWord).then((res) => {
        if (res.code === SUC_NUM) {
          this.$Message.success({
            content: res.msg
          })
          this.loginLoading = true
          this.loginSuccess = false
        } else {
          this.$Message.error({
            content: res.msg
          })
        }
      })
      // this.loginLoading = true
      // this.loginSuccess = false
    }
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/variable'
  .login
    position fixed
    left 0
    top 0
    z-index 10
    width 100%
    height 100%
    background-color #fff
    .logo-wrapper
      position relative
      padding-top 80%
      height 0
      text-align center
      background url('./bg_img.png') center/100% no-repeat
      .logo-content
        display flex
        flex-direction column
        justify-content center
        align-items center
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        .app-name
          margin-top 25px
          color #fff
          font-size 20px
        .logo
          width 70px
          height 70px
    .input-wrapper
      .input-group
        position relative
        display flex
        justify-content center
        align-items center
        margin 48px auto 0
        margin-top 50px
        width 75%
        height 34px
        .input
          flex 1
          margin-left 15px
          height 34px
          outline none
          border-bottom 1px solid $color-theme
          font-size 16px
        .input-icon
          color $color-theme
          font-size 28px
        .input-delete
          position absolute
          right 0
          color #ddd
          font-size 22px
      // .password-group
    .login-btn-wrapper
      position absolute
      bottom 72px
      width 100%
      text-align center

      .login-btn
        width 110px
        height 36px
        font-size: 16px
</style>
