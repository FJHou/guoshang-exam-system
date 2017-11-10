<template>
  <div class="user">
    <Ehead class="user-head" :isTransparent="true">
      <div slot="left" class="left-slot">
        <RouteBack></RouteBack>
      </div>
      <Icon type="chevron-left" size="26" style="line-height: 50px"></Icon>
      <div class="right-slot">
      </div>
    </Ehead>
    <!--用户信息区-->
    <div class="user-info">
      <div class="avatar-wrapper">
        <div class="avatar">
          <Icon type="person" size="60" style="line-height:80px;color:#d4d4d4"></Icon>
        </div>
        <p class="name" @click="modifyName">{{userName}}</p>
      </div>
      <div class="user-joined-exam">
        <div class="join-item">
          <b>3</b>
          <p>参与考试</p>
        </div>
        <div class="join-item">
          <b>4</b>
          <p>通过考试</p>
        </div>
        <div class="join-item">
          <b>5</b>
          <p>参与问卷</p>
        </div>
      </div>
    </div>
    <Gap></Gap>
    <!--用户修改区-->
    <div class="user-mod">
      <div class="mod-item bottom-line" @click="modifyDepartment">
        <div class="l-part">
          <i class="mod-icon icon-part"></i>
          <p>所属部门</p>
        </div>
        <div>
          <span>{{depName}}</span>
          <Icon type="ios-arrow-right" class="icon-right"></Icon>
        </div>
      </div>
      <div class="mod-item">
        <div class="l-part">
          <i class="mod-icon icon-date"></i>
          <p>注册日期</p>
        </div>
        <span>2017-10-01</span>
      </div>
      <Gap></Gap>
      <div class="mod-item bottom-line" @click="enterExam">
        <div class="l-part">
          <i class="mod-icon icon-examroom"></i>
          <p>我的考场</p>
        </div>
        <Icon type="ios-arrow-right" class="icon-right"></Icon>
      </div>
      <div class="mod-item" @click="enterQuestion">
        <div class="l-part">
          <i class="mod-icon icon-question"></i>
          <p>查看问卷</p>
        </div>
        <Icon type="ios-arrow-right" class="icon-right"></Icon>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Ehead from 'base/head/head'
import RouteBack from 'base/back/route-back'
import Gap from 'base/gap/gap'

export default {
  data () {
    return {
      userName: '',
      depName: ''
    }
  },
  methods: {
    back () {
      history.back()
    },
    enterExam () {
      this.$router.push('exam')
    },
    enterQuestion () {
      this.$router.push('question')
    },
    modifyDepartment () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.depName,
              autofocus: true,
              placeholder: '请输入部门名称'
            },
            on: {
              input: (val) => {
                console.log(val)
                this.depName = val
              }
            }
          })
        }
      })
    },
    modifyName () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.userName,
              autofocus: true,
              placeholder: '请输入名称'
            },
            on: {
              input: (val) => {
                console.log(val)
                this.userName = val
              }
            }
          })
        }
      })
    }
  },
  components: {
    Ehead,
    RouteBack,
    Gap
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.user
  position relative
  height 100%
  .user-head
    .back
      width 50px
  .user-info
    position relative
    margin-top -50px
    padding-top 50px
    background url('./pep_bg.png') top/100% no-repeat
    .avatar-wrapper
      text-align center
      .avatar
        margin 0 auto
        width 80px
        height 80px
        border-radius 50%
        background-color #fff
      .name
        margin-top 10px
        font-size 20px
    .user-joined-exam
      display flex
      margin-top 30px
      .join-item
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding-bottom 12px
        b
          color $color-theme
          font-size 22px
        p
          margin-top 12px
        &:nth-child(2)
          position relative
          :before
            content: ''
            position absolute
            left 0
            top 0
            height 100%
            width 1px
            background-color #e1e1e1
            transform scale(0.6)
          :after
            content: ''
            position absolute
            right 0
            top 0
            height 100%
            width 1px
            background-color #e1e1e1
            transform scale(0.6)
  .user-mod
    .mod-item
      display flex
      padding 15px
      justify-content space-between
      &.bottom-line
        position relative
        &:after
          content ''
          position absolute
          bottom 0
          right 0
          width 100%
          height 1px
          background-color #e1e1e1
          transform-origin right
          transform scale(0.89)
      .l-part
        display flex
        .mod-icon
          width 15px
          background center/100%
        .icon-part
          background-image url('./pep_zw.png')
        .icon-date
          background-image url('./pep_date.png')
        .icon-examroom
          background-image url('./pep_test.png')
        .icon-question
          background-image url('./pep_tes.png')
        p
          margin-left 10px
      span, .icon-right
        color #cbcbcb
      .icon-right
        font-size 14px
      // .icon-right

</style>
